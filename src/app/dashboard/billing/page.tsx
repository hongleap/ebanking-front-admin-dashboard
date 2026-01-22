'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { billingInfoContent } from '@/config/infoconfig';

export default function BillingPage() {
  // Mock organization data
  const organization = { name: 'Demo Org', slug: 'demo-org' };
  const isLoaded = true;

  return (
    <PageContainer
      isloading={!isLoaded}
      access={!!organization}
      accessFallback={
        <div className='flex min-h-[400px] items-center justify-center'>
          <div className='space-y-2 text-center'>
            <h2 className='text-2xl font-semibold'>No Organization Selected</h2>
            <p className='text-muted-foreground'>
              Please select or create an organization to view billing
              information.
            </p>
          </div>
        </div>
      }
      infoContent={billingInfoContent}
      pageTitle='Billing & Plans'
      pageDescription={`Manage your subscription and usage limits for ${organization?.name}`}
    >
      <div className='space-y-6'>
        {/* Info Alert */}
        <Alert>
          <Info className='h-4 w-4' />
          <AlertDescription>
            Plans and subscriptions are managed through Clerk Billing. Subscribe
            to a plan to unlock features and higher limits.
          </AlertDescription>
        </Alert>

        {/* Clerk Pricing Table */}
        <Card>
          <CardHeader>
            <CardTitle>Available Plans</CardTitle>
            <CardDescription>
              Choose a plan that fits your organization's needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='mx-auto max-w-4xl'>
              <div className='p-8 text-center border rounded border-dashed'>
                <h3 className='text-lg font-medium'>Pricing Plans</h3>
                <p className='text-muted-foreground'>Pricing table placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
