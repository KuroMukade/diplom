import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/lib/i18n/i18nForTetsts';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;

  return render(
      <MemoryRouter initialEntries={[route]}>
          <StoreProvider initialState={initialState}>
              <I18nextProvider i18n={i18nForTests}>
                  {component}
              </I18nextProvider>
          </StoreProvider>
      </MemoryRouter>,
  );
}
