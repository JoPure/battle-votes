/**
 * Created by karl.zheng on 2016/3/17.
 */
function init(){
    localStorage.obj1 = 1;
    localStorage.obj2 = 1;
    localStorage.obj3 = 1;
    localStorage.obj4 = 1;
    localStorage.obj5 = 1;
    localStorage.obj6 = 1;
    localStorage.obj7 = 1;
    localStorage.obj8 = 1;
    localStorage.obj9 = 1;
    localStorage.fade = 1;
    localStorage.obj10 = 1;
    localStorage.obj11 = 1;
    localStorage.obj12 = 1;
    localStorage.obj13 = 1;
    localStorage.obj14 = 1;
    localStorage.obj15 = 1;
    localStorage.obj16 = 1;
    localStorage.obj17 = 1;
    localStorage.obj18 = 1;
    localStorage.obj19 = 1;
    localStorage.obj20 = 1;


    if(localStorage.token!=""){
        $('.loginEntrance').text(localStorage.userName);
        localStorage.isLogin = 1;
    }else{
        localStorage.isLogin = -2;
    }

    $('.popupWindow-bg').hide();
    $('.voteIconSure').hide();
    refresh();
}

$(function(){
    $('.obj1').click(function(){ $('.obj1-1').toggle(); localStorage.setItem('obj1',~localStorage.obj1);});
    $('.obj2').click(function(){ $('.obj22').toggle(); localStorage.setItem('obj2',~localStorage.obj2);});
    $('.obj3').click(function(){ $('.obj33').toggle(); localStorage.setItem('obj3',~localStorage.obj3);});
    $('.obj4').click(function(){ $('.obj44').toggle(); localStorage.setItem('obj4',~localStorage.obj4);});
    $('.obj5').click(function(){ $('.obj55').toggle(); localStorage.setItem('obj5',~localStorage.obj5);});
    $('.obj6').click(function(){ $('.obj66').toggle(); localStorage.setItem('obj6',~localStorage.obj6);});
    $('.obj7').click(function(){ $('.obj77').toggle(); localStorage.setItem('obj7',~localStorage.obj7);});
    $('.obj8').click(function(){ $('.obj88').toggle(); localStorage.setItem('obj8',~localStorage.obj8);});
    $('.obj9').click(function(){ $('.obj99').toggle(); localStorage.setItem('obj9',~localStorage.obj9);});
    $('.obj10').click(function(){ $('.obj1010').toggle(); localStorage.setItem('obj10',~localStorage.obj10);});
    $('.obj11').click(function(){ $('.obj1111').toggle(); localStorage.setItem('obj11',~localStorage.obj11);});
    $('.obj12').click(function(){ $('.obj1212').toggle(); localStorage.setItem('obj12',~localStorage.obj12);});
    $('.obj13').click(function(){ $('.obj1313').toggle(); localStorage.setItem('obj13',~localStorage.obj13);});
    $('.obj14').click(function(){ $('.obj1414').toggle(); localStorage.setItem('obj14',~localStorage.obj14);});
    $('.obj15').click(function(){ $('.obj1515').toggle(); localStorage.setItem('obj15',~localStorage.obj15);});
    $('.obj16').click(function(){ $('.obj1616').toggle(); localStorage.setItem('obj16',~localStorage.obj16);});
    $('.obj17').click(function(){ $('.obj1717').toggle(); localStorage.setItem('obj17',~localStorage.obj17);});
    $('.obj18').click(function(){ $('.obj1818').toggle(); localStorage.setItem('obj18',~localStorage.obj18);});
    $('.obj19').click(function(){ $('.obj1919').toggle(); localStorage.setItem('obj19',~localStorage.obj19);});
    $('.obj20').click(function(){ $('.obj2020').toggle(); localStorage.setItem('obj20',~localStorage.obj20);});

    $('.submit').click(function() {
        var hashValue = hex_md5($('#password').val());
        var userName = $('#username').val();
        var url = 'http://10.10.18.114:7400/user/login';

        $.ajax({
            type: "GET",
            url: url,
            data: {
                userName: userName,
                password: hashValue,
                version: 'v3'
            },
            dataType: 'jsonp',
            jsonp: "jsonCallback",

            success: function (data) {
                if (data.code == 200) {
                    $('.popupWindow-bg').fadeOut();
                    localStorage.fade = 1;
                    $('#username').val("");
                    $('#password').val("");
                    localStorage.token = data.data.token;
                    localStorage.userId = data.data.user.userId;
                    localStorage.userName = data.data.user.userName;
                    localStorage.setItem('isLogin',-2);
                    $('.loginEntrance').text(localStorage.userName);
                    alert("ล็อกอินสำเร็จ");
                }else{
                    alert(msg[data.code]);
                }
            },

            error: function (err) {
                alert(err);
            }
        });
    });

    $('.facebook').click(function(){
        var client_id = 311294709063394;
        var redirect_uri = "http://10.10.18.112:3000/index.html";
        var random = Math.random()*1000;
        var loginURL = "https://www.facebook.com/v2.2/dialog/oauth?client_id=" + client_id
            + "&redirect_uri=" +encodeURIComponent(redirect_uri) + "&r=" + random;
        window.location.href = loginURL;
    });


    $('.vote').click(function(){
        if(localStorage.fade < 0){
               return;
        }

        var url = 'http://10.10.18.114:7400/act/vote/doVote';
        var str = "";
        if(localStorage.obj1<0){str=str+'1'; $('.obj1-1').toggle(); localStorage.setItem('obj1',~localStorage.obj1);}
        if(localStorage.obj2<0){str=(str=="")?(str+'2'):(str+',2'); $('.obj22').toggle(); localStorage.setItem('obj2',~localStorage.obj2);}
        if(localStorage.obj3<0){str=(str=="")?(str+'3'):(str+',3'); $('.obj33').toggle(); localStorage.setItem('obj3',~localStorage.obj3);}
        if(localStorage.obj4<0){str=(str=="")?(str+'4'):(str+',4'); $('.obj44').toggle(); localStorage.setItem('obj4',~localStorage.obj4);}
        if(localStorage.obj5<0){str=(str=="")?(str+'5'):(str+',5'); $('.obj55').toggle(); localStorage.setItem('obj5',~localStorage.obj5);}
        if(localStorage.obj6<0){str=(str=="")?(str+'6'):(str+',6'); $('.obj66').toggle(); localStorage.setItem('obj6',~localStorage.obj6);}
        if(localStorage.obj7<0){str=(str=="")?(str+'7'):(str+',7'); $('.obj77').toggle(); localStorage.setItem('obj7',~localStorage.obj7);}
        if(localStorage.obj8<0){str=(str=="")?(str+'8'):(str+',8'); $('.obj88').toggle(); localStorage.setItem('obj8',~localStorage.obj8);}
        if(localStorage.obj9<0){str=(str=="")?(str+'9'):(str+',9'); $('.obj99').toggle(); localStorage.setItem('obj9',~localStorage.obj9);}
        if(localStorage.obj10<0){str=(str=="")?(str+'10'):(str+',10'); $('.obj1010').toggle(); localStorage.setItem('obj10',~localStorage.obj10);}
        if(localStorage.obj11<0){str=(str=="")?(str+'11'):(str+',11'); $('.obj1111').toggle(); localStorage.setItem('obj11',~localStorage.obj11);}
        if(localStorage.obj12<0){str=(str=="")?(str+'12'):(str+',12'); $('.obj1212').toggle(); localStorage.setItem('obj12',~localStorage.obj12);}
        if(localStorage.obj13<0){str=(str=="")?(str+'13'):(str+',13'); $('.obj1313').toggle(); localStorage.setItem('obj13',~localStorage.obj13);}
        if(localStorage.obj14<0){str=(str=="")?(str+'14'):(str+',14'); $('.obj1414').toggle(); localStorage.setItem('obj14',~localStorage.obj14);}
        if(localStorage.obj15<0){str=(str=="")?(str+'15'):(str+',15'); $('.obj1515').toggle(); localStorage.setItem('obj15',~localStorage.obj15);}
        if(localStorage.obj16<0){str=(str=="")?(str+'16'):(str+',16'); $('.obj1616').toggle(); localStorage.setItem('obj16',~localStorage.obj16);}
        if(localStorage.obj17<0){str=(str=="")?(str+'17'):(str+',17'); $('.obj1717').toggle(); localStorage.setItem('obj17',~localStorage.obj17);}
        if(localStorage.obj18<0){str=(str=="")?(str+'18'):(str+',18'); $('.obj1818').toggle(); localStorage.setItem('obj18',~localStorage.obj18);}
        if(localStorage.obj19<0){str=(str=="")?(str+'19'):(str+',19'); $('.obj1919').toggle(); localStorage.setItem('obj19',~localStorage.obj19);}
        if(localStorage.obj20<0){str=(str=="")?(str+'20'):(str+',20'); $('.obj2020').toggle(); localStorage.setItem('obj20',~localStorage.obj20);}

        localStorage.setItem("fade",-2);

        $.ajax({
            type:"GET",
            url: url,
            data:{
                actId: 100001,
                token: localStorage.token,
                voteObjIds: str
            },
            dataType : 'jsonp',
            jsonp:"jsonCallback",
            jsonpCallback: "fblogin_jsonpCallback",

            success : function(data){
                if(data.code==200){
                    refresh();
                    alert("ขอบคุณที่ได้เข้าร่วมกิจกรรม");
                }else{
                    alert(msg[data.code]);
                    if(data.code==403){
                        $('.popupWindow-bg').fadeIn();
                        $('html,body').animate({scrollTop:'0px'},800);
                    }
                }
            },

            complete: function(){
                localStorage.setItem("fade", 1);
            },

            error : function(err){
                alert(err);
            }
        });
    });

    $('.logout').click(function(){
        if(localStorage.token=="")
        {
            alert("ล็อกเอ้าท์");
        }
        else{
            localStorage.setItem('token',"");
            $('.loginEntrance').text("LOGIN");
            localStorage.setItem('userId',"");
            localStorage.setItem('userName',"");
            localStorage.setItem('isLogin',1);
            var returnUrl = "http://wsgth.pocketgamesol.com/vote/index.html";
            window.location.href = returnUrl;
        }
    });

    CheckFBCallback();
});


