import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createUploadLink } from 'apollo-upload-client'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const token = 'ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJKYm1adklqcDdJbTVoYldVaU9pSm1jbTl1ZEdWdVpFRndjRlIzYnlJc0luUjVjR1VpT2lKemRHRjBhV01pZlN3aWFXRjBJam94TlRNeE1UVXhOelF3TENKbGVIQWlPakU0TkRZM01qYzNOREI5LkxENEJyLXMtRXQ5TzVZckVKNmVjY0pVQ3k5V3V4X205STFFVm41NGNUWG86OmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXNW1ieUk2ZXlKcFpDSTZJbU5xYWpCNmNIbGliekF3TURBeFpqQmphMnM1ZW5Kd2VISWlMQ0oxYzJWeWJtRnRaU0k2SW01aGJXRnViWFZyZFc1a0luMHNJbWxoZENJNk1UVXpPREk1TWpZNU1Dd2laWGh3SWpveE5UWTVPRFV3TWprd2ZRLk9LWnZhaDRUZXdyWUU0c0Q2eXYyam85aWpPblhZbTVCZ0NMR3RWdDlIUWc='
const client = new ApolloClient({
  uri: 'https://tekie-server.herokuapp.com/graphql/core',
  link: createUploadLink(),
  headers: {
    authorization: token
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
