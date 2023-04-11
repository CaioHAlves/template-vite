import styled from 'styled-components'
import { StyledProps } from '../app/theme/styledProps'

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.background};
  overflow: hidden;
`
export const Content = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${props => props.flexdirection};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  padding: ${props => props.padding};
  overflow: ${props => props.overflow};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background};
`
