import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';
import ServerComponentCopy from '@/app/components/server-component-copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-center mb-4">Home page</h1>
      <AddCompanyButton />
      <ServerComponent />
        {/* рутований ClientComponent, що передає ServerComponentCopy як children */}
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
