const musiccollection = {
  albums: [
    { title: "Abbey Road", artist: "The Beatles", year: 1969 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
    { title: "Thriller", artist: "Michael Jackson", year: 1982 },
    { title: "Back in Black", artist: "AC/DC", year: 1980 },
  ],

  [Symbol.iterator]: function () {
    let index = 0;
    const albums = this.albums;

    return {
      next() {
        if (index < albums.length) {
          return { value: albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const alb of musiccollection) {
  console.log(`${alb.title} - ${alb.artist} (${alb.year})`);
}

//task2

const dishes = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

const clientAlexey = { name: "Alexey" };
const clientMaria = { name: "Maria" };
const clientIrina = { name: "Irina" };

const orders = new Map();

orders.set(clientAlexey, ["Пицца 'Пепперони'", "Тирамису"]);
orders.set(clientMaria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
orders.set(clientIrina, ["Чизкейк"]);

function displayOrders() {
  orders.forEach((order, client) => {
    console.log(`Клиент ${client.name} заказал: `);
    order.forEach((dish) => {
      const chef = dishes.get(dish);
      console.log(`- ${dish} (Повар: ${chef})`);
    });
    console.log("");
  });
}

displayOrders();