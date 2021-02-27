(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),c=t.n(r),o=t(116),l=t(126),s=t(120),i=t(22),m=t(121),h=t(104),d=t.n(h);const u=[{title:"Crocks",icon:c.a.createElement("span",{className:"icon-16-code-file"}),description:c.a.createElement(c.a.Fragment,null,"The `crocks` are the heart and soul of this library. This is where you will find all your favorite ADT's you have grown to love.")},{title:"Monoids",icon:c.a.createElement("span",{className:"icon-16-code-file"}),description:c.a.createElement(c.a.Fragment,null,"Each Monoid provides a means to represent a binary operation and is usually locked down to a specific type. These are great when you need to combine a list of values down to one value.")},{title:"Functions",icon:c.a.createElement("span",{className:"icon-16-code-file"}),description:c.a.createElement(c.a.Fragment,null,"A wonderfully curated collection of combinators, helper functions, logic functions, predicates, point-free functions and natural transforms.")}],p=[{title:"Work in a more declarative, functional flow.",icon:c.a.createElement("span",{className:"icon-16-balloon-topic"}),description:c.a.createElement(c.a.Fragment,null,"The data types provided in Crocks allow you to remove large swaths of imperative boilerplate, allowing you to think of your code in terms of what it does and not how it does it.")},{title:"Use a collection of popular Algebraic Data Types (ADTs)",icon:c.a.createElement("span",{className:"icon-16-menu"}),description:c.a.createElement(c.a.Fragment,null,"Have you ever heard of Maybe, Either, or, heck, even IO? These are just a few of the ADTs which Crocks brings to the table.")},{title:"Combine a list of values down to one value",icon:c.a.createElement("span",{className:"icon-16-org_chart"}),description:c.a.createElement(c.a.Fragment,null,"Crocks provides a large variety of Monoids, which are ADTs that represent a binary operation and are usually locked down it to a specific type. These are great when you need to combine two things into one under a specific operation.")},{title:"Simple and unambiguous error messages",icon:c.a.createElement("span",{className:"icon-16-alert"}),description:c.a.createElement(c.a.Fragment,null,"Being a library built for and by developers, Crocks has ensured it has helpful error messaging at the point of the problem, not deep down in the depths of some abstraction in crocks. The immediate feedback loop enables faster, higher quality development.")}];function f({icon:e,title:a,description:t}){return c.a.createElement("div",{className:"col text--center"},e&&c.a.createElement("div",{className:d.a.featureGraphic},e),c.a.createElement("h1",null,a),c.a.createElement("p",null,t))}function b({idx:e,icon:a,title:t,description:n}){return c.a.createElement("div",{className:"row margin-bottom--lg",style:{flexDirection:e%2==0?"row":"row-reverse"}},c.a.createElement("div",{className:"col col--6"},c.a.createElement("h1",{className:d.a.highlightTitle},t),c.a.createElement("p",{className:d.a.highlightDescription},n)),c.a.createElement("div",{className:"col col--6"},a&&c.a.createElement("div",{className:d.a.highlightGraphic},a)))}a.default=function(){const e=Object(i.default)(),{siteConfig:a={}}=e;return c.a.createElement(l.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:Object(o.a)("hero hero--secondary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline))),c.a.createElement("main",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"}),c.a.createElement("div",{className:"col align-center"},c.a.createElement("iframe",{src:"//ghbtns.com/github-btn.html?user=evilsoft&repo=crocks&type=watch&count=true&size=large",allowtransparency:"true",frameborder:"0",scrolling:"0",width:"150",height:"30"}),c.a.createElement("iframe",{src:"//ghbtns.com/github-btn.html?user=evilsoft&repo=crocks&type=fork&count=true&size=large",allowtransparency:"true",frameborder:"0",scrolling:"0",width:"150",height:"30"})),c.a.createElement("div",{className:"col"}))),c.a.createElement("div",{className:Object(o.a)("hero hero--dark",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"crocks__about-title"},"Powerful. Simple. Reliable."),c.a.createElement("p",{className:"crocks__about-description"},"Crocks is a zero dependency library that curates and provides a collection of containers with a common interface between each, where possible, Along with a large set of the helper functions necessary to hit the ground running."),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(s.a,{className:Object(o.a)("button button button--primary button--lg",d.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),u&&u.length>0&&c.a.createElement("section",{className:d.a.feature},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"col col--10 col--offset-1"},c.a.createElement("div",{className:"row"},u.map(((e,a)=>c.a.createElement(f,Object(n.a)({key:a},e))))))))),p&&p.length>0&&c.a.createElement("section",{className:d.a.highlights},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"col col--10 col--offset-1"},p.map(((e,a)=>c.a.createElement(b,Object(n.a)({key:a,idx:a},e))))))))))}},128:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(124),o=t.n(c),l=t(117),s=t(22);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(l.useHistory)(),{siteConfig:m={}}=Object(s.default)(),{baseUrl:h}=m,d=()=>{a.current||(Promise.all([fetch(h+"search-doc.json").then((e=>e.json())),fetch(h+"lunr-index.json").then((e=>e.json())),Promise.all([t.e(44),t.e(47)]).then(t.bind(null,134)),t.e(30).then(t.t.bind(null,133,7))]).then((([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=h+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)})),a.current=!0)},u=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:u,onKeyDown:u,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:u,onBlur:u,ref:c}))}}}]);