import Image from 'next/image'

export default function Home() {
  return (
  <div className='container mx-auto flex flex-col justify-around items-center h-screen'>
    <h1 className='text-2xl'>California Surf Reports</h1>
    <Image width={700} height={700} className='rounded-md drop-shadow-2xl' src="https://www.seekpng.com/png/detail/337-3373081_enso-water-still-shinichi-maruyama.png" alt="Enso Water Still - Shinichi Maruyama@seekpng.com" />  
  </div>
  )
}
