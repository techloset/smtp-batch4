import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import abcImage from './poster.png'

function App() {
  return (
    <div className="App">
       <header>
            <div className="row uni-padding" id="topbar">
                <div className="col-lg-6 col-sm-8">
                    <h1>
                        NORDIC ROSE
                    </h1>
                </div>
                <div className="col-lg-6 col-sm-4" id="navbar">
                    <ul>
                        <li><a href="" id="blog">BLOG</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">LINK</a></li>
                        <li><a href="">PROJECTS</a></li>
                    </ul>
                </div>
            </div>
        </header>


        <div className="row" id="post-section">
            <div className="col-3"></div>
            <div className="col-lg-6">
                <h1>
                    A few words about this blog platform, Ghost, and how this site was made
                </h1>
                <p>
                    Why Ghost (Figma) instead of Medium, WordPress
                    or other options?
                </p>
            </div>
            <div className="col-lg-3"></div>
        </div>
        <div id="poster-img">
            <img src={abcImage} alt="Poster File Not Found" />
        </div>



        {/* link */}
        <div className="container-flued row" id="link-section">
            <div className="col-lg-12">
                <p>
                    <b>Digital product design</b> Remote work <b> UX design </b> Distributed teams
                    <b> Creativity </b>Strategy <b>Suspense</b> Growth
                </p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-0"></div>
                <div className="col-lg-6 col-sm-12" id="link-data">
                    <h1>
                        NORDIC ROSE
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit<br/> tempus erat egestas
                        efficitur. In hac habitasse platea dictumst.<br/> Fusce a nunc eget ligula suscipit finibus.
                    </p>
                    <ul>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">RSS</a></li>
                    </ul>
                    <p>
                        © 2012–2020 Nordic Rose Co. <br/>
                        All rights reserved.
                    </p>

                </div>
                <div className="col-lg-3 col-sm-0"></div>
            </div>
        </div>

    </div>
  );
}

export default App;
