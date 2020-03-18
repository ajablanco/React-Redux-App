import React from "react";
import { connect } from "react-redux";

const CoronaList = props => {
  return (
    <>
      {props.data.Countries.map(item => (
        <div>
          Country: {item.Country}
          New Confirmed Cases: {item.NewConfirmed}
          Total Confirmed Cases: {item.TotalConfirmed}
          New Deaths: {item.NewDeaths}
          Total Deaths: {item.TotalDeaths}
          New Recovered Cases: {item.NewRecovered}
          Total Recovered Cases: {item.TotalRecovered}
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, {})(CoronaList);
