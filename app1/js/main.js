const head_text = document.querySelector("#head_text");
const link__ = document.querySelector("#link");
const note_message = document.querySelector("#note")
const item = document.querySelector("#item");
const allLinks = [];

function addNewLink() {
    var newlink = {
        head: head_text.value,
        link: link__.value,
        note: note_message.value,
    }
    allLinks.push(newlink);
    displayElements()
}
function displayElements() {
    var storage = "";
    for (var i = 0; i < allLinks.length; i++) {
        storage += `<div class="col-md-3 mb-4" >   
            <div class="p-2 border border-1 text-center " >
                    <h2>${allLinks[i].head}</h2>
                    <a href="${allLinks[i].link}"><i class="fa-brands fa-facebook"></i></a>
                    <p>${allLinks[i].note}</p>
                </div> </div>`
    }
    item.innerHTML = storage;
}