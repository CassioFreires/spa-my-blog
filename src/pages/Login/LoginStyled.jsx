import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: 93.1vh;
    margin: 0 auto;

`

export const SectionStyled = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0;

    h1{
        font-size: 1.5rem;
        margin-bottom: .9rem;
    }

    form {
        width: 50%;
        height: 70%;
        display: flex;
        background-color: #f7f7f7;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        border-radius: 0.3rem;

        .div-input {
            width: 100%;
            display: flex;
            flex-direction: column;

            input {
                padding: 0.8rem;
                margin-bottom: 0.8rem;
                width: 70%;
                border: none;
                border-radius: 0.2rem;
                font-size: 1rem;
             
            }
            
        }

        .div-btn {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 1.5rem;
            button {
                width: 50%;
                padding: 0.8rem;
                border: none;
                cursor: pointer;
                font-size: 0.95rem;
                font-weight: bold;
                border-radius: 0.2rem;
                &:hover {
                    background-color: #9bbcdf;
                    transition: background-color 0.5s;
                }
            }
            a {
                margin-left: 0.5rem;
            }
        }
    }
`
export const Paragraph = styled.p`
  color: #d83d3d;
`;

export const Error = styled.p`
color: #d83d3d;
`