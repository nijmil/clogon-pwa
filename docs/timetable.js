// Workshop Data

const workshops = {
    day1: [
        { id: 1, day: "FRI 8 NOV", title: "SOCIAL DANCING", time: "7:30 PM", level: "All Levels", instructor: "ALL", hall: "Hall 1" },
        
    ],
    day2: [
        { id: 2, day: "SAT 9 NOV", title: "SKIP TO MY LOU (Interactive)", time: "8:45-9:40 am", level: "Easy Intermediate", instructor: "Janice Hanzel", hall: "Hall 1" },
        { id: 3, day: "SAT 9 NOV", title: "ADVANCED STEP WORKSHOP", time: "8:45-9:40 am", level: "Advanced", instructor: "Amanda, Bronte, Nathan & Peter", hall: "Hall 2" },
        { id: 4, day: "SAT 9 NOV", title: "HELL ON THE HEART", time: "9:50-10:30 am", level: "Easy Intermediate", instructor: "Gabrielle Barnier", hall: "Hall 1" },
        { id: 5, day: "SAT 9 NOV", title: "LIVING NEXT DOOR TO ALICE", time: "9:50-10:30 am", level: "Basic +3", instructor: "Nev Flegg", hall: "Hall 2" },
        { id: 6, day: "SAT 9 NOV", title: "MORNING TEA", time: "10:30-10:45 am", level: "Super Easy", instructor: "None", hall: "Outside" },
        { id: 7, day: "SAT 9 NOV", title: "TEXAS HOLD 'EM", time: "10:45-11:25 am", level: "Easy Intermediate", instructor: "Shirley Smith", hall: "Hall 1" },
        { id: 8, day: "SAT 9 NOV", title: "Soul", time: "10:45-11:25 am", level: "Intermediate", instructor: "Lynda Turner", hall: "Hall 2" },
        { id: 9, day: "SAT 9 NOV", title: "BLUEGRASS RADIO", time: "11:35-12:15 pm", level: "Intermediate", instructor: "Janice Hanzel", hall: "Hall 1" },
        { id: 10, day: "SAT 9 NOV", title: "SUMMER NIGHTS", time: "11:35-12:15 pm", level: "Advanced", instructor: "Irmgard Huddy", hall: "Hall 2" },
        { id: 11, day: "SAT 9 NOV", title: "LUNCH", time: "12:30-1:30 pm", level: "Super Easy", instructor: "None", hall: "Dining Hall" },
        { id: 12, day: "SAT 9 NOV", title: "STILL IN LOVE WITH YOU", time: "1:30-2:10 pm", level: "Intermediate", instructor: "Chris Anderson", hall: "Hall 1" },
        { id: 13, day: "SAT 9 NOV", title: "WHOOPS", time: "1:30-2:10 pm", level: "Basic +", instructor: "Amanda Lim", hall: "Hall 2" },
        { id: 14, day: "SAT 9 NOV", title: "DREAMING", time: "2:20-3:00 pm", level: "Easy Intermediate", instructor: "Jenny Neal", hall: "Hall 1" },
        { id: 15, day: "SAT 9 NOV", title: "GLITTER & GOLD", time: "2:20-3:00 pm", level: "Advanced", instructor: "Cheryl Holland & Peter Wee", hall: "Hall 2" },
        { id: 16, day: "SAT 9 NOV", title: "AFTERNOON TEA", time: "3:00-3:15 pm", level: "Super Easy", instructor: "N/A", hall: "Outside" },
        { id: 17, day: "SAT 9 NOV", title: "SAY YOU'LL BE THERE", time: "3:15-4:00 pm", level: "Easy Intermediate", instructor: "Josh King", hall: "Hall 1" },
        { id: 18, day: "SAT 9 NOV", title: "LOLLIPOP", time: "3:15-4:00 pm", level: "Basic +", instructor: "Lyn Mitchell (taught by Irmgard Huddy)", hall: "Hall 2" },
        { id: 19, day: "SAT 9 NOV", title: "I SEE COUNTRY VIDEO SHOOT", time: "4:00 pm", level: "Easy Intermediate", instructor: "N/A", hall: "Outside" },
        { id: 20, day: "SAT 9 NOV", title: "DINNER", time: "6:00 pm", level: "Super Easy", instructor: "N/A", hall: "Dining Hall" },
        { id: 21, day: "SAT 9 NOV", title: "SOCIAL DANCING", time: "7:30 pm", level: "All Levels", instructor: "ALL", hall: "Hall 1" },
    ],
    day3: [
        { id: 22, day: "SUN 10 NOV", title: "TOGETHER", time: "9:00-9:40 am", level: "Intermediate Plus", instructor: "Nathan Ballard", hall: "Hall 1" },
        { id: 23, day: "SUN 10 NOV", title: "VINCERO", time: "9:00-9:40 am", level: "Easy Intermediate", instructor: "Lindsay Rogers", hall: "Hall 2" },
        { id: 24, day: "SUN 10 NOV", title: "POUR ME A DRINK", time: "9:50-10:30 am", level: "Intermediate", instructor: "Toni Trott", hall: "Hall 1" },
        { id: 25, day: "SUN 10 NOV", title: "BACK TO LIFE", time: "9:50-10:30 am", level: "Advanced", instructor: "Peter Wee", hall: "Hall 2" },
        { id: 26, day: "SUN 10 NOV", title: "MORNING TEA", time: "10:30-10:45 am", level: "Super Easy", instructor: "None", hall: "Outside" },
        { id: 27, day: "SUN 10 NOV", title: "SHAKE SHAKE", time: "10:45-11:25 am", level: "Easy Intermediate", instructor: "Christine Collins", hall: "Hall 1" },
        { id: 28, day: "SUN 10 NOV", title: "A BAR SONG", time: "10:45-11:25 am", level: "Basic +", instructor: "Cheryl Holland", hall: "Hall 2" },
        { id: 29, day: "SUN 10 NOV", title: "ELECTRIC ENERGY", time: "11:30-12:10 am", level: "Easy Intermediate", instructor: "Nev Flegg", hall: "Hall 1" },
    
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

    console.log("Retrieved workshop:", workshop); // Log the retrieved workshop

    // Check if the workshop is already in the user's program
    if (!myProgram.some(w => w.id === workshopId)) {
        // Add the workshop object including 'day' to myProgram
        myProgram.push({
            id: workshop.id,
            day: workshop.day,         // Ensure 'day' is included
            title: workshop.title,
            time: workshop.time,
            level: workshop.level,
            instructor: workshop.instructor,
            hall: workshop.hall
        });
        localStorage.setItem('myProgram', JSON.stringify(myProgram));
        alert(`${workshop.title} has been added to your program.`);
    } else {
        alert(`${workshop.title} is already in your program.`);
    }
}

// Initialize the app on page load
window.onload = function() {
    showDay('day1'); // Show the first day's workshops on load
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => showDay(button.getAttribute('data-day')));
    });
};
