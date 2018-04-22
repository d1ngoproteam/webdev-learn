import React, { Component } from 'react'
import { Container, ListGroup, Badge } from 'reactstrap'
import './ReviewsPage.css'
import Review from '../../components/Review/Review'
import ShowError from '../../components/ShowError/ShowError'

class ReviewsPage extends Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.id
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1337/api/products/${ this.productId }/reviews`)
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
              reviews: result
            })
          }
        },
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, reviews } = this.state
    if (error !== null) {
      return <ShowError error={ JSON.stringify(error)}/>
    } else if (!isLoaded) {
      return <h1><Badge color='info'>Loading...</Badge></h1>
    } else {
      return (
        <Container>
          <h1><Badge color="success">Reviews:</Badge></h1>
          <ListGroup>
            {
              reviews.map(review => (
                <Review
                  review={ review.discription }
                  key={ review._id }
                />
              ))
            }
          </ListGroup>
        </Container>
      )
    }
  }
}

export default ReviewsPage
