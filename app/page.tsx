import { MainPage } from "@/app/main";

export const metadata = {
  title: "Main",
  description: "This is the main page of the application.",
  keywords: "Next.js, React, example",
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return <MainPage />;
};

export default Page;
