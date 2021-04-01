function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="123")
{
    alert("login succesfully");
    
    // window.open('index.2html');

}
else
{
    alert("login failed");
}


}