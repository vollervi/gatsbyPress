import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import About from '../components/About'

import pic01 from '../assets/images/wa-website.jpg'
import pic02 from '../assets/images/pharr-tx-site.jpeg'
import pic03 from '../assets/images/park-improv.jpeg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Victor Ollervidez | Front-End Developer"
                    meta={[
                        { name: 'description', content: 'Hi! Im a Front-End Developer Based Out of Austin Texas' },
                        { name: 'keywords', content: 'front-end developer, austin, texas, austin texas, html, react' },
                    ]}
                >
                </Helmet>

                <Banner />
                <About />

                <div id="main">
                    <div className="inner">
                        <header className="major">
                            <h1>Some Recent Work</h1>
                        </header>
                        <section id="one" className="tiles">
                            <article style={{backgroundImage: `url(${pic01})`}}>
                                <header className="major">
                                    <h3>Warm Audio LLc.</h3>
                                    <p>Web Development & Web Design</p>
                                </header>
                                <Link to="/warm-audio" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic02})`}}>
                                <header className="major">
                                    <h3>City of Pharr Texas</h3>
                                    <p>Web Development & Web Design</p>
                                </header>
                                <Link to="/city-of-pharr-1" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic03})`}}>
                                <header className="major">
                                    <h3>City of Pharr 2017 Park Improvement Plan</h3>
                                    <p>Web Development & Web Design</p>
                                </header>
                                <Link to="/city-of-pharr-2" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic04})`}}>
                                <header className="major">
                                    <h3>Pharr International Bridge</h3>
                                    <p>Web Development & Web Design</p>
                                </header>
                                <Link to="/city-of-pharr-3" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic05})`}}>
                                <header className="major">
                                    <h3>Rio Grande Guardian</h3>
                                    <p>Web Development</p>
                                </header>
                                <Link to="/rio-grande-guardian" className="link primary"></Link>
                            </article>
                            <article style={{backgroundImage: `url(${pic06})`}}>
                                <header className="major">
                                    <h3>The F Word Gift Shop</h3>
                                    <p>Web Development</p>
                                </header>
                                <Link to="/f-word-gift-shop" className="link primary"></Link>
                            </article>
                        </section>
                        {/* <section id="two">
                            <div className="inner">
                                <header className="major">
                                    <h2>Massa libero</h2>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                                <ul className="actions">
                                    <li><Link to="/landing" className="button next">Get Started</Link></li>
                                </ul>
                            </div>
                        </section> */}
                    </div> 
                </div>

            </Layout>
        )
    }
}

export default HomeIndex