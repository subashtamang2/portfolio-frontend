import React from 'react'
import TypingEffect from '../components/TypingEffect'
import SocialIcons from '../components/SocialIcons'
import Features from '../components/Features'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import TabSection from '../components/TabSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <div className="bg-charcoal text-white ">
        <div className='grid grid-cols-2 mx-auto max-w-6xl'>
          <div>
            <TypingEffect />
            <SocialIcons />
          </div>
          <div className='p-4 md:p-4 mt-10 md:mt-28 text-lg  md:text-2xl '>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deserunt dolore repellat nisi quis, corporis vel assumenda libero consectetur eligendi voluptatibus, blanditiis tempore distinctio ea laudantium et ipsa aliquam, voluptas repudiandae commodi? Reprehenderit possimus facere nam cupiditate, ex consequuntur ut repellat voluptatibus eos dicta quaerat quae, sed fugiat iusto vitae.</h1>
          </div>

        </div>

      </div>
      <Features />
      <Projects />
      <TabSection />

      <Contact />

      <Footer />


    </div>
  )
}

export default Home