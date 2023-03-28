import { useState } from "react";
import { ethers } from "ethers";
 
function App() {
  let [name, setName] = useState("");
  let [connected, setConnected] = useState(false);
 
  let { ethereum } = window;
  let contract = null;
 
  if (ethereum) {
 
    let abi = [
      "function name() view returns (string)"
    ]
    let address = "0x1C3dd5c848102ac51E1c47434a00eFbEd1F177C4";
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    contract = new ethers.Contract(address, abi, signer);
  }
 
  return (
    <div className="App">
      <h1>BadgerCoin Contract</h1>
 
      <button onClick={() => {
          if (contract && !connected) {
              ethereum.request({ method: 'eth_requestAccounts'})
                  .then(accounts => {
                      setConnected(true);
                  })
          }
      }}>{!connected ? 'Connect wallet' : 'Connected' }</button>
 
 
 <!--
      <button onClick={() => {
        if (contract && connected) {
          contract.name()
            .then(cname => {
              setName(cname);
            })
        }
      }}>Get Name</button>
 
      <h3>Name is : {name}</h3>
-->      
    </div>
  );
}
 
export default App;
