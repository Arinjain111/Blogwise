import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'


const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

blogRouter.use("/*",async (c, next) => {
    next();
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: "1",
        } 
    });

    return c.json({
        id: post.authorId,
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
  
blogRouter.get('/', (c) => {
    return c.text('get blog route')
  })
  
blogRouter.get('/bulk', (c) => {
    return c.text("bulk posts get")
  })

  export default blogRouter;