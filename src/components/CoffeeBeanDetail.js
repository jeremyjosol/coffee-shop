import React from "react";
import PropTypes from "prop-types";

function CoffeeBeanDetail(props){
  const { bean, onClickingDelete } = props;
    return (
      <React.Fragment>
        <h1>Coffee Bean Details</h1>
        <h3>{bean.name} | {bean.origin}</h3>
        <h5>{bean.roast}</h5>
        <h5>${bean.price} per lb.</h5>
        <h5>{coffee.available} lbs available.</h5>    
        <br />
        <button onClick={ props.onClickingEdit }>Edit</button> 
        <button onClick={()=> onClickingDelete(bean.id) }>Delete</button>
        </React.Fragment>
    );
}

CoffeeBeanDetail.propTypes = {
    bean: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
};  

export default CoffeeBeanDetail;