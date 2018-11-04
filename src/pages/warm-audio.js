import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic1 from '../assets/images/wa-website.jpg'

const WarmAudio = (props) => (
    <Layout>
        <Helmet>
            <title>Victor Ollervidez | Warm Audio LLC</title>
            <meta name="description" content="Warm Audio LLC website build case study" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    {/* <header className="major"> */}
                        <h1>Warm Audio LLC.</h1>
                    {/* </header> */}
                    <hr className="major" />
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><img src={pic1} alt="" /></span>
                            <div className="box">
                                <h4 id="content">Project Specs:</h4>
                                <ul className="alt">
                                    <li><b>Role:</b> Web Development / Web Design</li>
                                    <li><b>Tech Used:</b> WordPress, PHP, HTML, CSS, JavaScript, JQuery, Cloudflare, AWS, CentOS VPS</li>
                                    <li><b>Industry:</b> Pro Audio</li>
                                </ul>
                                <a href="https://warmaudio.com" target="_blank" className="button special fit">Visit WarmAudio.com</a>
                            </div>
                        </div>
                        <div className="col-8">
                        <article>
                            <h4>Project Summary</h4>
                                <p>I was brought on with <b>Warm Audio LLC</b> to help them quickly and effeciently migrate their previous company website away from the Wix platform to a more suitable solution able to handle the increased traffic being generated from the growth of the company brand in the social media space.</p>
                                <hr className="major" />
                                <h4>The Process</h4>
                                <p>In my opinion every successful project starts with a well planned <b><i>development process</i></b> that helps to identify current issues as well as client needs and/or wants that will ultimately set the outline for the whole project. Being the lead on most of my previous projecs has forced me to develop not only my technical skills but my organizational skills as well. Over the years I developed this simple yet super effective way of handling my projects.</p>

                                <dl>
                                    <dt>Phase 1. Planning & Research</dt>
                                    <dd>
                                        <p>
                                            The first step is to indentify the problem, research the client and their market, then plan a way to deliver a finished product that solves those issues and meets the clients needs. Warm Audio had three basic requests, they wanted <b>site performance / speed</b>, <b>be able to edit without developer help</b>, & <b>a modern design</b> to attract a broader client demographic.
                                        </p>
                                    </dd>
                                    <dt>Phase 2. Design & Development</dt>
                                    <dd>
                                        <p>
                                            After phase 1 the fun part begins! Using code to mock up differnt desings with different UI and functionality is my favorite part of the job. The Warm Audio leadership had one request <b><i>make it look modern</i></b>.
                                            <p>I spent a bit over a week researching the design trends in the Pro Audio Industry as well as looking at what the companies direct competition was doing with their online presence and how I could improve on that. After bringing my ideas to the creative marketing director I was able to move forward with development.</p>
                                            <p>Since I was tasked with buildng a <i>fast</i>, and <i>easily editable</i> site I decided to go with the best possible approach.</p>
                                            <ul>
                                                <li>Hosted on a Dedicated Cloud VPS server for speed and scalability.</li>
                                                <li>Use the WordPress CMS for the user friendly admin panel.</li>
                                                <li>Use a starter theme / theme framework that is customizable using PHP, JavaScript, CSS.</li>
                                                <li>Integrated page builder for easy page editing.</li>
                                                <li>Cloudflare as the DNS provider and CDN for optimized delivery.</li>
                                                <li>Web Application Firewall (WAF) for rock solid security.</li>
                                                <li>AWS Cloudfront for speedy static content delivery.</li>
                                            </ul>
                                        </p>
                                    </dd>
                                    <dt>Phase 3. Split Testing & Analytics</dt>
                                    <dd>
                                        <p>To optmize user conversion and retention rates I like to implement some simple A/B tests. To run these tests I use the Google Optimize tool becuase it's free links directly to Google Analytics.</p>
                                    </dd>
                                    <dt>Phase 4. Launch!</dt>
                                    <dd>
                                        <p></p>
                                    </dd>
                                </dl>
                                
                                <a href="https://warmaudio.com" target="_blank" className="button special fit">Visit WarmAudio.com</a>
                            </article>
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </div>

    </Layout>
)

export default WarmAudio