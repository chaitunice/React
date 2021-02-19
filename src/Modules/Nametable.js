import {React,Component, useEffect} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import './nameTable.css'
class Nametable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      cols: []
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
          this.setState(  {data: response.data.data, 
                            cols : response.data.cols} ); 
          // console.log('Response saved in state ')
          // console.log(this.state.cols)
        })
    console.log('Mydata:')
    console.log(this.state.data)
  }

render() {
  let cols = this.state.cols
  const headers = cols.map( (row) => <Table.HeaderCell>{row}</Table.HeaderCell>);


var header = (<Table.Header>
  <Table.Row>
    {headers}
  </Table.Row>
</Table.Header>)

let rows = this.state.data
  
  if(this.state.data.length > 0) {

      var table_rows = rows.map( (row_data) => 
      
        <Table.Row>{row_data.map( (cell) => <Table.Cell>{cell}</Table.Cell>)}</Table.Row>)

  }
  else
    {
      table_rows = ( <Table.Row>
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
        {table_rows}
        </Table.Body></Table>
       </div>
    </div>
  )
}
}

export default Nametable