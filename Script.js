document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    alert(`Booking confirmed!\n\nDestination: ${destination}\nCheck-In: ${checkin}\nCheck-Out: ${checkout}\nGuests: ${guests}`);

    
    // Reset form after successful submission
    document.getElementById('bookingForm').reset();
});
document.getElementById("addImageBtn").addEventListener("click", function () {
    // Get the input values for image URL and title
    const imageUrl = document.getElementById("imageUrl").value;
    const imageTitle = document.getElementById("imageTitle").value;

    // Check if inputs are filled
    if (imageUrl && imageTitle) {
        // Create a new div for the image with CSS background image style
        const newImageDiv = document.createElement("div");
        newImageDiv.classList.add("tourism-image");
        newImageDiv.style.backgroundImage = `url('${imageUrl}')`;
        newImageDiv.title = imageTitle;

        // Append the new image div to the gallery
        document.getElementById("tourismImages").appendChild(newImageDiv);

        // Clear the input fields
        document.getElementById("imageUrl").value = "";
        document.getElementById("imageTitle").value = "";
    } else {
        alert("Please enter both an image URL and a title.");
    }
});
