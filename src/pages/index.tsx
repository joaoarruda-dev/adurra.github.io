import { Header } from '@/components/Header';
import backgroundImage from '../assets/backgroundImage1.gif'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='hidden sm:flex m-auto flex height justify-center items-center'>
        <div className='flex justify-start pt-20 w-full h-screen'>
          <div className='rounded-tr-[200px] md:w-8/12 rounded-br-[200px] h-full'>
            <img className='flex w-full h-full rounded-tl-[700px] rounded-tr-[1000px] rounded-br-[300px]' src={backgroundImage.src} />
          </div>
          <div className='h-full md:w-4/12 flex justify-center'>
            <div className='pt-28'>
              <Typewriter
                options={{
                  strings: ['A new web concept.', 'Welcome to the future.', 'KILL HUMANS'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

          </div>
        </div>
      </div>
      <div className='h-screen bg-[#2B1F4A] pt-28' id='about-me'>
        <h1 className='text-white text-center font-mono'>About me</h1>
      </div>
    </main>
  )
}
