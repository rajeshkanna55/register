const register=()=>{
    var employee=document.getElementById('log').value;
    var email=document.getElementById('email').value.trim();
    var user=document.getElementById('user').value.trim();
    var pass=document.getElementById('pass').value.trim();
    var conpass=document.getElementById('c_pass').value.trim();
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var regEx =/^[0-9A-Z]/;
    var Arr=JSON.parse(localStorage.getItem('details'));
    if(email==='' && user==='' && pass==='' && conpass===''){
        alert('enter det');
    }
    else if(pass!==conpass)
    {
        alert('not same password');
    }
    else if(!regEx.test(user))
    {
        Arr.forEach((element) => {
            if(user===element.UserName)
            {
                alert('already exists');
            }
        }); 
    }
    else if(!regularExpression.test(pass))
    {
        alert('pass inavlid');
    }
   
    else
    {
        if(Arr==null){
            var id=1;
        }else{
            let i=1;
            var id=Arr.length+i;
            console.log(id);
        }
        alert('valid email & password');
        const obj={
            client_id: id,
            Client: employee,
            UserName: user,
            EmailId: email, 
            Password: pass
        };
        
        if(Arr==null)
        {
            localStorage.setItem('details',JSON.stringify([obj]));
        }
        else
        {
            Arr.push(obj);
          localStorage.setItem('details',JSON.stringify(Arr));
          window.location.reload('logon.html');
        }
         
    }
    
}