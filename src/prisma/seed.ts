import { PrismaClient } from "@prisma/client";
import { webpages } from "./webpages";

const prisma = new PrismaClient();

async function main() {
  for (const webpage of webpages) {
    await prisma.webpage.create({
      data: webpage,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
