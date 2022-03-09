const { faker } = require('@faker-js/faker');

const products = []
for( i = 0; i < 10; i++) {
    products.push({
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        imageUrl: faker.image.food()
    })
}

module.exports = products;