import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Chip from '@material-ui/core/Chip';

const SidebarComponent = ({ users }) => (
  <aside id='sidebar' className='sidebar'>
    <ul>
      {users.map(user => (
        <li id='chip' key={user.id}>
          <Chip
            label={user.name}
            component="a"
            href="#chip"
            clickable
          />
      </li>
      ))}
    </ul>
  </aside>
)

SidebarComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

export const Sidebar = connect(state => ({
	users: state.users
}), {})(SidebarComponent)
