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
    // container.innerHTML = `
    // <div class="single-toy">
    //     <h1>${finalData.name}</h1>
    //     <img class="product-img" src=${finalData.image} alt="product image">
    //     <div>${finalData.content}</div>
    //     <button id="delete_button">Delete</button>
    //     <button id="return_home">Return Home</button>
    //     <button id="return_toy_page">Toy Page</button>
    //     <button id="edit_toy">Edit Toy</button>
    //     <button id="buy_toy">BUY</button>

        

    // </div>
    // `

    let toyContainer = document.createElement('div');
    let name= document.createElement('h3');
    let content= document.createElement('p');
    let image= document.createElement('img');
    let price= document.createElement('h2');
    let inventory= document.createElement('p')

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete";
    deleteBtn.id = "delete_button"

    let returnHomeButton = document.createElement('button')
    returnHomeButton.innerText = "Return Home";
    returnHomeButton.id = "return_home"

    let returnButton = document.createElement('button')
    returnButton.innerText = "Return to Toy Page"
    returnButton.id = "return_toy_page"

    let editBtn = document.createElement('button')
    editBtn.innerText = "Edit";
    editBtn.id = "edit_toy"

    let buyBtn = document.createElement('button')
    buyBtn.innerText = "Buy";
    buyBtn.id = "buy_toy"
    if (finalData.inventory == 0) {
        buyBtn.classList.add("hide")
    } else {
        buyBtn.className = ""
    }

    name.textContent = finalData.name
    content.textContent = finalData.content;
    image.src = finalData.image;
    image.classList.add("product-img")
    toyContainer.classList.add("single-toy")
    price.textContent = finalData.price;
    const outOfStock = "OUT OF STOCK"
    inventory.textContent = finalData.inventory == 0 ? outOfStock : finalData.inventory;

    let inventoryDiv = document.createElement('div')
    inventoryDiv.classList.add("inventoryDiv")
    

    let increment = document.createElement('button')
    increment.innerText = "+"
    increment.id = "increment_toy"
    increment.addEventListener("click", () => {
        const quantity= inventory.innerText
        if (quantity == outOfStock) {
            inventory.innerText = 1 
        } else {
            inventory.innerText = +quantity+1
        } 
    })

    let decrement = document.createElement('button')
    decrement.innerText = "-"
    decrement.id = "decrement_toy"
    decrement.addEventListener("click", () => {
        const quantity= inventory.innerText
        if (quantity == outOfStock)  {
            alert("Out of Stock. Cannot decrement.")
        } else {
            inventory.innerText = +quantity-1
            if (inventory.innerText == 0) {
            inventory.innerText = outOfStock 
            }
        }
        
    })

    buyBtn.addEventListener('click', async (event) => {
        console.log('buy button clicked!')
        // if (inventory.innerText == 0) {
        // }
        try {
            buyBtn.disabled = true
            // buyBtn.innerText = "buying.."
            let response = await fetch(`http://localhost:5000/buy_one_toy/?id=${id}`, {method: "PUT"});
                response = await response.json()
            // debugger
                if (response.inventory == 0) {
                    inventory.innerText = outOfStock
                } else {
                    inventory.innerText = response.inventory
                }
                buyBtn.disabled = false
                // buyBtn.innerText = "Buy"
            
        console.log(response)
        } catch (error) {
            console.error(error)
            buyBtn.disabled = false
            // buyBtn.innerText = "Buy"
            // console.warn(error)
        }
    })

    inventoryDiv.append(decrement, inventory, increment);
    

    toyContainer.append(name, content, image, price, inventoryDiv, deleteBtn, returnHomeButton, returnButton, editBtn, buyBtn)
    container.appendChild(toyContainer)
    
    // let deleteButton = document.getElementById("delete_button")
    deleteBtn.addEventListener("click", async () => {
        const response = confirm("Are you sure you want to delete?");
        if (response) {
            console.log("delete button clicked")
            let deleteResponse = await fetch (`http://localhost:5000/delete_toy_data/?id=${id}`, {method: "DELETE"});
            console.log(deleteResponse)
            window.location="../index.html"
        } 
    })
   
    returnHomeButton.addEventListener("click", async () => {
        window.location="../homepage.html"
    });

    returnButton.addEventListener("click", async () => {
        window.location="../index.html"
    });

   
    let editButton = document.getElementById("edit_toy")
    editButton.addEventListener('click', (event) => {
        console.log(event.target);
        console.log(event.target.id);
        window.location.href=`../edit/index.html?id=${id}`
    })

    
    

};

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

    console.log(finalData)
}
