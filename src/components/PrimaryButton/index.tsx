import React from 'react'
import { Button } from 'antd'

export default function PrimaryButton() {
  const handleClick = () => {
    console.log('PrimaryButton clicked')
  }

  return (
    <>
      <Button type='primary' onClick={handleClick}>
        Primary
      </Button>
    </>
  )
}