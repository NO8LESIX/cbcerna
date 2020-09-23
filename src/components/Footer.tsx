import React from 'react'
import PropTypes from 'prop-types'

interface FooterProps {
  timeout: boolean
}

export default class Footer extends React.Component<FooterProps> {
  render() {
    return (
      <footer id="footer" style={this.props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">
          &copy; Gatsby Starter - Dimension. Design:{' '}
          <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
        </p>
      </footer>
    )
  }
}
