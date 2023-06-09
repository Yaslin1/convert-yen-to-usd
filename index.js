const form = document.querySelector("form")
form.addEventListener("submit", convertYToU)

function convertYToU (event) {
    event.preventDefault()
    const yen = (event.target.yen.value)
    const usd = (yen) * (1/136.30)
    document.querySelector("h2").innerText = yen + " is yen " + usd.toLocaleString(2) + " is usd "
}