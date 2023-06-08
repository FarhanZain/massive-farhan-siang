export default function CardTesti(props) {
  return (
    <>
      <div className="p-6 border-2 md:w-[200px] lg:w-[280px] xl:w-[330px] border-textBlack font-opensans text-textBlack space-y-3">
        <h2 className="text-lg md:text-xl font-semibold">{props.judul}</h2>
        <p className="text-sm lg:text-base">{props.isi}</p>
        <div className="flex items-center gap-3">
          <img
            className="w-[40px] lg:w-[60px] md:h-[40px] lg:h-[60px]"
            src={props.profile}
            alt={`Profile ${props.nama}`}
          />
          <div>
            <p className="text-sm lg:text-base font-semibold">{props.nama}</p>
            <p className="text-sm lg:text-base mt-1">{props.jabatan}</p>
          </div>
        </div>
      </div>
    </>
  );
}
