const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert('Write something in the input box');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    //when the li is clicked anywhere it will check/uncheck the item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    //when the span(X) is hit, it will call the remove function that removes the li
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save the data in local browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//to display the data again whenever the web is loaded or opened again
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();