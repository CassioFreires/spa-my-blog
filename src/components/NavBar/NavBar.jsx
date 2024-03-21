import { Link, useNavigate } from "react-router-dom";
import { NavBarStyled, Container } from "./NavBarStyled";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { findUserByIdService } from "../../services/users.js";


export default function NavBar() {
  
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token');
    if(token) {
      const decodeToken = jwtDecode(token);
      console.log(decodeToken)
      if(decodeToken.exp < (Date.now()/1000)){
        navigate('/login');
        console.log('token expirado');
      } else {
        const findUser = findUserByIdService(decodeToken.id)
        .then((response) => {
          setUserToken(token);
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }

  }, []);


  const clearCookies = () => {
    navigate('/login');
    Cookies.remove('token');
  }
  return (
    <Container>
      <NavBarStyled>
          {userToken == null ?
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
            :
            <div className={'menu-signin'}>
                <div>
                  <Link to={"/"}>Home</Link>
                </div>
                <div>
                  <p>{user.username}</p>
                  <button><p onClick={() => clearCookies()}>Sair</p></button>
                </div>
            </div>
          }
      </NavBarStyled>
    </Container>
  );
}
