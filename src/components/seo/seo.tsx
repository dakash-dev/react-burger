import { Helmet } from 'react-helmet-async';

import type { ReactElement } from 'react';

type TSEOProps = {
  title: string;
  description?: string; // Сделали опциональным, чтобы не дублировать на каждой форме
  name?: string; // Опционально (автор/создатель карточки)
  type?: string; // Опционально (тип страницы для соцсетей)
};

export default function SEO({
  title,
  description = 'Космическая бургерная нового поколения. Собери свой идеальный бургер прямо сейчас!',
  name = 'Stellar Burgers Team',
  type = 'website',
}: TSEOProps): ReactElement {
  // Добавляем красивую фирменную приставку к заголовкам вкладок
  const currentTitle = `${title} | Stellar Burgers`;

  return (
    <Helmet>
      {/* Стандартные метатеги */}
      <title>{currentTitle}</title>
      <meta name="description" content={description} />

      {/* Метатеги для ВКонтакте / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={description} />

      {/* Метатеги для Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
