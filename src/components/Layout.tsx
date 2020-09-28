import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import '../assets/scss/main.scss'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

interface LayoutProps {
  children?: any
  location: any
}

export default class Layout extends React.Component<LayoutProps> {
  displayContent = () => {
    let content
    if (location && location.pathname === '/') {
      content = <div>{this.props.children}</div>
    } else {
      content = (
        <div id="wrapper" className="page">
          <div>{this.props.children}</div>
        </div>
      )
    }
    return content;
  }

  getData = () => {
    const data = useStaticQuery(graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return data
  }

  render() {
    return (
      <>
        {/* <Helmet> */}
          <meta charSet="utf-8" />
          <html lang="en" />
        {/* </Helmet> */}
        {this.displayContent()}
      </>
    )
  }
}
