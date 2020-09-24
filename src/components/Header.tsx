import PropTypes from 'prop-types'
import React from 'react'

interface HeaderProps {
  onOpenArticle: (article: string) => {}
  timeout: boolean
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Carlos Bryant Cerna</h1>
            <p></p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('intro')
                }}
              >
                Intro
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('work')
                }}
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('projects')
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('resume')
                }}
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.props.onOpenArticle('contact')
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
