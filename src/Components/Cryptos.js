import React, {Component} from "react";
import {Accordion, Col, Grid, ListGroup, ListGroupItem, Panel, Row} from "react-bootstrap";

class Cryptos extends Component {
  render() {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let cryptoItems;
    if (this.props.data.cryptos) {
      cryptoItems = this.props.data.cryptos.map(crypto => {
        let id = crypto.id;
        let name = crypto.name;
        let symbol = crypto.symbol;
        let rank = crypto.rank;
        let price = crypto.price_usd;
        let marketCap = numberWithCommas(Number(crypto.market_cap_usd).toFixed(0));
        let percentChange24h = crypto.percent_change_24h;
        let header = rank + '. ' + name + ' (' + symbol + '): $' + numberWithCommas(Number(price).toFixed(2));

        return (
          <Panel key={id} header={header} eventKey={id}>
            <Grid>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <ListGroup>
                    <ListGroupItem><strong>Market Capitalization: </strong>${marketCap}</ListGroupItem>
                    <ListGroupItem><strong>% Change (24h): </strong>{percentChange24h}%</ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Grid>
          </Panel>
        )
      });
    }

    return (
      <div>
        <Accordion>
          {cryptoItems}
        </Accordion>
      </div>
    );
  }
}

export default Cryptos;
