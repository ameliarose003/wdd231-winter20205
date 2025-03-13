const products = [
    {id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
    {id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
    {id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

// console.log(window.location);

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = urlParams.get(param);
    return params;
}

function productTemplate(product) {
    return `
    <section class="product">
    <img src=${product.image} alt=${product.name}/>
    <div class="product_details">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
    </div>
    </section>
    `;
}

function getProductDetails() {
    const id = getParam("productId");
    if (id) {
        const product = products.find((p) => p.id == id);
        if (product) {
            output("main", productTemplate(product));
        } 
    } else {
        console.log("No productId found in the URL");
    }
}

function output(selector, markup) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("beforeEnd", markup);
}

getProductDetails();