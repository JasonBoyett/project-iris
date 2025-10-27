import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@acme/db/src/generated/client'

export default async function GET(request: NextRequest, response: any) {
  // response is any here but it's a NextResponse. We're using any here
  // because the status property is not being typed correctly
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return response.status(401).json({ error: 'Unauthorized' })
  }
  try {
    const prisma = new PrismaClient()
    await prisma.user.updateMany({
      data: {
        tested: false,
      },
    })
    return response.status(200).json({
      message: 'Reset tested job completed successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Reset tested job failed:', error)
    return response.status(500).json({
      error: `Reset tested job failed ${error}`,
    })
  }
}

export const dynamic = 'force-dynamic'
// export const runtime = 'edge'
