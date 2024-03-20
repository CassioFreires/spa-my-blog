import { SectionContainer, ArticleStyled, LikeCommentStyled } from "./CardStyled"

export default function Card({title, text, image}){
    return(
        <SectionContainer>
            <ArticleStyled>
                <div className="card-text">
                    <p>{title}</p>
                    <p>{text}<a href="#">Ver mais</a></p>
                </div>
                <div className="card-img">
                    <a href="#"><img src="#" alt="Imagem do card" /></a>
                </div>
            </ArticleStyled>
            <LikeCommentStyled>
                <a href="#">Curtir</a>
                <a href="#">Comentar</a>
            </LikeCommentStyled>
        </SectionContainer>
    )
}