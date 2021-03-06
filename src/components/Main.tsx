import React from 'react'
// @ts-ignore */
import pic02 from '../static/pic02.jpg'
// @ts-ignore */
import coral from '../static/coral.jpg'
// @ts-ignore */
import Pdf from '../static/Carlos_Cerna_Resume.pdf'

interface MainProps {
  route: object
  article: string
  articleTimeout: boolean
  onCloseArticle: () => {}
  timeout: boolean
  setWrapperRef: () => {}
  resume: string
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

    const onPrint = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      document.location.href = Pdf
    }

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
            labs on campus.
          </p>
          <p>
            It wasn't until I joined Buildertrend that I really began to dive
            into web work. My time there introduced me to React and what a
            wonderful framework this is to work with!
          </p>
          <p>
            I also do a bunch of web work around React, Node.js, JS, TS, C#, and
            MSSQL now thanks to my internship at Buildertrend. Quick shout out
            to Daric Teske and Vincent Nguyen. Although, I still have a lot of
            work to do in order to imporove my styling abilities.
          </p>
          <p>
            <i>
              (CSS is somthing I am still working on improving on, hence the
              template. If you notice, this website was built using a template.)
            </i>
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
              <a
                href="https://github.com/NO8LESIX/Carmen-Bot"
                className="icon fa-github"
              >
                <b> C.A.R.M.E.N.</b>
              </a>
              <br />
              <i>Pronunciation: /kär-men/</i>
              <br />A Discord communications assistant for reading messages,
              events and notifications
            </li>
            <br />
            <li>
              <a
                href="https://no8lesix.github.io/cbcerna/"
                className="icon fa-github"
              >
                <b> H.A.I.</b>
              </a>
              <br />
              <i>Pronunciation: /hī/</i>
              <br />
              Home automation interface built for use with RaspberryPi
            </li>
            <br />
            <li>
              <a
                href="https://no8lesix.github.io/cbcerna/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
                <b> Text-to-Scratch</b>
              </a>
              <br />A plugin for Scratch that allows for text input to generate
              and assemble code blocks.
            </li>
            <br />
            <li>
              <a
                href="https://github.com/NO8LESIX/KDA-React-Prototype"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
                <b>
                  {' '}
                  Kansas Department of Agriculture: Regulations Information Site
                </b>
              </a>
              <br />A demo website produced by a small team consiting of myself
              and 5 other students from Kansas State University. The website is
              done with React, TS, and React Router. Little bits of other
              languages in here as well. My primary work revolved around
              integrating React-Router for our page navigation, managing pull
              requests, and cordinating the team's tasks so we could meet our
              deadlines.
            </li>
            <br />
            <li>
              <a
                href="https://github.com/NO8LESIX/cbcerna"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
                <b> Personal Portfolio Website</b>
              </a>
              <br />
              Built from a Gatsby Template. This is where I display my projects,
              contact portal, and other stuff. I add new features every once in
              a while to discover how to integrate or improve my coding
              knowledge. TL;DR: It's where I do the code-y things and try to
              work out the kinks before I do things elsewhere. Always taking
              suggestions to improve my site. Feel free to contact me with
              things that might be useful to add!
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
          <div>
            <button onClick={(event) => onPrint(event)}>
              Download / Print PDF
            </button>
          </div>
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
          <form
            method="post"
            action="https://www.flexyform.com/f/07eeccd988b21580f8b50d097f037cae5ce909e6"
          >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="fullname" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="replyto" id="email" />
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
          {close}
        </article>
      </div>
    )
  }
}
