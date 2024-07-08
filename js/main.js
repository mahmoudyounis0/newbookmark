const head_text = document.querySelector("#head_text")
const link__ = document.querySelector("#link")
const message = document.querySelector("#note")
const element = document.querySelector("#item")
const allBooked = []

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
        displayAll();
        clear();
    }
}

function displayAll() {
    var storage = "";
    for (let i = 0; i < allBooked.length; i++) {
        storage += `    <div class="col-md-3 mb-4 text-center " >   
                <div class="p-2 border border-2 rounded-2">
                    <h2 class="mb-2">${allBooked[i].head}</h2>
                   
                    <p>${allBooked[i].message}</p>
                 
                   <div class="d-flex justify-content-between px-2">
                    <a href="${allBooked[i].link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square "></i></a>
                    <i onclick="edit(${i})" class="fa-regular fa-pen-to-square"></i>
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
    displayAll();
}
<i class="fa fa-address-card" aria-hidden="true"></i>