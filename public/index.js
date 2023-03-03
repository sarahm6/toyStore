

// get data stored in queries



const getData = async () => {
    let containerElement = document.getElementById('container');
    
    let data = await fetch("http://localhost:5000/get_toy_data");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => {
            let name= document.createElement('h3');
            let content= document.createElement('p');
            let image= document.createElement('img');
            let price= document.createElement('h2');
            let inventory= document.createElement('p')
            let child = document.createElement('div')

            name.textContent = object.name
            content.textContent = object.content;
            image.src = object.image;
            image.classList.add("product-img")
            price.textContent = object.price;
            inventory.textContent = object.inventory;

            console.log(object._id)
            image.addEventListener('click', (event) => {
                console.log(event.target);
                console.log(event.target.id);
                window.location.href=`./single_toy/?id=${object._id}`
            })
            
            child.append(name, content, image, price, inventory)



           console.log(child)
           console.log(containerElement)


            containerElement.appendChild(child)
        })
    })
}

getData()

// var displayToy = document.getElementById("parent").querySelector("#child");
// // don't forget a #

