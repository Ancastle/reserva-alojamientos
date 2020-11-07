function Cards(props) {
  let displayHotels = props.hotelsData;
  let selectedCountry = props.countries;
  let selectedPrice = props.prices;
  let selectedSize = props.sizes;
  let datefrom = props.dateFrom;
  let dateto = props.dateTo;

  /*Filters country*/
  if (selectedCountry !== "0") {
    displayHotels = displayHotels.filter(
      hotel => hotel.country === selectedCountry
    );
  }
  /*Filters price*/
  if (selectedPrice !== "0") {
    displayHotels = displayHotels.filter(
      hotel => hotel.price.toString() === selectedPrice
    );
  }
  /*Filters size*/
  if (selectedSize !== "0") {
    if (selectedSize === "1") {
      displayHotels = displayHotels.filter(hotel => hotel.rooms <= 10);
    } else if (selectedSize === "2") {
      displayHotels = displayHotels.filter(
        hotel => hotel.rooms >= 11 && hotel.rooms <= 20
      );
    } else if (selectedSize === "3") {
      displayHotels = displayHotels.filter(
        hotel => hotel.rooms >= 21 && hotel.rooms <= 30
      );
    } else if (selectedSize === "4") {
      displayHotels = displayHotels.filter(hotel => hotel.rooms > 30);
    }
  }
  /*Filters Disponibility*/
  let datefromms = Date.parse(datefrom);
  let datetoms = Date.parse(dateto);
  if (datefromms !== 946702800000 && datetoms !== 946702800000) {
    if (datefromms < datetoms) {
      displayHotels = displayHotels.filter(
        hotel =>
          hotel.availabilityFrom <= datefromms &&
          hotel.availabilityTo >= datetoms
      );
    } else {
      alert(
        ` The 'Disponibility to' entered date must be later than 'Disponibility from' date `
      );
    }
  }
  if (displayHotels.length == 0) {
    alert('There are no hotels that match your requirements')
  }
  return (
    <React.Fragment>
      {displayHotels.map((hotel, i) => (
        <Card
          title={hotel.name}
          photo={hotel.photo}
          slug={hotel.slug}
          description={hotel.description}
          rooms={hotel.rooms}
          city={hotel.city}
          country={hotel.country}
          price={hotel.price}
          key={i}
        />
      ))}
    </React.Fragment>
  );
}
