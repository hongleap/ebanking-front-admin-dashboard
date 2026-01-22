import { redirect } from 'next/navigation';

export default async function Page() {
  // TODO: Implement your authentication logic here
  redirect('/dashboard/overview');
}
