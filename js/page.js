//分页设置
$(function() {
    //分页变量
    var page = 20;
    var pageCurrent = 1;
    var page_current_num;
    var page_num = $(".page-num");
    var pg_prev = $("#pg-prev");
    var pg_next = $("#pg-next");
    var confirm = $("#confirm");
    var input_page = $("#input-num");
    var input_page_num;

    //每页的条数变量
    var bar = 5;

    //将翻页的过程封装在setPage()函数里，方便后续重复调用
    function setPage(pageCurrent) {
        if (pageCurrent == 1) {
            page_num.empty();
            page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
            page_current_num = $($(".page-num a")[0]);
            pg_prev.css("background-color", "#eee");
        } else if (pageCurrent < 5 && pageCurrent > 1) {
            page_num.empty();
            page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
            page_current_num = $($(".page-num a")[pageCurrent - 1]);
            pg_prev.css("background-color", "#3399ff");
            pg_next.css("background-color", "#3399ff");
        } else if (pageCurrent >= 5 && pageCurrent < (page - 2)) {
            page_num.empty();
            page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (pageCurrent - 1) + '\
                    </a> <a href=" ">' + pageCurrent + '</a> <a href=" ">' + (parseInt(pageCurrent) + 1) + '\
                    </a><a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
            page_current_num = $($(".page-num a")[4]);
            pg_prev.css("background-color", "#3399ff");
            pg_next.css("background-color", "#3399ff");
        } else if (pageCurrent >= (page - 2) && pageCurrent < page) {
            page_num.empty();
            page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
            page_current_num = $($(".page-num a")[pageCurrent - 13]);
            pg_prev.css("background-color", "#3399ff");
            pg_next.css("background-color", "#3399ff");
        } else if (pageCurrent == page) {
            page_num.empty();
            page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
            page_current_num = $($(".page-num a")[7]);
            pg_prev.css("background-color", "#3399ff");
            pg_next.css("background-color", "#eee");
        } else {

        }
        page_current_num.addClass("page-num-st");

        //遍历每个分页a标签，并绑定点击事件
        var page_num_a = $(".page-num a");
        page_num_a.each(function() {

            $(this).click(function() {
                pageCurrent = $(this).html();
                setPage(pageCurrent);
                //调用ajax方法获取数据
                fetch(pageCurrent, bar);
                return false;
            })
        })
    }

    //文档加载后首次调用
    setPage(pageCurrent);

    //上一页的点击事件
    pg_prev.click(function() {
        pageCurrent = parseInt($(".page-num-st").html());
        if (pageCurrent == 1) {
            pg_prev.css("disabled", true);
        } else {
            pageCurrent = $(".page-num-st").html() - 1;
        }
        setPage(pageCurrent);
        return false;
    })

    //下一页的点击事件
    pg_next.click(function() {
        if (pageCurrent == page) {
            pg_next.css("disabled", true);
        } else {
            pageCurrent = parseInt($(".page-num-st").html()) + 1;
        }
        setPage(pageCurrent);
        return false;
    })

    // 动态设置总条数
    $("#page-total").html(page);

    //确认按钮的点击事件
    confirm.click(function() {
        input_page_num = input_page.val();
        if (input_page_num >= 1 && input_page_num <= page) {
            pageCurrent = input_page_num;
        }
        setPage(pageCurrent);
        return false;
    })

    //初次加载页面时每页条数
    var thead_td0 = $(".thead0 td").length;
    var thead_td1 = $(".thead1 td").length;
    var location_name = window.location.href.split("coldChain/")[1];
    var location = location_name.split(".html")[0];
    var location_current = location + "Edit.html";
    //将表格循环生成函数进行封装，便于多次调用

    function package(link, num) {
        for (var i = 0; i < bar; i++) {
            var tr = $("<tr></tr>");
            if (i % 2 == 0) {
                for (var v = 0; v < num; v++) {
                    if (location == "rent") {
                        if (v == num - 1) {
                            tr.append('<td><a href="' + link + '">查看</a></td>');
                        } else {
                            tr.append("<td></td>");
                        }
                    } else {
                        if (v == num - 1) {
                            tr.append('<td><a href="' + link + '">编辑</a></td>');
                        } else {
                            tr.append("<td></td>");
                        }
                    }

                }
            } else {
                for (var v = 0; v < num; v++) {
                    if (location == "rent") {
                        if (v == num - 1) {
                            tr.append('<td><a href="' + link + '">查看</a></td>');
                        } else {
                            tr.append("<td></td>");
                        }
                        tr.css("background-color", "#eee");
                    } else {
                        if (v == num - 1) {
                            tr.append('<td><a href="' + link + '">编辑</a></td>');
                        } else {
                            tr.append("<td></td>");
                        }
                        tr.css("background-color", "#eee");
                    }
                }
            }
            if (link == "basicDataEdit1.html") {
                $(".thead0").parent("tbody").parent("table").append(tr);
            } else if (link == "basicDataEdit2.html") {
                $(".thead1").parent("tbody").parent("table").append(tr);
            } else {
                $(".thead0").parent("tbody").parent("table").append(tr);
            }
        }
    }
    //页面一加载完成时，调用表格循环生成的函数，以一页10行的默认值生成
    if (location == "basicData") {
        package('basicDataEdit1.html', thead_td0);
        package('basicDataEdit2.html', thead_td1);

    } else if (location == "rent") {
        package("rentCheck.html", thead_td0);
    } else {
        package(location_current, thead_td0);
    }

    //用户选择每页条数动态生成表格条数
    $("#bar").on('change', function() {
        bar = $("#bar option:selected").val() - 10;
        if (location == "basicData") {
            package('basicDataEdit1.html', thead_td0);
            package('basicDataEdit2.html', thead_td1);
        } else if (location == "rent") {
            package("rentCheck.html", thead_td0);
        } else {
            package(location_current, thead_td0);
        }
        window.parent.setIframeHeight(window.parent.user);
    })

})
