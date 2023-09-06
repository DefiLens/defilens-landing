import { reviewsItems } from "@/utils/constants";

const Reviews = () => (
  <div 
    style={styles.container}
    className="text-white py-[50px] px-[10%]"
  >
    <div className="text-bold  text-[30px] text-center" >Our Testimonials</div>
    <div className="flex mt-[50px]">
      {reviewsItems.length > 0 &&
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