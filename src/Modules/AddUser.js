import {React,Component, createRef} from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class AddUser extends Component {
  
  constructor(props) {
    super(props);
   this.state = {
      name : '',
      age : '',
      gender : '',
      addentry:0
   }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, d) => {
    this.setState({ [d.name] : d.value });

  }

  handleSubmit = event => {
    const data = {
      name : this.state.name,        
      age : this.state.age, 
      gender : this.state.gender
      }
    
   axios
        .post('http://localhost:5000/emps/addUser', data)
        .then(response => {
          this.setState( {addentry: response.data.addentry} ); // the response.data is string of src
          console.log('Response saved in state ')
        })
    console.log('Mydata:')
    console.log(this.state.addentry)
    }


render() {
    const options = [
        { key: 'm', text: 'Male', value: 'M' },
        { key: 'f', text: 'Female', value: 'F' },
        { key: 'o', text: 'Other', value: 'O' },
      ]
  return(
    <div class='userform'>
         <Form>
            <Form.Group widths='equal'>
            <Form.Input fluid label='Name' id='name' name='name' placeholder='Name' onChange={this.handleChange} />
            <Form.Input fluid label='Age' id='age' name='age' placeholder='Age' onChange={this.handleChange}/>
            <Form.Select
                value = {this.state.gender}
                fluid search
                label='Gender'
                name='gender'
                id='gender'
                options={options}
                placeholder='Gender'
                onChange={this.handleChange}
            />
            <Form.Button label='Submit' onClick={this.handleSubmit}>Add User</Form.Button>
            </Form.Group>
        </Form>
    </div>
  )
}
}

export default AddUser