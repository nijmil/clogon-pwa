// Sample workshop data
const workshops = [
    { id: 1, title: "Intro to Clogging", time: "10:00 AM" },
    { id: 2, title: "Advanced Techniques", time: "11:30 AM" },
    { id: 3, title: "Dance Routine Workshop", time: "1:00 PM" }
];

// Display workshops
const workshopsDiv = document.getElementById('workshops');
workshops.forEach(workshop => {
    const workshopDiv = document.createElement('div');
    workshopDiv.className = 'workshop';
    workshopDiv.innerHTML = `
        <h3>${workshop.title}</h3>
        <p>Time: ${workshop.time}</p>
        <button onclick="addToProgram(${workshop.id})">Add to My Program</button>
    `;
    workshopsDiv.appendChild(workshopDiv);
});

// Function to add workshop to localStorage
function addToProgram(id) {
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    const workshop = workshops.find(w => w.id === id);
    if (!myProgram.some(w => w.id === workshop.id)) {
        myProgram.push(workshop);
        localStorage.setItem('myProgram', JSON.stringify(myProgram));
        alert(`${workshop.title} has been added to your program.`);
    } else {
        alert(`${workshop.title} is already in your program.`);
    }
}
