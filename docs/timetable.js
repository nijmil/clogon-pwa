// Workshop Data
const workshopsByDay = {
    day1: [
        { id: 1, title: "SOCIAL DANCING", time: "7:30 PM", level: "All Levels", instructor: "ALL", hall: "Hall 1" },
        
    ],
    day2: [
        { id: 2, title: "SKIP TO MY LOU (Interactive)", time: "8:45-9:40 am", level: "Easy Intermediate", instructor: "Janice Hanzel", hall: "Hall 1" },
        { id: 3, title: "ADVANCED STEP WORKSHOP", time: "8:45-9:40 am", level: "Advanced", instructor: "Amanda, Bronte, Nathan & Peter", hall: "Hall 2" },
        { id: 4, title: "HELL ON THE HEART", time: "9:50-10:30 am", level: "Easy Intermediate", instructor: "Gabrielle Barnier", hall: "Hall 1" },
        { id: 5, title: "LIVING NEXT DOOR TO ALICE", time: "9:50-10:30 am", level: "Basic +3", instructor: "Nev Flegg", hall: "Hall 2" },
        { id: 6, title: "MORNING TEA", time: "10:30-10:45 am", level: "Super Easy", instructor: "None", hall: "Outside" },
        { id: 7, title: "TEXAS HOLD 'EM", time: "10:45-11:25 am", level: "Easy Intermediate", instructor: "Shirley Smith", hall: "Hall 1" },
        { id: 8, title: "Soul", time: "10:45-11:25 am", level: "Intermediate", instructor: "Lynda Turner", hall: "Hall 2" },
        { id: 9, title: "BLUEGRASS RADIO", time: "11:35-12:15 pm", level: "Intermediate", instructor: "Janice Hanzel", hall: "Hall 1" },
        { id: 10, title: "SUMMER NIGHTS", time: "11:35-12:15 pm", level: "Advanced", instructor: "Irmgard Huddy", hall: "Hall 2" },
        { id: 11, title: "LUNCH", time: "12:30-1:30 pm", level: "Super Easy", instructor: "None", hall: "Dining Hall" },
        { id: 12, title: "STILL IN LOVE WITH YOU", time: "1:30-2:10 pm", level: "Intermediate", instructor: "Chris Anderson", hall: "Hall 1" },
        { id: 13, title: "WHOOPS", time: "1:30-2:10 pm", level: "Basic +", instructor: "Amanda Lim", hall: "Hall 2" },
        { id: 14, title: "DREAMING", time: "2:20-3:00 pm", level: "Easy Intermediate", instructor: "Jenny Neal", hall: "Hall 1" },
        { id: 15, title: "GLITTER & GOLD", time: "2:20-3:00 pm", level: "Advanced", instructor: "Cheryl Holland & Peter Wee", hall: "Hall 2" },
        { id: 16, title: "AFTERNOON TEA", time: "3:00-3:15 pm", level: "Super Easy", instructor: "N/A", hall: "Outside" },
        { id: 17, title: "SAY YOU'LL BE THERE", time: "3:15-4:00 pm", level: "Easy Intermediate", instructor: "Josh King", hall: "Hall 1" },
        { id: 18, title: "LOLLIPOP", time: "3:15-4:00 pm", level: "Basic +", instructor: "Lyn Mitchell (taught by Irmgard Huddy)", hall: "Hall 2" },
        { id: 19, title: "I SEE COUNTRY VIDEO SHOOT", time: "4:00 pm", level: "Easy Intermediate", instructor: "N/A", hall: "Outside" },
        { id: 20, title: "DINNER", time: "6:00 pm", level: "Super Easy", instructor: "N/A", hall: "Dining Hall" },
        { id: 21, title: "SOCIAL DANCING", time: "7:30 pm", level: "All Levels", instructor: "ALL", hall: "Hall 1" },
    ],
    day3: [
        { id: 22, title: "TOGETHER", time: "9:00-9:40 am", level: "Intermediate Plus", instructor: "Nathan Ballard", hall: "Hall 1" },
        { id: 23, title: "VINCERO", time: "9:00-9:40 am", level: "Easy Intermediate", instructor: "Lindsay Rogers", hall: "Hall 2" },
        { id: 24, title: "POUR ME A DRINK", time: "9:50-10:30 am", level: "Intermediate", instructor: "Toni Trott", hall: "Hall 1" },
        { id: 25, title: "BACK TO LIFE", time: "9:50-10:30 am", level: "Advanced", instructor: "Peter Wee", hall: "Hall 2" },
        { id: 26, title: "MORNING TEA", time: "10:30-10:45 am", level: "Super Easy", instructor: "None", hall: "Outside" },
        { id: 27, title: "SHAKE SHAKE", time: "10:45-11:25 am", level: "Easy Intermediate", instructor: "Christine Collins", hall: "Hall 1" },
        { id: 28, title: "A BAR SONG", time: "10:45-11:25 am", level: "Basic +", instructor: "Cheryl Holland", hall: "Hall 2" },
        { id: 29, title: "ELECTRIC ENERGY", time: "11:30-12:10 am", level: "Easy Intermediate", instructor: "Nev Flegg", hall: "Hall 1" },
    
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
    workshopsDiv.style.display = 'block';
    workshopsDiv.innerHTML = '';

    // Load workshops for the selected day
    const workshops = workshopsByDay[dayId];

    if (workshops && workshops.length > 0) {
        workshops.forEach(workshop => {
            const workshopDiv = document.createElement('div');
            workshopDiv.className = 'workshop';
            workshopDiv.innerHTML = `
                <h3 class="centered">${workshop.title}</h3>
                <p class="centered">${workshop.time}</p>
                <p class="centered">${workshop.level}</p>
                <p class="centered">${workshop.instructor}</p>
                <p class="centered">${workshop.hall}</p>
                <button onclick="addToProgram('${JSON.stringify({...workshop, day: dayId})}')">Add to My Program</button>
            `;
            workshopsDiv.appendChild(workshopDiv);
        });
    } else {
        workshopsDiv.innerHTML = '<p>No workshops available for this day.</p>';
    }
}

// Add workshop to localStorage
function addToProgram(workshopString) {
    const workshop = JSON.parse(workshopString);
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    
    // Check if the workshop is already in the user's program
    if (!myProgram.some(w => w.id === workshop.id)) {
        myProgram.push(workshop);
        localStorage.setItem('myProgram', JSON.stringify(myProgram));
        alert(`${workshop.title} has been added to your program.`);
    } else {
        alert(`${workshop.title} is already in your program.`);
    }
}

// Call displayMyProgram on page load
window.onload = function() {
    showDay('day1');
    
    // Attach event listeners to buttons for day navigation
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => showDay(button.getAttribute('data-day')));
    });
};
