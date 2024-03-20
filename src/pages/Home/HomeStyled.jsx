import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-block: 1rem;
  }
  .input-search {
    margin: 0.5rem 0 0.5rem 0;
    padding: 0.5rem 0 0.5rem 0;
    input {
      width: 25%;
      padding: 0.8rem;
      border-radius: 0.3rem;
      border: none;
      background-color: #f7f7f7;
      font-size: 1rem;
      font-weight: bold;
      color: #c5a7a7;


      &:focus {
        outline: 1px solid #d8d7d7;
      }
      &::placeholder {
        color: #c5a7a7;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }

  section {
    background-color: #f7f7f7;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-block: 1.5rem;
  }
`;
