<template>
  <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <section class="relative bg-[#C6F1FF] xs:rounded-2xl md:rounded-3xl w-[100%] 2xl:w-[1440px] z-20 my-3">
      <div class="flex xs:flex-col flex-nowrap w-full xs:px-4 md:px-20 py-8">

          <main>
            <div class="flex relative z-20 justify-between rounded gap-4">
              <article
                class="w-2/3 max-w-none format format-sm sm:format-base lg:format-lg format-blue"
              >
                <header>
                  <section class="py-8">
                    <div class="px-4 w-full flex flex-col gap-5 text-left">
                      <section class="flex items-center gap-5 w-full justify-left">
                        <HouseIcon />
                        Home
                        <LeftArrowIcon />
                        Blogs
                        <LeftArrowIcon />
                        Vivan los gatos
                      </section>
                      <h2
                        class=" text-2xl font-extrabold leading-none text-gray-900 sm:text-3xl lg:text-4xl">
                        Flowbite Blocks Tutorial
                      </h2>
                    </div>
                  </section>
                  <div
                  class="flex flex-col lg:flex-row justify-between lg:items-center py-6 border-t border-b border-black">
                    <article class="flex gap-3">
                      <span class="text-base mb-4 lg:mb-0 font-normal text-gray-500">By <a href="#" rel="author"
                          class="font-bold text-gray-900 no-underline hover:underline">Jese Leos</a>
                      </span>
                      <span>
                        5 minutos leido
                      </span>
                      <span class="block font-semibold text-gray-900">Published <time
                            class="font-normal text-gray-500"
                            title="August 3rd, 2022">August 3, 2022, 2:20am EDT</time>
                      </span>
                    </article>
                    <span class="flex gap-3 justify-center items-center bg-gray-50 p-2 rounded-lg">
                      Share
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 6.70913C15.1701 6.70916 15.8243 6.50519 16.3756 6.12437C16.9269 5.74355 17.3493 5.20392 17.5865 4.57723C17.8236 3.95054 17.8644 3.2665 17.7034 2.61607C17.5424 1.96564 17.1871 1.37964 16.685 0.936003C16.1828 0.492364 15.5575 0.212108 14.8922 0.132504C14.2268 0.0528995 13.553 0.177719 12.9604 0.490364C12.3677 0.803009 11.8843 1.28866 11.5743 1.88274C11.2644 2.47683 11.1427 3.15118 11.2253 3.81613L5.79131 6.53313C5.32516 6.08362 4.73706 5.78119 4.10027 5.66352C3.46348 5.54585 2.80614 5.61814 2.21013 5.87138C1.61413 6.12462 1.1058 6.54761 0.748476 7.08768C0.391152 7.62775 0.200623 8.26101 0.200623 8.90858C0.200623 9.55616 0.391152 10.1894 0.748476 10.7295C1.1058 11.2696 1.61413 11.6926 2.21013 11.9458C2.80614 12.199 3.46348 12.2713 4.10027 12.1536C4.73706 12.036 5.32516 11.7335 5.79131 11.284L11.2253 14.001C11.1291 14.7735 11.309 15.5551 11.7333 16.2078C12.1576 16.8604 12.7989 17.342 13.544 17.5676C14.289 17.7931 15.0898 17.7479 15.8048 17.4402C16.5198 17.1324 17.103 16.5817 17.4513 15.8855C17.7995 15.1894 17.8905 14.3925 17.7081 13.6357C17.5257 12.879 17.0816 12.2111 16.4543 11.75C15.8271 11.289 15.0571 11.0646 14.2804 11.1164C13.5037 11.1682 12.7703 11.4929 12.2098 12.0331L6.77581 9.31613C6.8091 9.04582 6.8091 8.77245 6.77581 8.50213L12.2098 5.78513C12.8016 6.35713 13.609 6.70913 14.5 6.70913Z" fill="#374151"/>
                      </svg>
                    </span>
                  <!-- <aside aria-label="Share social media">
                    <a href="#"
                      class="inline-flex items-center py-2 px-6 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                        class="mr-2 w-4 h-4" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg> Share</a>
                    <a href="#"
                      class="inline-flex items-center py-2 px-6 mr-2 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                        class="mr-2 w-4 h-4" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg> Tweet</a>
                    <button type="button"
                      class="inline-flex items-center py-2 px-6 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
                        class="mr-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clip-rule="evenodd"></path>
                      </svg> Copy link</button>
                  </aside> -->

                  </div>
                  <footer class="flex flex-row justify-start gap-5 mt-3">
                    <button
                      type="button"
                      class="py-2.5 px-4 text-xs font-medium text-black border-2 rounded-lg flex flex-row gap-3 items-center"
                      :class="like ? 'bg-white border-white':'border-black'"
                      @click="like = !like"
                    >
                        <svg v-if="like" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.7089 1.99127L5.7088 1.99117C5.20248 1.485 4.51585 1.20065 3.7999 1.20065C3.08401 1.20065 2.39742 1.48496 1.89111 1.99107C1.89107 1.9911 1.89104 1.99114 1.891 1.99117M5.7089 1.99127L1.891 1.99117M5.7089 1.99127L6.6465 2.92807L6.9999 3.28117L7.3533 2.92807L8.2909 1.99127L8.29096 1.99133L8.29715 1.98492C8.54621 1.72704 8.84414 1.52135 9.17355 1.37985C9.50296 1.23834 9.85726 1.16386 10.2158 1.16075C10.5743 1.15763 10.9298 1.22595 11.2616 1.3617C11.5934 1.49746 11.8949 1.69795 12.1484 1.95146C12.4019 2.20497 12.6024 2.50643 12.7382 2.83825C12.8739 3.17007 12.9422 3.5256 12.9391 3.88411C12.936 4.24261 12.8615 4.5969 12.72 4.92632C12.5785 5.25573 12.3728 5.55366 12.1149 5.80272L12.1149 5.80267L12.1087 5.80884L6.9999 10.9184L1.89111 5.80887C1.8911 5.80886 1.89109 5.80885 1.89108 5.80884C1.38493 5.30252 1.10059 4.6159 1.10059 3.89997C1.10059 3.18407 1.3849 2.49749 1.891 1.99117M5.7089 1.99127L1.891 1.99117" fill="#FF6275" stroke="#FF6275"/>
                        </svg>
                        <svg v-else width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.22836 3.0944C1.37913 2.73042 1.60011 2.3997 1.87869 2.12112C2.15727 1.84254 2.48799 1.62156 2.85197 1.4708C3.21595 1.32003 3.60606 1.24243 4.00003 1.24243C4.39399 1.24243 4.78411 1.32003 5.14808 1.4708C5.51206 1.62156 5.84278 1.84254 6.12136 2.12112L7.00003 2.99979L7.87869 2.12112C8.4413 1.55851 9.20437 1.24244 10 1.24244C10.7957 1.24244 11.5587 1.55851 12.1214 2.12112C12.684 2.68374 13 3.4468 13 4.24246C13 5.03811 12.684 5.80118 12.1214 6.36379L7.00003 11.4851L1.87869 6.36379C1.60011 6.08522 1.37913 5.7545 1.22836 5.39052C1.0776 5.02654 1 4.63643 1 4.24246C1 3.84849 1.0776 3.45838 1.22836 3.0944Z" stroke="#111928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        Me gusta
                      </button>
                      <span class="flex flex-row gap-3 items-center">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85481 1.56388C2.52991 0.888985 3.44542 0.50985 4.40001 0.50985C5.3546 0.50985 6.27011 0.888985 6.94521 1.56388L8.00001 2.61778L9.05481 1.56388C9.3869 1.22004 9.78414 0.945788 10.2234 0.757116C10.6626 0.568444 11.135 0.469133 11.613 0.46498C12.091 0.460826 12.565 0.551912 13.0074 0.732923C13.4499 0.913935 13.8518 1.18125 14.1898 1.51926C14.5278 1.85727 14.7952 2.25922 14.9762 2.70165C15.1572 3.14407 15.2483 3.61812 15.2441 4.09613C15.24 4.57413 15.1406 5.04652 14.952 5.48574C14.7633 5.92495 14.489 6.32219 14.1452 6.65428L8.00001 12.8004L1.85481 6.65428C1.17992 5.97918 0.800781 5.06367 0.800781 4.10908C0.800781 3.15449 1.17992 2.23898 1.85481 1.56388Z" fill="#374151"/>
                        </svg>
                        4 reactions
                      </span>
                      <span class="flex flex-row gap-3 items-center">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2 9.60913V2.40913C15.2 1.93174 15.0103 1.4739 14.6728 1.13634C14.3352 0.798773 13.8774 0.609131 13.4 0.609131H2.59999C2.1226 0.609131 1.66476 0.798773 1.3272 1.13634C0.98963 1.4739 0.799988 1.93174 0.799988 2.40913V9.60913C0.799988 10.0865 0.98963 10.5444 1.3272 10.8819C1.66476 11.2195 2.1226 11.4091 2.59999 11.4091H5.29999L7.99999 14.1091L10.7 11.4091H13.4C13.8774 11.4091 14.3352 11.2195 14.6728 10.8819C15.0103 10.5444 15.2 10.0865 15.2 9.60913ZM3.49999 4.20913C3.49999 3.97044 3.59481 3.74152 3.76359 3.57274C3.93237 3.40395 4.16129 3.30913 4.39999 3.30913H11.6C11.8387 3.30913 12.0676 3.40395 12.2364 3.57274C12.4052 3.74152 12.5 3.97044 12.5 4.20913C12.5 4.44783 12.4052 4.67674 12.2364 4.84553C12.0676 5.01431 11.8387 5.10913 11.6 5.10913H4.39999C4.16129 5.10913 3.93237 5.01431 3.76359 4.84553C3.59481 4.67674 3.49999 4.44783 3.49999 4.20913ZM4.39999 6.90913C4.16129 6.90913 3.93237 7.00395 3.76359 7.17274C3.59481 7.34152 3.49999 7.57044 3.49999 7.80913C3.49999 8.04783 3.59481 8.27674 3.76359 8.44553C3.93237 8.61431 4.16129 8.70913 4.39999 8.70913H7.09999C7.33868 8.70913 7.5676 8.61431 7.73638 8.44553C7.90517 8.27674 7.99999 8.04783 7.99999 7.80913C7.99999 7.57044 7.90517 7.34152 7.73638 7.17274C7.5676 7.00395 7.33868 6.90913 7.09999 6.90913H4.39999Z" fill="#374151"/>
                        </svg>
                        5 commits
                      </span>
                  </footer>
                </header>
                <main class="py-5"  >

                </main>
                <!-- Comments -->
                <section class="mt-8 not-format">
                  <div class="flex justify-between items-center mb-6">
                    <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (20)</h2>
                  </div>
                  <form class="mb-6">
                    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
                      <div class="py-2 px-4 bg-gray-50 rounded-t-lg ">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea id="comment" rows="6"
                          class="px-0 w-full text-sm text-gray-900 bg-gray-50 border-0 focus:ring-0"
                          placeholder="Write a comment..." required></textarea>
                      </div>
                      <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                        <button
                          type="submit"
                          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#1EB5E4] rounded-lg hover:bg-[#0088B2]"
                          disabled
                        >
                          Post comment
                        </button>
                      </div>
                    </div>
                  </form>
                  <article class="p-6 mb-6 text-base bg-gray-50 rounded-lg dark:bg-gray-800">
                    <footer class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough">Michael
                          Gough</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                            title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                      <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                          </path>
                        </svg>
                        <span class="sr-only">Comment settings</span>
                      </button>
                      <!-- Dropdown menu -->
                      <div id="dropdownComment1"
                        class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                            <a href="#"
                              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                            <a href="#"
                              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                            <a href="#"
                              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                        </ul>
                      </div>
                    </footer>
                    <p class="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank
                      you! But tools are just the
                      instruments for the UX designers. The knowledge of the design tools are as important as the
                      creation of the design strategy.</p>
                    <div class="flex items-center mt-4 space-x-4">
                      <button type="button" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                        <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"></path>
                        </svg>
                        11 Likes
                      </button>
                    </div>
                  </article>
                </section>
              </article>
              <article
                class="hidden lg:block py-8 w-1/3" aria-labelledby="sidebar-label"
              >
                <div class="sticky top-6">
                  <h3 id="sidebar-label" class="sr-only">Sidebar</h3>
                  <div class="p-4 mb-6 rounded-lg border border-gray-200 bg-white">
                    <h4 class="mb-2 text-sm font-bold text-gray-900 uppercase">Flowbite News morning headlines
                    </h4>
                    <p class="mb-4 text-sm font-light text-gray-500">Get all the stories you need-to-know
                      from the most powerful name in news delivered first thing every morning to your inbox</p>
                    <form action="#">
                      <label for="name-address-icon" class="sr-only">Your Name</label>
                      <div class="relative mb-4">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            class="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input
                          id="name-address-icon" type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="name@company.com" required>
                      </div>
                      <label for="email-address-icon" class="sr-only">Your Email</label>
                      <div class="relative mb-4">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input required type="text" id="email-address-icon"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="name@company.com">
                      </div>
                      <button
                        type="submit"
                        class="text-white bg-[#1EB5E4] hover:bg-[#0088B2] focus:ring-4 focus:bg-[#1EB5E4] focus:ring-[#0088B2] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-center w-full">Subscribe</button>
                    </form>
                  </div>
                  <div class="p-4 mb-6 rounded-lg border border-gray-200 bg-white">
                    <h2 class="mb-4 text-lg font-bold text-gray-900 uppercase">More Blogs</h2>
                    <div class="mb-6 text-left">
                      <span class="flex items-center justify-between mb-4">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough">Michael
                          Gough</p>
                        <p class="text-sm text-gray-600">Hace 14 dias</p>
                      </span>
                      <h5 class="mb-2 text-lg font-bold leading-tight text-gray-900">Our first office</h5>
                      <p class="mb-2 font-light text-gray-500">Over the past year, Volosoft has undergone
                        many changes! After months of preparation.
                      </p>
                      <footer class="flex flex-row justify-start gap-5 my-3 text-gray-500">
                        <span class="flex flex-row gap-3 items-center">
                          <svg width="16" height="13" viewBox="0 0 16 13" fill="text-gray-500" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85481 1.56388C2.52991 0.888985 3.44542 0.50985 4.40001 0.50985C5.3546 0.50985 6.27011 0.888985 6.94521 1.56388L8.00001 2.61778L9.05481 1.56388C9.3869 1.22004 9.78414 0.945788 10.2234 0.757116C10.6626 0.568444 11.135 0.469133 11.613 0.46498C12.091 0.460826 12.565 0.551912 13.0074 0.732923C13.4499 0.913935 13.8518 1.18125 14.1898 1.51926C14.5278 1.85727 14.7952 2.25922 14.9762 2.70165C15.1572 3.14407 15.2483 3.61812 15.2441 4.09613C15.24 4.57413 15.1406 5.04652 14.952 5.48574C14.7633 5.92495 14.489 6.32219 14.1452 6.65428L8.00001 12.8004L1.85481 6.65428C1.17992 5.97918 0.800781 5.06367 0.800781 4.10908C0.800781 3.15449 1.17992 2.23898 1.85481 1.56388Z" fill="#374151"/>
                          </svg>
                          4 reactions
                        </span>
                        <span class="flex flex-row gap-3 items-center">
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="text-gray-500" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2 9.60913V2.40913C15.2 1.93174 15.0103 1.4739 14.6728 1.13634C14.3352 0.798773 13.8774 0.609131 13.4 0.609131H2.59999C2.1226 0.609131 1.66476 0.798773 1.3272 1.13634C0.98963 1.4739 0.799988 1.93174 0.799988 2.40913V9.60913C0.799988 10.0865 0.98963 10.5444 1.3272 10.8819C1.66476 11.2195 2.1226 11.4091 2.59999 11.4091H5.29999L7.99999 14.1091L10.7 11.4091H13.4C13.8774 11.4091 14.3352 11.2195 14.6728 10.8819C15.0103 10.5444 15.2 10.0865 15.2 9.60913ZM3.49999 4.20913C3.49999 3.97044 3.59481 3.74152 3.76359 3.57274C3.93237 3.40395 4.16129 3.30913 4.39999 3.30913H11.6C11.8387 3.30913 12.0676 3.40395 12.2364 3.57274C12.4052 3.74152 12.5 3.97044 12.5 4.20913C12.5 4.44783 12.4052 4.67674 12.2364 4.84553C12.0676 5.01431 11.8387 5.10913 11.6 5.10913H4.39999C4.16129 5.10913 3.93237 5.01431 3.76359 4.84553C3.59481 4.67674 3.49999 4.44783 3.49999 4.20913ZM4.39999 6.90913C4.16129 6.90913 3.93237 7.00395 3.76359 7.17274C3.59481 7.34152 3.49999 7.57044 3.49999 7.80913C3.49999 8.04783 3.59481 8.27674 3.76359 8.44553C3.93237 8.61431 4.16129 8.70913 4.39999 8.70913H7.09999C7.33868 8.70913 7.5676 8.61431 7.73638 8.44553C7.90517 8.27674 7.99999 8.04783 7.99999 7.80913C7.99999 7.57044 7.90517 7.34152 7.73638 7.17274C7.5676 7.00395 7.33868 6.90913 7.09999 6.90913H4.39999Z" fill="#374151"/>
                          </svg>
                          5 commits
                        </span>
                      </footer>
                      <p class="inline-flex items-center font-medium text-[#0088B2]">
                        Read in 9 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </main>
          <!-- aside -->
          <aside aria-label="Related articles" class="py-8 lg:py-24">
            <div class="px-4 mx-auto max-w-screen-xl">
              <h2 class="mb-8 text-2xl font-bold text-gray-900">Read next</h2>
              <section class="grid grid-cols-3 gap-x-8 gap-y-8">
                <article class="flex mb-8" v-for="element in prueba" :key="element">
                  <div class="mb-6 text-left">
                      <span class="flex items-center justify-between mb-4">
                        <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="">
                      </span>
                      <h2 class="mb-2 text-lg font-bold leading-tight text-gray-900"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi!</h2>
                      <p class="mb-2 inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Leer Mas </p>
                  </div>
                </article>
              </section>
            </div>
          </aside>
        </div>
    </section>
  </div>
</template>

<script>
import LeftArrowIcon from "@/components/Icons/LeftArrowIcon.vue";
import HouseIcon from "@/components/Icons/HouseIcon.vue";
export default {
  name: "BlogEntry",
  components: {
    LeftArrowIcon,
    HouseIcon,
  },
  data: () => ({
    like: false,
    prueba:[
      1,2,3,4,5,6,7,8,9
    ]
  }),
  computed: {
    blog() {
      return this.$store.state.blog;
    },

  },
  async beforeCreate() {
    if (process.client)
      await this.$store.dispatch('fetchBlogUnique', this.$route.params.id);
  },
}


// https://api.sebastianmorales.co/api/blogs/1?populate[0]=image&populate[1]=author&populate[2]=author.image
</script>
