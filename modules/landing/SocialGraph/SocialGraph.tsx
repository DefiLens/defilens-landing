const SocialGraph = () => (
  <div
    className="p-[10px] text-white h-full flex flex-col items-center text-center"
    style={styles.container}
  >
      {/* <div className="pt-[30px] text-[20px]" style={{color: "red"}}>
        Currently on mumbai network. You should have lens profile on mumbai network.
        soon you can create lens profile for mumbai network. so you can test.
        By 25th March, We will live stable beta version of defilens. Stay tune :)
      </div> */}
    <div className="flex justify-center flex-col items-center pt-[100px] w-[800px]">
      <div className="text-[60px] leading-[60px]">
        Defi Made Easy: Smart batching Whether single or cross-chain
      </div>
      <div className="pt-[60px] text-[22px]">
        DefiLens is pioneering a platform that streamlines trading activities. To offering the ease of trading experience and swift portfolio management to users, Defilens provide a solutions like cross-chain trading and efficiently refinancing defi positions using smart batching strategies.
      </div>
      <a href="https://forms.gle/N4Gy1x97ZTVvx32F8" target="_blank">
        <button className='bg-black text-white text-bold h-[50px] rounded-[8px] w-[225px] mt-[60px]'>
        Join WaitList Or FeebBack
        </button>
      </a>
    </div>
    <div className="flex justify-center text-[96px] grow items-center opacity-30">
      Smart Batching
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: "#0396FF",
    backgroundImage: 'linear-gradient(180deg, #010851 0%, rgba(0, 0, 0, 0) 100%)'
  },
} as const;

export default SocialGraph;
