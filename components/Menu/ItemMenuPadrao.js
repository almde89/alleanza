import React from 'react';
import { string } from 'prop-types'

const ItemMenuPadrao = ({descricaoItem, caminhoAcao, classNameImagem}) => {
  return (
    <li className={"nav-item active"}>
      <a className={"nav-link"} href={caminhoAcao}>
        <i className={`fas fa-fw ${classNameImagem}`}></i>
        <span>{descricaoItem}</span>
      </a>
    </li>
  );
};

ItemMenuPadrao.propType = {
  descricaoItem: string,
  caminhoAcao: string,
  classNameImagem: string
};

export default ItemMenuPadrao;