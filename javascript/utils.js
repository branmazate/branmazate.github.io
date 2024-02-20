//Custom alert
function showCustomAlert(message, duration = 3000) {
    var alertBox = document.querySelector("#customAlert");
    alertBox.textContent = message;

    // Make it visible and allow interactions
    alertBox.style.opacity = "1";
    alertBox.style.visibility = "visible";
    alertBox.style.pointerEvents = "auto";

    // Hide it after the specified duration
    setTimeout(function() {
        alertBox.style.opacity = "0";
        alertBox.style.visibility = "hidden";
        alertBox.style.pointerEvents = "none";
    }, duration);
}

// Copy function
function copyText() {
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    document.body.appendChild(tempInput);

    // Getting text
    var textToCopy = document.getElementsByClassName("copy-text")[0].textContent;
    tempInput.value = textToCopy;
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copying text with an alert.
    navigator.clipboard.writeText(tempInput.value).then(() => {
        showCustomAlert("Copied: " + tempInput.value);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });

    // Removing temporary input element
    document.body.removeChild(tempInput);
}
