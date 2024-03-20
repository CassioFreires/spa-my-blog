import NavBar from "../../components/NavBar/NavBar";
import { Container, SectionStyled, Paragraph, SpanError, SpanSuccess} from "./RegisterStyled";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import singupSchema from "../../schema/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';
import { signupService } from "../../services/signup";

export default function Register(){

    const {
        register: registerSignup, handleSubmit: handleSubmitSignup, formState: {errors}, reset} = useForm({resolver: zodResolver(singupSchema)});

    const [submitData, setSubmitData] = useState(null);
    const [msgError, setMsgError] = useState(null);
    const [msgSuccess, setMsgSuccess] = useState(null);
        

    const signup = (data) => {
        const dados = singupSchema.parse(data);
        setSubmitData(dados)

        // enviar os dados para a api
        signupService(dados)
        .then((response) => {
            // redirecionar para pagina principal do usuário
            setMsgSuccess('Usuário criado com sucesso')
            setMsgError(null)
            console.log(response);
            reset();
        })
        .catch((e) => {
            setMsgError(e.response.data.messageError);
            setMsgSuccess(null)
            reset();
        })
    }
   
    return(
            <Container>
                <NavBar />
                <SectionStyled>
                    <h1>Faça seu cadastro</h1>
                    <form onSubmit={handleSubmitSignup(signup)}>
                        {msgError !== null ? <SpanError>{msgError}</SpanError> : <SpanSuccess>{msgSuccess}</SpanSuccess>}
                        <div className="div-input">
                            <Input type="text" placeHolder="Nome" name="name" register={registerSignup('name')}/>
                            {errors.name ? <Paragraph>{errors.name.message}</Paragraph> : null}

                            <Input type="text" placeHolder="Username" name="username" register={registerSignup('username')}/>
                            {errors.username ? <Paragraph>{errors.username.message}</Paragraph> : null}

                            <Input type="email" placeHolder="E-mail" name="email" register={registerSignup('email')}/>
                            {errors.email ? <Paragraph>{errors.email.message}</Paragraph> : null}

                            <Input type="password" placeHolder="Senha" name="password" register={registerSignup('password')}/>
                            {errors.password ? <Paragraph>{errors.password.message}</Paragraph> : null}

                            <Input type="password" placeHolder="Confirme a senha " name="confirmPassword" register={registerSignup("confirmPassword")}/>
                            {errors.confirmPassword ? <Paragraph>{errors.confirmPassword.message}</Paragraph> : null}
                        </div>
                        <div className="div-btn">
                            <button type="submit">Enviar</button>
                            <Link to={'/login'}>Login</Link>
                        </div>
                    </form>
                </SectionStyled>
            </Container>
    )
}