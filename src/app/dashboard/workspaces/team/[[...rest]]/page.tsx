'use client';

import PageContainer from '@/components/layout/page-container';

import { useTheme } from 'next-themes';
import { teamInfoContent } from '@/config/infoconfig';

export default function TeamPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team, members, roles, security and more.'
      infoContent={teamInfoContent}
    >
      <div className='flex h-[400px] items-center justify-center rounded-lg border border-dashed'>
        <div className='text-center'>
          <h3 className='text-lg font-medium'>Team Management</h3>
          <p className='text-muted-foreground text-sm'>
            Team management functionality is currently disabled.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
