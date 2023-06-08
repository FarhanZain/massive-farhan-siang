import { BiRightArrowAlt } from "react-icons/bi";

export default function Button(props) {
  return (
    <>
      <button className="bg-white hover:bg-slate-100 flex justify-center items-center px-3 md:px-5 lg:px-8 py-2 md:py-4 lg:py-6 gap-2">
        <p className="text-base md:text-lg lg:text-xl font-opensans font-bold">
          {props.textButton}
        </p>
        <div className="text-lg md:text-xl lg:text-2xl">
          <BiRightArrowAlt />
        </div>
      </button>
    </>
  );
}
