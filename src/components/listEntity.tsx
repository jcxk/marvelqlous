import React, {FC} from 'react';
import _ from "lodash";
import {withApollo} from '@/lib/apollo';
import {fetchList} from '@/lib/utils';
import * as GqlOps from '@/generated/graphql';
import Table from 'react-tailwind-table';
import 'react-tailwind-table/dist/index.css'

type ListProps = {
    entityName: string,
    client: any
}

const ListEntity:FC<ListProps> = ({entityName}) => {
    const {
        data,
        loading,
        //loadMore,
        error,
    } = GqlOps["useGet"+_.startCase(entityName)+"Query"]();//fetchList(entityName);

    if (loading) return <div
        className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 centered"/>;
    if (error || !data) return <p>ERROR</p>;

    const offset = _.get(data, "offset",0);
    const limit = _.get(data, "limit",20);
   // console.log(_.keys(QqlTypes),QqlTypes["Query"+_.startCase(entityName)+"Args"])

    const results = _.get(data, entityName+".data.results", []);
    console.log(results)
    const columsnObj=_.map(_.keys(results[0]), (colName) => {

        return typeof results[0][colName] === "string" ? { field: colName, use: _.startCase(colName)} :null;
    });
    return (

        <div className="flex flex-col">
            <h1>List of {_.startCase(entityName)}</h1>
            <Table columns={_.compact(columsnObj)} rows={results} />
        </div>
    );
}

export default withApollo(ListEntity);
