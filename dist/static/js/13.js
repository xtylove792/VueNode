(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{22:function(t,e,n){},43:function(t,e,n){"use strict";var a=n(22);n.n(a).a},85:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{phone:"",pwd:""}},methods:{login:function(){var n=this;return/^((13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8})$/.test(this.phone)?/\w{6,}/.test(this.pwd)?void this.$http.post("/login/loginForm",{phone:this.phone,pwd:this.pwd},{emulateJSON:!0}).then(function(t){var e=JSON.parse(t.bodyText);switch(e.backInfo){case"0":alert("账号或密码有误，请重新输入！");break;case"1":window.sessionStorage.userMsg=JSON.stringify(e),n.$router.push({name:"Personal"});break;default:alert("登录失败，请重新操作！")}}):(alert("密码需要至少6位数，请重新输入！"),!1):(alert("手机号码格式不正确，请重新输入！"),!1)}},mounted:function(){var t=window.sessionStorage;t?t.userMsg&&JSON.parse(t.userMsg).id&&this.$router.push({name:"GlobalCouponIndex"}):alert("为保证您可以正常使用我们的产品，请关闭浏览器的无痕浏览模式！")}},s=(n(43),n(4)),r=Object(s.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"account-container"},[n("form",{staticClass:"account-container-form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("p",[n("span",{staticClass:"phone-ico"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.phone,expression:"phone",modifiers:{lazy:!0,trim:!0}}],staticClass:"phone",attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11"},domProps:{value:e.phone},on:{change:function(t){e.phone=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("p",[n("span",{staticClass:"pwd-ico"}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.pwd,expression:"pwd",modifiers:{lazy:!0,trim:!0}}],staticClass:"pwd",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.pwd},on:{change:function(t){e.pwd=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),e._m(0),e._v(" "),n("router-link",{staticClass:"phone-prompt",attrs:{tag:"a",to:{name:"ForgetPwdFirstStep"}}},[e._v("忘记密码")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("input",{staticClass:"account-btn",attrs:{type:"submit",value:"登\t录"}})])}],!1,null,"3a8c2d6d",null);e.default=r.exports}}]);