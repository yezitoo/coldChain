//分页设置
$(function() {
    var page = 20;
    var pageCurrent = 8;
    var page_current_num;
    var page_num = $(".page-num");
    var pg_prev = $("#pg-prev");
    var pg_next = $("#pg-next");
    var confirm = $("#confirm");
    var input_page = $("#input-num");
    var input_page_num;
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
})
