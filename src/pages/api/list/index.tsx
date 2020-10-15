import React, {Fragment, useState} from 'react';
import { useRouter } from 'next/router';
import _ from "lodash";
import ListEntity from '@/components/listEntity';

const ListPage: React.FC = (props) => {
    const router = useRouter();
    return <ListEntity entityName={_.trim(router.asPath,"/")}/>
}

export default ListPage;
