function temizle() {
    var select = event.currentTarget.parentNode;
        select.remove();
}

function deleteAll() {
    document.getElementById("listItem").innerHTML = "";
}

function addFunc() {
    var searchBar = document.getElementById("searchBar").value;
    var list = document.createElement("li");
    var textnode = document.createTextNode(searchBar);
    var deleteButton = document.createElement("span");
        deleteButton.setAttribute("class", "deleteButton")
    var trashCan = document.createElement("img");
        trashCan.setAttribute("src", "/Users/tayyip/Downloads/trash-solid.svg")
        trashCan.setAttribute("class", "trashCan")
    var toDoo = document.getElementById("listItem");

    if (searchBar != false) {
        deleteButton.onclick = (e) => {
            temizle(e.path[1]);

        };

        deleteButton.appendChild(trashCan);
        list.appendChild(textnode);
        list.appendChild(deleteButton);
        toDoo.appendChild(list);

        document.getElementById("searchBar").value = "";
    } else {

    }


}
