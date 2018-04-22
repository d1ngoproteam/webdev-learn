import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Badge } from 'reactstrap'

class ShowError extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired
  }

  render() {
    const { error } = this.props
    return (
      <h1>
        <Badge color='dark'>
          { error }
        </Badge>
      </h1>
    )
  }
}

export default ShowError