import { PrismaClient } from "../../generated/prisma";

declare global {
	// eslint-disable-next-line no-var
	var cachedPrisma: PrismaClient | undefined;
}

const prisma =
	globalThis.cachedPrisma ??
	new PrismaClient({
		log: ["query"],
	});

if (process.env.NODE_ENV !== "production") globalThis.cachedPrisma = prisma;

export { prisma };
export default prisma;
