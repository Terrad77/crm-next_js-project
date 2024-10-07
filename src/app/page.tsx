import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';
import ServerComponentCopy from '@/app/components/server-component-copy';
import MagicButton from '@/app/components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-center mb-4">Home page</h1>
      <AddCompanyButton />
      {/*<MagicButton />*/}
      {/*<ServerComponent />*/}
      {/*<ClientComponent> /!* рутований ClientComponent, що передає ServerComponentCopy як children *!/*/}
      {/*  <ServerComponentCopy />*/}
      {/*</ClientComponent>*/}
    </main>
  );
}
