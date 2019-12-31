console.log('Meeeeeeow! JS2-1 week 9 ---> HYF BAY 1 '); // --->  https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript2/week1/homework.md




// TEST EXERCISE: render TEST product names -- Ts added at the end of functions/variables etc to avoid conflict later on
console.log('\n 01. TEST PRODUCTS \n ');

let testProductNamesT = ["gold sneakers", "rubber duck", "led lights", "fried squirrels"];
let testProductNamesElementT = document.querySelector('ul');

function renderProductsT(testProductNamesT) {

    for (let i = 0; i < testProductNamesT.length; i++) {

        let productNameT = document.createElement('li');
        productNameT.innerText = testProductNamesT[i];

        testProductNamesElementT.appendChild(productNameT);

    }

}

renderProductsT(testProductNamesT); //yaaay, works :)











// HYF BAY 1 ---> JS2-1 week 9     + OFFICIAL SOLUTION: 
console.log('\n 02. HYF BAY \n ');


const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');

function renderProducts(products) {

    products.forEach(product => {

        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML = shipsToHTML + `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;

        productsUl.appendChild(li);

    });

}

renderProducts(products);