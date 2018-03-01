/**
 * Created by Administrator on 2017/11/24.
 */
$(function(){
    $('.uu>ul>li').click(function(){
        $(this).addClass('l_yuan').siblings().removeClass('l_yuan')

    })


    $('.bj_button').click(function(){
        var acount=$('.acount').val();
        var pwd=$('.pwd').val();
        if(acount=='qaz'&&pwd=='1234567'){
            $('.m_pxi').text('ok')
        }else {
            $('.m_pxi').text('错的')

        }

    })

    //邮箱验证
    $('.mail_button').click(function(){
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        var obj = document.getElementById("mazey"); //要验证的对象
        var rr=$('.rr').val()
        var jj=$('.jj').val()
        if(obj.value&&rr&&jj){ //输入不能为空
            if(!reg.test(obj.value)){ //正则验证不通过，格式不对
                alert("邮箱格式不正确!");
                return false;
            }else if(rr==jj){
                alert('对的')
            }else {
                alert('错的')
            }
        }else {
            alert("输入不能为空!");
            return false;
        }



    })



    //当前委托  历史委托
    $('.entrust_spn>span').click(function(){
        $(this).addClass('spn_no').siblings().removeClass('spn_no')
    })

    //账户资料
    $('.asset_zc').click(function(){
        $(this).addClass('co_lour').siblings().removeClass('co_lour')
    })

    $('.property_ll').click(function(){
        $(this).addClass('alt').siblings().removeClass('alt')
    })
    $('.property_ul>li').click(function(){
        $(this).addClass('bue').siblings().removeClass('bue')
    })

    $('.two__btc>span').click(function(){
        $(this).addClass('s_spn').siblings().removeClass('s_spn')
    })

  $('.but_site').click(function(){
      $('.cozy').css('display','block')
      $('.pp').css('display','block')
  })

    $('.jes_ig').click(function(){
       $('.cozy').css('display','none')
        $('.pp').css('display','none')

    })

   $('.but_ig').mousemove(function(){
       $('.rig_ig').show()
   })
    $('.but_ig').mouseout(function(){
       $('.rig_ig').hide()
   })




    $('#progress >span').click(function(){
        var that = $(this)
        if(that.hasClass('doc-one')){
            $('#progress .bgc-width').css('width',0)
        }else if(that.hasClass('doc-two')){
            $('#progress .bgc-width').css('width','50%')
        }else if(that.hasClass('doc-three')){
            $('#progress .bgc-width').css('width','100%')
        }
        that.addClass('active').siblings('span').removeClass('active')
    })

    $('.shift_sel').change(function(e){
        var val = e.target.value
        if(val == '1'){
            $('.cozy').show()
            $('.pp').css('display','block')
        }
    })

    $(function () {
        $("#txtBeginDate").calendar({

            controlId: "divDate",                                 // 弹出的日期控件ID，默认: $(this).attr("id") + "Calendar"

            speed: 200,                                           // 三种预定速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认：200

            complement: true,                                     // 是否显示日期或年空白处的前后月的补充,默认：true

            readonly: true,                                       // 目标对象是否设为只读，默认：true

            upperLimit: new Date(),                               // 日期上限，默认：NaN(不限制)

            lowerLimit: new Date("2011/01/01"),                   // 日期下限，默认：NaN(不限制)

            callback: function () {                               // 点击选择日期后的回调函数

                alert("您选择的日期是：" + $("#txtBeginDate").val());

            }

        });

        $("#txtEndDate").calendar();

    });

    $('.remittance_utwo>li').click(function(){
        $(this).addClass('liae').siblings().removeClass('liae')
    })

    $('.record_pan>span').click(function(){
        $(this).addClass('cblue').siblings().removeClass('cblue')
    })
    $('.gf_no>span').click(function(){
        $(this).addClass('gf_bue').siblings().removeClass('gf_bue')
    })

    $('.issue_ll').mousemove(function(){
        $(this).addClass('rop').siblings().removeClass('rop')
    })

    $('.uu_no>li').click(function(){
        if($(this).hasClass('ll_no')){
            $('.boss>.cc').css('width','0')
        }else if($(this).hasClass('ll_two')){
            $('.boss>.cc').css('width','26%')
        }else if($(this).hasClass('ll_three')){
            $('.boss>.cc').css('width','51%')
        }else if($(this).hasClass('ll_five')){
            $('.boss>.cc').css('width','76%')
        }else if($(this).hasClass('ll_sxi')){
            $('.boss>.cc').css('width','100%')
        }
        $(this).addClass('teal').siblings().removeClass('teal')

    })
    $('.uu_lo>li').click(function(){
        if($(this).hasClass('radiu_no')){
            $('.rtt>.ff').css('width','0')
        }else if($(this).hasClass('radiu_two')){
            $('.rtt>.ff').css('width','26%')
        }else if($(this).hasClass('radiu_three')){
            $('.rtt>.ff').css('width','51%')
        }else if($(this).hasClass('radiu_five')){
            $('.rtt>.ff').css('width','76%')
        }else if($(this).hasClass('radiu_sxi')){
            $('.rtt>.ff').css('width','100%')
        }
        $(this).addClass('tppa').siblings().removeClass('tppa')

    })

    $('.A_down').mousemove(function(){
        $('.A_li').css({'opacity':'1','left':'50px'})
        $('.i_lw').css({'opacity':'1','right':'50px'})
    })

     $('.ltkuang_spn').click(function(){
         $('.ltkuang').css('display','none')
     })
    $('.suspend_liaotian ').click(function(){
        $('.ltkuang').css('display','block')

    })

})