import type { CustomLayout } from 'next';
import dynamic from 'next/dynamic';
import { useDisclosure } from '@mantine/hooks';
import { ActionIcon, AppShell, Box, MediaQuery } from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';

import { LayoutErrorBoundary } from '../LayoutErrorBoundary';

const Header = dynamic(async () => {
  const { Header } = await import('./Header');
  return Header;
});

const SideNav = dynamic(async () => {
  const { SideNav } = await import('./SideNav');
  return SideNav;
});

const DrawerNav = dynamic(async () => {
  const { DrawerNav } = await import('./DrawerNav');
  return DrawerNav;
});

export const DashboardLayout: CustomLayout = (page) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      styles={(theme) => ({
        body: { minHeight: '100vh' },
        main: { padding: 0, backgroundColor: theme.colors.gray[0] },
      })}
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <SideNav />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
    >
      <Header
        left={
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <ActionIcon
              variant="hover"
              radius="xl"
              size={40}
              onClick={handlers.open}
            >
              <Menu2 />
            </ActionIcon>
          </MediaQuery>
        }
      />
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  );
};
