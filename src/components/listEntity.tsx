import React, {FC} from 'react';
import _ from "lodash";
import {withApollo} from '../lib/apollo';
import {fetchList} from '../lib/utils';


type ListProps = {
    entityName: string,
    client: any
}

const ListEntity:FC<ListProps> = ({entityName}) => {
    const {
        data,
        loading,
        loadMore,
        error,
    } = fetchList(entityName);

    if (loading) return <div
        className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 centered"/>;
    if (error || !data) return <p>ERROR</p>;

    const offset = _.get(data, "offset",0);
    const limit = _.get(data, "limit",20);
   // console.log(_.keys(QqlTypes),QqlTypes["Query"+_.startCase(entityName)+"Args"])
    return (

        <div className="flex flex-col">
            <h1>List of {_.startCase(entityName)}</h1>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50"></th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {_.map(_.get(data, "results", []), (item) => {

                                    return (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap">{item.name}</td>
                                        </tr>
                                    )
                                }
                            )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button onClick={(ev) => { ev.preventDefault();loadMore(offset,limit) }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Next
            </button>
        </div>
    );
}

export default withApollo(ListEntity);
