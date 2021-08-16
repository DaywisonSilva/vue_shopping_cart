import styled from 'vue-styled-components'

const CButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #66dd66;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all linear 0.2s;
  position: relative;
  bottom: 0px;
  color: white;
  font-family: 'Poppins Regular';

  &:active {
    bottom: 2px;
    box-shadow: 0px 0px 15px #22ff6688;
  }

  @media screen and (min-width: 600px) {
    &:hover {
      box-shadow: 0px 0px 15px #22ff6688;
      bottom: 2px;
    }
  }
`

export default CButton
