import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const pagesResolver = async () => await prisma.webpage.findMany();

export const pageResolver = async (_: any, args: {id: string}) =>
	await prisma.webpage.findUnique({where: {id: args.id}});
