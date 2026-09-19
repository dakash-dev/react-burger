import { Helmet } from 'react-helmet-async';

import type { JSX } from 'react';

type TSEOProps = {
  title: string;
  description?: string;
};

export const SEO = ({ title, description }: TSEOProps): JSX.Element => {
  const defaultTitle = 'Stellar Burgers';
  const defaultDescription = 'Космическая бургерная. Собери свой бургер прямо сейчас!';
  const currentTitle = `${title} | ${defaultTitle}`;

  return (
    <Helmet>
      {/* Основные теги */}
      <title>{currentTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />

      {/* Open Graph для соцсетей (VK, Telegram и др.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={description ?? defaultDescription} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={description ?? defaultDescription} />
    </Helmet>
  );
};
