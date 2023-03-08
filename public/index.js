

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


// Search bar component
const data = [
    { name: 'Cocomelon School Bus', content: 'This school bus engages growing minds with the use of two modes. The educational setting can be used to learn the alphabet and numbers. While the additional setting is jam packed with fun musical notes to encourage some adorable dancing.', image: 'https://i5.walmartimages.com/asr/d94cb55d-e32c-4de6-b93d-64c7a8424a97.9f605eb76c2497aae4d41494eff7e6c7.jpeg', price: 7, inventory: 10},
    { name: 'Legos', content: 'Saint Lucia', image: '', price: 50, inventory: 15},
    { name: 'Riri', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    { name: 'Ryan', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    { name: 'Ryan', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    { name: 'Ryan', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    { name: 'Ryan', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    { name: 'Ryan', content: 'Saint Lucia', image: '', price: 7, inventory: 10},
    // 99 more
  ];

    const search = document.getElementById('search');
    const results = document.getElementById('results');
    let search_term = '';

    search.addEventListener('input', (event) => {
        search_term = event.target.value.toLowerCase();
        showList();
    });

    const showList = () => {
        results.innerHTML = '';
      };

      data
      .filter((item) => {
        return (
          item.content.toLowerCase().includes(search_term) ||
          item.name.toLowerCase().includes(search_term)
        );
      })
      .forEach((e) => {
        const li = document.createElement('li');
        li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Content:</i> ${e.content}`;
        results.appendChild(li);
      });

      showList();