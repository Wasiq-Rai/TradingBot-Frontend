import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-evenly w-full min-h-screen bg-cover bg-[url(/img/banner/banner_bg.jpg)]">
      <div>
        <div className="text-4xl font-bold">
          <span>Create Your</span>
          <br />
          <span>Trading Bot</span> <br />
          <span>Account</span>
        </div>
        <div className="my-8 text-xl font-semibold">
          Join the Trading Community and revolutionize the way you work.
        </div>
        <div>
          <h3 className="my-5">Join the trading community today for free</h3>
          <h3 className="my-5">
            Discover more Connect deeper with online trading experts
          </h3>
          <h3 className="my-5">Your Trading adventure start here!!!!</h3>
          <h3 className="my-5">Trader smarter not harder </h3>
          <h3 className="my-5">
            Market never sleeps so neither should your opportunities. Register
            today
          </h3>
        </div>
      </div>
      <div className="">
        <SignUp />
      </div>
    </main>
  );
}
