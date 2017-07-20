//分页设置
$(function() {

    var pageCurrent = 1;
    var page_current_num;
    var pg_prev = $("#pg-prev");
    var pg_next = $("#pg-next");
    var confirm = $("#confirm");
    var input_page = $("#input-num");
    var input_page_num;

    //定义每页条数
    var size = 10;
    //将翻页的过程封装在setPage()函数里，方便后续重复调用
    function setPage(pageCurrent, page) {
        // debugger
        if (page <= 8) {
            for (var i = 0; i < page; i++) {
                page_num.append('<a href="">' + (parseInt(i) + 1) + '</a>');
            }
            page_current_num = $($(".page-num a")[pageCurrent - 1]);
            page_current_num.addClass("page-num-st");
            if (pageCurrent == 1) {
                pg_prev.attr("disabled", true);
                pg_prev.css("background-color", "#eee");
            } else {
                pg_prev.attr("disabled", false);
                pg_prev.css("background-color", "#3399ff");
            }

            if (pageCurrent == page) {
                pg_next.attr('disabled', true);
                pg_next.css("background-color", "#eee");
            } else {
                pg_next.attr('disabled', false);
                pg_next.css("background-color", "#3399ff");
            }

        } else {
            if (pageCurrent == 1) {
                page_num.empty();
                page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num = $($(".page-num a")[0]);
                pg_prev.css("background-color", "#eee");
                pg_prev.attr("disabled", true);
                pg_next.attr("disabled", false);
            } else if (pageCurrent < 5 && pageCurrent > 1) {
                page_num.empty();
                page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num = $($(".page-num a")[pageCurrent - 1]);
                pg_prev.css("background-color", "#3399ff");
                pg_next.css("background-color", "#3399ff");
                pg_next.attr("disabled", false);
                pg_prev.attr("disabled", false);
            } else if (pageCurrent >= 5 && pageCurrent < (page - 2)) {
                page_num.empty();
                page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (pageCurrent - 1) + '\
                    </a> <a href=" ">' + pageCurrent + '</a> <a href=" ">' + (parseInt(pageCurrent) + 1) + '\
                    </a><a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num = $($(".page-num a")[4]);
                pg_prev.css("background-color", "#3399ff");
                pg_next.css("background-color", "#3399ff");
                pg_next.attr("disabled", false);
                pg_prev.attr("disabled", false);
            } else if (pageCurrent >= (page - 2) && pageCurrent < page) {
                page_num.empty();
                page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
                if (pageCurrent == (page - 2)) {
                    page_current_num = $($(".page-num a")[5]);
                } else if (pageCurrent == (page - 1)) {
                    page_current_num = $($(".page-num a")[6]);
                }
                pg_prev.css("background-color", "#3399ff");
                pg_next.css("background-color", "#3399ff");
                pg_next.attr("disabled", false);
                pg_prev.attr("disabled", false);
            } else if (pageCurrent == page) {
                page_num.empty();
                page_num.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
                page_current_num = $($(".page-num a")[7]);
                pg_prev.css("background-color", "#3399ff");
                pg_next.css("background-color", "#eee");
                pg_next.attr("disabled", true);
                pg_prev.attr("disabled", false);
            } else {

            }
            page_current_num.addClass("page-num-st");
        }

        //遍历每个分页a标签，并绑定点击事件
        var page_num_a = $(".page-num a");
        page_num_a.each(function() {
            $(this).click(function() {
                pageCurrent = $(this).html();
                page_num.empty();
                setPage(pageCurrent, page);
                //调用ajax方法获取数据
                fetch(pageCurrent, size);
                return false;
            })
        })
    }

    set_page = setPage;

    //上一页的点击事件
    function pg_prev_click(event, total_page) {
        pageCurrent = parseInt($(".page-num-st").html());
        if (pageCurrent == 1) {
            pg_prev.attr("disabled", true);
        } else {
            pageCurrent = $(".page-num-st").html() - 1;
        }
        page_num.empty();
        fetch(pageCurrent, size);
        setPage(pageCurrent, total_page);
    }
    pg_prev.click(function() {
        pg_prev_click(event, total_page);
        return false;
    })

    //下一页的点击事件
    function pg_next_click(event, total_page) {
        // debugger
        pageCurrent = parseInt($(".page-num-st").html());
        if (pageCurrent == total_page) {
            pg_next.attr("disabled", true);
        } else {
            pageCurrent = parseFloat($(".page-num-st").html()) + 1;
        }
        page_num.empty();
        fetch(pageCurrent, size);
        setPage(pageCurrent, total_page);
    }

    pg_next.click(function() {
        pg_next_click(event, total_page);
        return false;
    })

    //确认按钮的点击事件
    confirm.click(function() {
        input_page_num = input_page.val();
        if (input_page_num >= 1 && input_page_num <= total_page) {
            pageCurrent = input_page_num;
        }
        page_num.empty();
        fetch(pageCurrent, size);
        setPage(pageCurrent, total_page);
        return false;
    })

    //将表格循环生成函数进行封装，便于多次调用
    function tab(row, col) {
        for (var i = 0; i < row; i++) {
            var tr = $("<tr></tr>");
            if (i % 2 == 0) {
                for (var v = 0; v < col; v++) {
                    tr.append("<td></td>");
                }
            } else {
                for (var v = 0; v < col; v++) {
                    tr.append("<td></td>");
                    tr.css("background-color", "#eee");
                }
            }
            $(".thead0").parent("tbody").append(tr);
        }
    }
    //render_table在当前网页的script中已经定义过（该script在page.js之前加载），在此将此方法赋值给变量render_table
    render_table = tab;

    //用户选择每页条数动态重新查询数据
    $("#bar").on('change', function() {
        size = $("#bar option:selected").val();
        fetch(1, size);
        window.parent.setIframeHeight(window.parent.user);
    })

    //统一编写查询按钮的点击事件
    $("#query").click(function() {
        fetch(pageCurrent, size);
    })

    //统一编写重置按钮的点击事件
    $("#reset").click(function() {
        //重置输入框的数据
        var len1 = $(".input-box input").length;
        var len2 = $(".input-box select").length;
        for (var i = 0; i < len1; i++) {
            $($(".input-box input")[i]).val("");
        };

        //重置下拉框数据
        for (var i = 0; i < len2; i++) {
            if ($($(".input-box select")[i]).attr("id") == "user-status") {
                $("#user-status").val(0);
            } else if ($($(".input-box select")[i]).attr("id") == "device-status") {
                $("#device-status").val(0);
            } else if ($($(".input-box select")[i]).attr("id") == "drug-status") {
                $("#drug-status").val(0);
            } else if ($($(".input-box select")[i]).attr("id") == "agency-status") {
                $("#agency-status").val(0);
            } else if ($($(".input-box select")[i]).attr("id") == "lock-status") {
                $("#lock-status").val(0);
            } else if ($($(".input-box select")[i]).attr("id") == "box-status") {
                $("#box-status").val(0);
            } else {
                $($(".input-box select")[i]).val("");
            };
        };
    })
})