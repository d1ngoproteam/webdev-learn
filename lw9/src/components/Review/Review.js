import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'
import './Review.css'

class Review extends Component {
  static propTypes = {
    review: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  }

  render() {
    const { review, key } = this.props
    return (
      <ListGroupItem className='text' key={ key }>
        { review }
      </ListGroupItem>
    )
  }
}

export default Review