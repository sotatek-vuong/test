import _ from 'lodash';
import { Container } from '@material-ui/core';

import { TabsNav } from '@components/feature';

const _tabs = [
  { label: 'buttons', href: '/example/buttons' },
  { label: 'typography', href: '/example/typography' },
  { label: 'checkboxes', href: '/example/checkboxes' },
  { label: 'inputs', href: '/example/inputs' },
];

const PublicLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <TabsNav items={_tabs} />
      {children}
    </Container>
  );
};

export default PublicLayout;
export const getPublicLayout = (page: any) => {
  return <PublicLayout>{page}</PublicLayout>;
};
