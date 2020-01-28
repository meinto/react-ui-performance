import React from 'react'
import { SPACE, IMAGE_SIZE } from '../constants'

export const Row = ({ index, name }: { index: number, name: string }) => (
  <div style={{
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 2,
    borderStyle: 'solid',
    padding: SPACE,
    maxWidth: 800,
    width: '100%',
    marginBottom: SPACE,
    display: 'flex',
  }}>
    <Box mr>
      <Image />
    </Box>
    <DirectionColumn>
      <Box mb>
        <DirectionColumn>
          <Headline1>#{index} {name}</Headline1>
          <SkeletLine size={'large'}/>
          <SkeletLine size={'large'}/>
          <SkeletLine size={'large'}/>
          <SkeletLine size={'medium'}/>
        </DirectionColumn>
      </Box>

      <DirectionColumn>
        <SkeletLine size={'large'}/>
        <SkeletLine size={'large'}/>
        <SkeletLine size={'large'}/>
        <SkeletLine size={'medium'}/>
      </DirectionColumn>
    </DirectionColumn>

    <Box ml>
      <strong>nested 1</strong>
      <Box>
        <strong>nested 2</strong>
        <Box>
          <strong>nested 3</strong>
          <Box>
            <strong>nested 4</strong>
            <Box>
              <strong>nested 5</strong>
              <Box>
                <strong>nested 6</strong>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
)

const Image = () => (
  <div style={{
    backgroundColor: '#ccc',
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: '50%',
  }}/>
)

const Box = ({
  children,
  mr, ml, mt, mb,
  pr, pl, pt, pb,
}: {
  children: any,
  mr?: boolean, ml?: boolean, mt?: boolean, mb?: boolean,
  pr?: boolean, pl?: boolean, pt?: boolean, pb?: boolean,
}): JSX.Element => {
  let style: { [key: string]: number } = {}
  mr && (style.marginRight = SPACE)
  ml && (style.marginLeft = SPACE)
  mt && (style.marginTop = SPACE)
  mb && (style.marginBottom = SPACE)
  pr && (style.paddingRight = SPACE)
  pl && (style.paddingLeft = SPACE)
  pt && (style.paddingTop = SPACE)
  pb && (style.paddingBottom = SPACE)
  return <div style={style}>{children}</div>
}

const Headline1 = ({ children }: { children: any }) => (
  <h1 style={{ marginTop: 0 }}>{children}</h1>
)

const SkeletLine = ({ size }: { size?: string }) => {
  let width = 100
  switch(size) {
    case 'large': width = 500; break
    case 'medium': width = 300; break
    case 'smapp': width = 100; break
    default:  width = 100; break
  }
  return (
    <div style={{
      backgroundColor: '#ccc',
      width,
      height: 5,
      marginBottom: 10,
    }}/>
  )
}

const DirectionColumn = ({ children }: { children: any }) => <div style={{ flexDirection: 'column' }}>{children}</div>