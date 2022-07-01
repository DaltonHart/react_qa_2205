import React from "react";
import axios from "axios";

import BandList from "./BandList";
import SearchForm from "./SearchForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [],
      error: null,
      searchTerm: "",
    };

    console.log("[App] constructor");

    // bind methods
    this.fetchBands = this.fetchBands.bind(this);
  }

  // initial network requests
  componentDidMount() {
    console.log("[App] did mount");
    this.fetchBands();
  }

  fetchBands() {
    axios
      .get("/api/v1/bands")
      .then(response => {
        console.log({ response });
        this.setState({ bands: response.data });
      })
      .catch(err => {
        this.setState({ error: "Internal Error. Please try again later." });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[App] did update", { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log("[App] unmounted");
  }

  handleSearch = e => this.setState({ searchTerm: e.target.value });

  render() {
    console.log("[App] render");
    return (
      <div className='App'>
        <h1>🎤 Musica! 👩‍🎤</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <SearchForm handleSearch={this.handleSearch} />

        {this.state.searchTerm ? (
          <BandList
            bands={this.state.bands}
            header={this.state.searchTerm}
            genre={this.state.searchTerm}
          />
        ) : (
          <>
            <BandList bands={this.state.bands} header='Top Bands' />
            <BandList bands={this.state.bands} header='Rock' genre='rock' />
          </>
        )}
      </div>
    );
  }
}

export default App;
