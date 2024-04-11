const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", addContent)

function addContent() {

    const text = document.getElementById("textinput").value
    const result = document.getElementById("result")
    result.innerHTML += `<h1>${text}</h1>`
}



async function fetchdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json()
    console.log(json.length)
    

}
fetchdata()
