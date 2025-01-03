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
    var User_birth_year= User_Birth_date_obj.getFullYear();
    var User_birth_month= User_Birth_date_obj.getMonth();
    var User_birth_day=User_Birth_date_obj.getDate();


    var age_by_year=current_year - User_birth_year;
    var age_by_month= User_birth_month - current_month;

        if(current_month < User_birth_month || current_month == User_birth_month ||current_day < User_birth_day ){
            age_by_year--;

        }

if(!User_Birth_date_str){
    alert("you can't left blank!");
}



else{
    $("#Y_age").text(age_by_year);
    $("#M_age").text(age_by_month);
    result.css("display","block");
}

  
     
});
