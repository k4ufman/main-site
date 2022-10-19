import Image from "next/image";

function HomePage() {
  return <>
    <div className="site-container">
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">
        Selam, ben Reis!
        Amerika&apos;da yasayan amator bir yazilim gelistiricisiyim.
      </h1>

      <p>
        Grafik tasarim, front-end teknolojileri ve muzik konulariyla icli disli iliskiler icerisindeyim.
      </p>

      <p>Benim hakkimda daha detayli bilgi icin sosyal medya hesaplarima goz atabilirsin!</p>

    </div>
  </div>
    <div className="site-4xl-container mt-20">
      <Image
          src="/i-am.jpg"
          alt="my picture"
          width="900"
          height="500"
      />
    </div>
  </>;
}

export default HomePage;