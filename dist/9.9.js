(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1009:function(e,t,o){!function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function o(e){t(e);var o=e.state.placeholder=document.createElement("pre");o.style.cssText="height: 0; overflow: visible",o.style.direction=e.getOption("direction"),o.className="CodeMirror-placeholder CodeMirror-line-like";var n=e.getOption("placeholder");"string"==typeof n&&(n=document.createTextNode(n)),o.appendChild(n),e.display.lineSpace.insertBefore(o,e.display.lineSpace.firstChild)}function n(e){r(e)&&o(e)}function i(e){var n=e.getWrapperElement(),i=r(e);n.className=n.className.replace(" CodeMirror-empty","")+(i?" CodeMirror-empty":""),i?o(e):t(e)}function r(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(r,a,l){var c=l&&l!=e.Init;if(a&&!c)r.on("blur",n),r.on("change",i),r.on("swapDoc",i),e.on(r.getInputField(),"compositionupdate",r.state.placeholderCompose=function(){!function(e){setTimeout((function(){var n=!1;if(1==e.lineCount()){var i=e.getInputField();n="TEXTAREA"==i.nodeName?!e.getLine(0).length:!/[^\u200b]/.test(i.querySelector(".CodeMirror-line").textContent)}n?o(e):t(e)}),20)}(r)}),i(r);else if(!a&&c){r.off("blur",n),r.off("change",i),r.off("swapDoc",i),e.off(r.getInputField(),"compositionupdate",r.state.placeholderCompose),t(r);var p=r.getWrapperElement();p.className=p.className.replace(" CodeMirror-empty","")}a&&!r.hasFocus()&&n(r)}))}(o(372))}}]);