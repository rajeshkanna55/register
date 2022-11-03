const validate=()=>{
    var user=document.getElementById("email").value.trim();
    var pass=document.getElementById("pass").value.trim();
    if(user==="" && pass==="")
    { 
        let show='please enter the username';
        let pds='please enter the password'
        document.getElementById('user_valid').innerHTML=show;
        document.getElementById('pass_valid').innerHTML=pds;
    }
    else
    {
      var Arr=JSON.parse(localStorage.getItem('details'));
       for(let i=0;i<Arr.length;i++)
       {
        if(Arr[i].UserName==undefined)
        {
          alert('please register');
        }
          if(user===Arr[i].UserName && pass===Arr[i].Password)
          {
             window.location.href="dashboard.html"; 
          }
         
      }
    }  
  
}

