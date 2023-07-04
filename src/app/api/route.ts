import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function GET() {
  const prisma = new PrismaClient()
  const allUsers = await prisma.user.findMany()
  return NextResponse.json({ message: 'Hello World', data: allUsers })
}
