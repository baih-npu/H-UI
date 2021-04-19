import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Default}>
          Button1
        </Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="http://www.baidu.com">
          Link Button
        </Button>
        <Button btnType={ButtonType.Default} disabled>
          Button2
        </Button>
        <h1>Hello world</h1>
        <hr />
        <code>
          const a = "hello world"
        </code>
      </header>
    </div>
  );
}

export default App;
