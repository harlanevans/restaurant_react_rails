import React from 'react';
import { Header, Button, Icon} from "semantic-ui-react";

const Menu = ({  id, meal, update, destroy }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
    <Header as="h2" style={{ marginLeft: "15px", }}>{ meal }</Header>
    <Button
      icon
      color='blue'
      size='tiny'
      style={{ marginLeft: "15px", }}
      onClick={() => update(id)}
      >     
        <Icon name="edit" />
        </Button>
        <Button
        icon
        color="red"
        size="tiny"
        style={{ marginLeft: "15px", }}
        onClick={() => destroy(id)}
      >
        <Icon name="trash" /> 
      </Button>
  </div >
)

export default Menu;