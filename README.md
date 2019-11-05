## fullPage全屏滚动插件
#### 页面中的每一屏的类名必须是section，这是插件里面就设置好了的
~~~
<div class="section first"></div>
~~~
#### 先引入jq，再引入fullPage
~~~
<script src="js/jquery.min.js"></script>
<script src="js/jquery.fullPage.min.js"></script>
~~~
#### 调用全屏的方法
~~~
$(function () {
    $(element).fullpage({
        sectionsColor:["#0da5d6","#2AB561","#DE8910","#16BA9D","#0DA5D6"],/*设置每一屏的颜色*/
        /*afterLoad滚动到某一屏后的回调函数：接收anchorLink和index两个参数,anchorLink是锚链接的名称，link是序号，从1开始计算*/
        afterLoad: function (anchorLink,index) {
            /*current类名加给谁，谁就做动画效果（哪一屏）*/
            $(".section").removeClass("current");
            setTimeout(function () {/*让添加类名延迟100毫秒 解决第一屏动画的bug*/
                $(".section").eq(index-1).addClass("current");
            },100)
        }
    });
});
~~~
#### 然后给每一屏设置动画的时候用.current，例如给第一屏
~~~
.first.current img {
    margin: 0 0;
    opacity: 1;
    transition: all 1s;
 }
~~~
