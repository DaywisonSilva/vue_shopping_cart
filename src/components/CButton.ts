import styled from 'vue-styled-components'


const typeButton = {
  type: String,
  width: String,
  height: String
};

const styleButton = (type: string) => {
  switch (type) {
    case 'primary':
      return `
              background-color: #44c76c;
              color: #fff;
          `
    case 'secondary':
      return `
              background-color: #B4000B;
              color: #FDFDFD;
          `
    default:
      return `
              background-color: #0057AA;
              color: #FFFFFF;
          `
  }
}


const CButton = styled('button', typeButton)`
  width:  ${props => props.width ? props.width : '100px'};
  height: ${props => props.height ? props.height : '40px'};
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: all linear 0.2s;
  position: relative;
  bottom: 0px;
  color: white;
  font-family: 'Poppins Regular';
  ${(props: any):string => styleButton(props.type)}


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
