import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            {/* <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing"></Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Generic</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>
            </ul> */}
            <ul className="actions vertical">
                <li><a href="https://drive.google.com/file/d/1_WXuNEvb2XuhIzCneLOme71RFeB7etZj/view?usp=sharing" target="_blank" className="button special fit">Download My Resume</a></li>
                <li><a href="mailto:vollervi@outlook.com" className="button fit">Talk To Me</a></li>
            </ul>
            <h4>Connect With Me</h4>
            <ul className="icons">
                <li><a href="https://github.com/vollervidez" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://codepen.io/vollervidez-1471062727/" target="_blank" className="icon alt fa-codepen"><span className="label">GitHub</span></a></li>
                <li><a href="https://twitter.com/vollervidez" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.linkedin.com/in/victor-ollervidez/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
