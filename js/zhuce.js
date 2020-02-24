//表单验证
var r=/^1[3456789]\d{9}$/;
var username=document.querySelector('#username');
var pwd=document.querySelector('#password');
var pwd1=document.querySelector('#password2');
function biur(){
	if(username.value==''){
		return
	}
	if(!r.test(username.value)){
		alert('手机号输入有误');
	}
}
username.onblur=biur;
pwd.onblur=function biur1(){
	if(username.value==''){
		return
	}
	if(!/^[0-9a-zA-Z]{6,16}$/.test(pwd.value)){
		alert('密码6到16位数字和字母');
	}
}
pwd1.onblur=function biur2(){
	if(pwd.value!=pwd1.value){
		alert('两次密码不一致');
	}
}
//清空
var x=document.querySelectorAll('.am-list-action img');
x[0].addEventListener('touchend',function(){
	username.value='';
});
x[1].addEventListener('touchend',function(){
	pwd.value='';
});
x[2].addEventListener('touchend',function(){
	pwd1.value='';
});