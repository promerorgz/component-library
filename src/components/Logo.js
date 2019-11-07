import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const StyledLogo = styled.a`
    margin: 16px;
    cursor: pointer;
    &:after {
        height: 2px;
        width: 0;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
    }
`

function Logo(props) {

    const { src, alt } = props;

    return (
        <Link href="/">
            <StyledLogo>
                <img src={src} height='50px' width='50px' alt={alt} />
            </StyledLogo>
        </Link>
    )

}

export default Logo
