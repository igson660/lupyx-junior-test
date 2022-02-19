import Home from './page/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from "@mui/material";
import './App.css'

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Home />
      <Footer />
    </Container>
  )
}

export default App;
