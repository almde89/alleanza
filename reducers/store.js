/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { resolve } from 'path';
import { resolveObject } from 'url';

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(( state = {
  itensMenu: [
    {descricaoItem: "Dashboard", classNameImagem: "fa-tachometer-alt", caminhoAcao: "index.html", tipo: "padrao"}
  ]
}
  , action ) => {
  switch (action.type) {
    case 'SELECIONAR_ITEM':
      return {};
    case 'INITIAL':
      return {};

    default:
      return state;
  }
});

export default store;
