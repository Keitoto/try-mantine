import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { NextLink } from '@mantine/next';
import {
  Avatar,
  Box,
  Divider,
  Group,
  Indicator,
  Menu,
  Autocomplete,
  ActionIcon,
} from '@mantine/core';
import { Logout, Bell, Search, Settings } from 'tabler-icons-react';
import { getPath } from '@/lib/const';

export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
        backgroundColor: theme.white,
      })}
    >
      <Group spacing="lg" noWrap>
        {left}
        <SearchForm />
        <Notification />
        <UserMenu />
      </Group>
    </Box>
  );
};

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="Search"
      icon={<Search size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: 'transparent' },
      }}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};

const Notification: FC = () => {
  return (
    <Indicator inline size={14} offset={4} color="red" withBorder>
      <Link href={getPath('NOTIFICATION')} passHref>
        <ActionIcon component="a" variant="hover" radius="xl" size={40}>
          <Bell />
        </ActionIcon>
      </Link>
    </Indicator>
  );
};

const UserMenu: FC = () => {
  const router = useRouter();
  const signOut = () => {
    router.push(getPath('SIGN_IN'));
  };

  return (
    <Menu
      // size="lg"
      width={200}
      position="bottom"
      // placement="end"
      transitionProps={{ transition: 'pop-top-right' }}
      styles={(theme) => ({
        label: { fontSize: theme.fontSizes.sm },
        itemLabel: { fontSize: theme.fontSizes.md },
      })}
    >
      <Menu.Target>
        <ActionIcon variant="hover" radius="xl" size={40}>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<Settings size={16} />} component={Link} href="#">
          ????????????1
        </Menu.Item>
        <Menu.Item icon={<Settings size={16} />} component={Link} href="#">
          ????????????2
        </Menu.Item>
        <Menu.Item icon={<Settings size={16} />} component={Link} href="#">
          ????????????3
        </Menu.Item>
        <Divider />
        <Menu.Item icon={<Logout size={16} />} onClick={signOut}>
          ???????????????
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
