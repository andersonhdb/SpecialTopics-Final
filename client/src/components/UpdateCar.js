import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_CAR } from '../queries'

import { Button, TextField } from '@material-ui/core'


const UpdateCar = (props) => {
  const { id, year, make, model, price, ownerId, onInputChange, onButtonClick } = props
  return (
    <Mutation
      mutation={UPDATE_CAR}
      key={id}
    >
      {(updateCar, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          updateCar({ variables: { id, year, make, model, price, ownerId }})
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
            onClick={onButtonClick}
            variant='contained'
            color='primary'
            style={{ margin: '5px' }}
          >
            Update Car
          </Button>
          <Button
            onClick={onButtonClick}
            variant='contained'
            color='secondary'
            style={{ margin: '5px' }}
          >
            Cancel
          </Button>
        </form>
      )}
    </Mutation>
  )
}

export default UpdateCar