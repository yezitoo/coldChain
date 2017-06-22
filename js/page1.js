//分页设置
$(function() {
    var page1 = 20;
    var pageCurrent1 = 3;
    var page_current_num1;
    var page_num1 = $(".page-num1");
    var pg_prev1 = $("#pg-prev1");
    var pg_next1 = $("#pg-next1");
    var confirm1 = $("#confirm1");
    var input_page1 = $("#input-num1");
    var input_page_num1;
    //将翻页的过程封装在setPage()函数里，方便后续重复调用
    function setPage(pageCurrent1) {
        if (pageCurrent1 == 1) {
            page_num1.empty();
            page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page1 + '</a>');
            page_current_num1 = $($(".page-num1 a")[0]);
            pg_prev1.css("background-color", "#eee");
        } else if (pageCurrent1 < 5 && pageCurrent1 > 1) {
            page_num1.empty();
            page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" ">' + '3' + '</a> <a href=" ">' + '4' + '</a> <a href=" ">' + '\
                    5' + '</a> <a href=" ">' + '6' + '</a> <a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page1 + '</a>');
            page_current_num1 = $($(".page-num1 a")[pageCurrent1 - 1]);
            pg_prev1.css("background-color", "#3399ff");
            pg_next1.css("background-color", "#3399ff");
        } else if (pageCurrent1 >= 5 && pageCurrent1 < (page1 - 2)) {
            page_num1.empty();
            page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (pageCurrent1 - 1) + '\
                    </a> <a href=" ">' + pageCurrent1 + '</a> <a href=" ">' + (parseInt(pageCurrent1) + 1) + '\
                    </a><a href="" style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + page1 + '</a>');
            page_current_num1 = $($(".page-num1 a")[4]);
            pg_prev1.css("background-color", "#3399ff");
            pg_next1.css("background-color", "#3399ff");
        } else if (pageCurrent1 >= (page1 - 2) && pageCurrent1 < page1) {
            page_num1.empty();
            page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page1 - 4) + '\
                    </a> <a href=" ">' + (page1 - 3) + '</a> <a href=" ">' + (page1 - 2) + '\
                    </a><a href=" ">' + (page1 - 1) + '</a> <a href=" ">' + page1 + '</a>');
            page_current_num1 = $($(".page-num1 a")[pageCurrent1 - 13]);
            pg_prev1.css("background-color", "#3399ff");
            pg_next1.css("background-color", "#3399ff");
        } else if (pageCurrent1 == page1) {
            page_num1.empty();
            page_num1.append('<a href=" ">' + '1' + '</a> <a href=" ">' + '2' + '\
                    </a><a href=" " style="background-color:#fff;color:#3399ff">' + '...' + '</a> <a href=" ">' + (page1 - 4) + '\
                    </a> <a href=" ">' + (page1 - 3) + '</a> <a href=" ">' + (page1 - 2) + '\
                    </a><a href=" ">' + (page1 - 1) + '</a> <a href=" ">' + page1 + '</a>');
            page_current_num1 = $($(".page-num1 a")[7]);
            pg_prev1.css("background-color", "#3399ff");
            pg_next1.css("background-color", "#eee");
        } else {

        }
        page_current_num1.addClass("page-num-st1");

        //遍历每个分页a标签，并绑定点击事件
        var page_num_a1 = $(".page-num1 a");
        page_num_a1.each(function() {

            $(this).click(function() {
                pageCurrent1 = $(this).html();
                setPage(pageCurrent1);
                return false;
            })
        })
    }

    //文档加载后首次调用
    setPage(pageCurrent1);

    //上一页的点击事件
    pg_prev1.click(function() {
        pageCurrent1 = parseInt($(".page-num-st1").html());
        if (pageCurrent1 == 1) {
            pg_prev1.css("disabled", true);
        } else {
            pageCurrent1 = $(".page-num-st1").html() - 1;
        }
        setPage(pageCurrent1);
        return false;
    })

    //下一页的点击事件
    pg_next1.click(function() {
        if (pageCurrent1 == page1) {
            pg_next1.css("disabled", true);
        } else {
            pageCurrent1 = parseInt($(".page-num-st1").html()) + 1;
        }
        setPage(pageCurrent1);
        return false;
    })

    // 动态设置总条数
    $("#page-total1").html(page1);

    //确认按钮的点击事件
    confirm1.click(function() {
        input_page_num1 = input_page1.val();
        if (input_page_num1 >= 1 && input_page_num1 <= page1) {
            pageCurrent1 = input_page_num1;
        }
        setPage(pageCurrent1);
        return false;
    })
})
