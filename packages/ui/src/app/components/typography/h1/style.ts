import { styled } from 'solid-styled-components';

export const H1Styled = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    text-align: center;
    letter-spacing: 0.072px;

    color: ${props => props.theme!.colors.font.primary};

    margin-top: 0;
    margin-bottom: 6px;
`;
