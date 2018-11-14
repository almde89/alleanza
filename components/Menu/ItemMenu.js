import React from 'react';
import ItemMenuDropDown from './ItemMenuDropDown';
import ItemMenuPadrao from './ItemMenuPadrao';

const ItemMenu = ({itemMenu}) => {
  switch (itemMenu.tipo) {
    case "drop-drown":
        return (<ItemMenuDropDown descricaoItem={itemMenu.descricaoItem}
          classNameImagem={itemMenu.classNameImagem} />);
  
    default:
      return (<ItemMenuPadrao descricaoItem={itemMenu.descricaoItem}
        classNameImagem={itemMenu.classNameImagem}
        caminhoAcao={itemMenu.caminhoAcao} />);
  }
};

export default ItemMenu;