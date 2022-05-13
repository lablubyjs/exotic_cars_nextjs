import styled from 'styled-components';

interface ITextProps {
    fontSize: number;
    fontWeight: string;
    color?: string;
}

export const Container = styled.main`
    position: relative;
    top: 4.5rem;
    width: 100%;
`;

export const Content = styled.section`
    padding: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
`;

export const Text = styled.p<ITextProps>`
    font-size: ${({fontSize}) => `${fontSize}rem`};
    font-weight: ${({fontWeight}) => `${fontWeight}`};
    color: ${({color, theme}) => (color ? `${color}` : theme.colors.primary_text)};
`;
