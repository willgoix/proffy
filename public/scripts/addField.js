document.querySelector("#add-time")        // search button
    .addEventListener('click', cloneField) // when click on button

// execute action
function cloneField() {
    // duplicate fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // clear fields
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach((field) => {
        field.value = ""
    })

    // put on page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}