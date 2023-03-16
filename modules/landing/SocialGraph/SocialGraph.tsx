const SocialGraph = () => (
  <div
    className="p-[10px] text-white h-full flex flex-col items-center text-center"
    style={styles.container}
  >
    <div className="flex justify-center flex-col items-center pt-[100px] w-[800px]">
      <div className="text-[60px] leading-[60px]">
        The Social-Graph for Defi builds as it Discuss and Social Trades.
      </div>
      <div className="pt-[60px] text-[22px]">
        DefiLens is a Social graph for Defi. Which enable users to create social trade on defi and defi activity on lens and give features to discuss on top of it in a interactive way.
      </div>
      <div className="pt-[60px] text-[22px]">
        By 25th March live stable beta version.
      </div>
      <a href="https://forms.gle/N4Gy1x97ZTVvx32F8" target="_blank">
        <button className='bg-black text-white text-bold h-[50px] rounded-[8px] w-[225px] mt-[60px]'>
          JOIN WAITLIST
        </button>
      </a>
    </div>
    <div className="flex justify-center text-[96px] grow items-center opacity-30">
      Defi x Social Graph
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
