const usersDatabase=[
    {
        username:"andres",
        password:"123",
    },
    {
        username:"caro",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
];

const usersTimeline=[
    {
        username:"Estefany",
        timeline:"Me encanta Javascript!",
        hora:"13:00"
    },
    {
        username:"Oscar",
        timeline:"Bebeloper es lo mejor!",
        hora:"11:30"
    },
    {
        username:"Mariana",
        timeline:"A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
        hora:"22:00"
    },
    {
        username:"Andres",
        timeline:"Yo hoy no quiero trabajar",
        hora:"3:05"
    },
];

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevenimos que el formulario recargue la página al enviarlo   


    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

// Verificamos si las credenciales son correctas
    const user = usersDatabase.find(user => user.username === username && user.password === password);

    if (user){

        document.getElementById("message").textContent = `Welcome, ${user.username}!`;
    
        const timelineDiv = document.getElementById("timeline");
        timelineDiv.innerHTML = `<h3>Timeline de ${user.username}</h3>`;

        usersTimeline.forEach(entry => {
            
            const post = document.createElement("div");
            post.innerHTML = `<strong>${entry.username}</strong>: ${entry.timeline} <em>(${entry.hora})</em>`;
            timelineDiv.appendChild(post);
        });
    } else {
        document.getElementById("message").textContent = "User or password incorrect.";
        document.getElementById("timeline").innerHTML = "";
    }

});
