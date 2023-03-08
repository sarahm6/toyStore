let editButton = document.getElementById("edit-item")
console.log(editButton)


editButton.addEventListener("click", async () => {
    // Step 1: Select all of the inputs 
    let name = document.getElementById("name").value
    let price = +document.getElementById("price").value
    let content = document.getElementById("content").value
    let image = document.getElementById("image").value
    let inventory = +document.getElementById("inventory").value
    // Step 2: Get the values out of the inputs
    const toy = {
        name,
        price,
        content,
        image,
        inventory
    }
    console.log(toy)
    window.location.href=`../single_toy/index.html/?id=${object._id}`
    // Step 3: Send values to the create route in server

    let params = new URL(document.location).searchParams;
    let id = params.get("id"); // is the string "Jonathan Smith".

    let res = await fetch(`http://localhost:5000/update_one_toy/?id=${id}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toy)
    }) 
    console.log(res)
    window.location.reload();
})