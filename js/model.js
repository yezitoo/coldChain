//个人信息设置修改事件
$("#set-select").click(function() {
    var setting_menu = $(".setting-menu");
    if (setting_menu.css("display") == "none") {
        setting_menu.show();
    } else {
        setting_menu.hide();
    }
})

//当鼠标离开设置二级菜单，二级菜单消失
$(".setting-menu").mouseleave(function() {
    $(".setting-menu").hide();
})

//个人信息二级菜单滑动事件
$(".setting-menu ul li").hover(function() {
    $(this).addClass("menu_hover");
}, function() {
    $(this).removeClass("menu_hover");
})

//管理菜单的显示隐藏事件
$(".manage").each(function(index) {
    var active = $(".active");
    $(this).click(function() {
        if (active.eq(index).css("display") == "none") {
            active.eq(index).show();
        } else {
            active.eq(index).hide();
        }
    })
})

//管理菜单的子菜单的点击事件
$(".active li a").each(function(index) {
    $(this).click(function() {
        var location = $(this).html();
        $(".active li a").removeAttr("style");
        $(this).css({ "background-color": "#3399ff", "color": "#fff" });
        $(".location_current").html(location);
        localStorage.setItem("bgcolor", "#3399ff");
        localStorage.setItem("fcolor", "#fff");
        localStorage.setItem("active_num", index);
    })
})

//因导航栏的a标签的默认跳转事件，造成a标签的点击之后的样式失效，所以使用存储方式使刷新后重新设置
window.onload = function() {
    var new_bgcolor = localStorage.getItem("bgcolor");
    var new_fcolor = localStorage.getItem("fcolor");
    var new_index = localStorage.getItem("active_num");
    var new_location = localStorage.getItem("location_current");
    $(".active li a").eq(parseInt(new_index)).css({ "background-color": "#3399ff", "color": new_fcolor });
    $(".location_current").html("首页");
    //打开网页，页面显示在主页上
    window.open('home.html', 'user');
}

//关闭页面时清除存储数据（即最近存储的左边导航栏的a的点击样式）
$(window).unload(function() {
    localStorage.clear();
})

//点击邮件信息按钮时，因页面未全部刷新，所以上面的清除样式无法删除导航栏的样式，所以再次清除导航栏样式
$(".message a span").click(function() {
    $(".active li a").removeAttr("style");
})

//设置当前动态时间
function timeCurrent() {
    var time = (new Date()).toLocaleString();
    $(".time").html(time);
}
setInterval("timeCurrent()", 1000);

//iframe框架自适应内容高度,函数的调用在每个子页面的js中调用
var aside = document.getElementsByTagName("aside")[0];
var user = document.getElementById("user");

function setIframeHeight(iframe) {
    var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    if (iframe) {
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.body.scrollHeight || iframeWin.document.documentElement.srcollHeight;
            aside.style.minHeight = iframe.height + 'px';
        }
    }
}
