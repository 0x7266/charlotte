import Map from "./Map";

export default function Localizacao() {
  return (
    <div className="flex flex-col items-center sm:items-start gap-5 py-2 w-full">
      <h2 className="text-5xl font-bold">Como chegar</h2>
      <div className="flex flex-col sm:flex-row gap-10 justify-center ">
        <div className="">
          <Map />
        </div>
        <div className="flex flex-col gap-10 flex-1">
          <p className="text-xl font-semibold w-60">
            Av. Dr. Nilo Peçanha, 67 Parque Santo Amaro, Campos dos Goytacazes
            RJ, 28030-035
          </p>
        </div>
      </div>
    </div>
  );
}
