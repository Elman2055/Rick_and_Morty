"use client";

import { Provider } from "react-redux";
import { store } from "@/shared/services/store";
import { I18nextProvider } from "react-i18next";
import i18next from "@/shared/translations/i18";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>{children}</Provider>
    </I18nextProvider>
  );
};

export default Providers;
