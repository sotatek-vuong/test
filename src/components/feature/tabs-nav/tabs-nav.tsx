import { Link } from '@components/core';
import { Tabs, Tab } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

interface Item {
  label: string;
  href: string;
}

export interface TabsNavProps {
  items: Item[];
}

const TabsNav: React.FC<TabsNavProps> = ({ items }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Tabs value={router.pathname}>
      {items.map((i) => (
        <Tab value={i.href} {...i} component={Link} />
      ))}
    </Tabs>
  );
};

export default TabsNav;
