const result= $("#result");
result.css("display","none");

const date= new Date();
const current_year= date.getFullYear();
const current_month= date.getMonth();
const current_day= date.getDate();








const calculatebtn= $("button");


calculatebtn.on("click", function(){

    var User_Birth_date_str = $('input[type="date"]').val();  
    const User_Birth_date_obj = new Date(User_Birth_date_str);
    var User_year= User_Birth_date_obj.getFullYear();

    var age=current_year - User_year;
if(!User_Birth_date_str){
    alert("you can't left blank!")
}
else{
    $("#Y_age").text(age);
    result.css("display","block");
}

  
     
});


