/* eslint-disable @next/next/next-script-for-ga */
import '@/utilities/styles/sass/globals.scss';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
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
