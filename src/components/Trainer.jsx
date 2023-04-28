// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Trainer({ name, age }) {
  return (
    <>
      <p>
        Name:
        {name}
      </p>
      <p>
        Age:
        {age}
      </p>
    </>
  );
}

export default Trainer;

Trainer.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
