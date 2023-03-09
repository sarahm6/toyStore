README.md

Project Details:

Navigation between pages should be done with a navbar (using JS to switch html files) AND/OR by clicking on things in the page (JS switches html files)

Pages: 

1. HOME page (index):  Shows list of products (can visit each product from here):
- All the products are displayed.

- The user can visit each product from here.

- If the user clicks on the image, it links to the PRODUCT page.

- There is a link to add a new product.

2. PRODUCT page: Shows specific product and it’s details:
- A link back to the HOME page.

- A link to edit the product (goes to the edit page).

- A delete button that deletes.

- User can also search for a specific product from this page

- Clicking buy button should lower remaining by 1.

- If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals).

- On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.

- The BUY button should also not be rendered if the quantity of the item is zero

3. EDIT page - Should allow you to edit the data of a specific product (using it’s product ID)

4. CREATE page - allows for creation of new products (users will include a URL for the image)

Redirects:

    1. The create route should redirect to HOME after creation
    2. The delete route should redirect to HOME after deletion
    3. The edit route will redirect to the edited product's PRODUCT page after the object is changed in your collection.

    



## Tech Stack

**MERN Stack:** Used MongoDB, Express.js and Node.js

Credits:

Toy Train Animation is from Suzanne Aitchison at codepen.io.

