import { PrismaClient } from '@prisma/client'
import express from 'express'; 

const prisma = new PrismaClient()
const app = express();

app.use(express.json()); 

async function main() {
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

const server = app.listen(3000)