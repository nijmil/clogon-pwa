// Sample workshops data categorized by days
const workshops = {
    day1: [
        { id: 1, day: "FRI", title: "Workshop A", time: "8:00-9:00 am", level: "Beginner", instructor: "Alice", hall: "Hall 1" },
        { id: 2, day: "FRI", title: "Workshop B", time: "9:30-10:30 am", level: "Intermediate", instructor: "Bob", hall: "Hall 2" },
    ],
    day2: [
        { id: 3, day: "SAT", title: "Workshop C", time: "8:45-9:40 am", level: "Easy Intermediate", instructor: "Janice", hall: "Hall 1" },
        { id: 4, day: "SAT", title: "Workshop D", time: "10:00-11:00 am", level: "Advanced", instructor: "Dave", hall: "Hall 2" },
    ],
    day3: [
        { id: 5, day: "SUN", title: "Workshop E", time: "9:00-10:00 am", level: "Beginner", instructor: "Eva", hall: "Hall 1" },
        { id: 6, day: "SUN", title: "Workshop F", time: "11:00-12:00 pm", level: "Intermediate", instructor: "Frank", hall: "Hall 2" },
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
            <h3>${workshop.day}</h3>
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

