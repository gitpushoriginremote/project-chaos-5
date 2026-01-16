const tasks = [
    "Infiltrate the mainframe",
    "Dismantle the hierarchy",
    "Automate the coffee machine",
    "Overwrite the database",
    "Reboot the simulation"
];

const chaosBtn = document.getElementById('chaosBtn');
const output = document.getElementById('output');

chaosBtn.addEventListener('click', () => {
    // INTENTIONAL BUG: Off-by-one error. 
    // Math.random() * length + 1 will occasionally point to an index that doesn't exist.
    const randomIndex = Math.floor(Math.random() * tasks.length) + 1;
    
    const selectedTask = tasks[randomIndex];
    
    if (selectedTask) {
        output.innerText = `NEW DIRECTIVE: ${selectedTask.toUpperCase()}`;
    } else {
        output.innerText = "SYSTEM ERROR: ENTROPY OVERLOAD";
        console.error("Accessed index: " + randomIndex);
    }
});

// TODO: Implement user-added tasks
// TODO: Fix the navigation hover states