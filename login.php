<?PHP
    header("Content-Type: text/html; charset=utf8");
    if(!isset($_POST["submit"])){
        exit("错误执行");
    }//检测是否有submit操作 

    include('connect.php');//链接数据库
    $name = $_POST['name'];//post获得用户名表单值
    $passowrd = $_POST['password'];//post获得用户密码单值
    if ($name && $passowrd){//如果用户名和密码都不为空
             $sql = "select * from user where username = '$name' and password='$passowrd'";//检测数据库是否有对应的username和password的sql
             $result =mysqli_query($con,$sql);//执行sql
             $rows=mysqli_num_rows($result);//返回一个数值
             if($rows){
                   header("refresh:0;url=http://192.168.137.1:8080/taobao/index.html");//如果成功跳转至首页.html页面
                   exit;
             }else{
                echo "用户名或密码错误";
                echo "
                    <script>
                            setTimeout(function(){window.location.href='http://192.168.137.1:8080/taobao/haohuo.html';},1000);
							alert('用户名或密码错误');
                    </script>

                ";//如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
             }
             

    }else{//如果用户名或密码有空
                echo "输入有误";
                echo "
                       <script>
                             setTimeout(function(){window.location.href='http://192.168.137.1:8080/taobao/haohuo.html';},1000);
							 alert('用户名或密码为空');
                       </script>";
                        //如果错误使用js 1秒后跳转到登录页面重试，让其从新进行输入
    }

    mysqli_close($con);//关闭数据库
?>