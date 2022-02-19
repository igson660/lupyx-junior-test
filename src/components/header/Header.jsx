import { Container } from "@mui/material";
import pokeBall from "../../asserts/poke-Ball.png"
import '../../style/header.css'


const Header = () => {
  return(
    <Container sx={{ display: "flex"}} >
      <img src={ pokeBall } alt="poke-ball"/>
      <h1>Pókemons</h1>
      <img src={ pokeBall } alt="poke-ball"/>
    </Container>
  );
}

export default Header;