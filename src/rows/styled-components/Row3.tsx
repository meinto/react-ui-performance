import React from 'react'
import styled from 'styled-components'
import { SPACE, IMAGE_SIZE } from '../constants'
import { Box } from '../plain/Row'

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

    <ColoredBox color={'#eee'} ml>
      <strong>nested 1</strong>
      <ColoredBox color={'#ddd'}>
        <strong>nested 2</strong>
        <ColoredBox color={'#ccc'}>
          <strong>nested 3</strong>
          <ColoredBox color={'#bbb'}>
            <strong>nested 4</strong>
            <ColoredBox color={'#aaa'}>
              <strong>nested 5</strong>
              <ColoredBox color={'#999'}>
                <strong>nested 6</strong>
              </ColoredBox>
            </ColoredBox>
          </ColoredBox>
        </ColoredBox>
      </ColoredBox>
    </ColoredBox>
  </RowContainer>
)

const Image = styled.div`
  background-color: #ccc;
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-radius: 50%;
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

const ColoredBox = styled(Box)<{ color: string }>`
  background-color: ${props => props.color};
  padding: 5px;
`
