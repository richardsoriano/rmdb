(window.webpackJsonpreact_movie_db_course=window.webpackJsonpreact_movie_db_course||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/reactMovie_logo.08494abf.png"},20:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},25:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,l,m,s,p,d,f,u=t(0),b=t.n(u),x=t(17),g=t.n(x),h=t(4),v=t(19),E=t.n(v),w=t(20),O=t.n(w),j=t(1),y=t(2),k=y.b.div(a||(a=Object(j.a)(["\n  background: #1c1c1c;\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  .header-content {\n    max-width: 1280px;\n    min-height: 120px;\n    padding: 20px 0px;\n    margin: 0 auto;\n    box-sizing: border-box;\n\n    @media screen and (max-width: 500px) {\n      max-width: 1280px;\n      min-height: 0px;\n    }\n  }\n"]))),z=y.b.img(r||(r=Object(j.a)(["\n  width: 250px;\n  margin-top: 20px;\n\n  @media screen and (max-width: 500px) {\n    width: 150px;\n    margin-top: 5px;\n  }\n"]))),S=y.b.img(i||(i=Object(j.a)(["\n  width: 122px;\n  margin-top: 25px;\n  float: right;\n\n  @media screen and (max-width: 500px) {\n    display: inline-block;\n    width: 80px;\n    margin-top: 0px;\n  }\n"]))),N=function(){return b.a.createElement(k,null,b.a.createElement("div",{className:"header-content"},b.a.createElement(h.a,{to:"/"},b.a.createElement(z,{src:E.a,alt:"rmdb-logo"})),b.a.createElement(S,{src:O.a,alt:"tmdb-logo"})))},_=t(3),P="https://api.themoviedb.org/3/",I="844dba0bfd8f3a4f3799f6130ef9e335",A="".concat(P,"search/movie?api_key=").concat(I,"&query="),D="".concat(P,"movie/popular?api_key=").concat(I),R="http://image.tmdb.org/t/p/",M=y.b.div(o||(o=Object(j.a)(["\n  background: ",";\n  background-size: 100%, cover !important;\n  background-position: center, center !important;\n  width: 100%;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  .heroimage-content {\n    max-width: 1280px;\n    padding: 20px;\n    margin: 0 auto;\n  }\n\n  .heroimage-text {\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 38px;\n        color: #fff;\n      }\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      line-height: 26px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 16px;\n        line-height: 20px;\n        color: #fff;\n      }\n    }\n\n    @media screen and (max-width: 720px) {\n      max-width: 100%;\n    }\n  }\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), #1c1c1c")}),J=function(n){var e=n.image,t=n.title,a=n.text;return b.a.createElement(M,{image:e},b.a.createElement("div",{className:"heroimage-content"},b.a.createElement("div",{className:"heroimage-text"},b.a.createElement("h1",null,t),b.a.createElement("p",null,a))))},T=t(7),F=t.n(T),B=y.b.div(c||(c=Object(j.a)(["\n  width: 100%;\n  height: 105px;\n  background: #1c1c1c;\n  padding: 25px 20px 0px 20px;\n  box-sizing: border-box;\n  color: #fff;\n"]))),C=y.b.div(l||(l=Object(j.a)(["\n  max-width: 1280px;\n  width: 100%;\n  height: 55px;\n  background: #353535;\n  margin: 0 auto;\n  border-radius: 40px;\n  position: relative;\n  color: #fff;\n\n  .fa-search {\n    position: absolute;\n    left: 20px;\n    top: 12px;\n    color: #fff;\n    z-index: 1000;\n  }\n\n  input {\n    font-family: 'Abel', sans-serif;\n    font-size: 28px;\n    position: absolute;\n    left: 0px;\n    margin: 8px 0;\n    padding: 0 0 0 60px;\n    border: 0;\n    width: 95%;\n    background: transparent;\n    height: 40px;\n    color: #fff;\n    box-sizing: border-box;\n\n    :focus {\n      outline: none;\n    }\n\n    @media screen and (max-width: 720px) {\n      font-size: 28px;\n    }\n  }\n"]))),H=function(n){var e=n.callback,t=Object(u.useState)(""),a=Object(_.a)(t,2),r=a[0],i=a[1],o=Object(u.useRef)(null);return b.a.createElement(B,null,b.a.createElement(C,null,b.a.createElement(F.a,{className:"fa-search",name:"search",size:"2x"}),b.a.createElement("input",{type:"text",placeholder:"Search Movie",onChange:function(n){var t=n.target.value;clearTimeout(o.current),i(t),o.current=setTimeout(function(){e(t)},500)},value:r})))},G=y.b.div(m||(m=Object(j.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  h1 {\n    font-family: 'Abel', sans-serif;\n    font-size: 42px;\n\n    @media screen and (max-width: 768px) {\n      font-size: 22px;\n    }\n  }\n"]))),L=y.b.div(s||(s=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(100px, 1fr));\n  grid-gap: 40px;\n  position: relative;\n\n  .grid-element {\n    animation: animateGrid 0.5s;\n  }\n\n  @keyframes animateGrid {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 375px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),U=function(n){var e=n.header,t=n.children;return b.a.createElement(G,null,b.a.createElement("h1",null,e),b.a.createElement(L,null,t))},W=y.b.div(p||(p=Object(j.a)(["\n  img {\n    width: 100%;\n    height: auto;\n    /* max-height: 350px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n\n    :hover {\n      opacity: 0.8;\n    }\n\n    /* @media screen and (max-width: 1024px) {\n      height: 300px;\n    }\n\n    @media screen and (max-width: 768px) {\n      height: 350px;\n    }\n\n    @media screen and (max-width: 600px) {\n      max-height: 300px;\n    }\n\n    @media screen and (max-width: 375px) {\n      max-height: 450px;\n    } */\n\n    .clickable {\n      cursor: pointer;\n    }\n  }\n"]))),q=function(n){var e=n.image,t=n.movieId,a=n.clickable;return b.a.createElement(W,null,a?b.a.createElement(h.a,{to:"/".concat(t)},b.a.createElement("img",{className:"clickable",src:e,alt:"moviethumb"})):b.a.createElement("img",{src:e,alt:"moviethumb"}))},K=y.b.button(d||(d=Object(j.a)(["\n  background: #000;\n  width: 25%;\n  min-width: 200px;\n  height: 70px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 40px;\n  font-family: 'Abel', sans-serif;\n  font-size: 28px;\n  max-width: 1280px;\n  display: block;\n  margin: 20px auto;\n  padding: 0 20px;\n  outline: none;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]))),Q=function(n){var e=n.text,t=n.callback;return b.a.createElement(K,{type:"button",onClick:t},e)},V=y.b.div(f||(f=Object(j.a)(["\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #16d47b; /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),X=function(){return b.a.createElement(V,null)},Y=t(8),Z=t.n(Y),$=t(12),nn=t(10),en=t(11);function tn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function an(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?tn(Object(t),!0).forEach(function(e){Object(nn.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):tn(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var rn,on,cn,ln,mn=t(5),sn=t.n(mn),pn=function(){var n=Object(u.useState)(""),e=Object(_.a)(n,2),t=e[0],a=e[1],r=function(n){var e=Object(u.useState)({movies:[]}),t=Object(_.a)(e,2),a=t[0],r=t[1],i=Object(u.useState)(!1),o=Object(_.a)(i,2),c=o[0],l=o[1],m=Object(u.useState)(!1),s=Object(_.a)(m,2),p=s[0],d=s[1],f=function(){var n=Object(en.a)(Z.a.mark(function n(e){var t,a;return Z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d(!1),l(!0),t=e.search("page"),n.prev=3,n.next=6,fetch(e);case 6:return n.next=8,n.sent.json();case 8:a=n.sent,r(function(n){return an({},n,{movies:-1!==t?[].concat(Object($.a)(n.movies),Object($.a)(a.results)):Object($.a)(a.results),heroImage:n.heroImage||a.results[0],currentPage:a.page,totalPages:a.total_pages})}),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(3),d(!0),console.log(n.t0);case 16:l(!1);case 17:case"end":return n.stop()}},n,null,[[3,12]])}));return function(e){return n.apply(this,arguments)}}();return Object(u.useEffect)(function(){sessionStorage.homeState?(r(JSON.parse(sessionStorage.homeState)),l(!1)):f(D)},[]),Object(u.useEffect)(function(){n||sessionStorage.setItem("homeState",JSON.stringify(a))},[n,a]),[{state:a,loading:c,error:p},f]}(t),i=Object(_.a)(r,2),o=i[0],c=o.state,l=c.movies,m=c.currentPage,s=c.heroImage,p=c.totalPages,d=o.loading,f=o.error,x=i[1];return f?b.a.createElement("div",null,"Something went wrong"):l[0]?b.a.createElement(b.a.Fragment,null,!t&&b.a.createElement(J,{image:"".concat(R).concat("w1280").concat(s.backdrop_path),title:s.original_title,text:s.overview}),b.a.createElement(H,{callback:function(n){var e=n?A+n:D;a(n),x(e)}}),b.a.createElement(U,{header:t?"Search Result":"Popular Movies"},l.map(function(n){return b.a.createElement(q,{key:n.id,clickable:!0,image:n.poster_path?"".concat(R).concat("w500").concat(n.poster_path):sn.a,movieId:n.id,movieName:n.original_title})})),d&&b.a.createElement(X,null),m<p&&!d&&b.a.createElement(Q,{text:"Load More",callback:function(){var n="".concat(A).concat(t,"&page=").concat(m+1,"}"),e="".concat(D,"&page=").concat(m+1);x(t?n:e)}})):b.a.createElement(X,null)},dn=y.b.div(rn||(rn=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background: #353535;\n  color: #fff;\n\n  .navigation-content {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 20px;\n    width: 100%;\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      float: left;\n      color: #fff;\n      padding-right: 10px;\n      text-decoration: none;\n\n      @media screen and (max-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n"]))),fn=function(n){var e=n.movie;return b.a.createElement(dn,null,b.a.createElement("div",{className:"navigation-content"},b.a.createElement(h.a,{to:"/"},b.a.createElement("p",null,"Home")),b.a.createElement("p",null,"||"),b.a.createElement("p",null,e)))},un=y.b.div(on||(on=Object(j.a)(["\n  background: ",";\n  background-size: cover !important;\n  background-position: center !important;\n  width: 100%;\n  padding: 40px 20px;\n  box-sizing: border-box;\n  animation: animateMovieinfo 1s;\n\n  .movieinfo-content {\n    max-width: 1280px;\n    min-height: 450px;\n    margin: 0 auto;\n    background: rgb(0, 0, 0, 0.7);\n    border-radius: 20px;\n    position: relative;\n  }\n\n  .movieinfo-thumb {\n    width: 300px;\n    float: left;\n\n    @media screen and (max-width: 768px) {\n      width: 100% !important;\n    }\n  }\n\n  .movieinfo-text {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 40px;\n    color: #fff;\n    overflow: hidden;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      margin: 0;\n\n      @media screen and (max-width: 1000px) {\n        font-size: 32px !important;\n      }\n    }\n\n    h3 {\n      font-size: 16px;\n      line-height: 0;\n      margin-top: 30px;\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 18px;\n      line-height: 26px;\n    }\n  }\n\n  .rating-director {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .score {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 35px;\n    height: 35px;\n    background: #fff;\n    color: #000;\n    font-weight: 800;\n    border-radius: 25px;\n    margin: 0px 0 0 0;\n  }\n\n  .director {\n    margin: 0 0 0 40px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    min-height: 600px;\n    height: auto;\n  }\n\n  @keyframes animateMovieinfo {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),function(n){return n.backdrop?"url('".concat(R).concat("w1280").concat(n.backdrop,"')"):"#000"}),bn=function(n){var e=n.movie;return b.a.createElement(un,{backdrop:e.backdrop_path},b.a.createElement("div",{className:"movieinfo-content"},b.a.createElement("div",{className:"movieinfo-thumb"},b.a.createElement(q,{image:e.poster_path?"".concat(R).concat("w500").concat(e.poster_path):sn.a,clickable:!1})),b.a.createElement("div",{className:"movieinfo-text"},b.a.createElement("h1",null,e.title),b.a.createElement("h3",null,"PLOT"),b.a.createElement("p",null,e.overview),b.a.createElement("div",{className:"rating-director"},b.a.createElement("div",null,b.a.createElement("h3",null,"IMDB RATING"),b.a.createElement("div",{className:"score"},e.vote_average)),b.a.createElement("div",{className:"director"},b.a.createElement("h3",null,"DIRECTOR",e.directors.length>1?"S":""),e.directors.map(function(n){return b.a.createElement("p",{key:n.credit_id},n.name)})),b.a.createElement("div",{className:"director"},b.a.createElement("h3",null,"WRITER",e.writers.length>1?"S":""),e.writers.map(function(n){return b.a.createElement("p",{key:n.credit_id},n.name)}))))))},xn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},gn=y.b.div(cn||(cn=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  background: #1c1c1c;\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: 'Abel', sans-serif;\n  font-size: 20px;\n\n  .movieinfobar-content {\n    max-width: 1280px;\n    width: 100%;\n    margin: 0 auto;\n    color: #fff;\n  }\n\n  .movieinfobar-content-col {\n    float: left;\n    width: 33.33%;\n    box-sizing: border-box;\n    padding: 10px 20px 0 0;\n  }\n\n  .movieinfobar-info {\n    padding: 5px 0 0 10px;\n    float: left;\n  }\n\n  .fa-time,\n  .fa-revenue {\n    float: left;\n    margin-top: -4px;\n  }\n\n  .fa-budget {\n    float: left;\n    margin-top: -3px;\n  }\n\n  @media screen and (max-width: 768px) {\n    .fa-time,\n    .fa-revenue,\n    .fa-budget {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 425px) {\n    font-size: 14px;\n  }\n"]))),hn=function(n){var e=n.time,t=n.budget,a=n.revenue;return b.a.createElement(gn,null,b.a.createElement("div",{className:"movieinfobar-content"},b.a.createElement("div",{className:"movieinfobar-content-col"},b.a.createElement(F.a,{className:"fa-time",name:"clock-0",size:"2x"}),b.a.createElement("span",{className:"movieinfobar-info"},"Running time: ",function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")}(e))),b.a.createElement("div",{className:"movieinfobar-content-col"},b.a.createElement(F.a,{className:"fa-budget",name:"money",size:"2x"}),b.a.createElement("span",{className:"movieinfobar-info"},"Budget ",xn(t))),b.a.createElement("div",{className:"movieinfobar-content-col"},b.a.createElement(F.a,{className:"fa-revenue",name:"ticket",size:"2x"}),b.a.createElement("span",{className:"movieinfobar-info"},"Revenue: ",xn(a)))))},vn=y.b.div(ln||(ln=Object(j.a)(["\n  font-family: 'Abel', sans-serif;\n  color: #fff;\n  background: #1c1c1c;\n  border-radius: 20px;\n  padding: 5px;\n  text-align: center;\n\n  img {\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n\n  .actor-name {\n    display: block;\n    font-size: 18px;\n    margin: 10px 0 0 0;\n  }\n\n  .actor-character {\n    display: block;\n    font-size: 16px;\n    margin: 0 0 10px 0;\n  }\n"]))),En=function(n){var e=n.actor;return b.a.createElement(vn,null,b.a.createElement("img",{src:e.profile_path?"".concat(R).concat("w500").concat(e.profile_path):sn.a,alt:"actorthumb"}),b.a.createElement("span",{className:"actor-name"},e.name),b.a.createElement("span",{className:"actor-character"},e.character))};function wn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function On(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?wn(Object(t),!0).forEach(function(e){Object(nn.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wn(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var jn,yn=function(n){var e=function(n){var e=Object(u.useState)({}),t=Object(_.a)(e,2),a=t[0],r=t[1],i=Object(u.useState)(!0),o=Object(_.a)(i,2),c=o[0],l=o[1],m=Object(u.useState)(!1),s=Object(_.a)(m,2),p=s[0],d=s[1],f=Object(u.useCallback)(Object(en.a)(Z.a.mark(function e(){var t,a,i,o,c,m;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),l(!0),e.prev=2,t="".concat(P,"/movie/").concat(n,"?api_key=").concat(I),e.next=6,fetch(t);case 6:return e.next=8,e.sent.json();case 8:return a=e.sent,i="".concat(P,"movie/").concat(n,"/credits?api_key=").concat(I),e.next=12,fetch(i);case 12:return e.next=14,e.sent.json();case 14:o=e.sent,c=o.crew.filter(function(n){return"Director"===n.job}),m=o.crew.filter(function(n){return"Screenplay"===n.job}),console.log("writers",m),r(On({},a,{actors:o.cast,directors:c,writers:m})),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),d(!0);case 24:l(!1);case 25:case"end":return e.stop()}},e,null,[[2,21]])})),[n]);return Object(u.useEffect)(function(){localStorage[n]?(r(JSON.parse(localStorage[n])),l(!1)):f()},[f,n]),Object(u.useEffect)(function(){localStorage.setItem(n,JSON.stringify(a))},[n,a]),[a,c,p]}(n.movieId),t=Object(_.a)(e,3),a=t[0],r=t[1];return t[2]?b.a.createElement("div",null,"Something went wrong."):r?b.a.createElement(X,null):b.a.createElement(b.a.Fragment,null,b.a.createElement(fn,{movie:a.original_title}),b.a.createElement(bn,{movie:a}),b.a.createElement(hn,{time:a.runtime,budget:a.budget,revenue:a.revenue}),b.a.createElement(U,{header:"Actors"},a.actors.map(function(n){return b.a.createElement(En,{key:n.credit_id,actor:n})})))},kn=function(){return b.a.createElement("div",null,"Whoops... Nothing found here...")},zn=Object(y.a)(jn||(jn=Object(j.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),Sn=function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(N,null),b.a.createElement(h.b,null,b.a.createElement(pn,{path:"/"}),b.a.createElement(yn,{path:"/:movieId"}),b.a.createElement(kn,{default:!0})),b.a.createElement(zn,null))};g.a.render(b.a.createElement(Sn,null),document.getElementById("root"))},5:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"}},[[25,1,2]]]);
//# sourceMappingURL=main.04fead19.chunk.js.map