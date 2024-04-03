import IconSectiopn from "@/components/IconSection/IconSectiopn";
import Header from "@/components/Header/Header";
// import Body from "@/components/Body/Body";
export default function Home() {
  return (
    <main className="flex lg:pt-5 gap-5">
      <div className="hidden w-[100px] lg:block ml-10">
        <IconSectiopn />
      </div>
      <div className="w-full lg:w-[92%]">
        <Header />
      </div>
    </main>
  );
}
