function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function addRow() {
         
    var myName = document.getElementById("name");
    
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= '<input type="button" value = "Edit" onClick="editRow(this)">';
    row.insertCell(1).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(2).innerHTML= myName.value;
    

}

function editRow(obj) {
     document.getElementById("myTableData").contentEditable = "true";

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.editRow(index);
   
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}
function addRow2(){

    var myName = document.getElementById("name2");
    
    var table = document.getElementById("myTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= '<input type="button" value = "Edit" onClick="editRow(this)">';
    row.insertCell(1).innerHTML= '<input type="button" value = "Delete" onClick="deleteRow(this)">';
    row.insertCell(2).innerHTML= myName.value;
    
   
}
function addTable() {

    var myTableDiv = document.getElementById("newboard");
    myTableDiv.innerHTML += '<p>    </p>' ;
    myTableDiv.innerHTML += '<p>Items :</p>';
    myTableDiv.innerHTML +='<input type="text" id="name2" placeholder="Enter info..">';
    myTableDiv.innerHTML +='<input type="button" id="add" value="Add" onclick="addRow2()">';
   myTableDiv.innerHTML += '<p><b>Current List ...</b></p>';

  var x = document.createElement("TABLE");
    x.border='1';
    x.cellpadding='2';
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
    var y,t,z;
    for(var i=0;i<3;i++){
    y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
    
     z = document.createElement("TD");
    
    document.getElementById("myTr").appendChild(z);
  if(i==2) { 
 t=document.createTextNode("To-Do");
z.appendChild(t);
// table id :myTab

}
}
    myTableDiv.appendChild(x);

}

function load() {
   
    console.log("Page load finished");

}
