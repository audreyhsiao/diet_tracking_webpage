var oldKey0 = "";
var index0 = -1;
var oldCount0 = 0;
var newflag =0;
var currentLength =0;

function wordSearch(fig){
    var key = $("#key").val();
    if (!key){
        return ;
    }
    getArray();
    focusNext(fig);
}

function focusNext(fig){
    if (newflag == 0){
        index0 =0;
    }
    if (!fig){
        if (oldCount0 !=0){
            if (index0 < oldKey0){
                focusMove(index0);
                index0++;
            }else if (index0 == oldCount0){
                index0 = 0;
                focusMove(index0);
                index0++;
            }
            else{
                index0 = 0;
                focusMove(index0);
                index0++
            }
        }
    }else{
        if(oldCount0 !=0){
            if (inde0 <=oldCount0 && index0 >0){
                index0--;
                focusMove(index0);
            }else if(index0 ==0){
                index0 = oldCount0;
                index0--
                focusMove(index0);
            }
        }
    }
}
function getArray(){
    newflag =1;
    $(".contrast.result").removeClass("res");
    var key =$("#key").val();
    if (!key){
        oldKey0 = "";
        return;
    }
    if (oldKey0 !=key || $(".current").length !=currentLength){
        index0 = 0;
        var index = 0;
        $("#.contrast.result").each(function(){
            $(this).replaceWith($(this).html));
        });
        pos0 = new Array();
        if ($(".contrast-wrap").hasClass("current")){
            currentLength =$(".current").length;
            $(".current.contrast").each(function(){
                $(this).html($(this).html().replace(new RegExp(key,"gm"),"<span id ='result" + (index++) + "'class='result'>"+key +"</span>"));
            })
        }else{
            $(".contrast-wrap").addClass('current');
            currentLength = $(".current").length;
            $(".contrast").each(function(){
                $(this).html($(this).html().replace(new RegExp(key,"gm"),"<span id='result" +(index++) +"class='result'>" +key+"</span>"));
            });
        }
        //$("#key").val(key);
        oldKey0 =key;

        oldCount0 = $(".contrast.result").length;
        newflag = 0;
        })
        }
    }
    function focusMove(index0){
        $(".contrast.result:eq("+ index0 +")").parents('.contrast-wrap').addClass('current');
        $(".contrast.result:eq("+index0 + ")").addClass("res");
        var top = $(".contrast .result:eq(" + index0 +")").offset().top + $(".contrast .result:eq(" + index0 +")").parents(".contrast").scrollTop();
        var intop = top - $(".contrast .result:eq("+ index0 +")").parents(".contrast").offset().top;
        $(".contrast .result:eq(" +index0 +")").parents(".contrast").animate({scrollTop:intop},200);
        if ($(".contrast . result:eq("+index0 + ")").parents(".contrast").scrollTop()==0){
            $("html,body").animate({scrollTop:top-200},200);
        }else{
            $("html,body").animate({scrollTop:$("contrast .result:eq(" + index0 +")").parents(".contrast").offset().top - 200},200);
        }
    }
}

$("#key").change(function(){
    if ($("#key").val()==""){
        index0 =0;
        $(".contrast .result").each(function(){
            $(this).replaceWith($(this).html());
        });
        oldKey0 = "";
    }
})