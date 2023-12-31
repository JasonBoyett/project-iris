import dynamic from 'next/dynamic'
import Sidebar from '../../components/sidebar'

const WordPairs = dynamic(() => import('../../components/wordpairs'), { ssr: false })
export default function Page() {
	return (
		<div className="grid min-h-screen">
      <Sidebar />      
			<div className="flex flex-col items-center">
				<center>
					<WordPairs
						diffCount={5}
					/>
				</center>
			</div>
		</div>
	)
}
