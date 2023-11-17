import { book, frame1, frame2, frame3} from "../assets";
import TeamCoap from "./teamCoap";

const Hero = () => {
    return (
      <section className="flex flex-col justify-evenly h-[100vh] sm:items-start items-center">
        <div className="w-[58%] h-[36%] sm:h-[30%] flex flex-col sm:justify-around justify-around text-center sm:text-start sm:items-start items-center sm:ml-[6%]">
            <h1 className="font-poppins text-[#131316] sm:text-[64px] text-2xl font-medium sm:leading-[70px]">A powerful solution to grow your startup. Fast! </h1>
            <p className="font-poppins text-[18px] sm:text-sm font-normal leading-[32px]">Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool. </p>
        </div>
        <div className="flex w-[90%] sm:w-[20%] sm:ml-[6%] h-[10%]  justify-around items-center">
            <button className="px-6 py-3 bg-[#4891FF] rounded-xl text-center">Get started</button>
            <button className="flex px-6 py-3 w-[50%] bg-[#F5F5F5] rounded-xl justify-around items-center text-center"><img src={book} alt="" />Book a demo</button>
        </div>
        <TeamCoap frame1={frame1} frame2={frame2} frame3={frame3}/>

      </section>
    );
  };
  
  export default Hero;
  