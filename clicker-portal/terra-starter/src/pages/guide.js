import { Link } from 'react-router-dom';
import WalletAddress from '../components/WalletAddress';

const Guide = () => {
    return (
        <main className="App">
            <header>
                <Link to="/" className="home-link">
                    <div className='header-titles'>
                        <h1>🔥 Pet Bama 🔥</h1>
                    </div>
                </Link>
            </header>

            <div className='score-board-container'>
                <h3>How to play</h3>

                <div>
                    <span className='help'>
                        Only your pets can calm Bama and get him out of the hellscape! How he got there is a story for another time... 
                    </span>
                    <p></p>
                    <span className='help'>
                        The more you pet, the happier he gets. Help him get back to his home! You have 20 seconds...good luck!
                    </span>
                </div>
            </div>
            <WalletAddress />
        </main>
    );
};

export default Guide;