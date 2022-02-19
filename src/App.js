import Home from './page/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}

export default App;
