const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

btnEl.addEventListener("click", addNote);

function addNote() {
  const notes = getNotes();
  //   const notes = [];
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);

  saveNote(notes);
}

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete these note ?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNote(notes);
  appEl.removeChild(element);
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  JSON.parse(localStorage.getItem("note-app") || "[]");
}

// ============================ Rough Code ============================

// const btnEl = document.getElementById("btn");
// const appEl = document.getElementById("app");

// btnEl.addEventListener("click", addnote);

// function createNodeEl(id, content) {
//   const element = document.createElement("textarea");
//   element.classList.add("note");
//   element.placeholder = "Empty note";
//   element.value = content;
//   element.addEventListener("dblclick", () => {
//     const warning = confirm("Do you want to delete this note?");
//     if (warning === true) {
//       deleteNote(id, element);
//     }
//   });

//   element.addEventListener("input", () => {
//     updateNote(id, element.value);
//   });
// }

// function deleteNote() {
//   //
// }

// function updateNote() {
//   //
// }

// function addnote() {
//   const noteObj = {
//     id: Math.floor(Math.random() * 10000),
//     content: "",
//   };
//   const noteEl = createNodeEl(noteObj.id, noteObj.content);
//   appEl.insertBefore(noteEl, btnEl);
// }
