//统一编写新增重置按钮的点击事件

$("#reset").click(function() {
    //重置输入框的数据
    var len1 = $(".input-box1 input").length;
    var len2 = $(".input-box1 select").length;
    for (var i = 0; i < len1; i++) {
        $($(".input-box1 input")[i]).val("");
    };

    //重置下拉框数据
    for (var i = 0; i < len2; i++) {
        if ($($(".input-box1 select")[i]).attr("id") == "user-status") {
            $("#user-status").val(0);
        } else if ($($(".input-box1 select")[i]).attr("id") == "device-status") {
            $("#device-status").val(0);
        } else {
            $($(".input-box1 select")[i]).val("");
        };
    };

})
