import { FC } from 'react'
import { IntlProvider } from 'react-intl'

import ptLocale from '../locales/pt-br.json';

interface ITranslationProviderProps {
  children: React.ReactNode
}

export const TranslationProvider: FC<ITranslationProviderProps> = ({ children }) => {
  return (
    <IntlProvider
      locale='pt-br'
      defaultLocale='pt-br'
      messages={ptLocale as any}
    >
      {children}
    </IntlProvider>
  )
}
