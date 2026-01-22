import { redirect } from 'next/navigation';

const isAuthenticated = false; // Replace with your authentication logic

export default async function Page() {
  // TODO: Implement your authentication logic here

  // if (!isAuthenticated) {
  //   redirect('/oauth2/authorization/itp-adminbff');
  // } else {
  //   redirect('/dashboard/overview');
  // }

  redirect('/dashboard/overview');
}
