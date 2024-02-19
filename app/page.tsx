import Image from "next/image";
import HomePage from "./home_page/page";
import { UserButton } from "@clerk/nextjs";
import SignUpPage from "./sign-up/[[...sign-up]]/page";

export default function Home() {
  return (
    <main className="h-screen text-[#ff4e4e]">
      <HomePage/> 
      <UserButton/>
    </main>
  );
}
