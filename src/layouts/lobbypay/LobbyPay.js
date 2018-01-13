import React, { Component } from 'react';
//import request from 'superagent';

class LobbyPay extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = { 
      payment_amount: 0,
      current_balance: 0
    }
    //this.getEtherPrice = this.getEtherPrice.bind(this);
  }

  // componentWillMount() {
  //   this.intervalId = setInterval(this.getEtherPrice.bind(this), 5000);
  // }
  
  // getEtherPrice = (e) => {
  //   request.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH')//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
  //     .then((res) => {
  //       this.setState({
  //         price: res.body.data.rates.USD,
  //         balance: res.body.data.rates.USD * this.props.authData.balance
  //       });
  //     });
  // };

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <img className="logo" src="./logo.png" alt="lobbypay logo" />
            <div className="flex-container">
              <div className="flex-item">
                <img src="./no-photo.svg" />
                <label className="customer-name">Natalia Oliveira</label>
                {/* <label className="customer-address">5492 Address Name</label> */}
              </div>
              <div className="flex-item">
                <img src="./icon-email.svg" />
                <label className="customer-email-phone">natalia.oliveira@gmail.com</label>
              </div>
              <div className="flex-item">
                <img src="./icon-phone.svg" />
                <label className="customer-email-phone">+00 00 000.0000</label>
              </div>
            </div>

            {/* Account Info */}
            <hr className="style-six"/>

            {/* Payment Info */}
            <form className="pure-form pure-form-stacked">
              <fieldset>
                  <legend>Legend</legend>

                  <div className="pure-g">
                      <div className="pure-u-1 pure-u-md-5-5">
                          <label for="first-name">Recipient</label>
                          <input id="first-name" className="pure-u-23-24" type="text" />
                      </div>
                  
                      <div className="pure-u-1 pure-u-md-5-5">
                          <label for="last-name">Withdraw From</label>
                          <input id="last-name" className="pure-u-23-24" type="text" />
                      </div>
                  </div>
                  <div className="pure-g">
                      <div className="pure-u-1 pure-u-md-1-3">
                          <label for="city">Amount</label>
                          <input id="city" type="text" />
                      </div>
                      <div className="pure-u-1 pure-u-md-1-3">
                          <input id="city" type="text" placeholder="BTC"/>
                      </div>
                  </div>
                  <button type="submit" className="button-bg">Confirm Payment</button>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

export default LobbyPay