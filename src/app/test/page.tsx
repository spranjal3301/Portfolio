import MatrixRain from '@/components/matrix-bg'
import Profiles from '@/components/Profiles'
import { NextPage } from 'next'

interface Props {
}

const Page: NextPage<Props> = () => {

  return(
      <div className='flex justify-center items-center  w-full'>
          <Profiles/>
      </div>

  )
}

export default Page