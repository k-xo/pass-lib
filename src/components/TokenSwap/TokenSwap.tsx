import React, { useState } from 'react';
import { ModalTrigger } from '../Modal';
import Modal from '../Modal/Modal';
import { useModalContext } from '../Contexts/ModelContext';
import './TokenSwap.css';

const TokenSwap = (): JSX.Element => {
  const { openModal } = useModalContext();
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    //@ts-ignore
    if (window.ethereum) {
      try {
        //@ts-ignore
        await window.ethereum.enable();
        await changeNetwork();
        setIsConnected(true);
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      console.log("This browser doesn't support MetaMask");
    }
  };

  const swap = () => {};

  const handleButtonClick = () => {
    if (!isConnected) {
      openModal();
    } else {
      swap();
    }
  };

  async function changeNetwork() {
    //@ts-ignore
    const provider = window.ethereum;
    if (provider) {
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x89' }],
        });
      } catch (error) {
        //@ts-ignore
        if (error.code === 4902) {
          try {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x89',
                  chainName: 'Matic Mainnet',
                  nativeCurrency: {
                    name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18,
                  },
                  rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
                  blockExplorerUrls: ['https://explorer.matic.network/'],
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          //@ts-ignore
          console.log(error);
        }
      }
    }
  }

  return (
    <div className="token-swap">
      <h1>Token Swap</h1>

      <div className="input-group">
        <input type="text" placeholder="0" />
        <select>
          <option>💎 ETH</option>
          <option>🟠 BTC</option>
        </select>
      </div>

      <div className="input-group">
        <input type="text" placeholder="0" />
        <select>
          <option>💎 ETH</option>
          <option>🟠 BTC</option>
        </select>
      </div>

      <div style={{ width: '100%' }}>
        {isConnected ? (
          <button onClick={handleButtonClick}>Swap</button>
        ) : (
          <ModalTrigger
            triggerText="Connect Wallet"
            modal={
              <Modal>
                <div style={{ marginTop: '20px', padding: 5 }}>
                  <button onClick={connectWallet} className="connect-button">
                    Connect Wallet with MetaMask
                  </button>
                </div>
              </Modal>
            }
          />
        )}
      </div>
    </div>
  );
};

export default TokenSwap;
