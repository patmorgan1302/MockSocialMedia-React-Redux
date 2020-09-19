import React from 'react';
import { 
  Navbar, 
  Nav, 
  Button, 
  Form, 
  FormControl,
  Col,
  Row,
  Container, 
  Card, 
  ListGroup,
  Jumbotron,
  DropdownButton,
  Dropdown
  
  } from 'react-bootstrap';
import "./App.css";
import NodeArticles from './Componants/nodeArticles';

const App = () => {
  return (
    <div>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mr-auto">

            {/* <Nav.Link href="#home">Articles</Nav.Link> */}
            <Nav.Link href="#features">React</Nav.Link>
            <Nav.Link href="#pricing">Node</Nav.Link>
            <Nav.Link href="#pricing">Javascript</Nav.Link>
            <Nav.Link href="#pricing">Tutorials</Nav.Link>
            <Nav.Link href="#pricing">Featured Stories</Nav.Link>

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button style={{borderColor: 'White', color: 'White'}}variant="outline-info">Search</Button>
          </Form>
        </Navbar>
    
        
        <Jumbotron fluid >
          <Container>
            <h1 className='jumbo-header'>Pat's Pad</h1>
            <p>
              A Tech Blog.
            </p>
            </Container>
          </Jumbotron> 
        
        <Container> 
          <Row className="justify-content-md-center">
            <Col sm={4} >
            
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>

            <Col xs={5} style={{ marginRight: '25px'}}>

              <h3 >Latest Post</h3>
                <DropdownButton style={{marginBottom: '30px'}} id="dropdown-item-button-small" size='sm' title="Filter Articles">
                  <Dropdown.ItemText>Latest Posts</Dropdown.ItemText>
                  <Dropdown.Item as="button">React Articles</Dropdown.Item>
                  <Dropdown.Item as="button">Node Articles</Dropdown.Item>
                  <Dropdown.Item as="button">Javascript Articles</Dropdown.Item>
                  <Dropdown.Item as="button">Featured Articles</Dropdown.Item>
                </DropdownButton>
            
              <br />
              <NodeArticles />
                {/* <Media>
                  <Media.Body>
                    <h5></h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </Media.Body>
                </Media> */}
                {/* <NodeArticles
                  articleTitle={article.title}
                  articleAuthor={article.author}
                  articleBody={article.body}
                /> */}
              </Col>
            <Col>
              <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
              </ListGroup></Col>
          </Row>
        </Container>


        <div className="footer">
          <p>This is some content in sticky footer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
