(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{25:function(e,c,n){},26:function(e,c,n){},34:function(e,c){},35:function(e,c,n){"use strict";n.r(c);var t=n(1),a=n(8),i=n.n(a),s=n(13),r=n.n(s),l=(n(25),n(14)),d=n(15),h=n(18),u=n(17),j=(n(26),n(37));function b(){return Object(t.jsx)("div",{children:Object(t.jsx)(x,{})})}function o(e){var c;if(!isNaN(e)||"."===e){switch(e){case"1":c="Numbers one";break;case"2":c="Numbers two";break;case"3":c="Numbers three";break;case"4":c="Numbers four";break;case"5":c="Numbers five";break;case"6":c="Numbers six";break;case"7":c="Numbers seven";break;case"8":c="Numbers eight";break;case"9":c="Numbers nine";break;case"0":c="Numbers zero";break;case".":c="Numbers dot"}return c}if("+"===e||"-"===e||"/"===e||"*"===e||"="===e){switch(e){case"+":c="MainOps plus";break;case"-":c="MainOps minus";break;case"/":c="MainOps divide";break;case"*":c="MainOps times";break;case"=":c="MainOps equals"}return c}if("Clear"===e||"+/-"===e||"%"===e){switch(e){case"Clear":c="SpecialOps clear";break;case"+/-":c="SpecialOps negate";break;case"%":c="SpecialOps percent"}return c}}var p=function(e){return Object(t.jsx)("div",{className:"NumBtns ".concat(o(e.children)),id:e.id,onClick:function(){return e.handleClick(e.children)},children:e.children})},O=function(e){return Object(t.jsx)("div",{className:"screen",children:e.screen})},k=function(e){return Object(t.jsx)("div",{className:"NumBtns ".concat(o(e.children)),onClick:e.handleClear,children:e.children})},x=function(e){Object(h.a)(n,e);var c=Object(u.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=c.call(this,e)).addToInput=function(e){t.setState({input:t.state.input+e})},t.handleEqual=function(){t.setState({input:Object(j.a)(t.state.input)})},t.state={input:""},t}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("div",{className:"calcScreen",children:Object(t.jsx)(O,{screen:this.state.input})}),Object(t.jsxs)("div",{className:"Numgrid",children:[Object(t.jsx)(k,{handleClear:function(){return e.setState({input:""})},children:"Clear"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"/"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"7"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"8"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"9"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"*"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"4"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"5"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"6"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"-"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"1"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"2"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"3"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"+"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"0"}),Object(t.jsx)(p,{handleClick:this.addToInput,children:"."}),Object(t.jsx)(p,{handleClick:function(){return e.handleEqual()},children:"="})]})]})}}]),n}(a.Component);var C=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("div",{children:Object(t.jsx)("h1",{children:" This is a calculator app"})}),Object(t.jsx)("div",{className:"centerAll",children:Object(t.jsx)(b,{})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(c){var n=c.getCLS,t=c.getFID,a=c.getFCP,i=c.getLCP,s=c.getTTFB;n(e),t(e),a(e),i(e),s(e)}))};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(C,{})}),document.getElementById("root")),m()}},[[35,1,2]]]);
//# sourceMappingURL=main.bd2bac0f.chunk.js.map