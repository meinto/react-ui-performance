import React from 'react'
import styled from 'styled-components'
import { SPACE, IMAGE_SIZE } from '../constants'

const RowContainer = styled.div`
  border-width: 2px;
  border-color: #ccc;
  border-radius: 2px;
  border-style: solid;
  padding: ${SPACE}px;
  max-width: 800px;
  width: 100%;
  margin-bottom: ${SPACE}px;
  display: flex;
`
export const Row = ({ index, name }: { index: number, name: string }) => (
  <RowContainer>
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
  </RowContainer>
)

const Image = styled.div`
  background-color: #ccc;
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: 50%;
`

const Box = styled.div<{
  children: any,
  mr?: boolean, ml?: boolean, mt?: boolean, mb?: boolean,
  pr?: boolean, pl?: boolean, pt?: boolean, pb?: boolean,
}>`
  ${props => props.mr && `margin-right: ${SPACE}px;`}
  ${props => props.ml && `margin-left: ${SPACE}px;`}
  ${props => props.mt && `margin-top: ${SPACE}px;`}
  ${props => props.mb && `margin-bottom: ${SPACE}px;`}
  ${props => props.pr && `padding-right: ${SPACE}px;`}
  ${props => props.pl && `padding-left: ${SPACE}px;`}
  ${props => props.pt && `padding-top: ${SPACE}px;`}
  ${props => props.pb && `padding-bottom: ${SPACE}px;`}
`

const Headline1 = styled.h1`
  margin-top: 0;
`

const SkeletLine = styled.div<{ size?: string }>`
  background-color: #ccc;
  width: ${props => {
    switch(props.size) {
      case 'large': return 500
      case 'medium': return 300
      case 'smapp': return 100
      default: return 100
    }
  }}px;
  height: 5px;
  margin-bottom: 10px;
`

const DirectionColumn = styled.div`
  flex-direction: column;
`