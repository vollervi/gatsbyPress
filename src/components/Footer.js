import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
        <ul className="icons">
                <li><a href="https://github.com/vollervidez" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://github.com/vollervidez" target="_blank" className="icon alt fa-codepen"><span className="label">Codepen</span></a></li>
                <li><a href="https://twitter.com/vollervidez" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.linkedin.com/in/victor-ollervidez/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Victor Ollervidez</li><li>Built With: <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer