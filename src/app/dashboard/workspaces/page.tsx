'use client';

import PageContainer from '@/components/layout/page-container';
import { workspacesInfoContent } from '@/config/infoconfig';

export default function WorkspacesPage() {


  return (
    <PageContainer
      pageTitle='Workspaces'
      pageDescription='Manage your workspaces and switch between them'
      infoContent={workspacesInfoContent}
    >
      <div className='flex flex-col gap-4'>
        <div className='p-4 border rounded-lg hover:bg-accent cursor-pointer'>
          <div className='font-semibold text-lg'>Acme Corp</div>
          <div className='text-muted-foreground text-sm'>org-1</div>
        </div>
        <div className='p-4 border rounded-lg hover:bg-accent cursor-pointer'>
          <div className='font-semibold text-lg'>Evil Corp</div>
          <div className='text-muted-foreground text-sm'>org-2</div>
        </div>
      </div>
    </PageContainer>
  );
}
