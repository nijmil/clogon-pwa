// Get the user's program from localStorage
const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
const myProgramList = document.getElementById('myProgramList');

// Display each workshop in the user's program
if (myProgram.length > 0) {
    myProgram.forEach(workshop => {
        const workshopDiv = document.createElement('div');
        workshopDiv.className = 'workshop';
        workshopDiv.innerHTML = 
            <h3>${workshop.title}</h3>
            <p>Time: ${workshop.time}</p>
        ;
        myProgramList.appendChild(workshopDiv);
    });
} else {
    myProgramList.innerHTML = '<p>You haven\'t added any workshops yet.</p>';
}

