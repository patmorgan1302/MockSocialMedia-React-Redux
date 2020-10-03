import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class newArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      body: '',
      date: ''
    }

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeAuthor(e) {
    this.setState({ author: e.target.value })
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value })
  }

  onChangeDate(e) {
    this.setState({ date: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const articleObject = {
      title: this.state.name,
      author: this.state.email,
      body: this.state.rollno,
      date: this.state.date
    };

    axios.post('http://localhost:9000/nodearticles/', articleObject)
      .then(res => console.log(res.data));
      this.setState({
        title: '',
        author: '',
        body: '',
        date: ''
      });
    };
                                                                                
  render() {
    return (
      <div className="form-wrapper">

      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Article Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Article Author</Form.Label>
          <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthor} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Article Body</Form.Label>
          <Form.Control type="text" value={this.state.body} onChange={this.onChangeBody} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Article Date</Form.Label>
          <Form.Control type="date" value={this.state.date} onChange={this.onChangeDate} />
        </Form.Group>

        <Button style={{marginBottom: '6px'}} variant="success" size="lg" block="block" type="submit">
          Add To Do
        </Button>
      </Form>
    </div>);
  }
}
