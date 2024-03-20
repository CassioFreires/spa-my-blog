import {z} from 'zod';

const singupSchema = z.object({
    name: z.string()
    .min(3, {message: 'Nome deve ter no mínimo três caracteres'})
    .max(50, {message: 'Nome deve ter no maximo 100 caracteres'}),

    username: z.string()
    .min(3, {message: 'Username deve ter no mínimo três caracteres'})
    .max(50, {message: 'Username deve ter no maximo 100 caracteres'}),
    
    email: z.string().email({message: 'E-mail inválido'}),
    password: z.string().min(6, {message: 'Senha deve ter no mínimo seis caracteres'}),

    confirmPassword: z.string().min(6, {message: 'Senha deve ter no mínimo seis caracteres'})
}).refine((data) => data.password === data.confirmPassword, {message: 'As senhas não correspondem', path: ['confirmPassword']},)

export default singupSchema;