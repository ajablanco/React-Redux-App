import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CoronaList = props => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className="boxes" style={{flexWrap: "wrap", margin: "0!important",  display: "flex", justifyContent: "space-between"}}>
          {props.data.Countries.map(item => (
            <div className="test">
              <Card className={classes.root} variant="outlined">
              <CardContent>
              <div className="box" >
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <div style={{width: "250px", wordWrap: "break-word", marginTop: "1%"}} ><h2 style={{fontSize: "1.5rem"}}>{item.Country}</h2></div>
                <p style={{fontSize:"1.1rem", marginTop: "10%"}}> Total Confirmed Cases: {item.TotalConfirmed}</p>
                <p style={{fontSize:"1.1rem"}}> Total Deaths: {item.TotalDeaths}</p>
                <p style={{fontSize:"1.1rem"}}> Total Recovered Cases: {item.TotalRecovered}</p>
                </Typography>
              </div>
              </CardContent>
              </Card> 
            </div>
          ))}
        </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, {})(CoronaList);
