import { useRouter } from 'next/router'
import { useState } from 'react'
import z from 'zod'
import Sidebar from '~/components/sidebar'
import { api } from '~/utils/api'
import { schemas } from '~/utils/validators'

export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<z.infer<
    typeof schemas.createAdminResultSchema
  > | null>()
  const addAdmin = api.user.createAdmin.useMutation({
    onMutate: () => setProcessing(true),
    onSettled: () => setProcessing(false),
    onSuccess: (data) => setResult(data),
  })

  return (
    <>
      <div className='min-h-screen items-center justify-center'>
        <Sidebar />
        <div className='flex flex-col items-center justify-center min-h-screen py-2 gap-2'>
          <div className='flex flex-row gap-4 text-white text-2xl md:text-4xl font-normal items-center'>
            Email:
            <input
              disabled={processing}
              className='rounded-full p-4 h-16 py-5 bg-white/20 text-white font-normal'
              type='text'
              value={email}
              onChange={(e) => {
                if (result) setResult(null)
                setEmail(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addAdmin.mutate({ email })
                }
              }}
            />
          </div>
          <button
            disabled={processing}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-2xl md:text-4xl font-normal'
            onClick={() => addAdmin.mutate({ email })}
          >
            Submit
          </button>
          <button
            disabled={processing}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-2xl md:text-4xl font-normal'
            onClick={() => router.push('/admin')}
          >
            Return to Admin Panel
          </button>
          {!!result ? (
            <ResultView
              result={result}
              email={email}
            />
          ) : (
            processing && (
              <p className='text-white text-4xl font-normal'>Processing...</p>
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
      <div className='flex flex-col items-center justify-center py-2 gap-2'>
        <p className='text-green-500 text-7xl font-normal'>Success!</p>
        <p className='text-white text-4xl font-normal'>
          {email} has been added as an administrator
        </p>
      </div>
    )
  }
  if (result === 'invalidEmail') {
    return (
      <div className='flex flex-col items-center justify-center py-2 gap-2'>
        <p className='text-white text-4xl font-normal'>
          We could not find {email}
        </p>
      </div>
    )
  }
  if (result === 'alreadyAdmin') {
    return (
      <div className='flex flex-col items-center justify-center py-2 gap-2'>
        <p className='text-white text-4xl font-normal'>
          {email} is already an administrator
        </p>
      </div>
    )
  }
  if (result === 'unauthorized') {
    return (
      <div className='flex flex-col items-center justify-center py-2 gap-2'>
        <p className='text-white text-4xl font-normal'>
          You are not authorized to add an administrator
        </p>
      </div>
    )
  }
  if (result === 'error') {
    return (
      <div className='flex flex-col items-center justify-center py-2 gap-2'>
        <p className='text-white text-4xl font-normal'>
          An error occurred while adding {email} as an administrator
        </p>
        <p className='text-white text-4xl font-normal'>
          Please try again later
        </p>
      </div>
    )
  }
}
