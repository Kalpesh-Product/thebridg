import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFF0EB' }}>
      <Navbar />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
