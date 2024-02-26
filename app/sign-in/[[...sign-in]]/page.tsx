import Banner from "@/app/home_page/Components/Banner";
import { SignIn } from "@clerk/nextjs";

export default function SignPage() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen bg-cover"
    style={{backgroundImage: 'url(/img/banner/banner_bg.jpg)'}}>
      <SignIn />
    </main>
  );
}
