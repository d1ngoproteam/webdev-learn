import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Product.css'

class Product extends Component {
  static propTypes = {
    productName: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  render() {
    const { productName, key, link } = this.props
    return (
      <NavLink className='product' to={ link }>
        <ListGroupItem className='text' key={ key }>
          { productName }
        </ListGroupItem>
      </NavLink>
    )
  }
}

export default Product