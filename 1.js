function r()
{
var username=document.getElementById("username");
var pass=document.getElementById("password");
if(username.value=="")
{
alert("�������û���");
username.focus();
return ;
}
else if(pass.value=="")
{
alert("����������");
return;
}
else if((pass.value=="xuenkang112600")&&(username.value=="EnchantedX"))
{
frm.submit();
}
else
{
alert("��¼ʧ�ܣ������û����������Ƿ�����");
return;
}
return true;
}