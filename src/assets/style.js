import styled from 'styled-components';
import bgimg from '../images/background-image.jpg';

export const LinkNav = styled.a`
    color: white;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    :hover {
        color: whitesmoke;
    }
`;

export const FormImage = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(${bgimg});
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -2;
`;

export const BlackImage = styled.div`
    background-color: rgba(10, 10, 10, .3);
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
`;
