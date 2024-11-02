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
                <h2>${workshop.day}</h2>
                <h3>${workshop.title}</h3>
                <p>Time: ${workshop.time}</p>
                <p>Level: ${workshop.level}</p>
                <p>Instructor: ${workshop.instructor}</p>
                <p>Hall: ${workshop.hall}</p>
                <button onclick="removeFromProgram(${workshop.id})">Remove from My Program</button>
            `;
            myProgramList.appendChild(workshopDiv);
        });
    }
}
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
                <h4>${workshop.day}</h4>
                <h3>${workshop.title}</h3>
                <p>Time: ${workshop.time}</p>
                <p>Level: ${workshop.level}</p>
                <p>Instructor: ${workshop.instructor}</p>
                <p>Hall: ${workshop.hall}</p>
                <button onclick="removeFromProgram(${workshop.id})">Remove</button>
            `;
            myProgramList.appendChild(workshopDiv);
        });
    }
}

// Function to remove workshop from localStorage
function removeFromProgram(workshopId) {
    const myProgram = JSON.parse(localStorage.getItem('myProgram')) || [];
    
    // Filter out the workshop with the given ID
    const updatedProgram = myProgram.filter(workshop => workshop.id !== workshopId);

    // Update localStorage with the new array
    localStorage.setItem('myProgram', JSON.stringify(updatedProgram));

    alert(`Workshop has been removed from your program.`);

    // Refresh the display of My Program
    displayMyProgram();
}


// Run display function on page load
window.onload = displayMyProgram;




