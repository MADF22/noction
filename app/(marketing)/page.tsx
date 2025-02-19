import { Footer } from "./_components/Footer";
import Heading from "./_components/Heading";
import { Heroes } from "./_components/Heroes";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div
        className="flex flex-row items-center
      md:justify-start gap-y-8 flex-1 px-16 pb-10">
        <div className="element-heading">
          <Heading />
        </div>
        <div className="element-image">
          <Heroes />
        </div>
      </div>
      <Footer />
    </div>
  );
}
