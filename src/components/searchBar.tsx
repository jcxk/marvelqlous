import React, { FC } from 'react';
import _ from 'lodash';
import sdkSchemas from '@/generated/sdk.json';
import { withApollo } from '@/lib/apollo';
const log = (type) => console.log.bind(console, type);
type ListProps = {
  vars: any;
  onSubmitFilters: void;
  filtersData: any;
  // client: any;
};
import 'antd/dist/antd.css';

import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
const Form = withTheme(AntDTheme);
const uiSchema = {
  'ui:widget': 'checkbox',
};
//const customFields = { StringField: CustomString };
//const customWidgets = { CheckboxWidget: CustomCheckbox };
const CustomCheckbox = function (props: any) {
  return (
    <button
      id="custom"
      className={props.value ? 'checked' : 'unchecked'}
      onClick={() => props.onChange(!props.value)}
    >
      {String(props.value)}
    </button>
  );
};

const widgets = {
  CheckboxWidget: CustomCheckbox,
};
const SearchBar: FC<ListProps> = ({ filtersData, vars, onSubmitFilters }) => {
  const [showModal, setShowModal] = React.useState(false);
  let filteredVars: any = {};
  _.map(vars.properties, (item, key) => {
    // console.log(item, key);
    if (item.type !== 'array') {
      filteredVars[key] = item;
    }
    return true;
  });
  const newVars = {
    properties: filteredVars,
    type: 'object',
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Filters
      </button>
      {showModal ? (
        <>
          <div
            className="m-3 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            //onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Filters</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Form
                    schema={newVars}
                    //uiSchema={uiSchema}
                    //widgets={widgets}
                    onChange={log('changed')}
                    //onChange={(form) => onChangeFilters(form.formData)}
                    onSubmit={onSubmitFilters}
                    onError={log('errors')}
                    formData={filtersData}
                  >
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                      <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: 'all .15s ease' }}
                        //onClick={() => setShowModal(false)}
                      >
                        Apply
                      </button>
                    </div>
                  </Form>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default SearchBar;
