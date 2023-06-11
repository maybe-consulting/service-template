import {PrismaClient} from "@prisma/client";
import {pages} from "./pages";

const prisma = new PrismaClient();

async function main() {
	for (let page of pages) {
		await prisma.page.create({
			data: page,
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
