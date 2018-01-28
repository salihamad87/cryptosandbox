import React, { Component } from 'react';
import store from '../../store';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import request from 'superagent';

class LobbyPay extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.submitPayment = this.submitPayment.bind(this);
    this.getEtherPrice = this.getEtherPrice.bind(this);
    this.state = { 
      price: 0,
      balance: 0
    }

    this.getEtherPrice();
  }
  
  submitPayment(e) {
    e.preventDefault();
    console.log("Inside unlockAccount");
    let web3 = store.getState().web3.web3Instance
    
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
      console.log("web3 is initialized");
      var account = "0x2dEd99fc1980845D8fdbfD4e4c15dec935795EaA";
      var usdAmount = Number(document.getElementById("amount").value);
      var ethUSDRate = this.state.price;
      var ethPaymentAmount = 0;

      console.log("usdAmount: " + usdAmount);
      console.log("ethUSDRate: " + ethUSDRate);
      console.log(usdAmount / ethUSDRate)
      if(ethUSDRate > usdAmount)
      {
        ethPaymentAmount = (usdAmount / ethUSDRate); 
      }
      else {
        ethPaymentAmount = (ethUSDRate / usdAmount);
      }

      console.log(ethPaymentAmount);
      web3.eth.sendTransaction(
        {
          from: web3.eth.accounts[0],
          to: account,
          value: web3.toWei(ethPaymentAmount, 'ether')
        }, function(error, result) {
        if (!error) {
          document.getElementById('payment-confirmation').innerHTML = 'Success: <a href="https://ropsten.etherscan.io/tx/' + result + '"> View Transaction </a>'
        } else {
          //document.getElementById('payment-confirmation').innerHTML = '<pre>' + error + '</pre>'
        }
      })
    }
  }

  componentWillMount() {
    this.intervalId = setInterval(this.getEtherPrice.bind(this));
  }
  
  getEtherPrice = (e) => {
    request.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH')//https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
      .then((res) => {
        var ethUSDRate = res.body.data.rates.USD;
        var ethBalance = 0;
        if(ethUSDRate > 499.99)
        {
          ethBalance = (499.99 / ethUSDRate).toFixed(2);
        }
        else {
          ethBalance = (ethUSDRate / 499.99).toFixed(2);
        }

        this.setState({
          price: res.body.data.rates.USD,
          balance: ethBalance
        });

        console.log("current ether price: " + this.state.price);
      });
  };

  render() {
    return(
      // <Container>
      //   <Row>
      //     <Col>
      //       <img className="logo" src="./logo.png" alt="lobbypay logo" />
      //     </Col>
      //   </Row>
      //   <Row className="contact-pay-container">
      //     <Col>
      //       <div className="flex-item">
      //         <img src="./no-photo.svg" />
      //         <label className="customer-name">Natalia Oliveira</label>
      //       </div>
      //     </Col>
      //     <Col>
      //       <div className="flex-item">
      //         <img src="./icon-email.svg" />
      //         <label className="customer-email-phone">natalia.oliveira@gmail.com</label>
      //       </div>
      //     </Col>
      //     <Col>
      //       <div className="flex-item">
      //         <img src="./icon-phone.svg" />
      //         <label className="customer-email-phone">+00 00 000.0000</label>
      //       </div>
      //     </Col>
      //   </Row>
      //   <Form>
      //     <FormGroup>
      //       <Label for="exampleEmail">Email</Label>
      //       <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="examplePassword">Password</Label>
      //       <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="exampleSelect">Select</Label>
      //       <Input type="select" name="select" id="exampleSelect">
      //         <option>1</option>
      //         <option>2</option>
      //         <option>3</option>
      //         <option>4</option>
      //         <option>5</option>
      //       </Input>
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="exampleSelectMulti">Select Multiple</Label>
      //       <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
      //         <option>1</option>
      //         <option>2</option>
      //         <option>3</option>
      //         <option>4</option>
      //         <option>5</option>
      //       </Input>
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="exampleText">Text Area</Label>
      //       <Input type="textarea" name="text" id="exampleText" />
      //     </FormGroup>
      //     <FormGroup>
      //       <Label for="exampleFile">File</Label>
      //       <Input type="file" name="file" id="exampleFile" />
      //       <FormText color="muted">
      //         This is some placeholder block-level help text for the above input.
      //         It's a bit lighter and easily wraps to a new line.
      //       </FormText>
      //     </FormGroup>
      //     <FormGroup tag="fieldset">
      //       <legend>Radio Buttons</legend>
      //       <FormGroup check>
      //         <Label check>
      //           <Input type="radio" name="radio1" />{' '}
      //           Option one is this and that—be sure to include why it's great
      //         </Label>
      //       </FormGroup>
      //       <FormGroup check>
      //         <Label check>
      //           <Input type="radio" name="radio1" />{' '}
      //           Option two can be something else and selecting it will deselect option one
      //         </Label>
      //       </FormGroup>
      //       <FormGroup check disabled>
      //         <Label check>
      //           <Input type="radio" name="radio1" disabled />{' '}
      //           Option three is disabled
      //         </Label>
      //       </FormGroup>
      //     </FormGroup>
      //     <FormGroup check>
      //       <Label check>
      //         <Input type="checkbox" />{' '}
      //         Check me out
      //       </Label>
      //     </FormGroup>
      //     <Button>Submit</Button>
      //   </Form>
      // </Container>
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <img className="logo" src="./logo.png" alt="lobbypay logo" />
            <div className="flex-container">
              <div className="flex-item">
                <img src="./no-photo.svg" />
                <label className="customer-name">Natalia Oliveira</label>
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
            <div className="flex-container">
              <div className="flex-item">
                <p>
                  <span className="text-gray">ACCOUNT</span>
                  <span>0343-12934</span>
                </p>
              </div>
              <div className="flex-item">
                <p>
                  <span className="text-balance-eth-header">CURRENT BALANCE IN ETH</span>
                  <span className="text-balance-eth-value">- {this.state.balance}</span>
                </p>
              </div>
              <div className="flex-item">
                <p>
                  <span className="text-balance-header">CURRENT BALANCE IN USD</span>
                  <span className="text-balance-value">- $499.99</span>
                </p>
              </div>
            </div>
            <form className="pure-form pure-form-stacked pure-u-3-5">
              <fieldset>
                  <legend>Make a payment</legend>

                  <div className="pure-g">                  
                      <div className="pure-u-1 pure-u-md-5-5">
                          <label>Withdraw From</label>
                          <input id="last-name" className="pure-u-23-24" type="text" defaultValue={this.props.authData.account} />
                      </div>
                  </div>
                  <div className="pure-g">
                      <div className="pure-u-1 pure-u-md-1-3">
                          <label>USD Amount</label>
                          <input id="amount" type="text" />
                      </div>
                  </div>
                  <div className="pure-g">
                    <button className="button-bg lobby-pay-submit-payment" onClick={this.submitPayment}>Submit Payment</button>
                  </div> 
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