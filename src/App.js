import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './Components/Header';
import Cryptos from './Components/Cryptos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cryptos: []
    }
  }

  componentWillMount(){
    this.getCryptos();
  }

  getCryptos(){
    axios.request({
      method: 'get',
      url: 'https://api.coinmarketcap.com/v1/ticker/?limit=20'
    }).then((response) => {
      this.setState({cryptos: response.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Cryptos cryptos={this.state.cryptos} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
