// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const container = document.getElementById("container");
            let sortedByHours = json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace
            })
            const count = document.getElementById("count");
            count.innerHTML = `<div>Number of Astronauts: ${sortedByHours.length}</div>`
            for (let i=0; i<sortedByHours.length; i++) {
                container.innerHTML += `<div class="astronaut"> 
                    <div class="bio"> 
                    <h3> ${sortedByHours[i].firstName} ${sortedByHours[i].lastName} </h3>
                    <ul>
                        <li>Hours in space: ${sortedByHours[i].hoursInSpace}</li>
                        <li class=${sortedByHours[i].active ? "active" : ""}> Active: ${sortedByHours[i].active} </li>
                        <li>Skills: ${sortedByHours[i].skills} </li>
                    </div>
                <img class="avatar" src="${sortedByHours[i].picture}">            
                </div>`
            }
        })
    });
})