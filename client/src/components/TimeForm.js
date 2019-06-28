import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

// Semantic UI Docs:: https://react.semantic-ui.com/

class TimeForm extends React.Component {
  state = {
    hoursWorked: 0,
    description: "",
    activeUserID: 1, // will need to set this dynamically
    userTimeEntries: []
  }

  componentDidMount() {
    this.loadUserTimeEntries(this.state.activeUserID);
  }

  loadUserTimeEntries(userID) {
    axios.get(`/api/users/${userID}`).then((response) => {
      console.log(response.data);
      this.setState({userTimeEntries: response.data.TimeEntries});
    })
  }

  handleInputChange = (event) => {
    event.preventDefault();
    console.log("[DEBUG] input changing", event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("[DEBUG] submitting time", this.state);
    axios.post("/api/timeEntries", {
      hoursWorked: this.state.hoursWorked, 
      description: this.state.description,
      UserId: this.state.activeUserID
    }).then(response => {
      this.loadUserTimeEntries(this.state.activeUserID);
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Hours Worked</label>
            <input name="hoursWorked" value={this.props.hoursWorked} placeholder='' onChange={this.handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name="description" value={this.props.description} placeholder='' onChange={this.handleInputChange} />
          </Form.Field>
          <Button type='submit' onClick={this.handleSubmit}>Submit Time</Button>
        </Form>
        {this.state.userTimeEntries.map(timeEntry => <p key={timeEntry.id}>{JSON.stringify(timeEntry)}</p>)}
      </div>
    );
  }
}

export default TimeForm;