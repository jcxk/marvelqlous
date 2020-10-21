//import otherEntity from './launch.entity';
import _ from 'lodash';
module.exports = {
  marvelEntityResult: {
    __resolveType(obj, context, info) {
      if (_.get(info, 'variableValues.entity', false) !== false) {
        return _.startCase(info.variableValues.entity);
      }
      return null;
    },
  },
};
