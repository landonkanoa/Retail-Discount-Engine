let products = [
    {
        name: "Mario Kart 8 Deluxe",
        category: "Nintendo",
        price: 59.99,
        inventory: 20
    },
    {
        name: "Hollow Knight",
        category: "Indie",
        price: 19.99,
        inventory: 50
    },
    {
        name: "Mario Kart World",
        category: "Nintendo",
        price: 79.99,
        inventory: 15
    },
    {
        name: "Hollow Knight Silksong",
        category: "Indie",
        price: 19.99,
        inventory: 40 
    },
    {
        name: "Halo Reach",
        category: "Xbox",
        price: 9.99,
        inventory: 100
    }
];

// Step 2 ^ //
for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "Nintendo":
            discount = 0.05;
            break;
        case "Indie":
            discount = 0.1;
            break;
        case "Xbox":
            discount = 0.2;
            break;
        default: 0;
            discount = 0;
    };
  let promoPrice = product.price * (1 - discount);
    product.promoPrice = promoPrice.toFixed(2)
}

// Step 3 ^ //

let customerType = ["Student", "Senior"]
let customerDiscount = 0;
if (customerType = "Student") {
    customerDiscount = 0.05;
} else if 
    (customerType = "Senior") {
    customerDiscount = 0.03;
    }

// Step 4 ^ //

let customers = [
    {
        customerNumber: "001",
        customerType: "Student",
        cart: "Hollow Knight Silksong"
    },
    {
        customerNumber: "002",
        customerType: "Student",
        cart: "Mario Kart World"
    },
    {
        customerNumber: "003",
        customerType: "Senior",
        cart: "Mario Kart 8 Deluxe"
    }
];

/* Step 5 Yeah I simply could not get part 5 and beyond no matter
how much I trouble shooted I just dont know what to do for it or even how to start */
console.log(products)