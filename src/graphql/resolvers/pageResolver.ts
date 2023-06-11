import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const pagesResolver = async () => await prisma.page.findMany();

export const pageResolver = async (_: any, args: {id: string}) =>
	await prisma.page.findUnique({where: {id: args.id}});
