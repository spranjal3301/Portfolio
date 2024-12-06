import { NextPage } from 'next'
import Image from 'next/image'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    
    <Image alt='lm' src="/lightModeUserDeteacted.jpg" className='mx-auto' width={500} height={500}/>
    )
}

export default Page