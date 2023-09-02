import { useState } from "react";
import { Button } from "./components/Button";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

function App() {
  const [count] = useState(5);

  return (
      <ThemeProvider theme={defaultTheme}>
      <h1> {count}</h1>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger" />
      <Button variant="success"/>
  
      </ThemeProvider>
      
  );
}

export default App;
