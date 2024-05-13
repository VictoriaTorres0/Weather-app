import { SlArrowRight } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

export default function DropDown({
  onClose,
  requestingData,
  history,
  sethistory,
  dataUbication,
  setDataUbication,
}) {
  const handleChange = (e) => {
    setDataUbication(e.target.value);
  };

  return (
    <motion.div
      initial={{ width: "200px" }}
      animate={{ width: "auto" }}
      className="sticky md:fixed h-screen inset-0 origin-left bg-primary z-50 max-w-[600px] lg:w-[100%] lg:max-w-[459px]"
    >
      <button
        onClick={onClose}
        className="buton-close text-[#E7E7EB] text-[17px] pr-4 block ml-auto pt-2"
      >
        <RxCross2 />
      </button>
      <div className="pt-5 flex justify-between p-4 gap-3">
        <motion.input
          initial={{ opacity: 0.6 }}
          whileTap={{ scale: 0.9 }}
          type="text"
          value={dataUbication}
          onChange={handleChange}
          placeholder="search location"
          className="bg-primary text-white w-[130%] outline-none text-center border border-[#E7E7EB] p-[7px]"
        />

        <button
          className="bg-[#3C47E9] text-[#E7E7EB] p-[8px]"
          onClick={async () => {
            await requestingData(dataUbication);
            sethistory([...history, dataUbication]);
            onClose();
          }}
          disabled={dataUbication === ""}
        >
          Search
        </button>
      </div>
      <div className="p-4 space-y-4">
        {history.map((elemento, index) => (
          <button
            key={index}
            className="bg-primary p-3 justify-between text-center flex outline-none border w-[100%] h-[50px] border-[#616475]"
            type="button"
            onClick={async () => {
              await requestingData(elemento);
              onClose();
            }}
          >
            <p className="text-[#E7E7EB]">{elemento}</p>
            <SlArrowRight color="#616475" className="w-[12px] h-[100%]" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
