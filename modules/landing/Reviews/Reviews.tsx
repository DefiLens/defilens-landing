const reviewsItems = [
  {
    description: '“Defi activities increases day by day and we can show them to everyone in a unique way. So Defilens can be a game changer and it will be a new way to see Defi.”',
    reviewer: 'Samantha Lee'
  },
  {
    description: '“By creating discussion platform for defi we can create new possibilities and new innovations for future”',
    reviewer: 'Emily Garcia'
  },
  {
    description: '“It will be easy to trade copy and user can follow their defi whales activities.”',
    reviewer: 'Manek Patel'
  },
]

const Reviews = () => (
  <div 
    style={styles.container}
    className="text-white py-[50px] px-[10%]"
  >
    <div className="text-bold  text-[30px] text-center" >Our Testimonials</div>
    <div className="flex mt-[50px]">
      {
        reviewsItems.map((items, index) => (
          <div key={index} className="p-[30px] mx-[20px] rounded-[16px] bg-white text-black flex flex-col flex-1">
            <div>{items.description}</div>
            <div className="font-bold mt-[30px] self-end" > -- {items.reviewer}</div>
          </div>
        ))
      }
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: "#0396FF",
    backgroundImage: 'linear-gradient(180deg, #010851 0%, rgba(0, 0, 0, 0) 100%)'
  },
} as const;

export default Reviews;