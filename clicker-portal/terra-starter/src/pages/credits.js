import { Link } from "react-router-dom";

const Bama_HANDLE = 'BamaDog'
const Bama_LINK = `https://twitter.com/${Bama_HANDLE}`;
const Dev_HANDLE = 'KyleLackinger';
const Dev_LINK = `https://twitter.com/${Dev_HANDLE}`;
const Music_HANDLE = 'HeatleyBros';
const Music_LINK = `https://twitter.com/${Music_HANDLE}`;
const Art_HANDLE = 'relart';
const Art_LINK = `https://twitter.com/${Art_HANDLE}`;

const Credits = () => {
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
                <h3>Credits</h3>
                <div className="footer-container">
                    <span>Model & Vocals:</span>
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src="/twitter-logo.svg"
                    />
                    <a
                        className="footer-text"
                        href={Bama_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`@${Bama_HANDLE}`}</a>
                </div>
                <div className="footer-container">
                    <span>Dev:</span>
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src="/twitter-logo.svg"
                    />
                    <a
                        className="footer-text"
                        href={Dev_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`@${Dev_HANDLE}`}</a>
                </div>
                <div className="footer-container">
                    <span>Art:</span>
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src="/twitter-logo.svg"
                    />
                    <a
                        className="footer-text"
                        href={Art_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`@${Art_HANDLE}`}</a>
                </div>
                <div className="footer-container">
                    <span>Music:</span>
                    <img
                        alt="Twitter Logo"
                        className="twitter-logo"
                        src="/twitter-logo.svg"
                    />
                    <a
                        className="footer-text"
                        href={Music_LINK}
                        target="_blank"
                        rel="noreferrer"
                    >{`@${Music_HANDLE}`}</a>
                </div>
                <div>
                </div>
            </div>
        </main>
    );
}

export default Credits;