// const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("#project-form");
const projectName = document.querySelector("#name");
const projectLanguage = document.querySelector("#language");
const projectDate = document.querySelector("#date");
const projectStatus = document.getElementById("status");
const errorMessage = document.getElementById("error-message");

const table = document.getElementById("table");

//function to handle adding project when submitting the form
const handleAddProject = function (event) {
  event.preventDefault();
  if (
    projectName.value === "" ||
    projectLanguage.value === "" ||
    projectDate.value === "" ||
    projectStatus.value === ""
  ) {
    // projectName.focus();
    // projectLanguage.focus();
    // projectLanguage.focus();
    // projectStatus.focus();
    errorMessage.innerHTML = "<p>Please Fill in All the Parts</p>";
    errorMessage.style.border = "3px solid red";
    // console.log(errorMessage)
    return;
  } else {
    errorMessage.innerHTML = "";
    errorMessage.style.border = "";
    const tr = document.createElement("tr");
    table.appendChild(tr);

    const td1 = (document.createElement("td").textContent = projectName.value);
    tr.append(td1);
    projectName.value = "";
    // console.log(td1)

    const td2 = document.createElement("td");
    td2.textContent = projectLanguage.value;
    tr.appendChild(td2);
    projectLanguage.value = "";

    const td3 = document.createElement("td");
    td3.textContent = projectDate.value;
    tr.appendChild(td3);
    projectDate.value = "";

    const td4 = document.createElement("td");
    td4.textContent = projectStatus.value;
    tr.appendChild(td4);
    projectStatus.value = "";

    const td5 = document.createElement("td");
    const deleteLink = document.createElement("a");
    deleteLink.textContent = "🗑️";
    deleteLink.setAttribute("href", "#");
    deleteLink.style.backgroundColor="rgb(233, 238, 238)";
    deleteLink.style.textDecoration = "none";
    td5.appendChild(deleteLink);
    tr.appendChild(td5);
    deleteLink.addEventListener("click", function () {
      table.removeChild(tr);
    });

    const td6 = document.createElement("td");
    const editLink = document.createElement("a");
    editLink.textContent = "Edit";
    editLink.setAttribute("href", "#");
    editLink.style.backgroundColor="rgb(233, 238, 238)";
    editLink.style.color="blue";
    td6.appendChild(editLink);
    tr.appendChild(td6);
    // console.log(tr)
    // console.log(tr.parentElement)
    // console.log(tr.parentElement.parentElement)
    // console.log(tr.parentNode)
    editLink.addEventListener("click",handleEdit)

  }
  return table;
};

//function to handle the edit for each row
//I used the for loop on this function but did not get the desired result
function handleEdit(event){
event.preventDefault();
console.log(event.target.parentNode.parentNode)
 let selectedTr = event.target.parentNode.parentNode;

 var newProjectName = prompt("New Name of the project??")
 if (newProjectName === ""){
  newProjectName = projectName.value;
 } else{
selectedTr.firstChild.textContent= newProjectName ;
 }

//  projectName.value = selectedTr.firstChild.textContent
var newProjectLanguage = prompt("New Language of the project??")
if (newProjectLanguage === ""){
  newProjectLanguage = projectLanguage.value;
}else{
selectedTr.firstChild.nextSibling.textContent= newProjectLanguage ;
}

var newProjectDate = prompt("New Date of the project in YYYY-MM-DD format??")
if (newProjectDate === ""){
  newProjectDate = projectDate.value;
}else{
  selectedTr.firstChild.nextSibling.nextSibling.textContent= newProjectDate ;
}

var newProjectStatus = prompt("New Status of the project??")
if (newProjectStatus === ""){
  newProjectStatus = projectStatus.value;
}else {
  selectedTr.firstChild.nextSibling.nextSibling.nextSibling.textContent= newProjectStatus ;
}

//This part of for loop did not catch the correct td of table to adjust the content.
//  for (let i = 0; i < selectedTr.cells.length; i++) {
//   var tdContent = selectedTr.cells[i].textContent;

//   switch(i){
//     case 0:
//     projectName.value = tdContent;
//     break;
//     case 1: 
//     projectLanguage.value= tdContent;
//     break;
//     case 2:
//       projectDate.value = "";
//       break;
//     case 3:
//       projectStatus.value = tdContent;
//       break;
//       default:
//         break;
//   }
//  }

}

form.addEventListener("submit", handleAddProject);



//I used this function first but updated to the above listed one.
// function handleEdit(event){
//   event.preventDefault();
//   console.log(event.target.parentNode.parentNode)
//    let selectedTr = event.target.parentNode.parentNode;
  
//    var newProjectName = prompt("New Name of the project??")
//   selectedTr.firstChild.textContent= newProjectName ;
//   //  projectName.value = selectedTr.firstChild.textContent
//   //  console.log(projectName.value)
//   var newProjectLanguage = prompt("New Language of the project??")
//   selectedTr.firstChild.nextSibling.textContent= newProjectLanguage ;
//   //  projectLanguage.value = selectedTr.firstChild.nextSibling.textContent;
//   //  console.log(projectLanguage.value)
//   var newProjectDate = prompt("New Date of the project in YYYY-MM-DD format??")
//   selectedTr.firstChild.nextSibling.nextSibling.textContent= newProjectDate ;
//   //  projectDate.value = selectedTr.firstChild.nextSibling.nextSibling.textContent;
//   //  console.log(projectDate.value);
//   var newProjectStatus = prompt("New Status of the project??")
//   selectedTr.firstChild.nextSibling.nextSibling.nextSibling.textContent= newProjectStatus ;
//   //  projectStatus.value = selectedTr.firstChild.nextSibling.nextSibling.nextSibling.textContent;
//   //  console.log(projectStatus.value);
  
//   //  let newProjectName = projectName.value;
//   //  console.log(newProjectName)
//   //  let newProjectLanguage = projectLanguage.value;
//   // //  let newProjectDate = projectDate.value;
//   //  let newProjectStatus = projectStatus.value;
  
//   //  selectedTr.firstChild.textContent = newProjectName;
//   //  selectedTr.firstChild.nextSibling.textContent = newProjectLanguage;
//   // //  selectedTr.firstChild.nextSibling.nextSibling.textContent = newProjectDate;
//   //  selectedTr.firstChild.nextSibling.nextSibling.nextSibling.textContent = newProjectStatus;
  
//   }
  