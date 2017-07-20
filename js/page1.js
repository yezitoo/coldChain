//分页设置
$(function() {

    var pageCurrent1 = 1;
    var page_current_num1;
    var pg_prev1 = $("#pg-prev1");
    var pg_next1 = $("#pg-next1");
    var confirm1 = $("#confirm1");
    var input_page1 = $("#input-num1");
    var input_page_num1;

    //定义每页条数
    var size1 = 10;
    //将翻页的过程封装在setPage()函数里，方便后续重复调用
    function setPage1(pageCurrent, page) {
        // debugger
        if (page <= 8) {
            for (var i = 0; i < page; i++) {
                page_num1.append('<a href="">' + (parseInt(i) + 1) + '</a>');
            }
            page_current_num1 = $($(".page-num1 a")[pageCurrent - 1]);
            page_current_num1.addClass("page-num-st1");
            if (pageCurrent == 1) {
                pg_prev1.attr("disabled", true);
                pg_prev1.css("background-color", "#eee");
            } else {
                pg_prev1.attr("disabled", false);
                pg_prev1.css("background-color","#3399ff");
            }

            if (pageCurrent == page) {
                pg_next1.attr('disabled', true);
                pg_next1.css("background-color", "#eee");
            } else {
                pg_next1.attr('disabled', false);
                pg_next1.css("background-color","#3399ff");
            }

        } else {
            if (pageCurrent == 1) {
                page_num1.empty();
                page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num1 = $($(".page-num1 a")[0]);
                pg_prev1.css("background-color", "#eee");
                pg_prev1.attr("disabled", true);
                pg_next1.attr("disabled", false);
            } else if (pageCurrent < 5 && pageCurrent > 1) {
                page_num1.empty();
                page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num1 = $($(".page-num1 a")[pageCurrent - 1]);
                pg_prev1.css("background-color", "#3399ff");
                pg_next1.css("background-color", "#3399ff");
                pg_next1.attr("disabled", false);
                pg_prev1.attr("disabled", false);
            } else if (pageCurrent >= 5 && pageCurrent < (page - 2)) {
                page_num1.empty();
                page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (pageCurrent - 1) + '\
                    </a> <a href=" ">' + pageCurrent + '</a> <a href=" ">' + (parseInt(pageCurrent) + 1) + '\
                    </a><a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page + '</a>');
                page_current_num1 = $($(".page-num1 a")[4]);
                pg_prev1.css("background-color", "#3399ff");
                pg_next1.css("background-color", "#3399ff");
                pg_next1.attr("disabled", false);
                pg_prev1.attr("disabled", false);
            } else if (pageCurrent >= (page - 2) && pageCurrent < page) {
                page_num1.empty();
                page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
                if (pageCurrent == (page - 2)) {
                    page_current_num1 = $($(".page-num1 a")[5]);
                } else if (pageCurrent == (page - 1)) {
                    page_current_num1 = $($(".page-num1 a")[6]);
                }
                pg_prev1.css("background-color", "#3399ff");
                pg_next1.css("background-color", "#3399ff");
                pg_next1.attr("disabled", false);
                pg_prev1.attr("disabled", false);
            } else if (pageCurrent == page) {
                page_num1.empty();
                page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page - 4) + '\
                    </a> <a href=" ">' + (page - 3) + '</a> <a href=" ">' + (page - 2) + '\
                    </a><a href=" ">' + (page - 1) + '</a> <a href=" ">' + page + '</a>');
                page_current_num1 = $($(".page-num1 a")[7]);
                pg_prev1.css("background-color", "#3399ff");
                pg_next1.css("background-color", "#eee");
                pg_next1.attr("disabled", true);
                pg_prev1.attr("disabled", false);
            } else {

            }
            page_current_num1.addClass("page-num-st1");
        }

        //遍历每个分页a标签，并绑定点击事件
        var page_num_a1 = $(".page-num1 a");
        page_num_a1.each(function() {
            $(this).click(function() {
                pageCurrent = $(this).html();
                page_num1.empty();
                setPage1(pageCurrent, page);
                //调用ajax方法获取数据
                fetch1(pageCurrent, size1);
                return false;
            })
        })
    }

    set_page1 = setPage1;

    //上一页的点击事件
    function pg_prev_click1(event, total_page) {
        pageCurrent1 = parseInt($(".page-num-st1").html());
        if (pageCurrent1 == 1) {
            pg_prev1.attr("disabled", true);
        } else {
            pageCurrent1 = $(".page-num-st1").html() - 1;
        }
        page_num1.empty();
        fetch1(pageCurrent1, size1);
        setPage1(pageCurrent1, total_page1);
    }
    pg_prev1.click(function() {
        pg_prev_click1(event, total_page1);
        return false;
    })

    //下一页的点击事件
    function pg_next_click1(event, total_page) {
        // debugger
        pageCurrent1 = parseInt($(".page-num-st1").html());
        if (pageCurrent1 == total_page1) {
            pg_next1.attr("disabled", true);
        } else {
            pageCurrent1 = parseFloat($(".page-num-st1").html()) + 1;
        }
        page_num1.empty();
        fetch1(pageCurrent1, size1);
        setPage1(pageCurrent1, total_page1);
    }

    pg_next1.click(function() {
        pg_next_click1(event, total_page1);
        return false;
    })

    //确认按钮的点击事件
    confirm1.click(function() {
        input_page_num1 = input_page1.val();
        if (input_page_num1 >= 1 && input_page_num1 <= total_page1) {
            pageCurrent1 = input_page_num1;
        }
        page_num1.empty();
        fetch1(pageCurrent1, size1);
        setPage1(pageCurrent1, total_page1);
        return false;
    })

    //将表格循环生成函数进行封装，便于多次调用
    function tab1(row, col) {
        for (var i = 0; i < row; i++) {
            var tr = $("<tr></tr>");
            if (i % 2 == 0) {
                for (var v = 0; v < col; v++) {
                    tr.append("<td></td>");
                }
            } else {
                for (var v = 0; v < col; v++) {
                    tr.append("<td></td>");
                   
                }
            }
             tr.css("background-color", "#ffffff");
            $(".thead1").parent("tbody").append(tr);
        }
    }
    //render_table在当前网页的script中已经定义过（该script在page.js之前加载），在此将此方法赋值给变量render_table
    render_table1 = tab1;
 

    window.parent.setIframeHeight(window.parent.user);
})
