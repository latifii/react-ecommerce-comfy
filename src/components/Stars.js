import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ reviews, stars }) => {
  const newArray = Array.from({ length: 5 }, (_, index) => {
    const numFill = index + 1
    const numHalf = index + 0.5
    console.log(stars, numFill)
    return (
      <span key={index}>
        {stars > numFill ? (
          <BsStarFill />
        ) : stars > numHalf ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  console.log(newArray)
  return (
    <Wrapper>
      <div className='stars'>{newArray}</div>
      <p className='reviews'>(${reviews} customer reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
