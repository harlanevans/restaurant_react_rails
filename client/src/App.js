import React, { Component } from 'react';
import axios from "axios";
import Menus from './Components/Menus';
import Menu from './Components/Menu';
import { Container, Header } from "semantic-ui-react";
import MenuForm from './Components/MenuForm';


class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then(res => {
        this.setState({ menus: res.data, });
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
  axios.put(`/api/items/${id}`)
    .then( res => {
      const menus = this.state.menus.map( t => {
        if (m.id === id)
        return res.data;
        return m;
      })
      this.setState({ menus, });
    })
  }



  deleteMenu = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
  }



  render() {
    return (
      <Container style={{ padding: "30px 0", fontFamily: 'Noto Serif TC', }}>
          <Header as='h1' 
          style={{ padding: "10px", display: "flex", justifyContent: 'center', fontFamily: 'Noto Serif TC', }}>
          Welcome to Harlans Cafe
        </Header>

        <MenuForm add={this.addMenu} />
        <br />
        <br />
        
        <Header as='h3' 
        style={{ padding: "10px", display: "flex", justifyContent: 'center', fontFamily: 'Noto Serif TC', }}>
          Menus
          </Header>
        
        <Menus
        list={this.state.menus} 
        update={this.updateMenu} 
        destroy={this.deleteMenu} 
        />
        
        <br />
        <br />
      </Container>
    );
  }
}

export default App;
