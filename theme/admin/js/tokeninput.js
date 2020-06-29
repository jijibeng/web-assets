!function(F){var o={method:"GET",contentType:"json",queryParam:"q",searchDelay:300,minChars:1,propertyToSearch:"name",jsonContainer:null,hintText:"Type in a search term",noResultsText:"No results",searchingText:"Searching...",deleteText:"&times;",animateDropdown:!0,tokenLimit:null,tokenDelimiter:",",preventDuplicates:!1,tokenValue:"id",prePopulate:null,processPrePopulate:!1,idPrefix:"token-input-",resultsFormatter:function(e){return"<li>"+e[this.propertyToSearch]+"</li>"},tokenFormatter:function(e){return"<li><p>"+e[this.propertyToSearch]+"</p></li>"},onResult:null,onAdd:null,onDelete:null,onReady:null},P={tokenList:"token-input-list",token:"token-input-token",tokenDelete:"token-input-delete-token",selectedToken:"token-input-selected-token",highlightedToken:"token-input-highlighted-token",dropdown:"token-input-dropdown",dropdownItem:"token-input-dropdown-item",dropdownItem2:"token-input-dropdown-item2",selectedDropdownItem:"token-input-selected-dropdown-item",inputToken:"token-input-input-token"},O=0,A=1,z=2,_=8,q=13,B=27,E=37,V=38,W=39,G=40,H=108,N=188,t={init:function(e,t){var n=F.extend({},o,t||{});return this.each(function(){F(this).data("tokenInputObject",new F.TokenList(this,e,n))})},clear:function(){return this.data("tokenInputObject").clear(),this},add:function(e){return this.data("tokenInputObject").add(e),this},remove:function(e){return this.data("tokenInputObject").remove(e),this},get:function(){return this.data("tokenInputObject").getTokens()}};F.fn.tokenInput=function(e){return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)},F.TokenList=function(e,t,c){var n;"string"===F.type(t)||"function"===F.type(t)?(c.url=t,n=I(),void 0===c.crossDomain&&(-1===n.indexOf("://")?c.crossDomain=!1:c.crossDomain=location.href.split(/\/+/g)[1]!==n.split(/\/+/g)[1])):"object"==typeof t&&(c.local_data=t),c.classes?c.classes=F.extend({},P,c.classes):c.theme?(c.classes={},F.each(P,function(e,t){c.classes[e]=t+"-"+c.theme})):c.classes=P;var o,i=[],a=0,u=new F.TokenList.Cache,d=F('<input type="text"  autocomplete="off">').css({outline:"none"}).attr("id",c.idPrefix+e.id).focus(function(){null!==c.tokenLimit&&c.tokenLimit===a||c.hintText&&(k.html("<p>"+c.hintText+"</p>"),L())}).blur(function(){D(),F(this).val("")}).keydown(function(e){var t,n;switch(e.keyCode){case E:case W:case V:case G:if(F(this).val()){var o=null;return(o=e.keyCode===G||e.keyCode===W?F(r).next():F(r).prev()).length&&R(o),!1}t=f.prev(),n=f.next(),t.length&&t.get(0)===s||n.length&&n.get(0)===s?e.keyCode===E||e.keyCode===V?C(F(s),O):C(F(s),A):e.keyCode!==E&&e.keyCode!==V||!t.length?e.keyCode!==W&&e.keyCode!==G||!n.length||y(F(n.get(0))):y(F(t.get(0)));break;case _:if(t=f.prev(),!F(this).val().length)return s?(w(F(s)),p.change()):t.length&&y(F(t.get(0))),!1;1===F(this).val().length?D():setTimeout(function(){S()},5);break;case q:case H:case N:return r?(T(F(r).data("tokeninput")),p.change()):T(null),!1;case B:return D(),!0;default:String.fromCharCode(e.which)&&setTimeout(function(){S()},5)}}),p=F(e).hide().val("").focus(function(){d.focus()}).blur(function(){d.blur()}),s=null,l=0,r=null,h=F("<ul />").addClass(c.classes.tokenList).click(function(e){var t=F(e.target).closest("li");t&&t.get(0)&&F.data(t.get(0),"tokeninput")?function(e){var t=s;s&&C(F(s),z);t===e.get(0)?C(e,z):y(e)}(t):(s&&C(F(s),z),d.focus())}).mouseover(function(e){var t=F(e.target).closest("li");t&&s!==this&&t.addClass(c.classes.highlightedToken)}).mouseout(function(e){var t=F(e.target).closest("li");t&&s!==this&&t.removeClass(c.classes.highlightedToken)}).insertBefore(p),f=F("<li />").addClass(c.classes.inputToken).appendTo(h).append(d),k=F("<div>").addClass(c.classes.dropdown).appendTo("body").hide();F("<tester/>").insertAfter(d).css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:d.css("fontSize"),fontFamily:d.css("fontFamily"),fontWeight:d.css("fontWeight"),letterSpacing:d.css("letterSpacing"),whiteSpace:"nowrap"});p.val("");var g=c.prePopulate||p.data("pre");function m(){return null!==c.tokenLimit&&a>=c.tokenLimit&&(d.hide(),void D())}function v(e){var t=c.tokenFormatter(e),t=F(t).addClass(c.classes.token).insertBefore(f);F("<span>"+c.deleteText+"</span>").addClass(c.classes.tokenDelete).appendTo(t).click(function(){return w(F(this).parent()),p.change(),!1});var n={id:e.id};return n[c.propertyToSearch]=e[c.propertyToSearch],F.data(t.get(0),"tokeninput",e),i=i.slice(0,l).concat([n]).concat(i.slice(l)),l++,x(i,p),a+=1,null!==c.tokenLimit&&a>=c.tokenLimit&&(d.hide(),D()),t}function T(n){var e=c.onAdd;if(!n&&0<d.val().length&&((n={id:d.val()})[c.propertyToSearch]=d.val()),n){if(0<a&&c.preventDuplicates){var o=null;if(h.children().each(function(){var e=F(this),t=F.data(e.get(0),"tokeninput");if(t&&t.id===n.id)return o=e,!1}),o)return y(o),f.insertAfter(o),void d.focus()}(null==c.tokenLimit||a<c.tokenLimit)&&(v(n),m()),d.val(""),D(),F.isFunction(e)&&e.call(p,n)}}function y(e){e.addClass(c.classes.selectedToken),s=e.get(0),d.val(""),D()}function C(e,t){e.removeClass(c.classes.selectedToken),s=null,t===O?(f.insertBefore(e),l--):t===A?(f.insertAfter(e),l++):(f.appendTo(h),l=a),d.focus()}function w(e){var t=F.data(e.get(0),"tokeninput"),n=c.onDelete,o=e.prevAll().length;l<o&&o--,e.remove(),s=null,d.focus(),i=i.slice(0,o).concat(i.slice(o+1)),o<l&&l--,x(i,p),--a,null!==c.tokenLimit&&d.show().val("").focus(),F.isFunction(n)&&n.call(p,t)}function x(e,t){var n=F.map(e,function(e){return e[c.tokenValue]});t.val(n.join(c.tokenDelimiter))}function D(){k.hide().empty(),r=null}function L(){k.css({position:"absolute",top:F(h).offset().top+F(h).outerHeight(),left:F(h).offset().left,zindex:999}).show()}function b(e,t,n){return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+t+")(?![^<>]*>)(?![^&;]+;)","g"),(o=n,t.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+o+")(?![^<>]*>)(?![^&;]+;)","gi"),"<b>$1</b>")));var o}function j(o,e){var i;e&&e.length?(k.empty(),i=F("<ul>").appendTo(k).mouseover(function(e){R(F(e.target).closest("li"))}).mousedown(function(e){return T(F(e.target).closest("li").data("tokeninput")),p.change(),!1}).hide(),F.each(e,function(e,t){var n=b(n=c.resultsFormatter(t),t[c.propertyToSearch],o);n=F(n).appendTo(i),e%2?n.addClass(c.classes.dropdownItem):n.addClass(c.classes.dropdownItem2),0===e&&R(n),F.data(n.get(0),"tokeninput",t)}),L(),c.animateDropdown?i.slideDown("fast"):i.show()):c.noResultsText&&(k.html("<p>"+c.noResultsText+"</p>"),L())}function R(e){e&&(r&&(F(r).removeClass(c.classes.selectedDropdownItem),r=null),e.addClass(c.classes.selectedDropdownItem),r=e.get(0))}function S(){var e=d.val(),t=e.toLowerCase();t&&t.length&&(s&&C(F(s),A),t.length>=c.minChars?(c.searchingText&&(k.html("<p>"+c.searchingText+"</p>"),L()),clearTimeout(o),o=setTimeout(function(){!function(t,n){var o=n+I(),e=u.get(o);{var i,a,s,l,r;e?j(t,e):c.url?(i=I(),a={data:{}},-1<i.indexOf("?")?(s=i.split("?"),a.url=s[0],l=s[1].split("&"),F.each(l,function(e,t){var n=t.split("=");a.data[n[0]]=n[1]})):a.url=i,a.data[c.queryParam]=t,a.type=c.method,a.dataType=c.contentType,c.crossDomain&&(a.dataType="jsonp"),a.success=function(e){F.isFunction(c.onResult)&&(e=c.onResult.call(p,e,t,n)),u.add(o,c.jsonContainer?e[c.jsonContainer]:e),d.val().toLowerCase()===t&&j(t,c.jsonContainer?e[c.jsonContainer]:e)},F.ajax(a)):c.local_data&&(r=F.grep(c.local_data,function(e){return-1<e[c.propertyToSearch].toLowerCase().indexOf(t.toLowerCase())}),F.isFunction(c.onResult)&&(r=c.onResult.call(p,r,t,n)),u.add(o,r),j(t,r))}}(t,e)},c.searchDelay)):D())}function I(){var e=c.url;return"function"==typeof c.url&&(e=c.url.call()),e}c.processPrePopulate&&F.isFunction(c.onResult)&&(g=c.onResult.call(p,g)),g&&g.length&&F.each(g,function(e,t){v(t),m()}),F.isFunction(c.onReady)&&c.onReady.call(),this.clear=function(){h.children("li").each(function(){0===F(this).children("input").length&&w(F(this))})},this.add=function(e){T(e)},this.remove=function(o){h.children("li").each(function(){if(0===F(this).children("input").length){var e=F(this).data("tokeninput"),t=!0;for(var n in o)if(o[n]!==e[n]){t=!1;break}t&&w(F(this))}})},this.getTokens=function(){return i}},F.TokenList.Cache=function(e){var n=F.extend({max_size:500},e),o={},i=0;this.add=function(e,t){i>n.max_size&&(o={},i=0),o[e]||(i+=1),o[e]=t},this.get=function(e){return o[e]}}}(jQuery);