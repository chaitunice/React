import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MyMenu extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted pointing vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Employees'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Add User'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='EMP'
          active={activeItem === 'EMP Data'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}