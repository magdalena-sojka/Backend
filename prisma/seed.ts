import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getData().map((book) => {
      return db.book.create({ data: book });
    })
  );
}

seed();

function getData() {
  return [
    {
      id: 'te1314derw',
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      price: 25
    },
    {
      id: 't32s14dzdw',
      title: 'East of Eden',
      author: 'John Steinbeck',
      price: 30
    }
  ];
}