document.querySelector("#add-time")        // search button
    .addEventListener('click', cloneField) // when click on button

// execute action
function cloneField() {
    // duplicate fields
    const newFieldContainer = document.querySelector('.schedule-item:last-child').cloneNode(true)

    // clear fields
    const fields = newFieldContainer.querySelectorAll('input')
    let allEmpty = true;

    fields.forEach((field) => {
        // check if field aren't empty
        if (field.value != "") {
            allEmpty = false;
        }
        field.value = ""
    })

    // check if all fields aren't empty
    if (!allEmpty) {
        // put on page
        document.querySelector('#schedule-items').appendChild(newFieldContainer)

        // search remove button
        const removeButton = newFieldContainer.querySelector('.remove-time')
        
        // add event on remove to remove button
        addEventOnRemove(removeButton)
    }
}