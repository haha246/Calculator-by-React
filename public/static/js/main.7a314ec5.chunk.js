(this.webpackJsonpown=this.webpackJsonpown||[]).push([[0],{15:function(e,c,s){},16:function(e,c,s){},17:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(2),i=s.n(a),l=s(4),n=s.n(l),r=(s(15),s(16),s(7)),o=s(5),h=s(6),j=s(1),d=s(9),b=s(8);function m(){console.warn("This function is not implemented yet.")}var u=function(e){var c=e.className,s=e.children,a=e.onClick,i=c||"";return Object(t.jsx)("button",{className:"calc-btn ".concat(i),onClick:a,children:s})},p=function(e){var c=e.className,s=e.children,a=e.onClick,i=c||"";return Object(t.jsx)("button",{className:"calc-btn bigger-btn ".concat(i),onClick:a,children:s})};u.defaultProps={onClick:m},p.defaultProps={onClick:m};var f=u,k=function(e){Object(d.a)(s,e);var c=Object(b.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=c.call(this,e)).state={display:[]},t.show=t.show.bind(Object(j.a)(t)),t.resetState=t.resetState.bind(Object(j.a)(t)),t.count=t.count.bind(Object(j.a)(t)),t.showNotImplemented=t.showNotImplemented.bind(Object(j.a)(t)),t}return Object(h.a)(s,[{key:"resetState",value:function(){this.setState({display:[]})}},{key:"showNotImplemented",value:function(){console.warn("This function is not implemented yet."),alert("\u9019\u6b21\u4f5c\u696d\u4e0d\u6703\u7528\u5230\u9019\u500b\u529f\u80fd\u554a\uff0c\u5927\u54e5/\u5927\u59ca\uff0c\u4e0d\u8981\u4e82\u6309\u597d\u55ce\uff1f\u611b\u4f60\u3002")}},{key:"show",value:function(e){var c=e.target.innerHTML,s=[].concat(Object(r.a)(this.state.display),[c]);this.setState({display:s})}},{key:"count",value:function(){var e=this.state.display,c=e.length-1,s=0,t=0,a=[],i=[],l=0;if("x"===e[0]||"\xf7"===e[0])this.setState({display:["error"]});else if("+"===e[c]||"-"===e[c]||"x"===e[c]||"\xf7"===e[c])this.setState({display:["error"]});else if("error"===e[0])this.setState({display:["error"]});else{for(var n=0;n<e.length&&1!==e.length;n++)if("x"===e[n]||"\xf7"===e[n]){for(var r=n;;){if("x"===e[r+1]||"\xf7"===e[r+1]){e=["error"];break}if("+"===e[r+1])e.splice(r+1,1);else{if("-"!==e[r+1]){if("+"===e[r-1]||"-"===e[r-1]){e=["error"];break}break}e.splice(r+1,1),a.push("-")}}if("error"===e[0])break;for(var o=t;o<n;o++)a.push(e[o]);for(var h=parseFloat(a.join(""),10),j=n+1;j<e.length&&("+"!==e[j]&&"-"!==e[j]&&"x"!==e[j]&&"\xf7"!==e[j]);j++)i.push(e[j]),l=j;var d=parseFloat(i.join(""),10);s="x"===e[n]?h*d:Math.round(h/d*1e5)/1e5,e.splice(t,l-t+1,String(s)),n=t,a=[],i=[]}else"+"!==e[n]&&"-"!==e[n]||(t=n+1);for(var b=0;b<e.length&&"error"!==e[0]&&1!==e.length;b++)if("+"===e[b]||"-"===e[b]){for(;;)if("+"===e[b]&&"+"===e[b+1])e.splice(b+1,1);else if("+"===e[b]&&"-"===e[b+1])e[b]="-",e.splice(b+1,1);else if("-"===e[b]&&"+"===e[b+1])e.splice(b+1,1);else if("-"===e[b]&&"-"===e[b+1])e[b]="+",e.splice(b+1,1);else{if(0!==b||"+"===e[1]&&"-"===e[1])break;if("+"===e[0]){e.splice(0,1);break}if("-"===e[0]){e[1]="-"+e[1],e.splice(0,1);break}}if("error"===e[0])break;if(0===b)continue;for(var m=0;m<b;m++)a.push(e[m]);for(var u=parseFloat(a.join("")),p=b+1;p<e.length&&("+"!==e[p]&&"-"!==e[p]);p++)i.push(e[p]),l=p;var f=parseFloat(i.join(""),10);s="+"===e[b]?u+f:u-f,e.splice(0,l+1,String(s)),b=0,a=[],i=[]}this.setState({display:e})}}},{key:"render",value:function(){return Object(t.jsx)("div",{className:"calc-app",children:Object(t.jsxs)("div",{className:"calc-container",children:[Object(t.jsx)("div",{className:"calc-output",children:Object(t.jsx)("div",{className:"calc-display",id:"display",children:this.state.display.join("")})}),Object(t.jsxs)("div",{className:"calc-row",children:[Object(t.jsx)(f,{onClick:this.resetState,children:"AC"}),Object(t.jsx)(f,{onClick:this.showNotImplemented,children:"+/-"}),Object(t.jsx)(f,{onClick:this.showNotImplemented,children:"%"}),Object(t.jsx)(f,{className:"calc-operator",onClick:this.show,children:"\xf7"})]}),Object(t.jsxs)("div",{className:"calc-row",children:[Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"7"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"8"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"9"}),Object(t.jsx)(f,{className:"calc-operator",onClick:this.show,children:"x"})]}),Object(t.jsxs)("div",{className:"calc-row",children:[Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"4"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"5"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"6"}),Object(t.jsx)(f,{className:"calc-operator",onClick:this.show,children:"-"})]}),Object(t.jsxs)("div",{className:"calc-row",children:[Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"1"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"2"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.show,children:"3"}),Object(t.jsx)(f,{className:"calc-operator",onClick:this.show,children:"+"})]}),Object(t.jsxs)("div",{className:"calc-row",children:[Object(t.jsx)(p,{className:"calc-number",onClick:this.show,children:"0"}),Object(t.jsx)(f,{className:"calc-number",onClick:this.showNotImplemented,children:"."}),Object(t.jsx)(f,{className:"calc-operator",onClick:this.count,children:"="})]})]})})}}]),s}(i.a.Component);n.a.render(Object(t.jsx)(k,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7a314ec5.chunk.js.map