const Newsletter = () => (
  <div
    id="newsletter"
    className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white px-5 md:px-10 lg:px-20 pt-28 pb-14"
  >
    <div className="max-w-md md:max-w-xl lg:max-w-3xl flex flex-col justify-center items-center gap-3 py-14 px-8 md:px-16 text-black bg-gray-200  rounded-3xl">
      <div className="text-2xl md:text-3xl text-center font-bold">
        Join Waitlist
      </div>
      <div className="text-sm md:text-base font-medium text-center text-gray-800 mt-7">
        During Phase 1 and 2, DefiLens will only be available to whitelists. If
        you want to join in a whitelist please feel the form below.
      </div>
      <a
        href="https://forms.gle/N4Gy1x97ZTVvx32F8"
        target="_blank"
        className="mt-5"
      >
        <button className="bg-gray-900 hover:bg-gray-800 border-b-4 border-gray-600 hover:border-gray-700 transition duration-300 text-white font-semibold text-sm md:text-base rounded-lg py-3 px-5 md:px-8">
          Join WaitList Or FeebBack
        </button>
      </a>
    </div>

    <div className="flex flex-col justify-center items-center mt-20">
      <div className="text-lg md:text-xl lg:text-2xl text-center font-semibold">
        Want to be the first to get DefiLens updates?
      </div>
      <div className="flex justify-center items-center my-[40px] text-black">
        <a href="https://forms.gle/hEGTMypEkGRYGJdc9" target="_blank">
          <button className="bg-gray-100 hover:bg-gray-300 border-b-4 border-gray-600 hover:border-gray-700 transition duration-300 text-black font-bold text-sm md:text-base rounded-lg py-3 px-5 md:px-8">
            SUBSCRIBE
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Newsletter;
