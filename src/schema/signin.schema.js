import {z} from 'zod';

const signinSchema = z.object({
    email: z.string().email({message: 'E-mail inválido'}),
    password: z.string().min(6, {message:'Senha deve conter mais de 6 caracteres'})
})

export default signinSchema;