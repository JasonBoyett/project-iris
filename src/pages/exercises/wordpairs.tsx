import { useEffect, useState } from 'react'
import WordPairs from '~/components/wordpairs'
import useUserStore from '~/stores/userStore'
import { api } from '~/utils/api'
import User from '~/utils/types'
export default function Page() {
	return (
		<div className="grid min-h-screen">
			<div className="flex flex-col items-center justify-center">
				<center>
					<WordPairs
						diffCount={10}
					/>
				</center>
			</div>
		</div>
	)
}
