import Head from 'next/head'
import PieTimer from '~/componants/pietimer'
import Sidebar from '~/componants/sidebar'
import { api } from '~/utils/api'
import { FontProvider } from '~/cva/fontProvider'
import type { SelectFont } from '~/utils/types'
import { useEffect, useState } from 'react'

export default function Page() {
  const user = api.user.getUnique.useQuery()
  const [font, setFont] = useState<SelectFont>('sans')

  useEffect(() => {
    if (!user) return
    if (user.data) {
      setFont(user.data.font)
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'>
        <FontProvider className='absolute md:h-1/3 h-1/2 md:w-1/3 w-3/4 bg-white rounded-md overflow-hidden p-2' font={font}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ultrices est. Vestibulum egestas libero eget placerat tincidunt. Quisque ultricies odio ac mattis interdum. Aliquam erat volutpat. Praesent metus nisl, vulputate a interdum vel, feugiat et odio. Integer finibus nunc in nisi elementum ullamcorper. Etiam nisi sem, accumsan pulvinar lorem tempus, mollis mollis ipsum. Nulla at cursus ante, id efficitur est. Donec tellus urna, pharetra at aliquam vitae, imperdiet eu quam. Phasellus posuere semper imperdiet. Curabitur id purus cursus ipsum bibendum semper iaculis in sapien.

          Donec tristique pharetra leo, pulvinar malesuada risus facilisis vel. Nulla lorem tortor, molestie sed mi sit amet, efficitur efficitur elit. Fusce sed hendrerit nisi. Duis ex nunc, maximus eget nibh molestie, laoreet rutrum ex. Integer urna turpis, fermentum in tempus condimentum, feugiat vitae sapien. Morbi commodo mattis lacinia. Donec sit amet orci consequat enim molestie auctor vitae a eros. Donec bibendum, odio non porta venenatis, sem mi posuere dui, quis elementum ipsum lectus at nibh.

          Aenean nunc neque, luctus fringilla blandit viverra, vestibulum condimentum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae scelerisque diam. Sed placerat, ipsum a eleifend imperdiet, ligula dui pretium nulla, dapibus mollis enim felis id lectus. Duis varius dapibus suscipit. Quisque lacinia ullamcorper ligula, non mattis arcu ullamcorper ac. Suspendisse potenti. Donec tincidunt, mauris ac ornare gravida, augue justo semper erat, in fringilla arcu dui quis lectus. Ut sodales semper fermentum. Etiam lacinia risus ac aliquet finibus.

          Vivamus fringilla dolor eu justo elementum maximus. Ut vitae turpis purus. Sed pharetra, massa et blandit fringilla, magna diam convallis felis, eget elementum massa ex non purus. Donec malesuada at ipsum vel mattis. Fusce dolor arcu, efficitur sed lectus eu, mollis dignissim augue. Integer erat ipsum, efficitur et eros eu, porta consectetur eros. Donec suscipit dictum mi, eget cursus nulla iaculis sed. Praesent nisl arcu, condimentum mattis sem eu, bibendum molestie erat. Aenean congue diam eget feugiat pulvinar. Mauris lacinia massa et efficitur rutrum. Sed euismod eleifend dui vel dapibus. In fringilla dui eget pretium condimentum. Vestibulum non sapien tellus.

          Mauris in dui vehicula, maximus justo sit amet, euismod metus. Quisque maximus nibh mauris, non aliquet sapien placerat sed. Nam id est auctor, laoreet nibh in, luctus nulla. Donec vestibulum dapibus nisi, vel pulvinar sapien scelerisque sit amet. Aliquam pretium erat a justo semper, non aliquam tortor aliquet. Donec rutrum convallis neque eget efficitur. Ut posuere consectetur magna sed congue.


          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu ultrices est. Vestibulum egestas libero eget placerat tincidunt. Quisque ultricies odio ac mattis interdum. Aliquam erat volutpat. Praesent metus nisl, vulputate a interdum vel, feugiat et odio. Integer finibus nunc in nisi elementum ullamcorper. Etiam nisi sem, accumsan pulvinar lorem tempus, mollis mollis ipsum. Nulla at cursus ante, id efficitur est. Donec tellus urna, pharetra at aliquam vitae, imperdiet eu quam. Phasellus posuere semper imperdiet. Curabitur id purus cursus ipsum bibendum semper iaculis in sapien.

          Donec tristique pharetra leo, pulvinar malesuada risus facilisis vel. Nulla lorem tortor, molestie sed mi sit amet, efficitur efficitur elit. Fusce sed hendrerit nisi. Duis ex nunc, maximus eget nibh molestie, laoreet rutrum ex. Integer urna turpis, fermentum in tempus condimentum, feugiat vitae sapien. Morbi commodo mattis lacinia. Donec sit amet orci consequat enim molestie auctor vitae a eros. Donec bibendum, odio non porta venenatis, sem mi posuere dui, quis elementum ipsum lectus at nibh.

          Aenean nunc neque, luctus fringilla blandit viverra, vestibulum condimentum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae scelerisque diam. Sed placerat, ipsum a eleifend imperdiet, ligula dui pretium nulla, dapibus mollis enim felis id lectus. Duis varius dapibus suscipit. Quisque lacinia ullamcorper ligula, non mattis arcu ullamcorper ac. Suspendisse potenti. Donec tincidunt, mauris ac ornare gravida, augue justo semper erat, in fringilla arcu dui quis lectus. Ut sodales semper fermentum. Etiam lacinia risus ac aliquet finibus.

          Vivamus fringilla dolor eu justo elementum maximus. Ut vitae turpis purus. Sed pharetra, massa et blandit fringilla, magna diam convallis felis, eget elementum massa ex non purus. Donec malesuada at ipsum vel mattis. Fusce dolor arcu, efficitur sed lectus eu, mollis dignissim augue. Integer erat ipsum, efficitur et eros eu, porta consectetur eros. Donec suscipit dictum mi, eget cursus nulla iaculis sed. Praesent nisl arcu, condimentum mattis sem eu, bibendum molestie erat. Aenean congue diam eget feugiat pulvinar. Mauris lacinia massa et efficitur rutrum. Sed euismod eleifend dui vel dapibus. In fringilla dui eget pretium condimentum. Vestibulum non sapien tellus.

          Mauris in dui vehicula, maximus justo sit amet, euismod metus. Quisque maximus nibh mauris, non aliquet sapien placerat sed. Nam id est auctor, laoreet nibh in, luctus nulla. Donec vestibulum dapibus nisi, vel pulvinar sapien scelerisque sit amet. Aliquam pretium erat a justo semper, non aliquam tortor aliquet. Donec rutrum convallis neque eget efficitur. Ut posuere consectetur magna sed congue.


        </FontProvider>
        <div>
          <PieTimer seconds={60} pixels={15} />
        </div>
        <Sidebar />
      </div>
    </>
  )
}
