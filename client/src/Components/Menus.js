import React from 'react';
import Menu from './Menu';

const Menus = ({ list, update, destroy }) => (
  <div>
    {
      list.map( item => (
        <Menu 
        key={item.id}
        {...item} 
        update={update}
        delete={destroy}
        />
      ))
    }
  </div>
)

export default Menus;