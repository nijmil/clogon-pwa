// Sample data for workshops and instructors
const workshops = [
    { id: 1, title: "Advanced Tap Routine", level: "Advanced", room: "Room A", instructor: "Jane Doe", time: "10:00 AM" },
    { id: 2, title: "Beginner Basics", level: "Beginner", room: "Room B", instructor: "John Smith", time: "11:00 AM" },
    { id: 3, title: "Intermediate Footwork", level: "Intermediate", room: "Room C", instructor: "Sarah Lee", time: "1:00 PM" }
];

const instructors = [
    { name: "Jane Doe", bio: "Advanced clogging instructor with 10 years of experience." },
    { name: "John Smith", bio: "Specializes in beginner routines to get you started." },
    { name: "Sarah Lee", bio: "Focuses on intermediate footwork and styling." }
];

// Display workshops in the timetable section
const timetableList = document.getElementById("timetable-list");
workshops.forEach(workshop => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${workshop.title}</strong> - ${workshop.level}, ${workshop.room}, ${workshop.time} <button onclick="saveToSchedule(${workshop.id})">Save</button>`;
    timetableList.appendChild(item);
});

// Display instructors in the instructors section
const instructorsList = document.getElementById("instructors-list");
instructors.forEach(instructor => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${instructor.name}</strong>: ${instructor.bio}`;
    instructorsList.appendChild(item);
});

// Function to show a specific section
function showSection(sectionId) {
    document.getElementById("timetable").style.display = "none";
    document.getElementById("instructors").style.display = "none";
    document.getElementById("favorites").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

// Save workshops to My Schedule
const favoritesList = document.getElementById("favorites-list");
const savedWorkshops = new Set();

function saveToSchedule(workshopId) {
    if (savedWorkshops.has(workshopId)) return;  // Avoid duplicates
    const workshop = workshops.find(w => w.id === workshopId);
    const item = document.createElement("li");
    item.innerHTML = `<strong>${workshop.title}</strong> - ${workshop.level}, ${workshop.room}, ${workshop.time}`;
    favoritesList.appendChild(item);
    savedWorkshops.add(workshopId);
}
