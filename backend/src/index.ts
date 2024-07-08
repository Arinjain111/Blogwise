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

export default app
