import z from 'zod'

export const signupInput = z.object({
    email: z.string().email().endsWith('@example.com'),
    password: z.string().min(8),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email().endsWith('@example.com'),
    password: z.string().min(8),
    name: z.string().optional()
})

const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
})

const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type SigninInput = z.infer<typeof signinInput>
export type createPostInput = z.infer<typeof createPostInput>
export type SignupInput = z.infer<typeof signupInput>
export type updateblogInput = z.infer<typeof updateblogInput>
