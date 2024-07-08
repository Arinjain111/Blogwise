import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  verify } from 'hono/jwt'

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const authorId = c.req.header("Authorization") || " ";
    const user = await verify (authorId, c.env.JWT_SECRET)
    try {
        if(user) {
            c.set("userId", String((user.id)));
            await next();
        } else {
            c.status(403)
            return c.json({
                message: "you are not logged in"
            });
        }
    } catch(e) {
        console.log(e);
        c.status(500)
        return c.json({
            message: "internal server error"
        });
    }
});

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId),
        } 
    });

    return c.json({
        id: post.id,
    })
  });
  
blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where:{
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content
        } 
    });
    return c.json({
        id: post.id,
    })
  })
  
//add pagenation
blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany({});

    return c.json(posts);
  })

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: Number(id),
            },
        });
        return c.json({
            post
        })
    } catch(e) {
        c.status(411)
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})

  export default blogRouter;