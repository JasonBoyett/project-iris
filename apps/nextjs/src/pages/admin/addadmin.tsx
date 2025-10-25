import { useRouter } from 'next/router'
import { useState } from 'react'
import z from 'zod'
import Sidebar from '../../components/sidebar'
import { schemas } from '@acme/validators'
import { trpc } from '../../utils/trpc'

export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<z.infer<
    typeof schemas.createAdminResultSchema
  > | null>()
  const addAdmin = trpc.admin.createAdmin.useMutation({
    onMutate: () => setProcessing(true),
    onSettled: () => setProcessing(false),
    onSuccess: data => setResult(data),
  })

  return (
    <>
      <div className='min-h-screen items-center justify-center'>
        <Sidebar />
        <div className='items-right flex justify-end gap-2 p-4'>
          <button
            disabled={processing}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-2xl font-normal text-white md:text-4xl'
            onClick={() => router.push('/admin')}
          >
            Return to Admin Panel
          </button>
        </div>
        <div className='flex min-h-screen flex-col items-center justify-center gap-2 py-2'>
          <div className='flex flex-row items-center gap-4 text-2xl font-normal text-white md:text-4xl'>
            Email:
            <input
              disabled={processing}
              className='h-16 rounded-full bg-white/20 p-4 py-5 font-normal text-white'
              type='text'
              value={email}
              onChange={e => {
                if (result) setResult(null)
                setEmail(e.target.value)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  addAdmin.mutate({ email })
                }
              }}
            />
          </div>
          <button
            disabled={processing}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-2xl font-normal text-white md:text-4xl'
            onClick={() => addAdmin.mutate({ email })}
          >
            Submit
          </button>
          {!!result ? (
            <ResultView
              result={result}
              email={email}
            />
          ) : (
            processing && (
              <p className='text-4xl font-normal text-white'>Processing...</p>
            )
          )}
        </div>
      </div>
    </>
  )
}

function ResultView({
  result,
  email,
}: {
  result: z.infer<typeof schemas.createAdminResultSchema>
  email: string
}) {
  if (result === 'success') {
    return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <p className='text-7xl font-normal text-green-500'>Success!</p>
        <p className='text-4xl font-normal text-white'>
          {email} has been added as an administrator
        </p>
      </div>
    )
  }
  if (result === 'invalidEmail') {
    return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <p className='text-4xl font-normal text-white'>
          We could not find {email}
        </p>
      </div>
    )
  }
  if (result === 'alreadyAdmin') {
    return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <p className='text-4xl font-normal text-white'>
          {email} is already an administrator
        </p>
      </div>
    )
  }
  if (result === 'unauthorized') {
    return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <p className='text-4xl font-normal text-white'>
          You are not authorized to add an administrator
        </p>
      </div>
    )
  }
  if (result === 'error') {
    return (
      <div className='flex flex-col items-center justify-center gap-2 py-2'>
        <p className='text-4xl font-normal text-white'>
          An error occurred while adding {email} as an administrator
        </p>
        <p className='text-4xl font-normal text-white'>
          Please try again later
        </p>
      </div>
    )
  } else return null
}
