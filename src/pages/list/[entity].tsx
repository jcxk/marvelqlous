import React from 'react';
import _ from 'lodash';
import ListEntity from '@/components/listEntity';
import configApp from '@/config/app.json';
import { useRouter } from 'next/router';
import { withApollo } from '@/lib/apollo';

const ListPage: React.FC = (props) => {
  const router = useRouter();
  const entity: any = _.get(router.query, 'entity', '');
  if (!entity) {
    return <></>;
  }

  return _.includes(configApp.entities, entity) ? (
    <ListEntity entityName={entity} />
  ) : (
    <p>No valid entity</p>
  );
};

export default withApollo(ListPage);
