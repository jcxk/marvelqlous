//import otherEntity from './launch.entity';
import _ from 'lodash';
export default {
  marvelEntityResult: {
    __resolveType(_obj: any, info: any) {
      if (_.get(info, 'variableValues.entity', false) !== false) {
        return _.startCase(info.variableValues.entity);
      }
      return null;
    },
  },
};
