import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
          <MenuItem index={0} disabled>cool link</MenuItem>
          <MenuItem index={1}>cool link2</MenuItem>
          <MenuItem index={2}>cool link3</MenuItem>
        </Menu>
        <Button btnType={ButtonType.Default} onClick={() => { console.log('btn1') }}>
          Button1
        </Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large} href="http://www.baidu.com" target="_black">
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
