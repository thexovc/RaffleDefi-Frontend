import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import "./Header.css";


const Header = () => {
  const [isOpen, setisOpen] = useState(true)
  const [account, setAccount] = useState("")

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();


  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log(account)
    }
  }, [account])


  const handleAuth = async (wal) => {
    if (typeof window.ethereum === 'undefined') {
      alert("No web3 Enabled")
    }

    if (isConnected) {
      await disconnectAsync();
    }

    console.log("Connect To Site Via Wallet");

    const userData = { network: "evm" };

    if (wal === "meta") {
      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector({}),
      });
      setisOpen(false)
      setAccount(account)
      console.log(account)
    }

    if (wal === "coin") {
      const { account, chain } = await connectAsync({
        connector: new CoinbaseWalletConnector({}),
      });
      setAccount(account)
      setisOpen(false)
    }

    if (wal === "wal") {
      const { account, chain } = await connectAsync({
        connector: new WalletConnectConnector({ options: { qrcode: true } }),
      });
      setAccount(account)
      setisOpen(false)
    }

  }

  return (
    <div className="header">
      <nav className="navbar">
        <div className={`nav__items  ${isOpen && 'open'}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/transactions'>My Transations</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>

        </div>

        <div className='selector__div'>
          <div className="box">
            {account ? <a className='play' selected>
              {account.slice(0, 5
              )}...{account.slice(account.length - 4)}
            </a> : (
              <a href="#crypto-modal" className='play' style={{ cursor: "pointer" }} selected>Connect</a>
            )}
          </div>
        </div>

        {isOpen && (
          <div id="crypto-modal" class="modal-container">
            <section class="modal">
              <header class="modal-header">
                <h2 class="modal-title"></h2>
                <a href="#" class="modal-close">Close</a>
              </header>
              <div class="modal-content">
                <div className='heroarea__selector ty' >
                  <div className='selector__div'>
                    <div className="connBtn">
                      <div style={{ border: "2px solid white", padding: 15, borderRadius: 8, color: "white", fontWeight: "bold", cursor: "pointer", marginBottom: 10 }} onClick={() => handleAuth("meta")} className="metaBtn">Meta Mask</div>
                      <div style={{ border: "2px solid white", padding: 15, borderRadius: 8, color: "white", fontWeight: "bold", cursor: "pointer", marginBottom: 10 }} onClick={() => handleAuth("coin")} className="coinBtn">Coin base</div>
                      <div style={{ border: "2px solid white", padding: 15, borderRadius: 8, color: "white", fontWeight: "bold", cursor: "pointer" }} onClick={() => handleAuth("wal")} className="walBtn">Wallet Connect</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        )}

        <div onClick={() => setisOpen(!isOpen)} className={`nav__toggle ${isOpen && 'open'}`}>
          <div className="bar"></div>
        </div>
      </nav>


    </div>

  );
};

export default Header;