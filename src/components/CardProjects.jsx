export default function CardProjects(props) {
  return (
    <>
      <div className="text-textBlack font-opensans md:w-[200px] lg:w-[280px] xl:w-[330px]">
        <img src={props.image} alt="" />
        <h2 className="text-lg md:text-xl font-semibold my-3">{props.judul}</h2>
        <p className="text-sm lg:text-base">{props.isi}</p>
      </div>
    </>
  );
}
