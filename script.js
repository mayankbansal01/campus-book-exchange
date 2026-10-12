
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Welcome to CampusExchange!";
}

function toggleBooks() {
    document.getElementById("featuredBooks").classList.toggle("hidden");
}

function changeCardColor(button) {
    var card = button.parentElement;

    if (card.style.backgroundColor == "rgb(231, 237, 213)") {
        card.style.backgroundColor = "white";
    } else {
        card.style.backgroundColor = "#4baccf";
    }
}

function requestBook(button) {
    button.textContent = "Request Sent";
    button.disabled = true;

    var card = button.parentElement;
    var message = card.querySelector(".request-feedback");

    message.textContent = "Your book request has been recorded.";
    message.className = "success-message";
}

function showBook() {
    var title = document.getElementById("bookTitleInput").value;
    var result = document.getElementById("searchResult");

    if (title.trim() == "") {
        result.textContent = "Please enter a book title.";
        result.className = "error-message";
    } else {
        result.textContent = "You entered the book: " + title;
        result.className = "success-message";
    }
}

function changeBookCard() {
    var cards = document.getElementsByClassName("browse-card");

    if (cards.length > 0) {
        cards[0].classList.toggle("highlight-card");
    }
}

document.getElementById("listingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("studentName").value.trim();
    var title = document.getElementById("newBookTitle").value.trim();
    var author = document.getElementById("authorName").value.trim();
    var category = document.getElementById("bookCategory").value.trim();
    var condition = document.getElementById("bookCondition").value;
    var message = document.getElementById("formMessage");

    if (name == "" || title == "" || author == "" ||
        category == "" || condition == "") {
        message.textContent = "Please fill in all the fields.";
        message.className = "error-message";
    } else {
        message.textContent = "Thank you, " + name +
            "! Your book " + title + " has been listed successfully.";
        message.className = "success-message";
    }
});

function changeFormHeading() {
    var heading = document.getElementById("formHeading");

    if (heading.style.fontSize == "30px") {
        heading.style.fontSize = "24px";
    } else {
        heading.style.fontSize = "30px";
    }
}

function toggleForm() {
    document.getElementById("listingForm").classList.toggle("hidden");
}
