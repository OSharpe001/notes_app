const addBtn = document.getElementById("add");
// console.log(addBtn);
addBtn.addEventListener("click", ()=> addNewNote());

const addNewNote = () => {
    // console.log("clicked");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="delete"></button>
        </div>
        <div class="hidden"></div>
        <textarea class=""></textarea>
    `;

    // DELETE BUTTON
    const deleteBtn = note.querySelector(".delete");
    console.log(deleteBtn);
    deleteBtn.addEventListener("click", ()=> {
        note.remove();
    })

    document.body.appendChild(note);
};