/*getParameterByName*/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function CheckFBCallback() {
    var FB_CODE = $.trim(this.getParameterByName("code"));
    if(FB_CODE==""||localStorage.isLogin<0)
    {
        return;
    }
    alert("123");
    var responseURl = 'http://10.10.18.114:7400/fb/login';
    var redirect_uri = "http://10.10.18.112:3000/index.html";
    var requestURL = responseURl
        + "?code=" + FB_CODE
        + "&redirect_uri=" + redirect_uri +"&version=v3"+"&client_id=311294709063394";

    $.ajax({
        type: "GET",
        url: requestURL,
        dataType: "jsonp",
        jsonp: "jsonCallback",

        success: function (data) {
            if(data.code==200){
                localStorage.token = data.data.token;
                localStorage.userId = data.data.user.userId;
                localStorage.userName = data.data.user.userName;
                localStorage.setItem('isLogin',-2);
                $('.loginEntrance').text(localStorage.userName);
                alert("ล็อกอินสำเร็จ");
            }else{
                alert(msg[data.code]);
                var returnUrl = "http://10.10.18.112:3000/index.html";
                window.location.href = returnUrl;
            }
        },
        error: function (err) {
            alert(err);
        }
    });
};

function refresh(){
    $.ajax({
        type:"GET",
        url: 'http://10.10.18.114:7400/act/vote/count',
        data:{
            actId: 100001
        },
        dataType : 'jsonp',
        jsonp:"jsonCallback",
        success : function(data){
            if(data.code==200){
                localStorage.num1 = data.data['1'];
                localStorage.num2 = data.data['2'];
                localStorage.num3 = data.data['3'];
                localStorage.num4 = data.data['4'];
                localStorage.num5 = data.data['5'];
                localStorage.num6 = data.data['6'];
                localStorage.num7 = data.data['7'];
                localStorage.num8 = data.data['8'];
                localStorage.num9 = data.data['9'];
                localStorage.num10 = data.data['10'];
                localStorage.num11 = data.data['11'];
                localStorage.num12 = data.data['12'];
                localStorage.num13 = data.data['13'];
                localStorage.num14 = data.data['14'];
                localStorage.num15 = data.data['15'];
                localStorage.num16 = data.data['16'];
                localStorage.num17 = data.data['17'];
                localStorage.num18 = data.data['18'];
                localStorage.num19 = data.data['19'];
                localStorage.num20 = data.data['20'];

                $('.num1').text(localStorage.num1);
                $('.num2').text(localStorage.num2);
                $('.num3').text(localStorage.num3);
                $('.num4').text(localStorage.num4);
                $('.num5').text(localStorage.num5);
                $('.num6').text(localStorage.num6);
                $('.num7').text(localStorage.num7);
                $('.num8').text(localStorage.num8);
                $('.num9').text(localStorage.num9);
                $('.num10').text(localStorage.num10);
                $('.num11').text(localStorage.num11);
                $('.num12').text(localStorage.num12);
                $('.num13').text(localStorage.num13);
                $('.num14').text(localStorage.num14);
                $('.num15').text(localStorage.num15);
                $('.num16').text(localStorage.num16);
                $('.num17').text(localStorage.num17);
                $('.num18').text(localStorage.num18);
                $('.num19').text(localStorage.num19);
                $('.num20').text(localStorage.num20);
            }else{
                alert(msg[data.code]);
            }
        },
        error : function(err){
            alert(err);
        }
    });
}


