let button = document.getElementById("create-item")
console.log(button)


button.addEventListener("click", async () => {
    // Step 1: Select all of the inputs 
    let name = document.getElementById("name").value
    let price = +document.getElementById("price").value
    let content = document.getElementById("content").value
    let image = document.getElementById("image").value
    let inventory = +document.getElementById("inventory").value
    // Step 2: Get the values out of the inputs
    // let name = nameInput.value
    // console.log(name);
    const toy = {
        name,
        price,
        content,
        image,
        inventory
    }
    console.log(toy)
    // Step 3: Send values to the create route in server
    let res = await fetch("http://localhost:5000/create_toy", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toy)
    }) 
    console.log(res)
})



