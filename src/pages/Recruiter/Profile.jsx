import bg from "../../assets/05.jpg";
const Profile = () => {
  return (
    // <!-- Start Hero -->
    <section class="relative pb-16 lg:pb-24">
      <div class="container-fluid">
        <div class="profile-banner relative text-transparent">
          {/* <input
            id="pro-banner"
            name="profile-banner"
            type="file"
            class="hidden"
            // onchange="loadFile(event)"
          /> */}
          <div class="relative shrink-0">
            <img
              src={bg}
              class="h-80 w-full object-cover"
              id="profile-banner"
              alt=""
            />
            <div class="absolute inset-0 bg-black/70"></div>
            <label
              class="absolute inset-0 cursor-pointer"
              for="pro-banner"
            ></label>
          </div>
        </div>
      </div>
      {/* <!--end container--> */}

      <div class="container mt-16 lg:mt-24">
        <div class="md:flex">
          <div class="md:w-1/3 md:px-3 lg:w-1/4">
            <div class="relative -mt-32 md:-mt-48">
              <div class="rounded-md bg-white p-6 shadow dark:bg-slate-900 dark:shadow-gray-800">
                <div class="profile-pic mb-5 text-center">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    class="hidden"
                    onchange="loadFile(event)"
                  />
                  <div>
                    <div class="relative mx-auto h-28 w-28">
                      <img
                        src="../assets/05.jpg"
                        class="rounded-full shadow ring-4 ring-slate-50 dark:shadow-gray-800 dark:ring-slate-800"
                        id="profile-image"
                        alt=""
                      />
                      <label
                        class="absolute inset-0 cursor-pointer"
                        for="pro-img"
                      ></label>
                    </div>

                    <div class="mt-4">
                      <h5 class="text-lg font-semibold">Jenny Jimenez</h5>
                      <p class="text-slate-400">jennyhot@hotmail.com</p>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-100 dark:border-gray-700">
                  <ul class="sidebar-nav mb-0 mt-3 list-none" id="navmenu-nav">
                    <li class="navbar-item account-menu">
                      <a
                        href="user-profile.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-dashboard"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Profile</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-billing.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-diary-alt"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Billing Info</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-payment.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-credit-card"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Payment</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-invoice.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-receipt"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Invoice</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-social.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-process"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Social Profile</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-notification.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-bell"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Notifications</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="user-setting.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-setting"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Settings</h6>
                      </a>
                    </li>

                    <li class="navbar-item account-menu">
                      <a
                        href="auth-lock-screen.html"
                        class="navbar-link flex items-center rounded py-2 text-slate-400"
                      >
                        <span class="mr-2 mb-0 text-[18px]">
                          <i class="uil uil-power"></i>
                        </span>
                        <h6 class="mb-0 font-semibold">Sign Out</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[30px] md:mt-0 md:w-2/3 md:px-3 lg:w-3/4">
            <div class="border-b border-gray-100 pb-6 dark:border-gray-700">
              <h5 class="text-xl font-semibold">Jenny Jimenez</h5>

              <p class="mt-3 text-slate-400">
                I have started my career as a trainee and prove my self and
                achieve all the milestone with good guidance and reach up to the
                project manager. In this journey, I understand all the procedure
                which make me a good developer, team leader, and a project
                manager.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-[30px] pt-6 lg:grid-cols-2">
              <div>
                <h5 class="text-xl font-semibold">Personal Details :</h5>
                <div class="mt-6">
                  <div class="flex items-center">
                    <i
                      data-feather="mail"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Email :
                      </h6>
                      <a href="/" class="text-slate-400">
                        jennyhot@hotmail.com
                      </a>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="bookmark"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Skills :
                      </h6>
                      <a href="/" class="text-slate-400">
                        html
                      </a>
                      ,{" "}
                      <a href="/" class="text-slate-400">
                        css
                      </a>
                      ,{" "}
                      <a href="/" class="text-slate-400">
                        js
                      </a>
                      ,{" "}
                      <a href="/" class="text-slate-400">
                        mysql
                      </a>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="italic"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Language :
                      </h6>
                      <a href="/" class="text-slate-400">
                        English
                      </a>
                      ,{" "}
                      <a href="/" class="text-slate-400">
                        Japanese
                      </a>
                      ,{" "}
                      <a href="/" class="text-slate-400">
                        Chinese
                      </a>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="globe"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Website :
                      </h6>
                      <a href="/" class="text-slate-400">
                        www.kristajoseph.com
                      </a>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="gift"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Birthday :
                      </h6>
                      <p class="mb-0 text-slate-400">2nd March, 1996</p>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="map-pin"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Location :
                      </h6>
                      <a href="/" class="text-slate-400">
                        Beijing, China
                      </a>
                    </div>
                  </div>
                  <div class="mt-3 flex items-center">
                    <i
                      data-feather="phone"
                      class="fea icon-ex-md mr-3 text-slate-400"
                    ></i>
                    <div class="flex-1">
                      <h6 class="mb-0 font-medium text-indigo-600 dark:text-white">
                        Cell No :
                      </h6>
                      <a href="/" class="text-slate-400">
                        (+12) 1254-56-4896
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-[30px] lg:mt-0">
                <h5 class="text-xl font-semibold">Experience :</h5>

                <div class="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                  <img
                    src="assets/images/client/circle-logo.png"
                    class="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                    alt=""
                  />
                  <div class="content ml-4 flex-1">
                    <h4 class="text-medium text-lg">Senior Web Developer</h4>
                    <p class="mb-0 text-slate-400">3 Years Experience</p>
                    <p class="mb-0 text-slate-400">
                      <a href="/" class="text-indigo-600">
                        CircleCi
                      </a>{" "}
                      @London, UK
                    </p>
                  </div>
                </div>

                <div class="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                  <img
                    src="assets/images/client/facebook-logo-2019.png"
                    class="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                    alt=""
                  />
                  <div class="content ml-4 flex-1">
                    <h4 class="text-medium text-lg">Web Designer</h4>
                    <p class="mb-0 text-slate-400">2 Years Experience</p>
                    <p class="mb-0 text-slate-400">
                      <a href="/" class="text-indigo-600">
                        Facebook
                      </a>{" "}
                      @Washington D.C, USA
                    </p>
                  </div>
                </div>

                <div class="mt-6 flex items-center rounded-md bg-white p-4 shadow transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md dark:bg-slate-900 dark:shadow-gray-800 dark:hover:shadow-gray-700">
                  <img
                    src="assets/images/client/spotify.png"
                    class="h-16 w-16 rounded-md bg-slate-50 p-4 shadow dark:bg-slate-800 dark:shadow-gray-800"
                    alt=""
                  />
                  <div class="content ml-4 flex-1">
                    <h4 class="text-medium text-lg">UI Designer</h4>
                    <p class="mb-0 text-slate-400">2 Years Experience</p>
                    <p class="mb-0 text-slate-400">
                      <a href="/" class="text-indigo-600">
                        Spotify
                      </a>{" "}
                      @Perth, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h5 class="mt-[30px] text-xl font-semibold">Portfolio :</h5>

            <div class="mt-6 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/1.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/1.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="title absolute bottom-6 left-6 z-10 hidden group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>

              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/2.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/2.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>

              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/3.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/3.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>

              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/4.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/4.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>

              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/5.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/5.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>

              <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/6.jpg"
                  class="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
                  alt=""
                />
                <div class="absolute inset-2 z-0 rounded-md transition duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90"></div>

                <div class="content transition-all duration-500">
                  <div class="icon absolute top-6 right-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="assets/images/portfolio/6.jpg"
                      class="btn btn-icon lightbox rounded-full border-indigo-600 bg-indigo-600 text-white hover:border-indigo-700 hover:bg-indigo-700"
                    >
                      <i class="uil uil-camera"></i>
                    </a>
                  </div>

                  <div class="absolute bottom-6 left-6 z-10 hidden transition-all duration-500 group-hover:block">
                    <a
                      href="portfolio-detail-three.html"
                      class="h6 text-lg font-medium duration-500 ease-in-out hover:text-indigo-600"
                    >
                      Mockup Collection
                    </a>
                    <p class="mb-0 text-slate-400">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}
    </section>
  );
};

export default Profile;
