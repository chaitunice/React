import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nametable from './Modules/Nametable'
import './App.css'
import AddUser from './Modules/AddUser'
import MyMenu from './Modules/Menu'

function App() {

return(
  <div class='wholeframe'>
    <div class='menuitems'><MyMenu /></div>
    <div>
      <div><Nametable /></div>
      <br></br>
    </div>
    <div><AddUser /></div>
    asdfasfd

  </div>
)
}

export default App;
