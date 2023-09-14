import { useEffect, useState } from 'react'
import { StyledAboutUs } from './style'
import circle from '../../assets/images/circle.png'
import Image from 'next/image'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  setTimeout(() => {
    setIsVisible(true)
  }, 7000)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    isVisible && (
      <StyledAboutUs>
        <div className="container">
          <div className="about-us">
            <Image src={circle} alt="circle" />
            <h3>A LITTLE</h3>
            <h2>ABOUT US</h2>
          </div>
          <div className="content">
            <div className="smart-devs">
              <div className="top-content">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <h1
                    key={index}
                    className={index === currentIndex ? 'white-text' : ''}
                  >
                    SMARTDEVS
                  </h1>
                ))}
              </div>
              <div className="bottom-content">
                <button>CONTACT US NOW</button>
              </div>
            </div>
            <div className="info">
              <div className="block">
                <h2>3</h2>
              </div>
              <div className="text">
                <h1>
                  Our company was born with the aim of democratizing quality
                  technology, bringing the best in the market to companies.
                </h1>
                <h3>
                  The <span>Smart devs</span> development agency is a company
                  focused on solving digital problems, working on the
                  development of systems that meet the real needs of a company.
                </h3>
                <h3>
                  Our mission is the commitment to our customers and the
                  delivery of a quality service.
                </h3>
                <h3>There is a problem? We can solve</h3>
              </div>
            </div>
          </div>
        </div>
      </StyledAboutUs>
    )
  )
}

export default AboutUs