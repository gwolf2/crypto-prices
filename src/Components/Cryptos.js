import React, {Component} from "react";
import {Accordion, Col, Grid, ListGroup, ListGroupItem, Panel, Row} from "react-bootstrap";

class Cryptos extends Component {
  render() {
    let cryptoItems;
    if (this.props.cryptos) {
      cryptoItems = this.props.cryptos.map(crypto => {
        let id = crypto.id;
        let name = crypto.name;
        let symbol = crypto.symbol;
        let rank = crypto.rank;
        let price = crypto.price_usd;
        let marketCap = crypto.market_cap_usd;
        let percentChange24h = crypto.percent_change_24h;
        let header = rank + '. ' + name + ' (' + symbol + '): $' + Number(price).toFixed(2);

        return (
          <Panel key={id} header={header} eventKey={id}>
            <Grid>
              <Row>
                <Col xs={11} md={11} lg={11}>
                  <ListGroup>
                    <ListGroupItem><strong>Market Capitalization: $</strong>{Number(marketCap).toFixed(0)}</ListGroupItem>
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
