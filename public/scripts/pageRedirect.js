document.querySelector("#access-list")        // search button
    .addEventListener('click', pageRedirect)  // when click on button

// execute action
function pageRedirect() {
    // duplicate fields
    location.href = "/study"
}