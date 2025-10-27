import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@acme/db/src/generated/client'

export async function GET(request: NextRequest) {
  // const authHeader = request.headers.get('authorization')
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  // }
  try {
    const prisma = new PrismaClient()
    await prisma.user.updateMany({
      data: {
        tested: false,
      },
    })
    return NextResponse.json({
      message: 'Reset tested job completed successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Reset tested job failed:', error)
    return NextResponse.json(
      { error: 'Reset tested job failed' },
      { status: 500 },
    )
  }
}

// Prevent caching
export const dynamic = 'force-dynamic'
