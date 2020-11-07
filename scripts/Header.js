function Header(props) {
  let rooms = props.sizes;
  var roomstext = "";
  if (rooms === "1") {
    roomstext = "from 0 to 10";
  } else if (rooms === "2") {
    roomstext = "from 11 to 20";
  } else if (rooms === "3") {
    roomstext = "from 21 to 30";
  } else if (rooms === "4") {
    roomstext = "more than 31";
  }
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hotels</h1>
          <p className="lead">
            {props.dateFrom !== "0" && props.dateTo !== "0"? `with disponitility from ${props.dateFrom} to ${props.dateTo}, ` : ""}in{" "}
            {props.countries !== "0" ? props.countries : "any country"}, with{" "}
            {props.prices !== "0" ? `a price of ${props.prices}` : "any prices"},
            with {props.sizes !== "0" ? roomstext : "any quantity of"} rooms.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
