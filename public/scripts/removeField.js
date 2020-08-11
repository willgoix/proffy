addEventOnRemove(document.querySelector(".remove-time")) // search pre-existing button

function addEventOnRemove(field) {
    field.addEventListener('click', removeField) // when click on button
}

// execute action
function removeField(event) {
    const fieldsCount = document.querySelectorAll('.schedule-item').length

    // check if have just one field, and ignore
    if (fieldsCount !== 1) {
        // remove the parent of button (field)
        event.target.parentElement.remove()
    }
}