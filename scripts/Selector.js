function Selector(props) {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-12"> 
        <select
          className="btn btn-primary"
          name="Countries"
          id="Countries"
          onChange={props.handleCountriesChange}
        >
          <option value="0">Any Country</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <div className="col-lg-4 col-md-12">
        <select
          onChange={props.handlePricesChange}
          className="btn btn-primary"
          name="Prices"
          id="Prices"
        >
          <option value="0">Any price</option>
          <option value="1">Price: 1</option>
          <option value="2">Price: 2</option>
          <option value="3">Price: 3</option>
          <option value="4">Price: 4</option>
        </select>
      </div>
      <div className="col-lg-4 col-md-12">
        <select
          onChange={props.handleSizesChange}
          className="btn btn-primary"
          name="Rooms"
          id="Rooms"
        >
          <option value="0">Any quantity of rooms</option>
          <option value="1">From 0 to 10 rooms</option>
          <option value="2">From 11 to 20 rooms</option>
          <option value="3">From 21 to 30 rooms</option>
          <option value="4">Higher than 31 rooms</option>
        </select>
      </div>
      <div className="col-lg-4 col-md-12">
        <input
          className="btn btn-primary" 
          type="date"
          onChange={props.handleDateFromChange}
          placeholder="From"
        />
      </div>
      <div className="col-lg-4 col-md-12">
        <input
          className="btn btn-primary"
          type="date"
          onChange={props.handleDateToChange}
        />
      </div>
      <div className="col-lg-4 col-md-12">
        <button type="button" class="btn btn-primary" onClick={props.Reset}><i class="fas fa-undo"></i></button>
      </div>
    </React.Fragment>
  );
}