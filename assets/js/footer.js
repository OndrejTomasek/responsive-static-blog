const container = document.getElementById('footer')

if (container) {
    try {
        const res = await fetch('/assets/partials/footer.html')
        const html = await res.text()
        container.innerHTML = html
    } catch (err) {
        console.log("Failed to load footer", err)
    }
} else {
    console.log("No footer container")
}