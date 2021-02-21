import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nametable from './Modules/Nametable'
import './App.css'
import AddUser from './Modules/AddUser'
import MyMenu from './Modules/Menu'

function App() {

return(
  <div class='wholeframe'>
    <div class='menuframe'><MyMenu /></div>
    <div class='content-frame'>
      <div><Nametable /></div>
      <br></br>
    
    <div><AddUser /></div>
    </div>

  </div>
)
}

export default App;
