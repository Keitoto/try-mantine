import { SideNav } from '@/layout/DashboardLayout/SideNav';
import { Drawer, CloseButton } from '@mantine/core';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

export const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({
  opened,
  handleClose,
}) => {
  const router = useRouter();

  // SideNav のメニュークリックで Drawer を閉じる処理
  useEffect(() => {
    router.events.on('routeChangeStart', handleClose);
    return () => {
      router.events.off('routeChangeStart', handleClose);
    };
  }, [handleClose, router.events]);

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      // sx={{ position: 'relative' }}
    >
      <CloseButton
        size="xl"
        radius="xl"
        variant="transparent"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          zIndex: 999,
          top: 8,
          right: -56,
          color: 'white',
          '&:not(:disabled):active': { transform: 'none' },
        }}
      />
      <SideNav />
    </Drawer>
  );
};

