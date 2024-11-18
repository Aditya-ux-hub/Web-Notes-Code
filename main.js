const noteForm = document.getElementById("noteForm");
const title = document.getElementById("title");
const note = document.getElementById("note");
const notesContainer = document.getElementById("notesContainer");

let notes = [];  /*array*/

displayNotes();        
// calling to the function 



noteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const obj = {
    title: title.value,
    note: note.value,
    status: "Pending"
  };
  
  notes.push(obj);
  displayNotes();
});

function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((element, index) => {
    // for creating HTML Tags
    // const noteDiv = document.createElement("div");
    // const noteTitle = document.createElement("h3");
    // const noteContent = document.createElement("p");
    // const noteButtonDiv = document.createElement("div");
    // const noteButton = document.createElement("button");
    // noteButton.innerText = element.status;
    // // add class in div tag
    // noteDiv.classList.add("note");
    // // set array content in h3 and p
    // noteTitle.innerText = element.title;
    // noteContent.innerText = element.note;
    // // set array content in h3 and p
    // noteButtonDiv.appendChild(noteButton)
    // noteDiv.appendChild(noteTitle)
    // noteDiv.appendChild(noteContent)
    // noteDiv.appendChild(noteButtonDiv)
    // notesContainer.appendChild(noteDiv)

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
  document.getElementById('completedBtn').classList.add('btn-outline');
  document.getElementById('pendingBtn').classList.add('btn-outline');
  notes[i].status = "Completed";
  displayNotes();
}

function completedNotes() {
  notesContainer.innerHTML = '';
  document.getElementById('pendingBtn').classList.add('btn-outline');
  document.getElementById('completedBtn').classList.remove('btn-outline');
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
  notesContainer.innerHTML = '';
  document.getElementById('completedBtn').classList.add('btn-outline');
  document.getElementById('pendingBtn').classList.remove('btn-outline');
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

// const person = {
//     name: "Aditya",
//     age: 22,
//     phone: 12343,
// }

// alert(person.age)

// const emp = [
//     {
//         name: "aditya",
//         age : 22
//     }, {
//         name: "Suraj",
//         age: 20
//     }
// ]

// emp.forEach(elem=>{
//     console.log("name",  elem.name)
//     console.log("age",  elem.age)
// })

// Terrnary Operator

const isLoggedIn = true;

// if (isLoggedIn) {
//     console.log("Logged in")
// } else{
//   console.log("Not Logged In")
// }

isLoggedIn ? console.log("Logged in") : console.log("Not Logged In");
