function match(match_type, match_text) {

    if (match_type == "peo-type") { //用户类型
        switch (match_text) {
            case "全部":
                $("#peo-type").val("");
                break;
            case "发货开箱":
                $("#peo-type").val(0);
                break;
            case "送货":
                $("#peo-type").val(1);
                break;
            case "收货开箱":
                $("#peo-type").val(2);
                break;
            case "个人":
                $("#peo-type").val(3);
                break;
        };
    } else if (match_type == "privileges") { //操作权限
        switch (match_text) {
            case "全部":
                $("#privileges").val("");
                break;
            case "开箱":
                $("#privileges").val(0);
                break;
            case "送货":
                $("#privileges").val(1);
                break;
            case "收货":
                $("#privileges").val(2);
                break;
            case "个人":
                $("#privileges").val(3);
                break;
        };
    } else if (match_type == "user-status") { //用户状态
        switch (match_text) {
            case "正常":
                $("#user-status").val(0);
                break;
            case "停用":
                $("#user-status").val(1);
                break;
            case "全部":
                $("#user-status").val("");
                break;
        };
    } else if (match_type == "user-type") {
        switch (match_text) {
            case "全部":
                $("#user-type").val("");
                break;
            case "系统管理员":
                $("#user-type").val(0);
                break;
            case "医院管理员":
                $("#user-type").val(1);
                break;
            case "代理商":
                $("#user-type").val(2);
                break;
        }
    } else if (match_type == "lend") {
        switch (match_text) {
            case "全部":
                $("#lend").val("");
                break;
            case "未借出":
                $("#lend").val(0);
                break;
            case "已借出":
                $("#lend").val(1);
                break;
        }
    } else if (match_type == "device-status") {
        switch (match_text) {
            case "全部":
                $("#device-status").val("");
                break;
            case "正常":
                $("#device-status").val(0);
                break;
            case "异常":
                $("#device-status").val(1);
                break;
            case "停用":
                $("#device-status").val(2);
                break;
            case "维修":
                $("#device-status").val(3);
                break;

        }
    } else if (match_type == "drug-status") {
        switch (match_text) {
            case "全部":
                $("#drug-status").val("");
                break;
            case "启用":
                $("#drug-status").val(0);
                break;
            case "停用":
                $("#drug-status").val(1);
                break;

        }
    } else if (match_type == "lock-status") {
        switch (match_text) {
            case "全部":
                $("#lock-status").val("");
                break;
            case "正常":
                $("#lock-status").val(0);
                break;
            case "异常":
                $("#lock-status").val(1);
                break;
            case "停用":
                $("#lock-status").val(2);
                break;
        }
    } else if (match_type == "agency-type") {
        switch (match_text) {
            case "全部":
                $("#agency-type").val("");
                break;
            case "医院":
                $("#agency-type").val(0);
                break;
            case "代理":
                $("#agency-type").val(1);
                break;
        }
    } else if (match_type == "agency-status") {
        switch (match_text) {
            case "全部":
                $("#agency-status").val("");
                break;
            case "正常":
                $("#agency-status").val(0);
                break;
            case "停用":
                $("#agency-status").val(1);
                break;
        }
    } else {}

}
