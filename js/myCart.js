// JavaScript Document
$(function(){
	//点击实现全选或全不选效果
   $("#allCheckBox").click(function(){   
	   var $checked=$(this).is(":checked");	   
	   $(".cart_td_1").children().prop("checked",$checked);
   });	
   
  //判断是否全选
  function isAllChecked(){	  
	   var $ckBox=$(".cart_td_1").children();  
	   var num=$ckBox.length; 
		   console.log(num);
	   var count=0;
	   $ckBox.each(function(index, element) {      
		   if($(element).is(":checked")){		  
			   count++;	     
		   }  
	   });
		if(num==count){  
		  $("#allCheckBox").prop("checked",true);   
		   
		}else{
		  $("#allCheckBox").prop("checked",false); 
		}  
  }   

  isAllChecked();
  
  $(".cart_td_1").children().click(function(){
	  
	  isAllChecked();
	  
  });
	
  //删除
  
    $(".cart_td_8").find("a").click(function(){
		
		$(this).parent().parent().prev().remove();
		$(this).parent().parent().remove();
		productCount();
	
	});
  //删除所选
  
    $("#deleteAll").click(function(){
	    $("#shopping").find("tr[id]").each(function(index, element) {
			var $ck=$(this).children(".cart_td_1").children().is(":checked");
			if($ck){
				$(this).prev().remove();
				$(this).remove();
			}
        });
		productCount();
	});
  
  
  //点击增加,减少
  
  $(".cart_td_6").find("img[alt=add]").click(function(){
	  changeNum(this,true);
	    
  });
  $(".cart_td_6").find("img[alt=minus]").click(function(){  
      changeNum(this,false);
  });
  function changeNum(dom,flag){
	  
	 var $input=$(dom).parent().find("input");
	 
	 console.log($input);
	 var num=$input.val();
	 if(flag){
		 num++;
	 }else{
		 num--; 
		 if(num<=0){
			 num=1;
			 alert("您的宝贝数量必须大于0");
			 }
		
	 }
	   console.log(num);
	    $input.val(num);
		productCount();
  }
  //计算总价和小计
  
    function productCount(){
		
		var $trs=$("#shopping").find("tr[id]");
	  
	     console.log($trs);
		 var sum=0;
		 var ints=0;
		 $trs.each(function(index, element) {
            var num=$(element).children(".cart_td_6").find("input").val();//商品数量
			var price=num*$(element).children(".cart_td_5").text();//商品单价
			var integral=num*$(element).children(".cart_td_4").text();//商品单价
			console.log(price);
			$(element).children(".cart_td_7").html(price);
			sum+=price;
			ints+=integral;
			
        });
	  	
		
		$("#total").text(sum);
		$("#integral").text(ints);
	}
  
  productCount();
  
});