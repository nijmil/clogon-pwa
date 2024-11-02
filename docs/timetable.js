// Load workshops for a specific day
function loadWorkshops(day) {
    const dayDiv = document.getElementById(day);
    dayDiv.innerHTML = ''; // Clear previous content

    workshops[day].forEach(workshop => {
        const workshopDiv = document.createElement('div');
        workshopDiv.className = 'workshop';
        workshopDiv.innerHTML = `
            <h3>${workshop.title}</h3>
            <p>${workshop.time}</p>
            <p>${workshop.level}</p>
            <p>${workshop.instructor}</p>
            <p>${workshop.hall}</p>
            <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
        `;
        dayDiv.appendChild(workshopDiv);
    });
}

// Show specific day's workshops
function showDay(dayId) {
    const days = document.querySelectorAll('.day-content');
    const buttons = document.querySelectorAll('.tab-button');

    days.forEach(day => day.style.display = 'none');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(dayId).style.display = 'block';
    document.querySelector(`button[data-day="${dayId}"]`).classList.add('active');

    loadWorkshops(dayId); // Load workshops for the selected day
}

// Add workshop to localStorage
function addToProgram(workshopId) {
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    const workshop = Object.values(workshops).flat().find(w => w.id === workshopId);

    // Check if the workshop is already in the user's program
    if (!myProgram.some(w => w.id === workshopId)) {
        myProgram.push(workshop);
        localStorage.setItem('myProgram', JSON.stringify(myProgram));
        alert(`${workshop.title} has been added to your program.`);
        displayMyProgram(); // Update the display of the personal program
    } else {
        alert(`${workshop.title} is already in your program.`);
    }
}

// Display the user's program
function displayMyProgram() {
    const myProgramDiv = document.getElementById('myProgram');
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    
    myProgramDiv.innerHTML = ''; // Clear previous content

    if (myProgram.length === 0) {
        myProgramDiv.innerHTML = '<p>No workshops added to your program.</p>';
    } else {
        myProgram.forEach(workshop => {
            const workshopDiv = document.createElement('div');
            workshopDiv.className = 'workshop';
            workshopDiv.innerHTML = `
                <h3>${workshop.title}</h3>
                <p>${workshop.time}</p>
                <p>${workshop.level}</p>
                <p>${workshop.instructor}</p>
                <p>${workshop.hall}</p>
            `;
            myProgramDiv.appendChild(workshopDiv);
        });
    }
}

// Initialize the app on page load
window.onload = function() {
    showDay('day1'); // Show the first day's workshops on load
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => showDay(button.getAttribute('data-day')));
    });
    displayMyProgram(); // Display any previously added workshops
};