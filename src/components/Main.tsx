import React from 'react'
// @ts-ignore */
import pic02 from '../static/pic02.jpg'
// @ts-ignore */
import coral from '../static/coral.jpg'

interface MainProps {
  route: object
  article: string
  articleTimeout: boolean
  onCloseArticle: () => {}
  timeout: boolean
  setWrapperRef: () => {}
}

export default class Main extends React.Component<MainProps> {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* Intro */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={coral} alt="Image Unavaliable" />
          </span>
          <p>
            Hiya! My name is Carlos and I am a student at Kansas State
            University pursing a B.S. in Computer Science. Been a resident of
            Kansas for about 21 years. My main focus during my education has
            been designing and developing software to make life easier for those
            around me. This mostly includes automating systems to assist me in
            keeping my home and work life running smoothly and seamlessly.
          </p>
          <p>
            If this link hasn't been broken yet due to a deployment issue, you
            can check out my work <a href="#work">here</a>.
          </p>
          <p>
            <i>*smoothly and seeamlessly sold seperately</i>
          </p>
          {close}
        </article>
        {/* Work */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I started working as a general laborer right before begining my
            studies at Kansas State University. The diverse cast of individuals
            I had the pleasure to work with taught me a lot about hard work,
            communication, and being prepared alter my work to meet client
            needs.
          </p>
          <p>
            Once I started my studies at KSU, I took some time to explore
            research opportunites within the University. Turns out I had a
            strong interest in the field of biology and ended up working for two
            labs on campus. I also
          </p>
          <p>
            I also do a bunch of web work around React, Node.js, JS, TS, C# and
            MSSQL. If you notice, this website was built using a template.
            <br />
            (CSS is somthing I am still working on improving on, hence the
            template.)
          </p>
          {close}
        </article>
        {/* Projects */}
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Personal Projects</h2>
          <ul>
            <li>
              <b>C.A.R.M.E.N.</b>
              <br />
              <i>Pronunciation: /kär-men/</i>
              <br />A Communications Assistant for Reading Messages Events and
              Notifications
            </li>
            <br />
            <li>
              <b>H.A.I.</b>
              <br />
              <i>Pronunciation: /hī/</i>
              <br />
              Home Automation Interface built for use with RaspberryPi
            </li>
            <br />
            <li>
              <b>Text-to-Scratch</b>
              <br />
              A plugin for scratch that allows for text input to generate and
              assemble code blocks.
            </li>
            <br />
          </ul>
          {close}
        </article>
        {/* Resume */}
        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <p><i>*Link unavaliable for now, check back soon!</i></p>
          {close}
        </article>
        {/* Contact */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={4}></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://github.com/NO8LESIX" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <p>
            Email: cbcerna@gmail.com
            <br />
            Phone: (913) 486-9364
          </p>
          <i>
            * contact feature under development and may not work as intended
          </i>
          {close}
        </article>
      </div>
    )
  }
}
