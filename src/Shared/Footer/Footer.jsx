import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-800 text-center dark:bg-slate-800 lg:text-left">
        <div className="w-10/12 mx-auto p-4 md:flex justify-between  items-start text-slate-50 dark:text-slate-50 md:flex-row-reverse">
          <div className="flex gap-6 justify-center items-center  md:gap-6 ">
            <p  className=" hover:text-[#1de9db] hover:text-opacity-100">
              <Link to="">Privacy Policy</Link>
            </p>
            <p className="gap-3 hover:text-[#1de9db] hover:text-opacity-100">
              <Link to="">Terms & Conditions</Link>
            </p>
          </div>
          <p className="pt-5 md:pt-0"> Social Boy &copy; 2023 </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
