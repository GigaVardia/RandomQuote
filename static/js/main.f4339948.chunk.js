(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,o){},26:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(2),s=o.n(n),r=o(9),i=o.n(r),u=(o(20),o(10)),h=o(11),c=o(3),l=o(14),d=o(13),m=o(5),b=o(4),y=o(12),w=(o(26),Object(a.jsx)(m.a,{icon:b.b})),j=Object(a.jsx)(m.a,{icon:b.a}),p=Object(a.jsx)(m.a,{icon:y.a}),f=[{Quote:"If you do what you\u2019ve always done, you\u2019ll get what you\u2019ve always gotten.",Author:"Tony Robbins"},{Quote:"It\u2019s not the years in your life that count. It\u2019s the life in your years.",Author:"Abraham Lincoln"},{Quote:"I have learned over the years that when one\u2019s mind is made up, this diminishes fear.",Author:"Rosa Parks"},{Quote:"Too many of us are not living our dreams because we are living our fears.",Author:"Les Brown"},{Quote:"Happiness is not something readymade. It comes from your own actions.",Author:"Dalai Lama"},{Quote:"The question isn\u2019t who is going to let me; it\u2019s who is going to stop me.",Author:"Ayn Rand"},{Quote:"Definiteness of purpose is the starting point of all achievement.",Author:"W. Clement Stone"},{Quote:"A truly rich man is one whose children run into his arms when his hands are empty.",Author:"Unknown"},{Quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",Author:"Christopher Columbus"},{Quote:"Everything has beauty, but not everyone can see.",Author:"Confucius"},{Quote:"What\u2019s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",Author:"Bob Dylan"}],g=function e(){return(e.number=Math.floor(Math.random()*f.length))===e.lastNumber?e():e.lastNumber=e.number},v=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},x=g(),O=v(),A=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(u.a)(this,o),(a=t.call(this,e)).state={Quote:f[x].Quote,Author:f[x].Author},a.updateText=a.updateText.bind(Object(c.a)(a)),a}return Object(h.a)(o,[{key:"updateText",value:function(){x=g(),O=v(),console.log(x),this.setState({Quote:f[x].Quote,Author:f[x].Author}),document.documentElement.style.setProperty("--main-color",O)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"reactQuoteBar",children:[Object(a.jsxs)("div",{className:"fullQuote",children:[Object(a.jsxs)("div",{className:"quote",children:[Object(a.jsx)("p",{className:"quoteLeft",children:p}),this.state.Quote]}),Object(a.jsxs)("p",{className:"author",children:["-",this.state.Author]})]}),Object(a.jsxs)("div",{className:"bottomSection",children:[Object(a.jsxs)("div",{className:"social",children:[Object(a.jsx)("div",{className:"twitter",children:Object(a.jsx)("a",{target:"_blank",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Twenty%20years%20from%20now%20you%20will%20be%20more%20disappointed%20by%20the%20things%20that%20you%20didn%E2%80%99t%20do%20than%20by%20the%20ones%20you%20did%20do%2C%20so%20throw%20off%20the%20bowlines%2C%20sail%20away%20from%20safe%20harbor%2C%20catch%20the%20trade%20winds%20in%20your%20sails.%20%20Explore%2C%20Dream%2C%20Discover.%22%20Mark%20Twain",children:w})}),Object(a.jsx)("div",{className:"tumblr",children:Object(a.jsx)("a",{target:"_blank",href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Mark%20Twain&content=Twenty%20years%20from%20now%20you%20will%20be%20more%20disappointed%20by%20the%20things%20that%20you%20didn%E2%80%99t%20do%20than%20by%20the%20ones%20you%20did%20do%2C%20so%20throw%20off%20the%20bowlines%2C%20sail%20away%20from%20safe%20harbor%2C%20catch%20the%20trade%20winds%20in%20your%20sails.%20%20Explore%2C%20Dream%2C%20Discover.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",children:j})})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"newQuoteButton",transitionEnterTimeout:500,onClick:this.updateText,children:"New Quote"})})]})]}),Object(a.jsx)("p",{className:"projectAuthor",children:"By Giga Vardia"})]})}}]),o}(s.a.Component);i.a.render(Object(a.jsx)(A,{}),document.getElementById("quote-bar"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f4339948.chunk.js.map