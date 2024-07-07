import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import userRouter from './routes/user'
import blogRouter from './routes/post'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  },
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", blogRouter);
// app.use('/api/v1/blog/*', async (c, next) => {
//   const jwt = c.req.header("authorization") || "";
//   if (!jwt) {
//     c.status(403);
//     return c.json({ error: "unauthorized" });
//   }

//   const header = jwt.split(" ")[1]
//   const response = await verify(header, c.env.JWT_SECRET);
  
//   if(response.id) {
//     next()
//   } else {
//     c.status(403)
//     return c.json({error: "unauthorized"});
//   }
// })

export default app
