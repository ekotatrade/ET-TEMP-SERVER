import { z } from 'zod';

const userNameSchemaValidation = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(2),
});
const userSchemaValidation = z.object({
  body: z.object({
    name: userNameSchemaValidation,
    phone: z.string(),
    email: z.string().email(),
    dob: z.date(),
    role: z.enum(['superAdmin', 'admin']).default('admin'),
  }),
});

export const UserSchemaValidation = { userSchemaValidation };
