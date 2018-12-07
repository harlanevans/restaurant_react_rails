import React from 'react';
import { Form, } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { meal: '', };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.meal);
    this.setState({ meal: "", });
  }

  handleChange = (e) => {
    this.setState({ meal: e.target.value, });
  };

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="Menu"
          placeholder="What Meal Is This For?"
          required
          value={this.state.meal}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default MenuForm;