import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Getting Started</h1>
            <p>Cryptosandbox recommends creating a Metamask account and adding the Metamask browser plugin for either Chrome or Firefox. 
              Cryptosandbox does not save or maintain any Ethereum account information. 
            </p>
            <h2>Install Metamask for Chrome/Firefox</h2>
            <p>Visit <a href="https://metamask.io/">https://metamask.io/</a> and follow the instructions for creating a new account and 
              adding the metamask plugin to Chrome or Firefox
            </p>
            <h3>Cryptocurrency Exchange Sandbox Comming Soon....</h3>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
