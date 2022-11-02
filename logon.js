const validate=()=>{
    var user=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    if(user=="" && pass=="")
    { 
        let message='invalid';
        document.getElementById('user_valid').innerHTML=message;
    }
    else
    {
      var data=JSON.parse(localStorage.getItem('details'));
      data.forEach((element) => {
          if(user=== element.UserName && pass===element.Password)
          {
            window.location.href='dashboard.html';
          }
         
      });
      
      
    }
}
