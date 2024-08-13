
// See constants/nav.js for endpoints
export const scrollToSection = (section) => {
    let target = document.querySelector(section)
    target.scrollIntoView();
}


// Some links are external and therefore need to be handled differently
// than the regular SPA ID links.
export const handleEndpointClick = (endpoint) => {
    if (endpoint.scrollTo != "") {
        scrollToSection(endpoint.scrollTo)
    }
    if (endpoint.redirectURL != "") {
        window.location.href = endpoint.redirectURL
    }
}