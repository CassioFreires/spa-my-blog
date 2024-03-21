import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { Container } from "./HomeStyled";
import { findAllService } from "../../services/posts.js";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [postagens, setPostagens] = useState([]);
  const [error, setError] = useState('');

  const posts = () => {
    useEffect(() => {
        findAllService()
          .then((response) => {
            if(!response.data || response.data.length < 0) {
                setError('Não há nenhuma postagem até o momento');
                return;
            }
            setPostagens(response.data);
          })
          .catch((e) => console.log(e));
      }, []);
  }
  posts();

  return (
    <Container>
      <NavBar />
      <div className="input-search">
        <input type="search" placeholder="Buscar" />
      </div>
      <section>
        {postagens.length < 0 ? 
            <p>{error}</p>
            :
            postagens.map((item, index) => {return <Card 
              key={index} 
              title={item.title} 
              text={item.text} 
              image={item.image}/>})
        }
      </section>
    </Container>
  );
}
