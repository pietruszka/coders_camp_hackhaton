import styled from 'styled-components';

export const Container = styled.h2`
  margin: var(--space-lg);
  color: ${props => (props.color === 'default' ? 'var(--text1)' : 'var(--primary2)')};
`;
