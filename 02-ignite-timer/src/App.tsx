import { useState } from "react";
import { Button } from "./components/Button";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  const [count] = useState(5);

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1> {count}</h1>
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
