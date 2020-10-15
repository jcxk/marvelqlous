import React, {Fragment, useState} from 'react';
import { useRouter } from 'next/router';
import _ from "lodash";
import ListEntity from '../../components/listEntity';

const ListPage: React.FC = (props) => {
    const router = useRouter();
    const entityName = _.get(router, "query.entity",false);
    return entityName !== false ? <ListEntity entityName={entityName} /> : <p>No valid entity</p>
}

export default ListPage;