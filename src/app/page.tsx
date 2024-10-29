import Button from '@/app/components/button';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center">
      <h1 className="text-xl text-center mb-4">Home page</h1>
      <Button className="relative flex items-center  overflow-hidden whitespace-nowrap text-white py-2 px-4 w-32 h-10">
        <span className="absolute  animate-marquee">Go to Dashboard</span>
      </Button>
    </main>
  );
}
