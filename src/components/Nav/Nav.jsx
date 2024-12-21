import React from 'react';
import ConnectButton from '../ConnectButton/ConnectButton';
import './Nav.css'

function Nav({ handleConnect, chainId, chainHex, chainName, rpcUrl }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          <img src='./BNB.png' className="logo" />
          <h3>BNB Public Chat</h3>
        </div>

        <ul className='nav_link'>
          <li className='nav-text'><a href="/">Home</a></li>
          <li className='nav-text'><a href="https://bnbchain.org/">Build on BNB Chain</a></li>
          <li className='nav-text'><a href="https://opbnb.bscscan.com/address/0x836DC3e88781444c28c83Eb01bb571362F4489D0">Contract</a></li>
        </ul>
        <div className="button-container">
            <ConnectButton
              onConnect={handleConnect}
              chainId={chainId}
              chainHex={chainHex}
              chainName={chainName}
              rpcUrl={rpcUrl}
            />
        </div>
      </nav>
    </header>
  );
}

export default Nav;