import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Button from '@material-ui/core/Button';

const Form = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
    <> 
    {props.isFetchingData ? (
    <div>Fetching Data...</div>
    ) : (
        // <button onClick={handleGetData}>Get Data</button>
        <Button onClick={handleGetData} variant="outlined" color="secondary">
        VIEW BY COUNTRY
      </Button>
        )}
    </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};


export default connect(
    mapStateToProps, 
    { getData }
    )(Form);