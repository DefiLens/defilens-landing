const Security = () => (
    <div
    id="security"
    className="security-container w-full bg-[#13162F] flex flex-col justify-center items-center gap-5 text-white p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20"
    >
      <h1 className="text-center text-gray-200 text-3xl md:text-4xl lg:text-5xl font-extrabold ">
        Security
      </h1>
      <h2 className="text-center text-gray-400 font-semibold text-base md:text-lg lg:text-xl mt-3">
         Adhering to the best practice to build security-focused protocols with checks and balances that minimize potential risks.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-10">
        <a
            href="#"
            target="_blank"
            className="flex justify-center items-center gap-1 border-b-4 border-purple-900 transition duration-300 text-base md:text-lg bg-gradient-to-r from-[#2D66F4] to-[#9F2DF4] rounded-full shadow-md py-3 px-8 mt-6 md:mt-8"
        >
            Audit Reports
        </a>
        <a
            href="#"
            target="_blank"
            className="flex justify-center items-center gap-1 border-b-4 border-purple-900 transition duration-300 text-base md:text-lg bg-gradient-to-r from-[#2D66F4] to-[#9F2DF4] rounded-full shadow-md py-3 px-8 mt-6 md:mt-8"
        >
        Bug Bounty
        </a>
      </div>

    </div>
);
  
  export default Security;
  