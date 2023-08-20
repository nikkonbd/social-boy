import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaRedditSquare,
  FaSoundcloud,
  FaTwitterSquare,
} from "react-icons/fa";

const OurMission = () => {
  return (
    <div className="bg-slate-800 text-slate-50 px-6 lg:px-0">
      <div>
        <h2 className="uppercase  text-center text-3xl font-medium pt-28 pb-8 ">
          OUR MISSION
        </h2>
        <hr className="w-20 border-b-4 border-[#f46302] mx-auto" />
        <p className="text-center text-2xl  mt-6">
          Signal Boy is the <span className="font-bold">premier provider</span>{" "}
          of real social signals. <br></br> Our signals come from users with
          various demographic <br></br> backgrounds, so no need to worry about
          potential footprints.
        </p>
        <p className="mt-8  text-2xl text-center">
          We{" "}
          <span className="font-bold">value your money and your business,</span>{" "}
          that’s why we aim to offer <br></br> you more than what you pay for.
        </p>
        <p className=" text-2xl text-center py-8">
          If you still have questions, feel free to shoot us an email.
        </p>
      </div>

      <div className="text-center my-16 ">
        <Link to="">
          <button className="btn px-16 py-4 bg-[#41a1fd] text-white  hover:border-2  hover:border-[#197685] hover:bg-white hover:text-[#197685]">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="flex my-14 justify-center items-center">
        <Link>
          <span className="text-6xl text-[#09b0ed] ">
            <FaFacebookSquare />
          </span>
        </Link>
        <Link>
          <span className="text-6xl text-[#09b0ed] ">
            <FaTwitterSquare />
          </span>
        </Link>
        <Link>
          <span className="text-6xl  text-[#09b0ed] border-3 border-[#09b0ed] ">
            <FaPinterestSquare />
          </span>
        </Link>
        <Link>
          {" "}
          <span className="text-6xl text-[#09b0ed] ">
            <FaSoundcloud />
          </span>
        </Link>
        <Link>
          <span className="text-6xl text-[#09b0ed] ">
            <FaRedditSquare />
          </span>
        </Link>
      </div>
      <div className="text-center pb-14 ">
        <input
          className="px-12 py-3 rounded-md"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <button className="btn px-10 py-4 bg-[#197685] text-white  hover:border-2  hover:border-[#197685] hover:bg-white hover:text-[#197685]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default OurMission;
