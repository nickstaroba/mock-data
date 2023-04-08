const { faker } = require("@faker-js/faker");
const fs = require("fs");

function generateMockData(length) {
  const array = new Array(length).fill({});
  const products = array.map(() => ({
    id: faker.datatype.uuid(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    image: faker.image.city(560, 280),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    tags: faker.helpers.uniqueArray(faker.color.human, 3),
  }));
  return { products };
}

fs.writeFileSync("./db.json", JSON.stringify(generateMockData(20)));
