import { useState } from "react";
import Input from "../../components/Input/Input";
import NavBar from "../../components/NavBar/NavBar";
import { Container, SectionStyled, Paragraph, Error } from "./LoginStyled";
import { Link, useNavigate } from "react-router-dom";
import signinSchema from "../../schema/signin.schema.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "../../services/segnin.js";

export default function Login() {
  const navigate = useNavigate();
  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors },
    reste,
  } = useForm({ resolver: zodResolver(signinSchema) });

  const [teste, setTeste] = useState();
  const signin = (data) => {
    const dados = signinSchema.parse(data);
    // enviar dados via API de autenticação
    authService(dados)
      .then((response) => {
        const token = response.data;
        console.log(token);
        // navigate('/');
      })
      .catch((e) => {
        setTeste(e.response.data.message);
      });
  };

  return (
    <Container>
      <NavBar />
      <SectionStyled>
        <h1>Faça seu login</h1>
        <form onSubmit={handleSubmitSignin(signin)}>
          <div className="div-input">
          {setTeste !== ''? <Error>{teste}</Error> : null}
            <Input
              type="email"
              placeHolder="E-mail"
              name="email"
              register={registerSignin("email")}
            />
            {errors.email ? (
              <Paragraph>{errors.email.message}</Paragraph>
            ) : null}

            <Input
              type="password"
              placeHolder="Password"
              name="password"
              register={registerSignin("password")}
            />
            {errors.password ? (
              <Paragraph>{errors.password.message}</Paragraph>
            ) : null}
          </div>
          <div className="div-btn">
            <button type="submit">Enviar</button>
            <Link to={"/register"}>cadastre-se</Link>
          </div>
        </form>
      </SectionStyled>
    </Container>
  );
}
