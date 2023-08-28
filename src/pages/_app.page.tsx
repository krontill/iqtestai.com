import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Urbanist } from 'next/font/google';
import './utils/globals.css';
import '@contentful/live-preview/style.css';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { Layout } from '@src/components/templates/layout';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}
    >
      <>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B0S6ZDL6QL"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `<script>window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B0S6ZDL6QL');</script>`,
          }}
        />
        <main className={`${urbanist.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <div id="portal" className={`${urbanist.variable} font-sans`} />
      </>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
