(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1028:function(e,t,r){e.exports=r(1029)},1029:function(e,t,r){e.exports=function(e,t){var r,p=t||{},l={enter:function(e){return l.stack.push(e),function(){l.stack.pop()}},stack:[],unsafe:[],join:[],handlers:{},options:{}};a(l,{unsafe:c,join:i,handlers:o}),a(l,p),l.options.tightDefinitions&&(l.join=[f].concat(l.join));l.handle=n("type",{invalid:u,unknown:s,handlers:l.handlers}),(r=l.handle(e,null,l,{before:"\n",after:"\n"}))&&10!==r.charCodeAt(r.length-1)&&13!==r.charCodeAt(r.length-1)&&(r+="\n");return r};var n=r(61),a=r(134),o=r(1030),i=r(1053),c=r(1054);function u(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function s(e){throw new Error("Cannot handle unknown node `"+e.type+"`")}function f(e,t){if("definition"===e.type&&e.type===t.type)return 0}},1030:function(e,t,r){t.blockquote=r(1031),t.break=r(570),t.code=r(1032),t.definition=r(1034),t.emphasis=r(1035),t.hardBreak=r(570),t.heading=r(1037),t.html=r(1038),t.image=r(1039),t.imageReference=r(1040),t.inlineCode=r(132),t.link=r(1041),t.linkReference=r(1043),t.list=r(1044),t.listItem=r(133),t.paragraph=r(1045),t.root=r(1046),t.strong=r(1047),t.text=r(1049),t.thematicBreak=r(1050)},1031:function(e,t,r){e.exports=function(e,t,r){var i=r.enter("blockquote"),c=a(n(e,r),o);return i(),c};var n=r(59),a=r(60);function o(e,t,r){return">"+(r?"":" ")+e}},1032:function(e,t,r){e.exports=function(e,t,r){var f,p,l,d,h=i(r),v=e.value||"",g="`"===h?"GraveAccent":"Tilde";o(e,r)?(l=r.enter("codeIndented"),f=c(v,s)):(p=n(h,Math.max(a(v,h)+1,3)),l=r.enter("codeFenced"),f=p,e.lang&&(d=r.enter("codeFencedLang"+g),f+=u(r,e.lang,{before:"`",after:" ",encode:["`"]}),d()),e.lang&&e.meta&&(d=r.enter("codeFencedMeta"+g),f+=" "+u(r,e.meta,{before:" ",after:"\n",encode:["`"]}),d()),f+="\n",v&&(f+=v+"\n"),f+=p);return l(),f};var n=r(30),a=r(135),o=r(571),i=r(1033),c=r(60),u=r(58);function s(e,t,r){return(r?"":"    ")+e}},1033:function(e,t){e.exports=function(e){var t=e.options.fence||"`";if("`"!==t&&"~"!==t)throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}},1034:function(e,t,r){e.exports=function(e,t,r){var i=a(r),c='"'===i?"Quote":"Apostrophe",u=r.enter("definition"),s=r.enter("label"),f="["+o(r,n(e),{before:"[",after:"]"})+"]: ";s(),!e.url||/[ \t\r\n]/.test(e.url)?(s=r.enter("destinationLiteral"),f+="<"+o(r,e.url,{before:"<",after:">"})+">"):(s=r.enter("destinationRaw"),f+=o(r,e.url,{before:" ",after:" "}));s(),e.title&&(s=r.enter("title"+c),f+=" "+i+o(r,e.title,{before:i,after:i})+i,s());return u(),f};var n=r(125),a=r(491),o=r(58)},1035:function(e,t,r){e.exports=o,o.peek=function(e,t,r){return r.options.emphasis||"*"};var n=r(1036),a=r(40);function o(e,t,r){var o=n(r),i=r.enter("emphasis"),c=a(e,r,{before:o,after:o});return i(),o+c+o}},1036:function(e,t){e.exports=function(e){var t=e.options.emphasis||"*";if("*"!==t&&"_"!==t)throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}},1037:function(e,t,r){e.exports=function(e,t,r){var i,c,u,s,f=Math.max(Math.min(6,e.depth||1),1);if(a(e,r))return i=r.enter("headingSetext"),c=r.enter("phrasing"),u=o(e,r,{before:"\n",after:"\n"}),c(),i(),u+"\n"+n(1===f?"=":"-",u.length-(Math.max(u.lastIndexOf("\r"),u.lastIndexOf("\n"))+1));s=n("#",f),i=r.enter("headingAtx"),c=r.enter("phrasing"),u=(u=o(e,r,{before:"# ",after:"\n"}))?s+" "+u:s,r.options.closeAtx&&(u+=" "+s);return c(),i(),u};var n=r(30),a=r(572),o=r(40)},1038:function(e,t){e.exports=function(e){return e.value||""}},1039:function(e,t,r){e.exports=o,o.peek=function(){return"!"};var n=r(491),a=r(58);function o(e,t,r){var o=n(r),i='"'===o?"Quote":"Apostrophe",c=r.enter("image"),u=r.enter("label"),s="!["+a(r,e.alt,{before:"[",after:"]"})+"](";return u(),!e.url&&e.title||/[ \t\r\n]/.test(e.url)?(u=r.enter("destinationLiteral"),s+="<"+a(r,e.url,{before:"<",after:">"})+">"):(u=r.enter("destinationRaw"),s+=a(r,e.url,{before:"(",after:e.title?" ":")"})),u(),e.title&&(u=r.enter("title"+i),s+=" "+o+a(r,e.title,{before:o,after:o})+o,u()),s+=")",c(),s}},1040:function(e,t,r){e.exports=o,o.peek=function(){return"!"};var n=r(125),a=r(58);function o(e,t,r){var o,i,c=e.referenceType,u=r.enter("imageReference"),s=r.enter("label"),f=a(r,e.alt,{before:"[",after:"]"}),p="!["+f+"]";return s(),i=r.stack,r.stack=[],s=r.enter("reference"),o=a(r,n(e),{before:"[",after:"]"}),s(),r.stack=i,u(),"full"!==c&&f&&f===o?"shortcut"!==c&&(p+="[]"):p+="["+o+"]",p}},1041:function(e,t,r){e.exports=c,c.peek=function(e,t,r){return a(e,r)?"<":"["};var n=r(491),a=r(1042),o=r(40),i=r(58);function c(e,t,r){var c,u,s,f,p=n(r),l='"'===p?"Quote":"Apostrophe";return a(e,r)?(f=r.stack,r.stack=[],c=r.enter("autolink"),s="<"+o(e,r,{before:"<",after:">"})+">",c(),r.stack=f,s):(c=r.enter("link"),u=r.enter("label"),s="["+o(e,r,{before:"[",after:"]"})+"](",u(),!e.url&&e.title||/[ \t\r\n]/.test(e.url)?(u=r.enter("destinationLiteral"),s+="<"+i(r,e.url,{before:"<",after:">"})+">"):(u=r.enter("destinationRaw"),s+=i(r,e.url,{before:"(",after:e.title?" ":")"})),u(),e.title&&(u=r.enter("title"+l),s+=" "+p+i(r,e.title,{before:p,after:p})+p,u()),s+=")",c(),s)}},1042:function(e,t,r){e.exports=function(e,t){var r=n(e);return!t.options.resourceLink&&e.url&&!e.title&&(r===e.url||"mailto:"+r===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url)};var n=r(126)},1043:function(e,t,r){e.exports=i,i.peek=function(){return"["};var n=r(125),a=r(40),o=r(58);function i(e,t,r){var i,c,u=e.referenceType,s=r.enter("linkReference"),f=r.enter("label"),p=a(e,r,{before:"[",after:"]"}),l="["+p+"]";return f(),c=r.stack,r.stack=[],f=r.enter("reference"),i=o(r,n(e),{before:"[",after:"]"}),f(),r.stack=c,s(),"full"!==u&&p&&p===i?"shortcut"!==u&&(l+="[]"):l+="["+i+"]",l}},1044:function(e,t,r){e.exports=function(e,t,r){var a=r.enter("list"),o=n(e,r);return a(),o};var n=r(59)},1045:function(e,t,r){e.exports=function(e,t,r){var a=r.enter("paragraph"),o=r.enter("phrasing"),i=n(e,r,{before:"\n",after:"\n"});return o(),a(),i};var n=r(40)},1046:function(e,t,r){e.exports=function(e,t,r){return n(e,r)};var n=r(59)},1047:function(e,t,r){e.exports=o,o.peek=function(e,t,r){return r.options.strong||"*"};var n=r(1048),a=r(40);function o(e,t,r){var o=n(r),i=r.enter("strong"),c=a(e,r,{before:o,after:o});return i(),o+o+c+o+o}},1048:function(e,t){e.exports=function(e){var t=e.options.strong||"*";if("*"!==t&&"_"!==t)throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}},1049:function(e,t,r){e.exports=function(e,t,r,a){return n(r,e.value,a)};var n=r(58)},1050:function(e,t,r){e.exports=function(e,t,r){var i=n(o(r)+(r.options.ruleSpaces?" ":""),a(r));return r.options.ruleSpaces?i.slice(0,-1):i};var n=r(30),a=r(1051),o=r(1052)},1051:function(e,t){e.exports=function(e){var t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}},1052:function(e,t){e.exports=function(e){var t=e.options.rule||"*";if("*"!==t&&"-"!==t&&"_"!==t)throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}},1053:function(e,t,r){e.exports=[function(e,t,r,o){if("list"===t.type&&t.type===e.type&&Boolean(e.ordered)===Boolean(t.ordered)||"code"===t.type&&n(t,o)&&("list"===e.type||e.type===t.type&&n(e,o)))return!1;if("boolean"==typeof r.spread){if("paragraph"===e.type&&(e.type===t.type||"definition"===t.type||"heading"===t.type&&a(t,o)))return;return r.spread?1:0}}];var n=r(571),a=r(572)},1054:function(e,t){e.exports=[{character:"\t",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:"\n",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing"},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing"},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*"},{character:"*",inConstruct:"phrasing"},{atBreak:!0,character:"+"},{atBreak:!0,character:"-"},{atBreak:!0,before:"\\d+",character:".",after:"(?:[ \t\r\n]|$)"},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing"},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:["phrasing","label","reference"]},{character:"\\",after:"[!-/:-@[-`{-~]"},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{before:"[^A-Za-z]",character:"_",inConstruct:"phrasing"},{character:"_",after:"[^A-Za-z]",inConstruct:"phrasing"},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent","phrasing"]},{atBreak:!0,character:"~"}]},1064:function(e,t,r){"use strict";e.exports=function(e){var t=this;this.Compiler=function(r){return n(r,Object.assign({},t.data("settings"),e,{extensions:t.data("toMarkdownExtensions")||[]}))}};var n=r(1028)},491:function(e,t){e.exports=function(e){var t=e.options.quote||'"';if('"'!==t&&"'"!==t)throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}},570:function(e,t){e.exports=function(){return"\\\n"}},571:function(e,t){e.exports=function(e,t){return!t.options.fences&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*[\r\n]|[\r\n][\t ]*$/.test(e.value)}},572:function(e,t,r){e.exports=function(e,t){return t.options.setext&&(!e.depth||e.depth<3)&&n(e)};var n=r(126)}}]);