import React, { useState, useEffect } from 'react'
import symbol from '../images/symbol.png'


const Slogan: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [displayStyle, setDisplayStyle] = useState<string>('block')

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    const displayNoneTimer = setTimeout(() => {
      setDisplayStyle('none')
    }, 4500)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(displayNoneTimer)
    }
  }, [])

  const text = 'REST,\nSAVOR,\nSTAY'
  const [displayedText, setDisplayedText] = useState<string>('')
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (index < text.length) {
      const charTimer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(charTimer)
    }
  }, [index, text])

  return (
    <div
      id="slogan"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-in-out',
        display: displayStyle,
      }}
    >
      <p className="slogan-text">{displayedText}</p>
      <img src={symbol} className="symbol-image" alt="symbol" />

    </div>
  )
}

export default Slogan
