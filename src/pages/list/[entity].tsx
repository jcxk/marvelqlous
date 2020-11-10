import React from 'react';
import _ from 'lodash';
import ListEntity from '@/components/listEntity';
import configApp from '@/config/app.json';

const ListPage: React.FC = (props) => {
  const { entity } = props.query;
  if (!entity) {
    return <></>;
  }
  return _.includes(configApp.entities, entity) ? (
    <ListEntity entityName={entity} />
  ) : (
    <p>No valid entity</p>
  );
};

export default ListPage;
