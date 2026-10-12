
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Welcome to an Exciting Campus Life!";
}


function changeCardColor() {
    const card = document.getElementById("card1");

    if (card.style.backgroundColor === "lightyellow") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "lightyellow";
    }
}


function toggleHighlights() {
    const highlights = document.getElementById("highlights");

    highlights.classList.toggle("hidden");
}



function addEvent() {
    const input = document.getElementById("eventName");
    const message = document.getElementById("eventMessage");
    const eventList = document.getElementById("newEventList");

    const name = input.value.trim();

    if (name === "") {
        message.textContent = "Please enter an event name.";
        message.style.color = "red";
        return;
    }

    
    const card = document.createElement("div");
    card.classList.add("event-card");

    const heading = document.createElement("h3");
    heading.textContent = name;

    const description = document.createElement("p");
    description.textContent =
        "This event has been added to the event list.";

    card.appendChild(heading);
    card.appendChild(description);
    eventList.appendChild(card);

    message.textContent = "Event '" + name + "' added successfully!";
    message.style.color = "green";

    input.value = "";
}


function changeExistingEvent() {
    const card = document.getElementById("existingCard");

    card.style.backgroundColor = "#e1e9ff";
    card.style.borderLeft = "5px solid #e67e22";

    const heading = card.querySelector("h3");
    heading.textContent = "Cultural Fest - Featured Event";
}





function registerStudent(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const selectedEvent =
        document.getElementById("eventSelection").value;

    const message = document.getElementById("registrationMessage");

    
    if (
        name === "" ||
        roll === "" ||
        email === "" ||
        selectedEvent === ""
    ) {
        message.textContent = "Error: Please fill in all required fields.";
        message.style.color = "red";
        return;
    }

    message.textContent =
        "Congratulations, " + name +
        "! You have successfully registered for " +
        selectedEvent + ".";

    message.style.color = "green";
}


function changeRegistrationFont() {
    const heading =
        document.getElementById("registrationHeading");

    if (heading.style.fontSize === "42px") {
        heading.style.fontSize = "36px";
    } else {
        heading.style.fontSize = "42px";
    }
}


function toggleRegistrationForm() {
    const section =
        document.getElementById("registrationSection");

    section.classList.toggle("hidden");
}
