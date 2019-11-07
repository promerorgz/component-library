import styled from 'styled-components';
import PropTypes from 'prop-types';




const Button = styled.button`
    background-color: ${props => props.color};
    padding: 8px 16px;
    margin: 8px;
    width: auto;
    box-shadow: 2 0 2 0 black;
    text-decoration: none;
    text-transform: capitalize;

`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

.button-container {
  
}

.btn {
  display: block;
  height: 50px;
  width: 186px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  font-size: 14px;
  text-align: center;
  
  &:after {
    position: absolute;
    content:'';
    display: inline-block;
    background: rgba(59,173,227,1);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    height: 50px;
    width: 372px;
    z-index: -1;
    transform: translateX(-280px);
    transition: transform 400ms ease-in;
  }
  
  &:hover {
    &:after {
      transform: translateX(-200px);
    }
  }
  span {
    position: relative;
    top: 16px;
  }
}
View Compiled 
Resources1×0.5×0.25×Rerun

Button.PropTypes = {
    color: PropTypes.oneOfType(['inherit' || 'primary' || 'accent' || 'default', PropTypes.string])
}


export default Button;