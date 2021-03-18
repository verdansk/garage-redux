import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends React.Component {
  componentDidMount() {
    return this.props.fetchCars();
  }

  render() {
    return (
      <div>
        <Link to="/new">New Car</Link>
        {this.props.cars.map((car) => {
          return (
            <Link to={`/${car.id}`} key={car.plate}>
              <div>
                <h1>{car.brand}</h1>
                <h2>{car.model}</h2>
                <h4>{car.owner}</h4>
                <p>{car.plate}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCars }, dispatch);
};

const mapStateToProps = (state) => {
  return { cars: state.cars };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
