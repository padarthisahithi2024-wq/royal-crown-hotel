function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (phone.length < 10) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (room === "") {
        alert("Please select a room type.");
        return false;
    }

    if (checkin === "") {
        alert("Please select a check-in date.");
        return false;
    }

    if (checkout === "") {
        alert("Please select a check-out date.");
        return false;
    }

    alert("Reservation Submitted Successfully!");

    return true;
}
