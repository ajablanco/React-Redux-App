import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
      <div className="boxes" style={{ width: "100vw", flexWrap: "wrap", margin: "0!important",  display: "flex", justifyContent: "space-between"}}>
          {props.data.Countries.map(item => (
            <div>
              <Card className={classes.root} variant="outlined">
              <CardContent>
              <div className="box">
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <h2 style={{fontSize: "1rem"}}>{item.Country}</h2>
                <p> Total Confirmed Cases: {item.TotalConfirmed}</p>
                <p> Total Deaths: {item.TotalDeaths}</p>
                <p> Total Recovered Cases: {item.TotalRecovered}</p>
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
