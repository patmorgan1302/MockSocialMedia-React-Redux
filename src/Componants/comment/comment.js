import React from 'react';

import CreateStudent from "./create"
import EditStudent from "./edit";
import StudentList from "./list";

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom'

const Comment = () => {
    return(
      // <div>
      //   <h4 className="h4-class" >Welcome To My Website!</h4>
      //   <Routes />
      // </div>
      <div className="App">
      <section className="py-5">
        <div className="container">
        <h2 className="font-weight-dark">CRUD Example Project</h2>
        <Navbar bg="none" variant="light">
            <Container >
              <Nav style={{marginBottom: '35px'}}className="justify-content-end" >
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create To-Do
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    To-Do List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path='/' component={CreateStudent} />
                    <Route path="/create-student" component={CreateStudent} />
                    <Route path="/edit-student/:id" component={EditStudent} />
                    <Route path="/student-list" component={StudentList} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      </div>
    )
  };
  
  export default Comment;