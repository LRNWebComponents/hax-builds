/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(window,Object,HTMLElement){if(HTMLElement in window)return;var timer=0,clearTimeout=window.clearTimeout,setTimeout=window.setTimeout,ElementPrototype=Element.prototype,gOPD=Object.getOwnPropertyDescriptor,defineProperty=Object.defineProperty,notifyChanges=function(){document.dispatchEvent(new CustomEvent("readystatechange"))},scheduleNotification=function(target,name){clearTimeout(timer);timer=setTimeout(notifyChanges,10)},wrapSetter=function(name){var descriptor=gOPD(ElementPrototype,name),substitute={configurable:descriptor.configurable,enumerable:descriptor.enumerable,get:function(){return descriptor.get.call(this)},set:function asd(value){delete ElementPrototype[name];this[name]=value;defineProperty(ElementPrototype,name,substitute);scheduleNotification(this)}};defineProperty(ElementPrototype,name,substitute)},wrapMethod=function(name){var descriptor=gOPD(ElementPrototype,name),value=descriptor.value;descriptor.value=function(){var result=value.apply(this,arguments);scheduleNotification(this);return result};defineProperty(ElementPrototype,name,descriptor)};wrapSetter("innerHTML");wrapSetter("innerText");wrapSetter("outerHTML");wrapSetter("outerText");wrapSetter("textContent");wrapMethod("appendChild");wrapMethod("applyElement");wrapMethod("insertAdjacentElement");wrapMethod("insertAdjacentHTML");wrapMethod("insertAdjacentText");wrapMethod("insertBefore");wrapMethod("insertData");wrapMethod("replaceAdjacentText");wrapMethod("replaceChild");wrapMethod("removeChild");window[HTMLElement]=Element})(window,Object,"HTMLElement");
