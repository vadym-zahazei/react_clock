(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),d=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({today:new Date}),console.info(e.state.today.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName,n=e.clockName;n!==t&&console.debug("Renamed from ".concat(n," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.today,t=this.props.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(s.Component);function u(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.clockNameTimerId=0,e.handleRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick),this.clockNameTimerId=window.setInterval((function(){e.setState({clockName:u()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick),window.clearInterval(this.clockNameTimerId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__header",children:"React clock"}),t&&Object(d.jsx)(m,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fbe0e9bf.chunk.js.map