(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(104),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({},e.elementConfig,{onChange:e.changed,value:e.value,className:a.join(" ")}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({},e.elementConfig,{onChange:e.changed,value:e.value,className:a.join(" ")}));break;case"select":t=r.a.createElement("select",{value:e.value,onChange:e.changed,className:a.join(" ")},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({},e.elementConfig,{onChange:e.changed,value:e.value,className:a.join(" ")}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)}},104:function(e,t,a){e.exports={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},105:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},106:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1J81r"}},110:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(6),i=a(5),o=a(7),c=a(0),u=a.n(c),s=a(53),d=a(35),p=a(105),m=a.n(p),h=function(e){return u.a.createElement("div",{className:m.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(s.a,{ingredients:e.ingredients})),u.a.createElement(d.a,{btnType:"Danger",clicked:e.checkoutCancelled},"Cancel"),u.a.createElement(d.a,{btnType:"Success",clicked:e.checkoutContinued},"Success"))},v=a(21),g=a(26),f=a(106),b=a.n(f),C=a(20),y=a(14),E=a(36),k=a(103),_=a(44),j=a(15),O=a(2),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{require:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{require:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP code"},value:"",validation:{require:!0,minLength:5,maxLength:6,isNumeric:!1},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{require:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{require:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(O.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(O.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(O.b)(a.state.orderForm,Object(g.a)({},t,n)),l=!1;for(var i in r)l=r[i].valid&&l;a.setState({orderForm:r,formIsValid:!l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,label:t.config.elementConfig.placeholder,shouldValidate:t.config.validation,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),u.a.createElement(d.a,{btnType:"Success",clicked:this.orderHandler,disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(E.a,null)),u.a.createElement("div",{className:b.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),x=Object(y.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(_.a)(I,C.a)),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(v.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(v.a,{to:"/"}):null;console.log(this.props.purchased),e=u.a.createElement("div",null,t,u.a.createElement(h,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(v.b,{path:this.props.match.path+"/contact-data",component:x}))}return e}}]),t}(c.Component);t.default=Object(y.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(T)}}]);
//# sourceMappingURL=3.dd9de158.chunk.js.map