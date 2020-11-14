import React, { FC } from 'react';
import _ from 'lodash';
import { Modal, Button, Spin } from 'antd';

type ListProps = {
  jsonSchema: any;
  onSubmitFilters: any;
  filtersData: any;
  // client: any;
};

import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
const Form = withTheme(AntDTheme);

const SearchBar: FC<ListProps> = ({
  filtersData,
  jsonSchema,
  onSubmitFilters,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const uiSchema = {};
  _.map(['orderBy', 'offset', 'limit'], (fieldName) => {
    uiSchema[fieldName] = { 'ui:widget': 'hidden' };
  });
  _.map(['modifiedSince'], (fieldName) => {
    uiSchema[fieldName] = { 'ui:widget': 'date' };
  });

  return (
    <>
      <Button type="primary" onClick={() => setShowModal(true)}>
        Filters
      </Button>
      <Modal
        centered
        title="Filters"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key="back" onClick={() => setShowModal(false)}>
            Cancel
          </Button>,
          <Button key="submit" form="filters" type="primary" htmlType="submit">
            Apply
          </Button>,
        ]}
      >
        <Form
          id="filters"
          schema={jsonSchema}
          uiSchema={uiSchema}
          onSubmit={onSubmitFilters}
          formData={filtersData}
        />
      </Modal>
    </>
  );
};
export default SearchBar;
