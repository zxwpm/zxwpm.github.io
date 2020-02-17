
$(document).ready(function() {
    //判断窗口大小，添加输入框自动完成
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
    	$(".wd").focus();
    }
    //按钮
    $(".sou li").click(function() {
        var dt = $(this).attr('data-s');
        wd = $(".wd").val();
        if (dt == "magi") {
            if (wd == "" || wd == null) {
                window.location.href = "https://magi.com/";
            } else {
                window.location.href = "https://magi.com/search?q=" + wd;
            }
        } 
		if (dt == "baidu") {
            if (wd == "" || wd == null) {
                window.location.href = "https://www.baidu.com/?tn=simple";
            } else {
                window.location.href = "https://www.baidu.com/s?tn=simple&wd=" + wd;
            }
        }
          
		if (dt == "bing") {
			if (wd == "" || wd == null) {
				window.location.href = "https://cn.bing.com/";
			} else {
				window.location.href = "https://cn.bing.com/search?q=" + wd;
			}
		}
    });
    //菜单点击
    $("#menu").click(function(event) {
        $(this).toggleClass('on');
        $(".list").toggleClass('closed');
        $(".mywth").toggleClass('hidden');
    });
    $("#content").click(function(event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
    $(".mywth").click(function(event) {
        var wt = $("body").width();
        if (wt < 750 || wt == 750) {
            //window.location.href = "https://tianqi.qq.com/";
            window.location.href = "https://apip.weatherdt.com/h5.html?id=pjICbzAo4C";
        }
    });
});


/*天气插件开始
天气插件api请在wea目录中index.php修改
申请地址：和风天气-https://dev.heweather.com/
*/

/*天气插件结束*/