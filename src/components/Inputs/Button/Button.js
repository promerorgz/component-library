import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';


const StyledButton = styled.button`
/* ${console.log(props)} */
    padding: 8px 16px;
    margin: 8px;
    width: auto;
    box-shadow: 2 0 2 0 black;
    background: green;
    text-decoration: none;
    text-transform: capitalize;

`;

function Button(props){
    return(
        <StyledButton>{props.children}</StyledButton>
    )
}

export default Button;