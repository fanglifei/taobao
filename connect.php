<?php
    $server="localhost";//主机的IP地址
    $db_username="root";//数据库用户名
    $db_password="";//数据库密码

    $con = mysqli_connect($server,$db_username,$db_password);//链接数据库mysql_connect
    if(!$con){
        die("can't connect".mysql_error());//如果链接失败输出错误
    }
    
    mysqli_select_db($con,'test');//选择数据库
?>