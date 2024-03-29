// Import React
import React from "react";
// Import Components to be used from BootStrap library
import { Form, Button, Container } from "react-bootstrap";

// Create CREATE Class and export it
export class Create extends React.Component {
  // Constructor to initialise
  constructor() {
    super();

    // Bind all events
    // Bind Form submission
    this.onSubmit = this.onSubmit.bind(this);
    // Bind Title function
    this.onChangeTitle = this.onChangeTitle.bind(this);
    // Bind Year change
    this.onChangeYear = this.onChangeYear.bind(this);
    // Bind Poster change
    this.onChangePoster = this.onChangePoster.bind(this);

    // Set initial state with props
    this.state = {
      Title: "",
      Year: "",
      Poster: "",
    };
  }

  // Function to be run when form is Submitted
  onSubmit(el) {
    // Prevents page reload when form is submitted
    el.preventDefault();
    // Alert code for testing posted values
    alert(
      `Movie added : ${this.state.Title} - ${this.state.Year} - ${this.state.Poster}`
    );
  }

  // Function to be run when Title value submitted
  onChangeTitle(el) {
    // Sets state Title value to target(input) value
    this.setState({ Title: el.target.value });
  }

  // Function to be run when Year value submitted
  onChangeYear(el) {
    // Sets state Year value to target(input) value
    this.setState({ Year: el.target.value });
  }

  // Function to be run when Poster value submitted
  onChangePoster(el) {
    // Sets state Poster value to target(input) value
    this.setState({ Poster: el.target.value });
  }

  // render method of all code to be rendered on screen
  render() {
    // Return value that will be displayed
    return (
      // Wrap all content in a <div> element
      <div className="App">
        {/* Wrap elements in Container for spacing/layout */}
        <Container>
          {/* Working Form with BootStrap styles */}
          <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="movieTitle">
              <Form.Label>Add Movie Title</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Title}
                onChange={this.onChangeTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="movieYear">
              <Form.Label>Add Movie Year</Form.Label>
              <Form.Control
                type="text"
                value={this.state.Year}
                onChange={this.onChangeYear}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="moviePoster">
              <Form.Label>Add Movie Poster</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="poster"
                value={this.state.Poster}
                onChange={this.onChangePoster}
              />
            </Form.Group>

            <Button variant="primary" type="submit" value="add">
              Add Movie
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
