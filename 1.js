function r()
{
var username=document.getElementById("username");
var pass=document.getElementById("password");
if(username.value=="")
{
alert("请输入用户名");
username.focus();
return ;
}
else if(pass.value=="")
{
alert("请输入密码");
return;
}
else if((pass.value=="xuenkang112600")&&(username.value=="EnchantedX"))
{
frm.submit();
}
else
{
alert("登录失败，请检查用户名和密码是否有误！");
return;
}
return true;
}