import './App.css';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import gif from './BAMA.GIF';
import Menu from './components/Menu';
import WalletAddress from './components/WalletAddress';

function App() {
  // Current wallet status, connect & disconnect functions, available connections
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect Wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  // Take a look at starting states
  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>🔥 Pet Bama 🔥</h1>
          <p>Keep Bama Happy With Plenty of Pets...</p>
          <p>...or else...</p>
        </div>
      </header>
      
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <img
            src={gif}
            alt="Bama laying down"
          />
        </div>
      )}

      {status === WalletStatus.WALLET_CONNECTED && (
        <div className='game-menu-container'>
          <Menu />
        </div>
      )}
      
      {renderConnectButton()}
      <WalletAddress />
    </main>
  );
}

export default App;
