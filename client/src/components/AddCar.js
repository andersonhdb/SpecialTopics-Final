import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import uuidv4 from 'uuid/v4'

import { ADD_CAR, GET_CARS } from '../queries'

import { Button, TextField} from '@material-ui/core'

class AddCar extends Component {
  state = {
    year: '',
    make: '',
    model: '',
    price: ''
  }

  render() {
    const { year, make, model, price } = this.state
    const id = uuidv4()
    const ownerId = uuidv4()
    return (
      <Mutation
        mutation={ADD_CAR}
        update={(store, { data: { addCar } }) => {
          const { cars } = store.readQuery({ query: GET_CARS })
          store.writeQuery({
            query: GET_CARS,
            data: { cars: cars.concat([addCar])}
          })
        }}
      >
        {(addCar, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault()
            addCar({
              variables: {
                id,
                year,
                make,
                model,
                price
              },
              optimisticResponse: {
                __typename: 'Mutation',
                addcar: {
                  __typename: 'Car',
                  id,
                  year,
                  make,
                  model,
                  price,
                  ownerId
                }
              }
            })
          }}>
            <TextField
              label='year'
              value={year}
              placeholder='i.e. 1984'
              onChange={e => this.setState({ year: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='maker'
              value={make}
              placeholder='i.e. Toyota'
              onChange={e => this.setState({ make: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='model'
              value={model}
              placeholder='i.e. GLK'
              onChange={e => this.setState({ model: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='price'
              value={price}
              placeholder='i.e. 5,000,000.99'
              onChange={e => this.setState({ price: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            
            

            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ margin: '5px' }}
            >
              Add Car
            </Button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddCar