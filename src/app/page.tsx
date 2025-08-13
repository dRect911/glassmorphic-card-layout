import Image from "next/image";

export default function Home() {
  return (
    <main id='main-container' className="font-sans w-screen h-screen py-20 min-h-screen bg-green-100 flex min-w-screen items-center justify-center ">
      <div className="container h-full bg-green-200 p-4">
        <div className="grid size-full p-4 gap-4 bg-green-300 grid-cols-3 grid-rows-2">
{[0,1,2,3,4,5].map((i) => (
  <div key={i} className="bg-white row-span-1 col-span-1"></div>
))}

        </div>

      </div>
      
    </main>
  );
}
