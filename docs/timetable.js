// Sample workshop data
const workshopsByDay = {
    day1: [
        { id: 1, title: "Check In", time: "5:00 PM", level: "All Levels", instructor: "Jane Doe", hall: "Hall A" },
        { id: 2, title: "Social Dancing", time: "7:30 PM", level: "Beginner", instructor: "John Smith", hall: "Hall B" },
    ],
    day2: [
        { id: 3, title: "Intermediate Techniques", time: "10:00 AM", level: "Intermediate", instructor: "Alice Johnson", hall: "Hall C" },
        { id: 4, title: "Advanced Techniques", time: "11:30 AM", level: "Advanced", instructor: "Robert Brown", hall: "Hall D" },
    ],
    day3: [
        { id: 5, title: "Dance Routine Workshop", time: "10:00 AM", level: "Intermediate", instructor: "Emily Davis", hall: "Hall E" },
        { id: 6, title: "Showcase Performance", time: "2:00 PM", level: "All Levels", instructor: "Michael Wilson", hall: "Hall F" },
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
            <p>Level: ${workshop.level}</p>
            <p>Instructor: ${workshop.instructor}</p>
            <p>Hall: ${workshop.hall}</p>
            <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
        `;
        workshopsDiv.appendChild(workshopDiv);
    });
}

// Add workshop to localStorage
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


