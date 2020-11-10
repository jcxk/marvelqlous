import React, { FC } from 'react';
import _ from 'lodash';
import { withApollo } from '@/lib/apollo';

import Table from 'react-tailwind-table';
import sdkSchemas from '@/generated/sdk.json';
import 'react-tailwind-table/dist/index.css';

import * as GenSdk from '@/generated/sdk';
import * as Apollo from '@apollo/client';
import SearchBar from '@/components/searchBar';
import { Spin } from 'antd';

const sdk: any = GenSdk.getSdk(Apollo.useQuery);
const sdkJsonSchema = (entityName: string) => {
  return _.get(
    sdkSchemas,
    'definitions.' + _.startCase(entityName) + 'QueryQueryVariables',
    {}
  );
};

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

  const {
    data,
    loading,
    //loadMore,
    error,
  } = sdk[entityName + 'Query'](filters);

  if (loading)
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <Spin size="large" />
        </div>
      </div>
    );
  if (error || !data) return <p>ERROR</p>;

  const results = _.get(data, entityName + '.data.results', []);

  const colObj = _.map(_.keys(results[0]), (colName) => {
    return typeof results[0][colName] === 'string'
      ? { field: colName, use: _.startCase(colName) }
      : null;
  });
  const jsonSchema = sdkJsonSchema(entityName);
  return (
    <>
      <SearchBar
        filtersData={filters.variables}
        onSubmitFilters={({ formData }): any =>
          setFilters({ variables: formData })
        }
        jsonSchema={jsonSchema}
      />
      <Table columns={_.compact(colObj)} rows={results} />
    </>
  );
};

export default withApollo(ListEntity);
