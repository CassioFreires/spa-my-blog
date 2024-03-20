import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  height: 93.1vh;
  margin: 0 auto;
`;

export const SectionStyled = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    margin-bottom: .9rem;
  }

  form {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  background-color: #f7f7f7;


    .div-input {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        padding: 0.8rem;
        margin-block: 0.8rem;
        width: 70%;
        border: none;
        border-radius: 0.2rem;
        font-size: 1rem;
      }
    }

    .div-btn {
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
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
`;

export const Paragraph = styled.p`
  color: #d83d3d;
`;

export const SpanError = styled.span`
    color: #d83d3d;
    text-align: center;
`
export const SpanSuccess = styled.span`
    color: #9b9480;
    text-align: center;
`

// export const DivMsgResponse = styled.div`
//   padding-block: 0.5rem;
//   border-radius: 0.25rem;
//   background-color: #d1e7dd;
//   color:#9b9480;
//   padding: 0.5rem;
// `;
