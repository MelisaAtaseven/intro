import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {

  let productInfo ={title:"ProductList" }
  let categoryInfo={ title: "CategoryList"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="4">
            <CategoryList info={categoryInfo}  />
          </Col>

          <Col xs="8">
            <ProductList  info={productInfo} />
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
