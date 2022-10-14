async function displayjson() {
    let listajson = await fetch ('http://localhost:3000/')
    let testojson = await listajson.json()
    for (let i = 0 ; i < testojson.length; i++){
    document.getElementById('testo').innerHTML += testojson[i].name
    }
}
window.onload = async() => {
    await displayjson()
}