var msg = {
    "100": "ไม่มีกิจกรรมนี้",
    "101": "เงื่อนไขกิจกรรมไม่พอ",
    "102": "เงื่อนไขกิจกรรมไม่พอหรือจำนวนลงคะแนนใช้หมดแล้ว",
    "103": "สำเร็จแล้ว",
    "104": "รางวัลcodeไม่พอแล้ว",
    "105": "กิจกรรมนี้ไม่มีรางวัล",
    "106": "กิจกรรมยังไม่เริ่มต้น",
    "107": "กิจกรรมสิ้นสุดแล้ว",
    "108": "ปัญชีนี้ได้voteไปแล้ว",
    "109": "ลงคะแนนได้เพียง2ภาพเท่านั้น",
    "150": "ไม่มี APP",
    "160": "ไม่มีเซิร์ฟนี้",
    "170": "หาปัญชีFBนี้ไม่เจอ",
    "201": "ไม่มีข้อมูล",
    "300": " เชื่อมติดด่อล้มเหลว",
    "301": "บัญชีหรือรหัสไม่ถูกต้อง รบกวนตรวจเช็คอีกครั้ง หรือไปโหลดเกมส์แล้วลองบัญชีของเกมเรา \n http://wsgth.pocketgamesol.com/",
    "400": "บัญชีหรือรหัสไม่สามารถว่าง",
    "401": "version error",
    "403": "ยังไม่ล็อกอิน",
    "500": "เซิร์ฟเวอร์ล้มเหลว",
    "600": "ไม่มีsession",
    "700": "ผู้เล่นไม่ได้ใช้ APPนี้"
}