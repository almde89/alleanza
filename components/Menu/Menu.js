import React from 'react';
import ItemMenu from './ItemMenu';

const Menu = ({itens}) => {
    return (
      <ul className={"sidebar navbar-nav"}>
      {
        itens.map((item, key) => {
          console.log(item);
          return (<ItemMenu key={key} itemMenu={item} />);
        })
      }
      </ul>
    );
}
Menu.propTypes = {};

export default Menu;