"use strict";

function getTodo() {
    const todoId = document.getElementById('toDoId').value;

    // Fetch data from the JsonPlaceholder API
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching ToDo: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            // Handle errors
            console.error(error.message);
            throw error; // Re-throw the error for further handling if needed
        });
}

function displayTodoInfo() {
    getTodo()
        .then(todo => {
            // Display ToDo information
            const todoInfoElement = document.getElementById('todoInfo');
            todoInfoElement.innerText = JSON.stringify(todo, null, 2);
        })
        .catch(error => {
            // Handle unexpected errors
            console.error(`Unexpected error: ${error.message}`);
        });
}

// Attach the event listener
const toDoButton = document.getElementById('getTodo');
toDoButton.onclick = displayTodoInfo;
