import { Link } from 'react-router-dom';
import { NavBarStyled, Container } from './NavBarStyled';

export default function NavBar(){
    return(
        <Container>
          <NavBarStyled>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </ul>
          </NavBarStyled>
        </Container>
      )
}