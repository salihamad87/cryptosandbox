// See "How to deploy a Truffle contract to Ropsten" for more info:
// https://medium.com/@guccimanepunk/how-to-deploy-a-truffle-contract-to-ropsten-e2fb817870c1

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten:  {
      network_id: 3,
      host: "localhost",
      port:  8545,
      gas:   2900000
    }
  }
};