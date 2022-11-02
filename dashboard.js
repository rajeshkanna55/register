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
    cell1.innerHTML= i=1;
    cell2.innerHTML=Arr[i].Client;
    cell3.innerHTML=Arr[i].UserName;
    cell4.innerHTML=Arr[i].EmailId;
    cell5.innerHTML='<button class="btn btn-info" onclick="">Update</button>';
}
