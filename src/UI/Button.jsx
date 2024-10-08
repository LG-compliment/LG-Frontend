import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #EB008B;
  color: white;
  border: #EB008B;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  
`

function Button({children, ...props }) {
  return (
    <Btn {...props}>{children}</Btn>
  )
}

export default Button