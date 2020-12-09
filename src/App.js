import logo from "./logo.svg";
import "./App.css";
import { Container, Header } from "semantic-ui-react";
import Counter from "./Counter";
import Nav from "./Nav";

function App() {
  return (
    <Container>
      <Header as="h1">React Lifecycle Examples</Header>
      <Nav />
    </Container>
  );
}

export default App;
