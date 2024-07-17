import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput } from '@arinjain111/medium-commons'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
  
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if(!success) {
    c.status(403)
    return c.json({
      message: "incorrect input"
    })
  }
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    try {
      const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name
        }
      });
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.text(jwt);
    } catch(e) {
      c.status(403);
      return c.json({error: "User already exists with this email"});
    }  
  });
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json()
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      }
    })
    if(!user) {
      c.status(404)
      return c.json({error: "user not found"})
    }
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.text(jwt)
  });