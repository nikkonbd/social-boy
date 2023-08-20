const OrderProgress = () => {
  return (
    <div className="bg-[#f46302] text-white w-full mx-auto py-24">
      <div>
        <h2 className="uppercase text-4xl text-white text-center py-20">
          OUR ORDERING PROCESS
        </h2>
      </div>
      <div className="lg:flex ">
        <div className="text-end lg:border-r-4 lg:border-white pr-6">
          <div>
            <h5 className="text-2xl">Step 1</h5>
            <h3 className="text-3xl">Select Package & Target URL</h3>
            <p className="text-xl">
              Enter the URL where you want to direct the social signals <br />and then
              select the package of your choice from the <br />dropdown menu.{" "}
            </p>
          </div>
          <div className="my-10 lg:my-36">
            <img className="w-10/12 mx-auto"
              src="https://i.ibb.co/KqH6jSq/ordering-process-1-1024x700.png"
              alt=""
            />
          </div>
          <div className="lg:flex lg:justify-end lg:items-end lg:pr-14 lg:mb-10">
            <img
              className="hidden lg:block w-6/12 "
              src="https://i.ibb.co/xzD8wKL/arrow-down-2.png"
            />
          </div>
          <div className="hidden lg:block">
            <h5 className="text-2xl">Step 3</h5>
            <h3 className="text-3xl">Sit Back & Relax</h3>
            <p className="text-xl">
              We usually complete all of our orders in 3-5 business days. <br />You
              will receive an email from us when we begin <br  /> processing your order
              and another one when we <br /> complete it{" "}
            </p>
          </div>
        </div>
        {/*         
       <div className="">
       <hr className="w-10/12 border-4 border-white mx-auto" />
       </div> */}

        <div className="mt-10 lg:mt-36 text-start pl-6">
          <div className="flex justify-start items-start pl-14 mb-10">
            <img
              className="hidden lg:block w-6/12"
              src="https://i.ibb.co/0rwNMnf/arrow-down.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <h5 className="text-2xl">Step 2</h5>
              <h3 className="text-3xl">Enter Email & Pay</h3>
              <p className="text-xl">
                We wanted to make this as simple as possible for you, so  <br />we only
                need your email to follow up in case a problem <br /> occurs.
              </p>
            </div>
            <div className="mt-24">
              <img className="w-11/12 mx-auto"
                src="https://i.ibb.co/r4GzS6D/ordering-process-2-1024x765.png"
                alt=""
              />
            </div>
          </div>
          <div className="text-end lg:hidden pr-6 my-9">
            <h5 className="text-2xl">Step 3</h5>
            <h3 className="text-3xl">Sit Back & Relax</h3>
            <p className="text-xl">
              We usually complete all of our orders in 3-5 business days. You
              will receive an email from us when we begin processing your order
              and another one when we complete it{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
