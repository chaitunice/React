import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

class userField extends Component{

    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render(){
        return(
        <div>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select
                    fluid
                    label='Gender'
                    options={options}
                    placeholder='Gender'
                    />
                </Form.Group>
            </Form>
        </div>
    )
    }}
export default userField;
