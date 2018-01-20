import React, { Component } from 'react';
import store from '../../store';

class LobbyPay extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.submitPayment = this.submitPayment.bind(this);
    this.state = { 
      payment_amount: 0,
      current_balance: 0
    }
  }
  
  submitPayment(e) {
    e.preventDefault();
    console.log("Inside unlockAccount");
    let web3 = store.getState().web3.web3Instance
    
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
      console.log("web3 is initialized");
      var account = "0x2dEd99fc1980845D8fdbfD4e4c15dec935795EaA";
      web3.eth.sendTransaction(
        {
          from: web3.eth.accounts[0],
          to: account,
          value: web3.toWei(document.getElementById("amount").value, 'ether')
        }, function(error, result) {
        if (!error) {
          document.getElementById('payment-confirmation').innerHTML = 'Success: <a href="https://ropsten.etherscan.io/tx/' + result + '"> View Transaction </a>'
        } else {
          document.getElementById('payment-confirmation').innerHTML = '<pre>' + error + '</pre>'
        }
      })
    }
  }

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
                          <label>Recipient</label>
                          <input id="first-name" className="pure-u-23-24" type="text" />
                      </div>
                  
                      <div className="pure-u-1 pure-u-md-5-5">
                          <label>Withdraw From</label>
                          <input id="last-name" className="pure-u-23-24" type="text" />
                      </div>
                  </div>
                  <div className="pure-g">
                      <div className="pure-u-1 pure-u-md-1-3">
                          <label>Amount</label>
                          <input id="amount" type="text" />
                      </div>
                      <div className="pure-u-1 pure-u-md-1-3">
                          <input id="city" type="text" placeholder="BTC"/>
                      </div>
                  </div>
                  <button className="button-bg" onClick={this.submitPayment}>Submit Payment</button>
              </fieldset>
            </form>
            <div className="flex-container">
              <div className="flex-item" id="payment-confirmation">
                
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default LobbyPay