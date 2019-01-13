import { h } from 'preact';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1rem;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0px 20px;
  margin: 0px;
  color: #666;
`;

export const Header = ({ route, reFetch }) => {
  return (
    <div className="header">
      <StyledButton onClick={reFetch}>REFRESH</StyledButton>
    </div>
  );
};
