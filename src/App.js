import React from 'react'
import Dropzone from 'react-dropzone'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


class App extends React.Component {
  onDrop = async ([file]) => {
    console.log(file, 'file123')
      const fileInput = {
        file: file,
        fileKind:'profilePic'
      }
    const response = await this.props.mutate({variables: fileInput })
    console.log('response', response)
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        <p>Try dropping some files here, or click to select files to upload.</p>
      </Dropzone>
    )
  }
}

const uploadFileMutation = gql`
  mutation($file: FileInput!) {
    uploadFile(file: $file){
      id
    }
  }
`

export default graphql(uploadFileMutation)(App)
