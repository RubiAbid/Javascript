let titleInput = document.querySelector(".input_title");
let descriptionInput = document.querySelector(".input_des");
let colorInput = document.querySelector(".input_color"); // Select the color input
let addButton = document.querySelector(".add_btn");
let container = document.querySelector(".box_container");  
let defaultNote = document.getElementById("default-note"); 

addButton.addEventListener("click", () => {
    let titleText = titleInput.value;
    let descriptionText = descriptionInput.value;
    let noteColor = colorInput.value; // Get the selected color

    if (titleText === "") {
        alert("Please enter a title");
        return;
    }
    if (descriptionText === "") {
        alert("Please enter a description");
        return;
    }

    if (defaultNote) {
        defaultNote.style.display = "none";
    }

    let newNote = document.createElement("div");
    newNote.className = "note w-full sm:w-[45%] md:w-[30%] border-2 rounded-md flex flex-col items-center gap-4 p-4 shadow";
    newNote.style.backgroundColor = noteColor; // Apply the selected color

    newNote.innerHTML = `
        <h5 class="note-title w-full text-center p-2 text-black font-semibold rounded-md">${titleText}</h5>
        <p class="note-description text-black text-sm p-2">${descriptionText}</p>
        <div class="flex flex-col w-full items-center gap-2">
            <input type="color" class="color-picker w-full h-8 rounded-md border-2 border-gray-300 cursor-pointer" value="${noteColor}">
            <div class="flex flex-row gap-3 w-full">
                <button class="del_btn w-full h-[5vh] bg-red-500 text-white rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300">❌ Delete</button>
                <button class="update_btn w-full h-[5vh] bg-green-500 text-white rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">✏️ Update</button>
            </div>
        </div>`;

    container.appendChild(newNote);

    // ✅ Reset input fields after adding the note
    titleInput.value = "";
    descriptionInput.value = "";
    colorInput.value = "#ffffff"; // Reset color picker to default

    // ✅ Delete functionality
    let delButton = newNote.querySelector(".del_btn");
    delButton.addEventListener("click", () => {
        newNote.remove();
        if (container.querySelectorAll(".note").length === 0) {
            defaultNote.style.display = "block";
        }
    });

    // ✅ Update functionality 
    let updateButton = newNote.querySelector(".update_btn");
    let noteTitle = newNote.querySelector(".note-title");
    let noteDescription = newNote.querySelector(".note-description");
    let noteColorPicker = newNote.querySelector(".color-picker");

    updateButton.addEventListener("click", () => {
        let newTitle = prompt("Enter new title:", noteTitle.innerText);
        let newDescription = prompt("Enter new description:", noteDescription.innerText);
        let newColor = noteColorPicker.value; // Get the new selected color

        if (newTitle) noteTitle.innerText = newTitle;
        if (newDescription) noteDescription.innerText = newDescription;

        // Update background color
        newNote.style.backgroundColor = newColor;
    });

    // ✅ Allow color to change instantly when the picker is updated
    noteColorPicker.addEventListener("input", () => {
        newNote.style.backgroundColor = noteColorPicker.value;
    });
});
