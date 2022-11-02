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
        console.log('enter det');
    }
    else if(!regEx.test(user))
    {
        Arr.forEach((element) => {
            if(user===element.UserName)
            {
                alert('already exists')
            }
        }); 
    }
    else if(!regularExpression.test(pass))
    {
        console.log('pass inavlid');
    }
    else if(pass!==conpass)
    {
        console.log('not same password');
    }
    else
    {
        console.log('valid email & password');
        const obj={
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
        }
         
    }
    
}