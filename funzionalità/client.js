async function displayjson() {
    let listajson = await fetch ('http://localhost:3000/')
    let testojson = await listajson.json()
    let test = JSON.parse(testojson)
    document.querySelector('body').innerHTML = test.name 
}

window.onload = () => {
    displayjson()
}