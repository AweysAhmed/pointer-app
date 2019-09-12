import React from 'react';
 import { CSVReader } from 'react-papaparse';
 import {Button} from '@shopify/polaris';
import Axios from 'axios';

class CsvUploader extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      file: ''
    }
  }
 
  handleReadCSV = (data) => {
    Axios({
      url: '/admin/api/2019-07/products.json',
      method: "POST",
        headers: {
          'Access-Control-Allow-Origin':'https://e171878b.ngrok.io'
        },

      data: data
    })
  }
 
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }

  handleUpload = (e) => {
    e.preventDefault();
    this.setState({file: this.fileInput.file})
    console.log(file)
  }
 
  handleImportOffer = () => {
    this.fileInput.current.click();
  }
 
  render() {
    return (
      <div>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
          configOptions={{header: true}}
        />
        <Button primary={true} onClick={this.handleImportOffer}>Import</Button>
        <br />
      </div>
    );
  }
}
 
export default CsvUploader;