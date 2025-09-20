import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log("Database connected!")
  } catch (err) {
    console.error("❌ Database connection failed:", err)
  }
}

main()
