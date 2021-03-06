import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddOwner from './components/AddOwner'
import Owners from './components/Owners'
import AddCar from './components/AddCar'
import Cars from './components/Cars'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:5000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <AddOwner/>
        <AddCar/>
        <Owners />
        <Cars/>
      </div>
    </ApolloProvider>
  )
}

export default App
