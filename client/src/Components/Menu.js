import React from 'react';
import { Header, } from "semantic-ui-react";

const Menu = ({ meal, }) => (
  <div>
    <Header as="h2" style={{ marginLeft: "15px", }}>{ meal }</Header>
  </div>
)

export default Menu;