import { PrismaClient } from "@prisma/client";
import { categories } from "./categories";
import { books } from "./books";

const prisma = new PrismaClient();

async function main() {
        await prisma.categories.createMany({data : categories, skipDuplicates: true, })
        await prisma.books.createMany({data : books, skipDuplicates: true, })
}

main().catch(e=>{
    console.log(e)
    process.exit(1);
}).finally(()=>{
    prisma.$disconnect()
})