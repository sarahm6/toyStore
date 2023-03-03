console.log("js running");

// get the id from the URL
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  console.log(params);
  let id = params.id; 
console.log(id);

// use that ID to get info from collection
const getSingleToy = async () => {
    let response = await fetch(`http://localhost:5000/get_single_toy_using_id/${id}`);

    let finalData = await response.json();

    console.log(finalData);


    
    let container = document.querySelector('#container')
    container.innerHTML = `
    <div class="single-toy">
        <h1>${finalData.name}</h1>
        <img class="product-img" src=${finalData.image} alt="product image">
        <div>content</div>
        <button id="delete_button">Delete</button>
    </div>
    `
    let deleteButton = document.getElementById("delete_button")
    deleteButton.addEventListener("click", async () => {
        console.log("delete button clicked")
    let deleteResponse = await fetch (`http://localhost:5000/delete_toy_data/${id}`, {method: "DELETE"});
        console.log(deleteResponse)
        window.location="../index.html"
    })

}

getSingleToy()
 

const updateToy = async () => {
    let response = await fetch(`http://localhost:5000/update_one_toy`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
    }
    );

    let finalData = await response.json();

    console.log(finalData);
}