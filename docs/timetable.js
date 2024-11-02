// Sample workshop data
const workshopsByDay = {
    day1: [
        { id: 1, title: "Intro to Clogging", time: "10:00 AM" },
        { id: 2, title: "Beginner Workshop", time: "11:30 AM" },
    ],
    day2: [
        { id: 3, title: "Intermediate Techniques", time: "10:00 AM" },
        { id: 4, title: "Advanced Techniques", time: "11:30 AM" },
    ],
    day3: [
        { id: 5, title: "Dance Routine Workshop", time: "10:00 AM" },
        { id: 6, title: "Showcase Performance", time: "2:00 PM" },
    ]
};

// Function to display workshops for a selected day
function showDay(dayId) {
    // Hide all day contents
    document.querySelectorAll('.day-content').forEach(content => {
        content.style.display = 'none';
    });
    // Show the selected day content
    document.getElementById(dayId).style.display = 'block';

    // Load workshops for the selected day
    const workshopsDiv = document.getElementById(dayId);
    workshopsDiv.innerHTML = ''; // Clear previous content

    workshopsByDay[dayId].forEach(workshop => {
        const workshopDiv = document.createElement('div');
        workshopDiv.className = 'workshop';
        workshopDiv.innerHTML = `
            <h3>${workshop.title}</h3>
            <p>Time: ${workshop.time}</p>
            <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
        `;
        workshopsDiv.appendChild(workshopDiv);
    });
}

// Add workshop to localStorage (same as previous example)
function addToProgram(id) {
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    const workshop = Object.values(workshopsByDay)
                           .flat()
                           .find(w => w.id === id);
    if (!myProgram.some(w => w.id === workshop.id)) {
        myProgram.push(workshop);
        localStorage.setItem('myProgram', JSON.stringify(myProgram));
        alert(`${workshop.title} has been added to your program.`);
    } else {
        alert(`${workshop.title} is already in your program.`);
    }
}



