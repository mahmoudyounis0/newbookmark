const head_text = document.querySelector("#head_text")
const link__ = document.querySelector("#link")
const message = document.querySelector("#note")
const element = document.querySelector("#item")
const btn_insrt = document.querySelector("#btn_insrt")
const edit_btn = document.querySelector("#edit_btn")
const search_text = document.querySelector("#search_text");
let allBooked = []


if (localStorage.getItem('bookmarks')) {

    allBooked = JSON.parse(localStorage.getItem('bookmarks'));
    displayAll()

}
btn_insrt.addEventListener('click', addNewLink);

function addNewLink() {
    var newBookedLink = {};
    if (head_text.value == "") {
        head_text.placeholder = "pls enter valid data...";
    }
    else {
        newBookedLink = {
            head: head_text.value,
            link: link__.value,
            message: message.value

        }
        allBooked.push(newBookedLink);
        saveToLocalStorage();
        displayAll();
        clear();
    }
    if (btn_insrt.innerHTML == "Edit") {
        btn_insrt.innerHTML = "Add";
        clear();
    }

}

function displayAll() {
    var storage = "";
    for (let i = 0; i < allBooked.length; i++) {
        storage += `    <div class="col-md-3  " >   
                <div class="p-2 overflow-hidden border border-2 rounded-2 mb-4 text-center">
                    <h2 class="mb-2" id="marked">${allBooked[i].head}</h2>
                    <p id="marked">${allBooked[i].message}</p>
                    <div class="d-flex justify-content-between px-2">
                    <a href="${allBooked[i].link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square "></i></a>
                    <i onclick="edit(${i})" id="edit_btn" class="fa-regular fa-pen-to-square"></i>
                    <i onclick="deleteitem(${i})" class="fa-solid fa-trash text-danger"></i> </div>
                </div>
            </div>`
    }
    element.innerHTML = storage;
}

function clear() {
    head_text.value = "";
    link__.value = "";
    message.value = "";
}
function deleteitem(indx) {
    allBooked.splice(indx, 1);
    saveToLocalStorage();
    displayAll();
}
function edit(indx) {
    btn_insrt.innerHTML = "Edit"
    head_text.value = allBooked[indx].head;
    link__.value = allBooked[indx].link;
    message.value = allBooked[indx].message;
    btn_insrt.onclick = function () {
        if (btn_insrt.innerHTML == "Add") {
            addNewLink();
        }
        else {
            allBooked[indx].head = head_text.value;
            allBooked[indx].link = link__.value;
            allBooked[indx].message = message.value;
            saveToLocalStorage();
            displayAll();
            clear();
            btn_insrt.innerHTML = "Add"
        }
    }
}
function saveToLocalStorage() {
    localStorage.setItem('bookmarks', JSON.stringify(allBooked));
}
function search(search_item) {
    // let result = []
    // allBooked.filter((item) => {
    //     if (item.head.toLowerCase().includes(search_item)) {
    //             result.push(item)

    //     }

    // }); 
    // displayAll(result);
    var store = "";
    for (let i = 0; i < allBooked.length; i++) {
            if (allBooked[i].head.toLowerCase().includes(search_item)) {
                store += `    <div class="col-md-3  " >   
                <div class="p-2 overflow-hidden border border-2 rounded-2 mb-4 text-center">
                    <h2 class="mb-2" id="marked">${allBooked[i].head}</h2>
                    <p id="marked">${allBooked[i].message}</p>
                    <div class="d-flex justify-content-between px-2">
                    <a href="${allBooked[i].link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square "></i></a>
                    <i onclick="edit(${i})" id="edit_btn" class="fa-regular fa-pen-to-square"></i>
                    <i onclick="deleteitem(${i})" class="fa-solid fa-trash text-danger"></i> </div>
                </div>
            </div>`
            }
    }
    element.innerHTML = store;
}
