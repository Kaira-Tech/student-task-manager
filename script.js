const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

if (!(taskForm instanceof HTMLFormElement)) {
    throw new Error("Task form (#task-form) was not found.");
}

if (!(taskInput instanceof HTMLInputElement)) {
    throw new Error("Task input (#task-input) was not found.");
}

if (!(taskList instanceof HTMLUListElement)) {
    throw new Error("Task list (#task-list) was not found.");
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const description = taskInput.value.trim();
    if (!description) {
        taskInput.focus();
        return;
    }

    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const removeButton = document.createElement("button");

    taskText.textContent = description;
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove task: ${description}`);
    removeButton.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.append(taskText, removeButton);
    taskList.append(taskItem);
    taskForm.reset();
    taskInput.focus();
});