const StickyNavbar = () => {
  return (
    <div className="bg-[#0f0f0f]">
      <div className="navbar max-w-screen-xl justify-between mx-auto text-white">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <a className="normal-case text-xl w-16">
            <img src="/src/assets/logo (2).png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-[#f87700] text-lg">Social Counter</a>
            </li>
            <li>
              <a className="hover:text-[#f87700] text-lg">Pricing</a>
            </li>
            <li>
              <a className="hover:text-[#f87700] text-lg">Process</a>
            </li>
          </ul>
          <div>
            <button className="btn bg-[#f87700] border-none text-white hover:text-[#41a1fd] hover:bg-[#f87800ef]">
              Start Here
            </button>
          </div>
        </div>
        <div className="">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 cursor-pointer">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-60 h-full bg-[#f87700] text-white">
                {/* Sidebar content here */}
                <li>
                  <a className="text-lg hover:bg-[#41a1fd] hover:text-white">
                    Start Here
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:bg-[#41a1fd] hover:text-white">
                    Social Counter
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:bg-[#41a1fd] hover:text-white">
                    Cart
                  </a>
                </li>
                <li>
                  <a className="text-lg hover:bg-[#41a1fd] hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
