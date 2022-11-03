
var p_name=sessionStorage.getItem("uname");
document.getElementById("username").innerHTML=p_name;
var Arr=JSON.parse(localStorage.getItem('details'));
for(let i=0;i<Arr.length;i++) 
{   
    var table=document.getElementById("data_table");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    cell1.innerHTML= Arr[i].client_id;
    cell2.innerHTML=Arr[i].Client;
    cell3.innerHTML=Arr[i].UserName;
    cell4.innerHTML=Arr[i].EmailId;
    cell5.innerHTML='<button class="btn btn-info p-1" onclick="upd(this)">Update</button>&nbsp&nbsp<button class="btn btn-danger p-1" onclick="del(this)">Delete</button>';
}
const del=(r)=>{
    var index=r.parentNode.parentNode.rowIndex;
    document.getElementById("data_table").deleteRow(index);
    let c_id=document.getElementById("data_table").rows[index].cells[0].innerHTML;
    let D=c_id-1;
    Arr.splice(D,1);
    localStorage.setItem('details',JSON.stringify(Arr));

}

const upd=(k) =>{
       var val=k.parentNode.parentNode.rowIndex;
       let u_name=document.getElementById('data_table').rows[val].cells[2].value;
       let e_name=document.getElementById('data_table').rows[val].cells[3].value;
       document.getElementById('user').innerHTML=u_name;
       document.getElementById('emailid').innerHTML=e_name;
}
 