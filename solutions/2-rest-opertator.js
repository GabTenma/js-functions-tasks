import _ from 'lodash';

const average = (...rest) => {
  // BEGIN
  if (rest.length === 0) return null;
  return _.sum(rest) / rest.length;
  // END
};

export default average;