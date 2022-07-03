

 function validation(){
     var un=document.getElementById("uname").value;
 if(un==""){
     document.getElementById("username").innerHTML="please fill it";
     return false;
 } 
     var fathername=document.getElementById("fname").value;
 if(fathername==""){
     document.getElementById("faname").innerHTML="please fill it";
     return false;
 } 
     var phone=document.getElementById("cnt").value;
 if(phone.length<11){
     document.getElementById("contact").innerHTML="phone must contain 11 digits";
     return false;
 } 
     var semester=document.getElementById("sem").value;
 if(semester>8){
     document.getElementById("semester").innerHTML="semester is between 1 to 8";
     return false;
 } 
     var result=document.getElementById("preresult").value;
 if(result>4){
     document.getElementById("presult").innerHTML="cgpa is between 0 to 4";
     return false;
 } 
else{
 return true;
}        
}
