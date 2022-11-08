
var p_name = sessionStorage.getItem("uname");
document.getElementById("username").innerHTML = p_name;
var Arr = JSON.parse(localStorage.getItem('details'));

for (let i = 0; i < Arr.length; i++) {
    var table = document.getElementById("data_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = Arr[i].client_id;
    cell2.innerHTML = Arr[i].Client;
    cell3.innerHTML = Arr[i].UserName;
    cell4.innerHTML = Arr[i].EmailId;
    cell5.innerHTML = '<button class="btn btn-info p-1" onclick="upd(this)">Update</button>&nbsp&nbsp<button class="btn btn-danger p-1" onclick="del(this)">Delete</button>';


}
const del = (r) => {
    var index = r.parentNode.parentNode.rowIndex;
    //  document.getElementById("data_table").deleteRow(index);
    let c_id = document.getElementById("data_table").rows[index].cells[2].innerHTML;
    let c_id1 = document.getElementById("data_table").rows[index].cells[3].innerHTML;
     for(let p=0;p<Arr.length;p++)
    {
        
        if(c_id1 === Arr[p].EmailId && c_id ===Arr[p].UserName)
        {
            Arr.splice(p,1);
            localStorage.setItem("details",JSON.stringify(Arr));
            window.location.href="dashboard.html";
           
        }
    }

}

const upd = (k) => {
    D = k.parentNode.parentNode.rowIndex;
     u_name = document.getElementById('data_table').rows[D].cells[2].innerHTML;
     e_name = document.getElementById('data_table').rows[D].cells[3].innerHTML;
    document.getElementById('user').value = u_name;
    document.getElementById('emailid').value = e_name;
}

const save = () => {
    let unam = document.getElementById('user').value;
    let pswad = document.getElementById('emailid').value;
   for(let s=0;s<Arr.length;s++)
   {
   if(u_name=== Arr[s].UserName && e_name===Arr[s].EmailId)
   {
    Arr[s].UserName = unam;
    Arr[s].EmailId = pswad;
   }
}
    localStorage.setItem('details', JSON.stringify(Arr));
    document.getElementById('data_table').rows[D].cells[2].innerHTML = unam;
    document.getElementById('data_table').rows[D].cells[3].innerHTML = pswad;
    window.location.href="dashboard.html";
}
const search = () => {
    var key = document.getElementById('search_box').value.toUpperCase();
    
    for(let i=0;i<=Arr.length;i++)
    {
    var row=document.getElementById('data_table').rows[i].cells[2].innerHTML.toUpperCase();
     if(row.indexOf(key)>-1)
     {
        document.getElementById('data_table').rows[i].style.display='';
     }
     else{
        document.getElementById('data_table').rows[i].style.display='none';
     }

    }
       
}



