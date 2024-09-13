const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", addElement);

function addElement(){
    const text = document.getElementById("textinput").value
    const result = document.getElementById("result")
    //const newDiv = document.createElement("div");
    //const newcontent = document.createTextNode(text)
    //newDiv.appendChild(newcontent);
    //result.appendChild(newDiv)

    result.innerHTML += `<li>${text}</li>`

}

async function fetchdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(data)
    const json = await data.json()
    console.log(json)

    const titleList = document.getElementById("titleList")
    for ( i = 0; i < json.length; i++) {
        titleList.innerHTML += `<h3>${json[i].title}$</h3>`
    }
}
fetchdata()

