import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Nicollas Soares</h1>
        <p className="text-center text-lg mt-4">Escolha uma das opções abaixo para saber mais:</p>
      </header>
      <main className="flex flex-col sm:flex-row gap-8">
        <div
          //className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-not-allowed"
          //title="Página em construção"
        ></div>
          <a href="/consultoria"
          className=" flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Image src="/consultoria.svg" alt="Consultoria" width={100} height={100} />
          <h2 className="mt-4 text-2xl font-semibold">Consultoria</h2>
          <p className="mt-2 text-center">Serviços de consultoria para produtos e aquisições.</p>
        </a>
        <a
          href="/desenvolvimento"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Image src="/mobile.svg" alt="Desenvolvimento Mobile" width={100} height={100} />
          <h2 className="mt-4 text-2xl font-semibold">Desenvolvimento Mobile</h2>
          <p className="mt-2 text-center">Desenvolvimento de aplicativos móveis sob medida.</p>
        </a>
      </main>
    </div>
  );
}