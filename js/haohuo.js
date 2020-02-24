! function(d) {
	var c = d.document;
	var a = c.documentElement;
	var f;
	function e() {
		var h = a.getBoundingClientRect().width,g;
		g = h / 10;
		a.style.fontSize = g + "px";
	}
	d.addEventListener("resize", function() {
		clearTimeout(f);
		f = setTimeout(e, 200)
	}, false);
	e();
}(window);
//表单验证
var r=/^1[3456789]\d{9}$/;
var username=document.querySelector('#username');
var pwd=document.querySelector('#password');
function biur(){
	if(username.value==''){
		return
	}
	if(!r.test(username.value)){
		alert('手机号输入有误');
	}
}
username.onblur=biur;
pwd.onblur=function(){
	if(username.value==''){
		return
	}
	if(!/^[0-9a-zA-Z]{6,16}$/.test(pwd.value)){
		alert('密码6到16位数字和字母');
	}
}
//清空
var x=document.querySelectorAll('.am-list-action img');
x[0].addEventListener('touchend',function(){
	username.value='';
});
x[1].addEventListener('touchend',function(){
	pwd.value='';
})