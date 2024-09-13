
// Made an inventory with all the items
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 },
];

// function to show if stocks are available
function displayProductDetails(product) {
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
    console.log(`Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock Status: ${stockStatus}`);
}


// a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
    if (unitsSold > product.quantity) {
        console.log(`Error: Not enough stock of ${product.name} to sell ${unitsSold} units.`);
        return;
    }
    product.quantity -= unitsSold;
    console.log(`Sold ${unitsSold} units of ${product.name}. New quantity: ${product.quantity}`);
    if (product.quantity === 0) {
        console.log(`${product.name} is now out of stock.`);
    } else if (product.quantity <= product.lowStockLevel) {
        console.log(`${product.name} is now low on stock.`);
    }
}

