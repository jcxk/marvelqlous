import React from 'react';
import { Layout, Menu, Breadcrumb, PageHeader } from 'antd';
const { Header, Content, Footer } = Layout;
import configApp from '@/config/app.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _ from 'lodash';

type AppLayoutProps = {
  query: any;
};

const AppLayout: React.FC<AppLayoutProps> = ({ query, children }) => {
  const mainMenu = _.map(configApp.entities, (entityName) => {
    return (
      <Menu.Item key={entityName}>
        <Link href={'/list/' + entityName}>{_.startCase(entityName)}</Link>
      </Menu.Item>
    );
  });

  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Home',
    },
    {
      path: 'list',
      breadcrumbName: 'List',
    },
    {
      path: query.entity,
      breadcrumbName: _.startCase(query.entity),
    },
  ];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[query.entity]}
        >
          {mainMenu}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <PageHeader
          className="site-page-header"
          title={'List of ' + query.entity}
          breadcrumb={{ routes }}
        />

        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>MarvelQLous 2020</Footer>
    </Layout>
  );
};
export default AppLayout;
