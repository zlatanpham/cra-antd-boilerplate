import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Button from './components/Button';

const Container = styled.div`
  ${tw`bg-white min-h-screen flex items-center justify-center bg-gray-300`}
`;

const App: React.FC = () => {
  return (
    <Container>
      <Button>My Button</Button>
    </Container>
  );
};

export default App;
