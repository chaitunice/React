import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Nametable from './Modules/Nametable'
import './App.css'
import AddUser from './Modules/AddUser'

function App() {

return(
  <div class='wholeframe'>
    <div>
      <p>Hi <b>Chaitu,</b> <br/>
        Below are the users in the database: 
      </p>
      <div><Nametable /></div>
      <br></br>
    </div>
    <div><AddUser /></div>
  </div>
)
}

export default App;
