
import React from 'react'
import profile from '../images/profile.jpg'

const BgProfile = () => {
  return (
    <div>
      <img
        src={profile}
        alt="subash"
        className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-blue-500"
      />
    </div>

  )
}


export default BgProfile