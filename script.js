//Event listener for Add task button
document.getElementById("add").addEventListener('click', function () {
    let value = document.getElementById("item").value;
    if (value) {
        addItemTodo(value);
        document.getElementById('item').value = '';
    } else {
        window.alert("Please add a valid task");
    }
})

// Function to delete a task
function removeItem() {
    let item = this.parentNode;
    let parent = item.parentNode;
    if (window.confirm("Are you want to delete this task?")) {
        parent.removeChild(item);
    }
    percentageChanger();
}

// Function to update the completed tasks
function taskCompleted() {
    let item = this.parentNode;
    let parent = item.parentNode;
    let list = document.getElementById('completed');
    list.insertBefore(item, list.childNodes[0]);
    percentageChanger();
}

function percentageChanger() {
    let list1 = document.getElementById('todo');
    let list2 = document.getElementById('completed');
    let length1 = list1.childElementCount;
    let length2 = list2.childElementCount;
    let pendingPercentage = document.getElementById('pendingPercentage');
    let completedPercentage = document.getElementById('completedPercentage');
    pendingPercentage.innerText = parseFloat(length1 / (length1 + length2) * 100).toFixed(2) + '%';
    completedPercentage.innerText = parseFloat(length2 / (length1 + length2) * 100).toFixed(2) + '%';
    if (length1 === 0 && length2 === 0) {
        pendingPercentage.innerText = '0%';
        completedPercentage.innerText = '0%';
    }

}

// Function to Add tasks
function addItemTodo(value) {
    let list = document.getElementById('todo');
    let item = document.createElement('li');
    item.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center w-25 p-2');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', taskCompleted);
    let itemContainer = document.createElement('span');
    itemContainer.innerText = value;
    itemContainer.setAttribute('class', 'pl-3');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', removeItem);
    item.appendChild(checkBox);
    item.appendChild(itemContainer);
    item.appendChild(deleteButton);
    list.insertBefore(item, list.childNodes[0]);
    percentageChanger();
}