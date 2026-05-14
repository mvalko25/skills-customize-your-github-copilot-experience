// Get references to DOM elements
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');
const resetBtn = document.getElementById('resetBtn');
const messageEl = document.getElementById('message');
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('nameInput');
const formOutput = document.getElementById('formOutput');
const hiddenContent = document.getElementById('hiddenContent');

// Original message (to restore on reset)
const originalMessage = messageEl.textContent;

// TODO: Add click event handler for "Change Text" button
// Instructions:
// - Listen for clicks on changeTextBtn
// - Change the text content of messageEl to something new
// - Example: "You clicked the button! The text has changed."
changeTextBtn.addEventListener('click', function() {
    // Your code here
});

// TODO: Add click event handler for "Toggle Visibility" button
// Instructions:
// - Listen for clicks on toggleVisibilityBtn
// - Toggle the 'visible' class on hiddenContent
// - Hint: Use classList.toggle() method
toggleVisibilityBtn.addEventListener('click', function() {
    // Your code here
});

// TODO: Add click event handler for "Reset" button
// Instructions:
// - Listen for clicks on resetBtn
// - Restore the original message text
// - Hide the hidden content section
// - Clear the form
resetBtn.addEventListener('click', function() {
    // Your code here
});

// TODO: Add form submission handler
// Instructions:
// - Listen for the 'submit' event on userForm
// - Prevent the default form submission with preventDefault()
// - Get the value from nameInput
// - Display a personalized message in formOutput (e.g., "Welcome, [name]!")
// - Show the formOutput element by setting its display or removing 'display: none'
// - Clear the input field
userForm.addEventListener('submit', function(event) {
    // Your code here
});

// TODO (Optional - Stretch Goal): Add local storage to persist user data
// Instructions:
// - Save the user's name to localStorage when they submit the form
// - Load and display the saved name when the page loads
// - Allow users to clear their saved data with the reset button

console.log('JavaScript loaded successfully!');
