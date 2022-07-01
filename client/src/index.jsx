import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <h1>🎤 Musica! 👩‍🎤</h1>
      </div>
    );
  }
}

root.render(<App />);
