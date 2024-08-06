import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en"];

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;

  if (!locales.includes(baseLocale as string)) notFound();
  return {
    messages: (await import("./src/shared/translations/en.json")).default,
  };
});
