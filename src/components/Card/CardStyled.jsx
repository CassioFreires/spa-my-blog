import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 40%;
    height: 320px;
    border: 1px solid #a0a3a7;
    margin-block: 5rem !important;
    padding: .5rem;
`
export const ArticleStyled = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .card-text{
        width: 60%;
        height: 250px;
    border-right: 1px solid #a0a3a7;


        & p:nth-child(1){
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        & p:nth-child(2){
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: 400;
            color: #5a5a5a;
        }
    }
    .card-img {
        width: 40%;
        height: 250px;
    }
`

export const LikeCommentStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .5rem;
    border-top: 1px solid #a0a3a7;

    a {
        width: 100%;
        text-align: center;
        padding: .5rem;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: none;
        color: #a0a3a7;

        &:hover {
            background-color: #a0a3a7;
            color: #fff;
            border-radius: .3rem;
            transition: .8s ease-in-out;
        }
    }
`