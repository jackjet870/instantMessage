/** layui-v0.1.5 跨设备模块化前端框架@LGPL www.layui.com By 贤心 */
;layui.define("jquery",function(e){var a=layui.jquery,l="http://www.layui.com/";e("code",function(e){var i=[];e=e||{},e.elem=a(e.elem||".layui-code"),e.about="about"in e?e.about:!0,e.elem.each(function(){i.push(this)}),layui.each(i.reverse(),function(i,t){var c=a(t),o=c.html();(c.attr("lay-encode")||e.encode)&&(o=o.replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")),c.html('<ol class="layui-code-ol"><li>'+o.replace(/[\r\t\n]+/g,"</li><li>")+"</li></ol>"),c.find(">.layui-code-h3")[0]||c.prepend('<h3 class="layui-code-h3">'+(c.attr("lay-title")||e.title||"code")+(e.about?'<a href="'+l+'" target="_blank">layui.code</a>':"")+"</h3>");var d=c.find(">.layui-code-ol");c.addClass("layui-box layui-code-view"),(c.attr("lay-skin")||e.skin)&&c.addClass("layui-code-"+(c.attr("lay-skin")||e.skin)),(d.find("li").length/100|0)>0&&d.css("margin-left",(d.find("li").length/100|0)+"px"),(c.attr("lay-height")||e.height)&&d.css("max-height",c.attr("lay-height")||e.height)})})}).addcss("modules/code.css","skincodecss");