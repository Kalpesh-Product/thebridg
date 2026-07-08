import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children, noFooterGap }: { children: React.ReactNode; noFooterGap?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <main className="flex-1 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        {children}
      </main>
      <Footer noGap={noFooterGap} />
    </div>
  );
}
