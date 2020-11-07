class App extends React.Component {
  
state = {
    hotelsData: hotelsData,
    dateFrom: "0",
    dateTo: "0",
    countries: "0",
    prices: "0",
    sizes: "0"
  };
  
  handleCountriesChange = e => {
    let country = e.target.value;
    this.setState({
      countries: country
    });
  };
  handlePricesChange = e => {
    let price = e.target.value;
    this.setState({
      prices: price
    });
  };
  handleSizesChange = e => {
    let size = e.target.value;
    this.setState({
      sizes: size
    });
  };
  handleDateFromChange = e => {
    let datefrom = e.target.value;
    this.setState({
      dateFrom: datefrom
    });
  };

  handleDateToChange = e => {
    let dateto = e.target.value;
    this.setState({
      dateTo: dateto
    });
  };
  
  Reset = e => {
    window.location.reload()
  }

  render() {
    return (
      <div>
      <div className="container col-lg-10">
          <Header
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
            countries={this.state.countries}
            prices={this.state.prices}
            sizes={this.state.sizes}
          />
        </div>
        <div className="container-fluid col-lg-10 selector">
          <div className="row ">
            <Selector
              handleCountriesChange={this.handleCountriesChange}
              handlePricesChange={this.handlePricesChange}
              handleSizesChange={this.handleSizesChange}
              handleDateFromChange={this.handleDateFromChange}
              handleDateToChange={this.handleDateToChange}
              Reset={this.Reset}
            />
          </div>
        </div>
        <div className="container col-lg-10">
          <div className="row">
            <Cards
              hotelsData={this.state.hotelsData}
              countries={this.state.countries}
              prices={this.state.prices}
              sizes={this.state.sizes}
              dateFrom={this.state.dateFrom}
              dateTo={this.state.dateTo}
            />
          </div>
          
        </div>
        
      </div>
    );
  }
}
