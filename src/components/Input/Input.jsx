import { InputStyled } from "./InputStyled"

export default function Input({type, placeHolder, name, register}){
    return (
        <>
            <InputStyled {...register} type={type} placeholder={placeHolder} name={name}/>
        </>
    )
}