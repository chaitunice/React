import {React,Component, useEffect} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './nameTable.css'
class Nametable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {}
      // refresh:0
    };
    this.refreshme = this.refreshme.bind(this)
  }

  refreshme(){
    this.componentDidMount()
  }

  componentDidMount()  {
  axios
        .get('http://localhost:5000/emps')
        .then(response => {
          this.setState(  {data: response.data.data} ); 
          // console.log('Response saved in state ')
          // console.log(this.state.data)
        })
    // console.log('Mydata:')
    // console.log(this.state.data)
  }


render() {
  var header = (<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Sex</Table.HeaderCell>
    <Table.HeaderCell>Age</Table.HeaderCell>
  </Table.Row>
</Table.Header>)

let rows = []
  // console.log('Length of mydata' + this.state.data.length)
  
  if(this.state.data.length > 0) {
    for(let i=0; i< this.state.data.length; i++){
      rows.push( <Table.Row>
        <Table.Cell>{this.state.data[i][0]}</Table.Cell>
        <Table.Cell>{this.state.data[i][1]}</Table.Cell>
        <Table.Cell>{this.state.data[i][2]}</Table.Cell>
      </Table.Row>)
    }

  }
  else
    {
      rows.push( <Table.Row>
        <Table.Cell>No Data</Table.Cell>
      </Table.Row>)
    }

  return(
    <div>
      <div>
        <Button animated='vertical' onClick={this.refreshme} class='refresh_class'>
        <Button.Content hidden>Refresh</Button.Content>
        <Button.Content visible>
          <Icon name='refresh' />
        </Button.Content>
      </Button>
      </div>
      <div class='nametable'>
        <Table>
        {header}
        <Table.Body>
        {rows}
        </Table.Body></Table>
       </div>
    </div>
  )
}
}

export default Nametable