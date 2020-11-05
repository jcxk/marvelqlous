import React, { FC } from 'react';
import _ from 'lodash';
import { withApollo } from '@/lib/apollo';

import Table from 'react-tailwind-table';
import sdkSchemas from '@/generated/sdk.json';
import 'react-tailwind-table/dist/index.css';

import * as GenSdk from '@/generated/sdk';
import * as Apollo from '@apollo/client';
import SearchBar from '@/components/searchBar';
//import { CharactersQueryQueryVariables } from '@/generated/sdk';

const sdk: any = GenSdk.getSdk(Apollo.useQuery);

type ListProps = {
  entityName: string;
  client: any;
};

const ListEntity: FC<ListProps> = ({ entityName }) => {
  const [filters, setFilters] = React.useState({
    variables: {
      //nameStartsWith: 'spider',
    },
  });
  console.log(filters);
  const {
    data,
    loading,
    variables,
    //loadMore,
    error,
  } = sdk[entityName + 'Query'](filters);
  console.log(variables);
  if (loading)
    return (
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 centered" />
    );
  if (error || !data) return <p>ERROR</p>;

  //const offset = _.get(data, 'offset', 0);
  //const limit = _.get(data, 'limit', 20);
  // console.log(_.keys(QqlTypes),QqlTypes["Query"+_.startCase(entityName)+"Args"])

  const results = _.get(data, entityName + '.data.results', []);
  console.log(results);
  const colObj = _.map(_.keys(results[0]), (colName) => {
    return typeof results[0][colName] === 'string'
      ? { field: colName, use: _.startCase(colName) }
      : null;
  });
  return (
    <div className="flex flex-col">
      <h1>List of {_.startCase(entityName)}</h1>
      <SearchBar
        filtersData={filters.variables}
        onSubmitFilters={(filters) => {
          // console.log(filters);
          return setFilters({ variables: filters.formData });
        }}
        vars={_.get(
          sdkSchemas,
          'definitions.' + _.startCase(entityName) + 'QueryQueryVariables',
          {}
        )}
      />
      <Table columns={_.compact(colObj)} rows={results} />
    </div>
  );
};

export default withApollo(ListEntity);
