const validate = () => {
  var user = document.getElementById("email").value.trim();
  var pass = document.getElementById("pass").value.trim();
  var show = 'please enter the username';
  var pds = 'please enter the password';
  if (user === "" && pass === "") {
    document.getElementById('user_valid').innerHTML = show;
    document.getElementById('pass_valid').innerHTML = pds;
  }
  else if (user === "" && pass !== "") {
    document.getElementById('user_valid').innerHTML = show;
  }
  else if (user !== "" && pass === "") {
    document.getElementById('pass_valid').innerHTML = pds;
  }

  else {
    var Arr = JSON.parse(localStorage.getItem('details'));
    if (Arr == null);
    {
      var acc = 'Please Create Account';
      document.getElementById('account').innerHTML = acc;
    }
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i].UserName == undefined) {
        document.getElementById('account').innerHTML = acc;
      }
      if (user === Arr[i].UserName && pass === Arr[i].Password) {
        window.location.href = "dashboard.html";
        sessionStorage.setItem("uname", user);
      }

    }

  }

}

