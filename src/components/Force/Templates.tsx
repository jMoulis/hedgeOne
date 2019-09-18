import styled from '@emotion/styled';

interface BarProps {
  color?: string;
  height?: number | string;
  width?: number | string;
  marginBottom?: number | string;
}

export const Bar = styled.div<BarProps>`
  background-color: ${({ color }) => color || '#fff'};
  height: ${({ height }) => height}rem;
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}rem` : '0.5rem'};
`;

export const Label = styled.label`
  margin-right: 0.5rem;
  display: inline-block;
  min-width: 9rem;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

// TODO: Modify any type
interface ButtonProps extends BarProps {
  bgColor?: string;
  color?: string;
  type?: string;
  radius?: number | string;
  onClick?: any;
}

export const Button = styled(Bar)<ButtonProps>`
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width || 7}rem;
  background-color: ${({ bgColor }) => bgColor || 'lightgreen'};
  color: ${({ color }) => color || 'inherit'};
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: ${({ radius }) => radius}px;
  padding: 1rem;
`;
