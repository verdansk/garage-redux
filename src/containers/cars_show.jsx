import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions/index';

class CarsShow extends React.Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }


  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.car.brand}</h3>
          <p>{this.props.car.type}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCar }, dispatch);
};

const mapStateToProps = (state, ownProps) => {
  const carId = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === carId);
  return { car };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
