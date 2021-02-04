import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className="py-3 mt-3">
        <Container>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
