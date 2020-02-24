<?php 
    header("Content-Type: text/html; charset=utf8");

    if(!isset($_POST['submit'])){
        exit("错误执行");
    }//判断是否有submit操作

    $name=$_POST['name'];//post获取表单里的name
    $password=$_POST['password'];//post获取表单里的password

    include('connect.php');//链接数据库
	$S ="select * from user where username = '$name'";
	
	if(!mysqli_num_rows(mysqli_query($con,$S))){
		$q="insert into user(username,password) values ('$name','$password')";//向数据库插入表单传来的值的sql
		$reslut=mysqli_query($con,$q);//执行sql
		
		if (!$reslut){
		    die('Error: ' . mysql_error());//如果sql执行失败输出错误
		}else{
		    echo "<script>
				 setTimeout(function(){window.location.href='http://192.168.137.1:8080/taobao/haohuo.html';},2000);
				alert('注册成功');
			</script>";//成功输出注册成功
		}
	}else{
		echo "<script>
			 setTimeout(function(){window.location.href='http://192.168.137.1:8080/taobao/zhuce.html';},2000);
			alert('用户名已存在');
		</script>";
	}
    mysqli_select_db($con,'test');//关闭数据库

?>