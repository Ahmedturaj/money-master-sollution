function getInput(inputId) {
    const inputElementString = document.getElementById(inputId).value;
    const inputElement = parseInt(inputElementString);
    return inputElement;
}
function setTextValueElementId(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}