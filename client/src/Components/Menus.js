import React from 'react';
import Menu from './Menu';

const Menus = () => ({ menu, add, destroy }) => (
  <div>
    {
      menu.map( thing => (
        <Menu 
        key={thing.id}
        {...thing} 
        add={add}
        delete={destroy}
        />
      ))
    }
  </div>
)

export default Menus;