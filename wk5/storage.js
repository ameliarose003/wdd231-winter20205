let tasks = [];
let currentUsername = "";

// Handle the tasks

function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
            <span data-action="delete">❎</span>
            <span data-action="complete">✅</span>
        </div>
    </li>
    `
}



function renderTasks(tasks) {
    // get the list element from the DOM
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    // loop through the tasks array. transform (map) each task object into the appropriate html to represent a to-do.
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function newTask() {
    //get the value entered into the #todo input
    const taskInput = document.querySelector("#todo");
    const taskDetail = taskInput.value;
    if (taskDetail.trim() === "") return;
    // add it to our arrays tasks
    tasks.push({ detail: taskDetail, completed: false });
    //render out the list
    renderTasks(tasks);
    updateLocalStorage();
    taskInput.value = "";
}

function removeTask(taskElement) {
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove();
    updateLocalStorage();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.querySelector('p').innerText
    );
    if (taskIndex > -1 ) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        taskElement.classList.toggle("strike");
        updateLocalStorage();
    }
}

function manageTasks(e) {
    // console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.action === "delete") {
        removeTask(parent);
    } else if (e.target.dataset.action === "complete") {
        completeTask(parent);
    }
}

// username code
function usernameTemplate(username) {
    return `<p class="user">${username}</p>`;
}

function renderUsername(username) {
    const display = document.querySelector("#userDisplay");
    display.innerHTML = usernameTemplate(username);
}

function updateLocalStorage() {
    if (currentUsername) {
        localStorage.setItem("todos_" + currentUsername, JSON.stringify(tasks));
    }
}

function loadLocalStorage() {
    if (currentUsername) {
        const stored = localStorage.getItem("todos_" + currentUsername);
        tasks = stored ? JSON.parse(stored) : [];
        renderTasks(tasks);
    }
}


// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

document.querySelector("#todo").addEventListener("keydown", function (i) {
    if (i.key === "Enter") {
        i.preventDefault();
        newTask();
    }
});

document.querySelector("#submitName").addEventListener("click", () => {
    const userInputElement = document.querySelector("#user");
    currentUsername = userInputElement.value.trim();
    if (currentUsername) {
        renderUsername(currentUsername);
        loadLocalStorage();
    }
    userInputElement.value = "";
});

document.querySelector("#user").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.querySelector("#submitName").click();
    }
})