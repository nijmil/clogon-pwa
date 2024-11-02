// Workshop Data
const workshopsByDay = {
    day1: [
        { id: 1, title: "Check In", time: "5:00 PM", level: "All Levels", instructor: "ALL", hall: "Not Applicable" },
        { id: 2, title: "Social Dancing", time: "7:30 PM", level: "All Levels", instructor: "ALL", hall: "Hall ONE" },
        
    ],
    day2: [
        { id: 3, title: "SKIP TO MY LOU (Interactive)", time: "8:45-9:40 am", level: "Easy Intermediate", instructor: "Janice Hanzel", hall: "Hall ONE" },
        { id: 4, title: "ADVANCED STEP WORKSHOP", time: "8:45-9:40 am", level: "Advanced", instructor: "Amanda, Bronte, Nathan & Peter", hall: "Hall TWO" },
        { id: 5, title: "HELL ON THE HEART", time: "9:50-10:30 am", level: "Easy Intermediate", instructor: "Gabrielle Barnier", hall: "Hall ONE" },
        { id: 6, title: "LIVING NEXT DOOR TO ALICE", time: "9:50-10:30 am", level: "Basic +3", instructor: "Nev Flegg", hall: "Hall TWO" },
        { id: 7, title: "MORNING TEA", time: "10:30-10:45 am", level: "Super Easy", instructor: "None", hall: "Outside" },
        { id: 8, title: "TEXAS HOLD 'EM", time: "10:45-11:25 am", level: "Easy Intermediate", instructor: "Shirley Smith", hall: "Hall ONE" },
        { id: 9, title: "Soul", time: "10:45-11:25 am", level: "Intermediate", instructor: "Lynda Turner", hall: "Hall TWO" },
        { id: 10, title: "BLUEGRASS RADIO", time: "11:35-12:15 pm", level: "Intermediate", instructor: "Janice Hanzel", hall: "Hall ONE" },
        { id: 11, title: "SUMMER NIGHTS", time: "11:35-12:15 pm", level: "Advanced", instructor: "Irmgard Huddy", hall: "Hall TWO" },
        { id: 12, title: "LUNCH", time: "12:30-1:30 pm", level: "Super Easy", instructor: "None", hall: "Dining Hall" },
        { id: 13, title: "STILL IN LOVE WITH YOU", time: "1:30-2:10 pm", level: "Intermediate", instructor: "Chris Anderson", hall: "Hall ONE" },
        { id: 14, title: "WHOOPS", time: "1:30-2:10 pm", level: "Basic +", instructor: "Amanda Lim", hall: "Hall TWO" },
        { id: 15, title: "DREAMING", time: "2:20-3:00 pm", level: "Easy Intermediate", instructor: "Jenny Neal", hall: "Hall ONE" },
        { id: 16, title: "GLITTER & GOLD", time: "2:20-3:00 pm", level: "Advanced", instructor: "Cheryl Holland & Peter Wee", hall: "Hall TWO" },
        { id: 17, title: "AFTERNOON TEA", time: "3:00-3:15 pm", level: "Super Easy", instructor: "N/A", hall: "Outside" },
        { id: 18, title: "SAY YOU'LL BE THERE", time: "3:15-4:00 pm", level: "Easy Intermediate", instructor: "Josh King", hall: "Hall ONE" },
        { id: 19, title: "LOLLIPOP", time: "3:15-4:00 pm", level: "Basic +", instructor: "Lyn Mitchell (taught by Irmgard Huddy)", hall: "Hall TWO" },
        { id: 20, title: "I SEE COUNTRY VIDEO SHOOT", time: "4:00 pm", level: "Easy Intermediate", instructor: "N/A", hall: "Outside" },
        { id: 21, title: "DINNER", time: "6:00 pm", level: "Super Easy", instructor: "N/A", hall: "Dining Hall" },
    ],
    day3: [
        { id: 10, title: "Dance Routine Workshop", time: "10:00 AM", level: "Intermediate", instructor: "Emily Davis", hall: "Hall E" },
        { id: 11, title: "Showcase Performance", time: "2:00 PM", level: "All Levels", instructor: "Michael Wilson", hall: "Hall F" },
    ]
};

// Function to display workshops for a selected day
function showDay(dayId) {
    // Hide all day contents
    document.querySelectorAll('.day-content').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected day content
    const workshopsDiv = document.getElementById(dayId);
    workshopsDiv.style.display = 'block'; // Ensure the selected day is visible
    workshopsDiv.innerHTML = ''; // Clear previous content

    // Load workshops for the selected day
    const workshops = workshopsByDay[dayId];

    // Check if there are workshops to display
    if (workshops && workshops.length > 0) {
        workshops.forEach(workshop => {
            const workshopDiv = document.createElement('div');
            workshopDiv.className = 'workshop';
            workshopDiv.innerHTML = `
                <h3>${workshop.title}</h3>
                <p>${workshop.time}</p>  <!-- Updated line to show only time -->
                <p>Level: ${workshop.level}</p>
                <p>Instructor: ${workshop.instructor}</p>
                <p>Hall: ${workshop.hall}</p>
                <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
            `;
            workshopsDiv.appendChild(workshopDiv);
        });
    } else {
        workshopsDiv.innerHTML = '<p>No workshops available for this day.</p>'; // Handle no workshops case
    }
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




