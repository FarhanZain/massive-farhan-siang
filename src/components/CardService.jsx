export default function CardService(props) {
  return (
    <>
      <div className="px-6 py-8 w-[230px] md:w-[200px] lg:w-[290px] bg-white shadow-2xl flex flex-col items-center gap-4 font-opensans text-textBlack text-center">
        <div className="text-primary text-3xl md:text-[40px]">{props.icon}</div>
        <h2 className="text-lg md:text-xl font-semibold">{props.judul}</h2>
        <p className="text-xs md:text-sm lg:text-base">{props.isi}</p>
      </div>
    </>
  );
}
