const register = () => {
    var employee = document.getElementById('log').value;
    var email = document.getElementById('email').value.trim();
    var user = document.getElementById('user').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var conpass = document.getElementById('c_pass').value.trim();
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var regEx = /^[0-9A-Z]/;
    var msg1 = 'Created Successfully';
    var msg2 = 'Enter The Same Password'
    var msg3 = 'Username exist';
    var msg4 = 'Password must [a-zA-Z0-9!@#$%^&*] following characters';
    var msg5 = 'Please Fill The Details' 
    var Arr = JSON.parse(localStorage.getItem('details'));
    const date=new Date();
    if (email === '' && user === '' && pass === '' && conpass === '') {
        document.getElementById('deta').innerHTML = msg5;
    }
    else if (pass !== conpass) {

        document.getElementById('conpa').innerHTML = msg2;
    }
    else if (!regEx.test(user)) {
        Arr.forEach((element) => {
            if (user === element.UserName) {
                document.getElementById('usn').innerHTML = msg3;
                const date=new Date();
            }
        });
    }
    else if (!regularExpression.test(pass)) {
        document.getElementById('pa_v').innerHTML = msg4;
    }

    else {
        if (Arr == null) {
            var id = 1;
        } else {
            let i = 1;
            var id = Arr.length + i;
        }
        document.getElementById('pa_v').innerHTML = msg1;
        const obj = {
            client_id: id,
            Client: employee,
            UserName: user,
            EmailId: email,
            Password: pass,
            register: date
        };

        if (Arr == null) {
            localStorage.setItem('details', JSON.stringify([obj]));
            window.location.href='logon.html';  
        }
        else {
            
            Arr.unshift(obj);
            localStorage.setItem('details', JSON.stringify(Arr));
            window.location.href='logon.html';
        }

    }

}