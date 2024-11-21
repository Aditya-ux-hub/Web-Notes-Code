const noteForm = document.getElementById("noteForm");
const title = document.getElementById("title");
const note = document.getElementById("note");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem('notes')) || [];
displayNotes();

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const obj = {
    title: title.value,
    note: note.value,
    status: "Pending",
  };

  notes.push(obj);
  localStorage.setItem('notes', JSON.stringify(notes))
  displayNotes();
});



function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((element, index) => {
    let isPending = false;

    if (element.status == "Pending") {
      isPending = true;
    }

    const note = `<div class="note">
      <h3>${element.title}</h3>
      <p>${element.note}</p>
      <div>



         ${
           isPending
             ? `<button onclick="markAsCompleted('${index}')">Mark As Completed</button>`
             : "<b>Completed !!</b>"
         }
       
       </div>
      </div>`;
    notesContainer.innerHTML += note;
  });
}

function markAsCompleted(i) {
  notes[i].status = "Completed"; // array mein update
  localStorage.setItem('notes', JSON.stringify(notes)) //updated array in localstorage
  displayNotes();
}

function completedNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((element) => {
    if (element.status == "Completed") {
      const note = `<div class="note">
      <h3>${element.title}</h3>
      <p>${element.note}</p>
      <div>
       <b>Completed !!</b>
      </div>`;
      notesContainer.innerHTML += note;
    }
  });
}

function pendingNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((element, index) => {
    if (element.status == "Pending") {
      const note = `<div class="note">
      <h3>${element.title}</h3>
      <p>${element.note}</p>
      <div>
       <button onclick="markAsCompleted('${index}')">Mark As Completed</button>
      </div>`;
      notesContainer.innerHTML += note;
    }
  });
}



const btns = document.querySelectorAll('.btns button');

btns.forEach(element =>{
  element.addEventListener('click', function () {
    btns.forEach(elem=>{
      elem.classList.add('btn-outline');
    })
    element.classList.remove('btn-outline');
  })
})