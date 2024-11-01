import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import { Toaster } from 'react-hot-toast';
import { Cairo } from 'next/font/google';
import NotFound from '@/components/common/not-found';
import NextTopLoader from 'nextjs-toploader';
import Providers from '@/context/Providers';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { Metadata } from 'next';

const cairo = Cairo({
  subsets: ['arabic', 'latin-ext', 'latin'],
  variable: '--font-cairo',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Raseen - Home',
  description: 'Raseen - your go-to destination for all things Raseen.',
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();
  if (!locale) {
    return <NotFound />;
  }
  const session = await getServerSession(options);
  return (
    <html dir={locale === 'ar' ? 'rtl' : 'ltr'} className={cairo.className}>
      <NextIntlClientProvider messages={messages}>
        <body>
          <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="w-full flex-1 overflow-hidden">
            <NextTopLoader showSpinner={false} />
            <Providers session={session}>{children}</Providers>
            <Toaster position="bottom-left" />
          </main>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
