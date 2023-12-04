var i = 0;
function creat() {
  let task = document.querySelector("input.task");
  if (
    task.value == "" ||
    task.value == " " ||
    task.value == "  " ||
    task.value == "   "
  ) {
    console.log("error:::task value error:(");
  } else {
    i += 1;
    console.log("done:::task has been added :)");
    let createdTask = ` <div class="task tasknum${i}" >
        <div class="div1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill doneTask" viewBox="0 0 16 16" onclick="checkTaskEnd(${i})">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <p class="descriptionTask">${task.value}</p>
        </div>
        <div class="div2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill ta3dil" viewBox="0 0 16 16" onclick="edit(${i})">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill zbala" onclick="delet(${i})" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></div>
    </div>`;
    let tasks = document.querySelector("div.tasks");
    tasks.innerHTML += createdTask;
    task.value = "";
  }
}
function delet(who = 0) {
  if (typeof (who == Number)) {
    document.querySelector(`div.tasknum${who}`).remove();
    console.log("done:::task has been removed :)");
  } else {
    console.log("error:::task wasn't removed");
  }
}
function edit(taskEdit = 0) {
  if ( document.querySelector(`div.tasknum${taskEdit} p.descriptionTask`).outerHTML ==
    `<p class="descriptionTask">${document.querySelector(`div.tasknum${taskEdit} p.descriptionTask`).textContent}</p>`&& document.querySelector(`div.tasknum${taskEdit} svg.bi-check-circle-fill`).style.color!=="rgb(3, 197, 19)") {
    let para = document.querySelector(`div.tasknum${taskEdit} p.descriptionTask` );
    let old = para.textContent;
    para.outerHTML = `<p class="descriptionTask" contenteditable="true">${old}</p>`;
    console.log("edit mode active");
  } 
  else if( document.querySelector(`div.tasknum${taskEdit} svg.bi-check-circle-fill`).style.color==="rgb(3, 197, 19)"){
    console.log("task alredy has been end:)")
    
    let para = document.querySelector(
      `div.tasknum${taskEdit} p.descriptionTask`
    );
    let old = para.textContent;
    para.outerHTML = `<p class="descriptionTask">${old}</p>`;

  }
  else {
    let para = document.querySelector(
      `div.tasknum${taskEdit} p.descriptionTask`
    );
    let old = para.textContent;
    para.outerHTML = `<p class="descriptionTask">${old}</p>`;
    console.log("task edit saved:)");
  }
}
function checkTaskEnd(taskCheck=0){
  document.querySelector(`div.tasknum${taskCheck} svg.bi-check-circle-fill`).style.color="rgb(3, 197, 19)";
  document.querySelector(`div.tasknum${taskCheck}`).style.borderColor ="rgb(3, 197, 19)";
  document.querySelector(`div.tasknum${taskCheck} svg.bi-pencil-fill`).style.borderColor ="rgb(3, 197, 19)";
  document.querySelector(`div.tasknum${taskCheck} svg.bi-trash-fill`).style.borderColor ="rgb(3, 197, 19)";

}
