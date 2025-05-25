/* eslint-disable @next/next/next-script-for-ga */
import '@/utilities/styles/sass/globals.scss';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const locales = ['en', 'pt'];

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await import(`@/messages/${locale}.json`)).default;


  return (
    <html lang={locale === 'pt' ? 'pt-BR' : 'en'}>

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EDLJDNRRS1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EDLJDNRRS1');
            `,
          }}
        />
      </body>
    </html>
  );
}
