"use strict";

// Function to display user information in a table.
function displayUsers(users) {
  const tableBody = document.getElementById('userTableBody');

  // Loop through each user in the provided array.
  users.forEach(user => {
    // Create a new row in the table.
    const row = tableBody.insertRow();

    // Display specific information for each user.
    // The information is organized in columns
    // This loop goes through each column and creates a cell for it.
    for (const field in user) {
      const cell = row.insertCell();

      if (field === 'address') {
        cell.textContent = user[field].street + ', ' + user[field].city;
      } else {
        cell.textContent = user[field];
      }
    }
  });
}

fetch('https://jsonplaceholder.typicode.com/users')

  // this .then converts it to JSON format.
  .then(response => response.json())
  // then i sue this to call the displayUsers function.
  .then(users => {
    // Display data for the first 6 users.
    // Slice(0, 6) means it takes the first 6 users from the array.
    displayUsers(users.slice(0, 6));
  })
  .catch(error => {
    console.error(`Error fetching users: ${error.message}`);
  });
