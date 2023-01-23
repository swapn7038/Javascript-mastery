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
