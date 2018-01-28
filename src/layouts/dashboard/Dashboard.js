import React, { Component } from 'react';
import request from 'superagent';

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = { 
      price: 0,
      balance: 0
    }
    this.getEtherPrice = this.getEtherPrice.bind(this);

    this.getEtherPrice();
  }

  componentWillMount() {
    this.intervalId = setInterval(this.getEtherPrice.bind(this), 5000);
  }
  
  getEtherPrice = (e) => {
    request.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH')//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
      .then((res) => {
        this.setState({
          price: res.body.data.rates.USD,
          balance: res.body.data.rates.USD * this.props.authData.balance
        });
      });

      //https://github.com/lionsharecapital/lionshare-api
      request.get('https://api.lionshare.capital/api/prices?period=week')//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
      .then((res) => {
        console.log("coinmarketcap btc: " + JSON.stringify(res.body))
        // this.setState({
        //   btc_price_usd: res.body
        // });
      });

      //https://www.cryptonator.com/api/
      request.get('https://api.cryptonator.com/api/ticker/xvg-btc')//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
      .then((res) => {
        console.log("coinmarketcap btc: " + JSON.stringify(res.body))
        // this.setState({
        //   btc_price_usd: res.body
        // });
      });
  };

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p>
              <strong>Welcome {this.props.authData.name}!</strong> 
            </p>
            <p><strong>ETH Count: {this.props.authData.balance}</strong></p>
            <p><strong>ETH Price: ${this.state.price}</strong></p> 
            <p><strong>Account Value: ${this.state.balance}</strong></p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard