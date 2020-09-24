(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t);var l=a("dI71"),i=a("q1tI"),r=a.n(i),s=(a("qhky"),a("Wbzz")),o=(a("wcMv"),function(e){var t,a=e.children,n=e.location;return t=n&&"/"===n.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(s.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,t)}})}),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this;return r.a.createElement("header",{id:"header",style:this.props.timeout?{display:"none"}:{}},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"icon fa-diamond"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"Carlos Bryant Cerna"),r.a.createElement("p",null))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.props.onOpenArticle("intro")}},"Intro")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.props.onOpenArticle("work")}},"Work")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.props.onOpenArticle("projects")}},"Projects")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.props.onOpenArticle("resume")}},"Resume")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.props.onOpenArticle("contact")}},"Contact")))))},t}(r.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this,t=r.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return r.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},r.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"About Me"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:"../static/coral.jpg",alt:"Image Unavaliable"})),r.a.createElement("p",null,"Hiya! My name is Carlos and I am a student at Kansas State University pursing a B.S. in Computer Science. Been a resident of Kansas for about 21 years. My main focus during my education has been designing and developing software to make life easier for those around me. This mostly includes automating systems to assist me in keeping my home and work life running smoothly and seamlessly."),r.a.createElement("p",null,"If this link hasn't been broken yet due to a deployment issue, you can check out my work ",r.a.createElement("a",{href:"#work"},"here"),"."),r.a.createElement("p",null,r.a.createElement("i",null,"*smoothly and seeamlessly sold seperately")),t),r.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Work"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:"../static/pic02.jpg",alt:""})),r.a.createElement("p",null,"I started working as a general laborer right before begining my studies at Kansas State University. The diverse cast of individuals I had the pleasure to work with taught me a lot about hard work, communication, and being prepared alter my work to meet client needs."),r.a.createElement("p",null,"Once I started my studies at KSU, I took some time to explore research opportunites within the University. Turns out I had a strong interest in the field of biology and ended up working for two labs on campus. I also"),r.a.createElement("p",null,"I also do a bunch of web work around React, Node.js, JS, TS, C# and MSSQL. If you notice, this website was built using a template.",r.a.createElement("br",null),"(CSS is somthing I am still working on improving on, hence the template.)"),t),r.a.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Personal Projects"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"C.A.R.M.E.N."),r.a.createElement("br",null),r.a.createElement("i",null,"Pronunciation: /kär-men/"),r.a.createElement("br",null),"A Communications Assistant for Reading Messages Events and Notifications"),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("b",null,"H.A.I."),r.a.createElement("br",null),r.a.createElement("i",null,"Pronunciation: /hī/"),r.a.createElement("br",null),"Home Automation Interface built for use with RaspberryPi"),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("b",null,"Text-to-Scratch"),r.a.createElement("br",null),"A plugin for scratch that allows for text input to generate and assemble code blocks."),r.a.createElement("br",null)),t),r.a.createElement("article",{id:"resume",className:("resume"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Resume"),r.a.createElement("p",null,r.a.createElement("i",null,"*Link unavaliable for now, check back soon!")),t),r.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},r.a.createElement("h2",{className:"major"},"Contact"),r.a.createElement("form",{method:"post",action:"#"},r.a.createElement("div",{className:"field half first"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"field half"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",id:"email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",rows:4})),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),r.a.createElement("li",null,r.a.createElement("input",{type:"reset",value:"Reset"})))),r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/NO8LESIX",className:"icon fa-github"},r.a.createElement("span",{className:"label"},"GitHub")))),r.a.createElement("p",null,"Email: cbcerna@gmail.com",r.a.createElement("br",null),"Phone: (913) 486-9364"),r.a.createElement("i",null,"* contact feature under development and may not work as intended"),t))},t}(r.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return r.a.createElement("footer",{id:"footer",style:this.props.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"© Gatsby Starter - Dimension. Design:"," ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with:"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))},t}(r.a.Component),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(n(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n(a)),a.setWrapperRef=a.setWrapperRef.bind(n(a)),a.handleClickOutside=a.handleClickOutside.bind(n(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return r.a.createElement(o,{location:this.props.location},r.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},r.a.createElement("div",{id:"wrapper"},r.a.createElement(c,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),r.a.createElement(m,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),r.a.createElement(u,{timeout:this.state.timeout})),r.a.createElement("div",{id:"bg"})))},t}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-index-js-834e5ec221b1a1f094c5.js.map