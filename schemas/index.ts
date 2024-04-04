import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

export const RegisterSchema = zod.object({
  username: zod.string().min(4),
  email: zod.string().email(),
  password: zod.string().min(6),
});
