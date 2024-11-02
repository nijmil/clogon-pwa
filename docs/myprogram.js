// Function to display the user's program workshops
function displayMyProgram() {
    // Get the user's program from localStorage
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    const myProgramList = document.getElementById('myProgramList');

    // Clear existing content in the list
    myProgramList.innerHTML = ''; 

    // Display each workshop in the user's program with all details
    if (myProgram.length > 0) {
        myProgram.forEach(workshop => {
            const workshopDiv = document.createElement('div');
            workshopDiv.className = 'workshop';
            workshopDiv.innerHTML = `
                <h2>Day: ${workshop.day}</h2>
                <h3>${workshop.title}</h3>
                <p>Time: ${workshop.time}</p>
                <p>Level: ${workshop.level}</p>
                <p>Instructor: ${workshop.instructor}</p>
                <p>Hall: ${workshop.hall}</p>
            `;
            myProgramList.appendChild(workshopDiv);
        });
    } else {
        myProgramList.innerHTML = '<p>You haven\'t added any workshops yet.</p>';
    }
}

// Call displayMyProgram on page load
window.onload = displayMyProgram;


