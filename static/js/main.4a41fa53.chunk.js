(this["webpackJsonpreact-tailwind"]=this["webpackJsonpreact-tailwind"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),o=(a(17),a(18),a(7)),i=a(8),s=a(11),m=function(e){var t=e.image.tags.split(",");return l.a.createElement(i.a,Object.assign({},e,{size:"lg",centered:!0}),l.a.createElement(i.a.Body,null,l.a.createElement("img",{src:e.image.webformatURL,alt:"",className:"w-full"})),l.a.createElement(i.a.Footer,null,l.a.createElement("div",{className:"px-4 py-2"},t.map((function(e,t){return l.a.createElement("span",{key:t,className:"inline-block bg-gray-200 round-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1"},"#",e)}))),l.a.createElement(s.a,{onClick:e.onHide},"Close")))},u=function(e){var t=e.image,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],i=r[1],s=t.tags.split(",");return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},l.a.createElement("div",{className:"relative hover:opacity-1"},l.a.createElement("img",{title:"Click to zoom",onClick:function(){return i(!0)},src:t.webformatURL,alt:"Click to zoom",className:"w-full hover:bg-black hover:opacity-75 focus:outline-none",height:"100px"})),l.a.createElement("div",{className:"px-6 py-4"},l.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Views: "),t.views),l.a.createElement("li",null,l.a.createElement("strong",null,"Downloads: "),t.downloads),l.a.createElement("li",null,l.a.createElement("strong",null,"Likes: "),t.likes))),l.a.createElement("div",{className:"px-4 py-2"},s.map((function(e,t){return l.a.createElement("span",{key:t,className:"inline-block bg-gray-200 round-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1"},"#",e)}))),l.a.createElement(m,{image:t,show:c,onHide:function(){return i(!1)}}))},d=function(e){var t=e.searchText,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1];return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},action:"",className:"w-full max-w-sm"},l.a.createElement("div",{className:"flex items-center border-b border-b-2"},l.a.createElement("input",{onChange:function(e){return i(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term...","aria-label":"Full name"}),l.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search"))))};var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),s=i[0],m=i[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),f=b[0],g=b[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("16124524-f84385c0859f9bdf216be7e3f","&q=").concat(f,"&image_type=photo&pretty=true&orientation=horizontal&per_page=50")).then((function(e){return e.json()})).then((function(e){r(e.hits),m(!1)})).catch((function(e){return console.log(e)}))}),[f]),l.a.createElement("div",{className:"container mx-auto px-4 my-10"},l.a.createElement(d,{searchText:function(e){return g(e)}}),s?l.a.createElement("h1",{className:"text-xl"},"Loading...."):l.a.createElement("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"},a.map((function(e){return l.a.createElement(u,{key:e.id,image:e})}))))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4a41fa53.chunk.js.map