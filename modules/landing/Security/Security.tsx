const Security = () => (
    <div
    id="security"
    className="security-container w-full bg-[#13162F] flex flex-col justify-center items-center gap-5 text-white px-5 md:px-14 lg:px-20 pt-40 pb-44"
    >
      <h1 className="text-center text-gray-200 text-3xl md:text-4xl lg:text-5xl font-extrabold ">
        Security
      </h1>
      <h2 className="text-center text-gray-400 text-base md:text-lg lg:text-xl mt-3">
         Adhering to the best practice to build security-focused protocols with checks and balances that minimize potential risks.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-10">
        <a
            href="#"
            target="_blank"
            className="flex justify-center items-center gap-1 border-b-4 border-purple-900 hover:border-blue-900 transition duration-300 font-medium md:font-semibold text-base md:text-lg lg:text-xl bg-gradient-to-l hover:bg-gradient-to-r from-purple-600 via-blue-500 to-purple-900 rounded-full shadow-md py-3 md:py-4 px-8 md:px-12"
        >
            Audit Reports
        </a>
        <a
            href="#"
            target="_blank"
            className="flex justify-center items-center gap-1 border-b-4 border-purple-900 hover:border-blue-900 transition duration-300 font-medium md:font-semibold text-base md:text-lg lg:text-xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 via-blue-500 to-purple-900 rounded-full shadow-md py-3 md:py-4 px-8 md:px-12"
        >
        Bug Bounty
        </a>
      </div>

    </div>
);
  
  export default Security;
  