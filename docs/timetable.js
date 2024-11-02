// Sample workshops data categorized by days
const workshops = {
    day1: [
        { id: 1, title: "Workshop A", time: "8:00-9:00 am", level: "Beginner", instructor: "Alice", hall: "Hall 1", day: "FRI 8 Nov" },
        { id: 2, title: "Workshop B", time: "9:30-10:30 am", level: "Intermediate", instructor: "Bob", hall: "Hall 2", day: "FRI 8 Nov" },
    ],
    day2: [
        { id: 3, title: "Workshop C", time: "8:45-9:40 am", level: "Easy Intermediate", instructor: "Janice", hall: "Hall 1", day: "SAT 9 Nov" },
        { id: 4, title: "Workshop D", time: "10:00-11:00 am", level: "Advanced", instructor: "Dave", hall: "Hall 2", day: "SAT 9 Nov" },
    ],
    day3: [
        { id: 5, title: "Workshop E", time: "9:00-10:00 am", level: "Beginner", instructor: "Eva", hall: "Hall 1", day: "SUN 10 Nov" },
        { id: 6, title: "Workshop F", time: "11:00-12:00 pm", level: "Intermediate", instructor: "Frank", hall: "Hall 2", day: "SUN 10 Nov" },
    ],
};

// Load workshops for a specific day
function loadWorkshops(day) {
    const dayDiv = document.getElementById(day);
    dayDiv.innerHTML = ''; // Clear previous content

    workshops[day].forEach(workshop => {
        const workshopDiv = document.createElement('div');
        workshopDiv.className = 'workshop';
        workshopDiv.innerHTML = `
            <h3>${workshop.title}</h3>
            <p>Time: ${workshop.time}</p>
            <p>Level: ${workshop.level}</p>
            <p>Instructor: ${workshop.instructor}</p>
            <p>Hall: ${workshop.hall}</p>
            <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
        `;
        dayDiv.appendChild(workshopDiv);
    });
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
                <p>Day: ${workshop.day}</p>
                <p>Time: ${workshop.time}</p>
                <p>Level: ${workshop.level}</p>
                <p>Instructor: ${workshop.instructor}</p>
                <p>Hall: ${workshop.hall}</p>
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

