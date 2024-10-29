import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <main className="w-full flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
