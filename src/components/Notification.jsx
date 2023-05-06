import PropTypes from 'prop-types';

export const Notification = ({ total, massage }) => {
  return total === 0 && <p>{massage}</p>;
};

Notification.propTypes = {
  total: PropTypes.number.isRequired,
  massage: PropTypes.string.isRequired,
};
