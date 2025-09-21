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

    let discount = 0;
    switch (products.category) {
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
        cart: ["Hollow Knight Silksong"]
    },
    {
        customerNumber: "002",
        customerType: "Student",
        cart: ["Mario Kart World"]
    },
    {
        customerNumber: "003",
        customerType: "Senior",
        cart: ["Mario Kart 8 Deluxe"]
    }
];

for (let customer of customers) {
    
}