(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{589:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("主题换肤，随着手机壳得颜色而变化，高大上的主题配置！！！"),a("br"),t._v("\n下一个"),a("br"),t._v("\n恕在下能力有限，不能做出这种主题配置，但与用户交互实现的主题配置，还是很简单就可以实现的，而且方案也有很多个，像ElementUI，antd都有他们自己的主题换肤方案，这里我不用他们那种，用我们自己喜欢的css来写，而且我感觉这个更简单吗，用到的东西有css var()、伪类:root。")]),t._v(" "),a("h3",{attrs:{id:"_1-css-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-var"}},[t._v("#")]),t._v(" 1.css var()")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("css的var()函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。")])]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--background-color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("var接收2个参数，第一个是变量，第二个是默认值，可不传")])]),t._v(" "),a("h3",{attrs:{id:"_2-伪类-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-伪类-root"}},[t._v("#")]),t._v(" 2.伪类:root")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v(":root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 html 元素，除了优先级更高之外，与 html 选择器相同。")])]),t._v(" "),a("p",[t._v("示例")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-实现动态交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现动态交互"}},[t._v("#")]),t._v(" 3.实现动态交互")]),t._v(" "),a("p",[t._v("至于交互事件的话，我就用点击事件来实现吧，因为在css里拿不到js的变量，所以我们只能把html的样式写成行间样式，这样他就可以拿到js的变量了。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--background-color:#333;"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击事件")]),t._v("\n  btn1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--background-color:green"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("大家可以去这里查看效果"),a("a",{attrs:{href:"http://106.53.242.20:8081",target:"_Blank"}},[t._v("http://106.53.242.20:8081")]),t._v("，注意F12来审查html元素的变化。"),a("br"),t._v("\n相信大多数人都是使用框架开发的，框架的话其实原理也是一样，我这里是写死了的静态，改成动态的就好了，而且html定义的样式，对于单页面应用来说，这可是全局的，记得之前的全国默哀时，所有页面的样式都变灰，也是在html新增一个filter的css，即可全局了，这个主题换肤也是利用相同的原理实现的。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);