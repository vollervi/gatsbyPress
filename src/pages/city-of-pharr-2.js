import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic3 from '../assets/images/pharr-tx-site.png'

const WarmAudio = (props) => (
    <Layout>
        <Helmet>
            <title>Victor Ollervidez | Front-End Developer</title>
            <meta name="description" content="Warm Audio LLC website build case study" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    {/* <header className="major"> */}
                        <h1>City of Pharr Texas<br />Park Improvement Project Campaign</h1>
                    {/* </header> */}
                    <hr className="major" />
                    <div className="grid-wrapper">
                        <div className="col-4">
                        <span className="image fit"><img src={pic3} alt="" /></span>
                        <a href="http://pharr-tx.gov/" target="_blank" className="button special fit">Visit The Site</a>
                        </div>
                        <div className="col-8">
                        <article>
                            <h4>Project Summary</h4>
                                {/* <p>When I began my employment with the City of Pharr Texas IT department, my first task was to rebuild the cities main website. This project had a pretty short deadline and as per the IT director I had to keep the WordPress CMS in use.</p>
                                <p>To meet these deadlines I decided to go with purchasing a premade premium theme.The previous website had a large amount of pages and I needed a way to quickly rebuild them using pre-built elements.</p><p>This project also involved the integration of some 3rd party services which required some customization. To achieve this a custom child-theme was used were all custom JavaScript, CSS, PHP, and custom templates where added.</p> */}
                                <div className="box">
                                <h4 id="content">Project Specs:</h4>
                                <ul className="alt">
                                    <li><b>Role:</b> Web Development / Web Design</li>
                                    <li><b>Tech Used:</b> HTML, CSS / SCSS, JavaScript, JQuery, Gulp</li>
                                    <li><b>Industry:</b> Local Government</li>
                                </ul>
                                {/* <a href="http://pharr-tx.gov/" target="_blank" className="button special fit">Visit The City of Pharr</a> */}
                                </div>
                            
                            </article>
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default WarmAudio