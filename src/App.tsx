import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <div className="App">
      <SignUp />
    </div>
    <GlobalStyle />
  </>
);

export default App;
