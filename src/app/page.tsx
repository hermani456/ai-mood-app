import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);

  let href = userId ? "/journal" : "/new-user";
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto space-y-3">
        <h1 className="text-6xl">The best Journal app</h1>
        <p className="text-2xl text-white/60">
          This is the best app for tracking your mood through your life.all you
          have to do is being honest
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
