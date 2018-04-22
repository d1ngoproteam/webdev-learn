import React, { Component } from 'react'
import { Container, ListGroup, Badge } from 'reactstrap'
import './MainPage.css'
import Product from '../../components/Product/Product'
import ShowError from '../../components/ShowError/ShowError'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:1337/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true
          })
          if (!Array.isArray(result)) {
            this.setState({ error: result })
          } else {
            this.setState({
              products: result
            })
          }
        },
        (error) => {
          this.setState({
            isLoaded: true, 
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state
    if (error !== null) {
      return <ShowError error={ JSON.stringify(error)}/>
    } else if (!isLoaded) {
      return <h1><Badge color='info'>Loading...</Badge></h1>
    }
    return (
      <Container>
        <h1><Badge color='success'>Products:</Badge></h1>
        <ListGroup>
          {
            products.map(product => (
              <Product
                productName={ product.name }
                key={ product._id }
                link={ `/reviews/${product._id}` }
              />
            ))
          }
        </ListGroup>
      </Container>
    )
  }
}

export default MainPage
