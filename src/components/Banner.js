import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major style2">
                <h1>Hi, my name is Victor</h1>
            </header>
            <div className="content">
                <p>I am a Front-End Developer<br />
                based out of Austin, TX.</p>
            </div>
            <ul className="icons">
                <li><a href="https://github.com/vollervidez" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://codepen.io/vollervidez-1471062727/" target="_blank" className="icon alt fa-codepen"><span className="label">GitHub</span></a></li>
                <li><a href="https://twitter.com/vollervidez" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.linkedin.com/in/victor-ollervidez/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="actions">
                    <li><a href="vollervi@outlook.com" className="button next scrolly">Get In Touch</a></li>
                    <li><a href="#" className="button special icon fa-download">Download My Resume</a></li>
            </ul>
        </div>
    </section>
)

export default Banner
