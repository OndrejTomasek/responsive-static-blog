const container = document.getElementById('navbar')

if (container) {
    try {
        const res = await fetch("/assets/partials/navbar.html")
        const html = await res.text()
        container.innerHTML = html
    } catch (err) {
        console.log("Failed to load navbar", err)
    }
} else {
    console.log("No navbar container")
}