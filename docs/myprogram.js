// Function to load and display My Program
function displayMyProgram() {
    const myProgramList = document.getElementById('myProgramList');
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];

    myProgramList.innerHTML = ''; // Clear previous content

    if (myProgram.length === 0) {
        myProgramList.innerHTML = '<p>You haven\'t added any workshops yet.</p>';
    } else {
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
    }
}

// Run display function on page load
window.onload = displayMyProgram;




