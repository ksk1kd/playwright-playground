import { CSSProperties } from 'react'

interface BoxProps {
  style?: CSSProperties
}

export const Box = ({ style }: BoxProps) => {
  return (
    <div
      id="box"
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#e0e0e0',
        ...style,
      }}
    />
  )
}
