import React from 'react';
import styled from 'styled-components';
import { Flex } from '../Utils'
import PropTypes, { object } from 'prop-types';
import  Button from '../Inputs/Button';

const capitalize = s => s && s[0].toUppercase() + s.slice(1);

const NavbarContainer = styled.div`
    background: ${props => props.theme.palette.primary.main};
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

Navbar.propTypes = {
    routes: PropTypes.arrayOf(object),

};

function Navbar (props) {

    const {routes, color} = props;
    console.log(routes, color)

    return (
        <NavbarContainer>
            <Flex>
                Logo
            </Flex>
            <Button color={color}>hello</Button>
            {routes.map((route, i) => (<a key={i} href={route.link}>{route.name}</a>))}
        </NavbarContainer>
    )
}

export default Navbar
