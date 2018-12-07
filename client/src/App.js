import React, { Component } from 'react';
import axios from "axios";
import Menus from './Components/Menus';
import Menu from './Components/Menu';
import { Container, } from "semantic-ui-react";
import MenuForm from './Components/MenuForm';


class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then(res => {
        this.setState({ menus: res.data, });
      })
      .catch(err => {
        console.log(err);
      })
  }

  addMenu = (meal) => {
    axios.post("/api/menus", { meal, })
      .then(res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data,] })
      })
  }


  updateMenu = (id) => {
    // TODO make api call to update todo
    // TODO update state
  }

  deleteMenu = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
  }



  render() {
    return (
      <Container style={{ padding: "30px 0",}}>
        <h1 style={{ padding: "10px", display: "flex", justifyContent: 'center' }}>
          <i>Welcome to Harlans Cafe</i>
        </h1>
        <MenuForm add={this.addMenu} />
        <br />
        <br />
        <h1>
          <i>Menus</i>
          </h1>
        <Menus 
        menu={this.state.menus} 
        add={this.addMenu} 
        delete={this.deleteMenu} 
        />
        <br />
        <br />
      </Container>
    );
  }
}

export default App;
