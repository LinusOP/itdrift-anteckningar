export default function Home() {
  return (
    <div className="prose-defaults mx-auto grid h-full place-items-center p-5 text-center">
      <div>
        <h1>Anteckningar för studenter på IT-Drift 2023</h1>
        <p>
          Här hittar ni anteckningar för förläsningar i samtliga kurser. Hittils
          är kurser för termin 1 tillagdna i listan till vänster.
        </p>
        <p>
          Klicka på en kurs för att se föreläsningar för den kursen,
          anteckningarna bör vara i ordning med första förläsningen överst.
        </p>
        <p>
          Problem? Säg till eller maila mig:{" "}
          <a href="mailto:mail@linusop.se">mail@linusop.se</a>
        </p>
      </div>
    </div>
  );
}
