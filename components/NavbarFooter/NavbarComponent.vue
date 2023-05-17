<template>
  <div class="text-center flex flex-col gap-0 items-center w-full 2xl:w-[1440px] m-auto">
    <nav class="bg-[#0088B2] fixed mx-2.5 xs:rounded-2xl md:rounded-3xl w-[98%] 2xl:w-[1440px] z-50 mt-3 shadow-lg">
      <div class="flex flex-wrap items-center justify-between mx-auto xs:px-5 md:px-3 lg:px-5 py-2">
        <NuxtLink class="flex items-center pl-5" to="/">
          <Morales-Logo />
        </NuxtLink>
        <!-- data-collapse-toggle="navbar-dropdown"
        aria-controls="navbar-dropdown" -->
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          @click="openNavbar"
        >
          <!-- <span class="sr-only">Open main menu</span> -->
          <svg
            class="w-12 h-12 pr-3"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div id="navbar-dropdown" class="w-full md:block md:w-auto" :class="nav ? 'block':'hidden'">
          <ul
            class="flex flex-col font-medium bg-[#0088B2] text-lg md:flex-row md:py-5 lg:p-5 md:gap-3 lg:gap-5"
          >
          <li v-for="route in routes" :key="route.id" class="border-b-2 border-[#1DB5E4] py-2 md:border-none md:py-0 xs:text-left">
              <NuxtLink
                class="hover:text-[#FFF177] hover:underline-offset-4 hover:underline hover:underline-[#FFF177] hover:decoration-3 block py-2 pl-3 pr-4 text-white bg-[#0088B2] rounded md:bg-[#0088B2] md:text-white-700 md:p-0"
                :to="route.attributes.link">{{ route.attributes.route }}</NuxtLink>
          </li>
          <li v-if="nav && !isAuthenticated" class="m-auto flex gap-2 py-4 md:py-0">
            <article>
              <button
                type="button"
                class="flex active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                @click="openLogin"
              >
                Inciar session
                <Login-Icon />
              </button>
              <form
                class="bg-yellow-to-orange w-[100%] h-full justify-center p-5 flex flex-col space-y-2 right-0 top-0 z-50 animate-fade-in text-left gap-3"
                :class="LoginActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
                >
                <div class="flex justify-between items-center">
                    <span>
                      Iniciar sesión
                    </span>
                    <Button
                    class="border border-solid border-black text-black rounded-lg px-4 py-2 hover:text-white hover:border-[#374151] hover:bg-[#374151]" type="button"
                    @click="openLogin"
                    >
                      Cerrar
                    </Button>
                </div>
                <div
                v-if="err"
                class="
                  p-4
                  mb-4
                  text-sm text-red-700
                  bg-red-100
                  rounded-lg
                "
                role="alert"
                >
                  {{ err }}
                </div>
                <div class="flex flex-col justify-evenly">
                    <label for="emailLogin" class="my-3">Email</label>
                    <input id="emailLogin" v-model="emailLogin" type="email" name="email" placeholder="name@example.com" required class="w-full rounded-lg p-2">
                </div>
                <div class="flex flex-col justify-evenly">
                    <label for="passwordLogin" class="my-3">Contraseña</label>
                    <!-- <input id="passwordLogin" v-model="passwordLogin" name="password" placeholder="**********" required class="w-full rounded-lg p-2"> -->
                    <div class="relative">
                          <input
                            id="passwordLogin"
                            v-model="passwordLogin"
                            :type="showPasswordLogin ? 'text' : 'password'"
                            name="password"
                            placeholder="**********"
                            class="w-full rounded-lg p-2"
                            required
                          />
                          <button
                            type="button"
                            class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                            @click="togglePasswordVisibilityLogin"
                          >
                            <svg
                              v-if="showPasswordLogin"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            <svg
                              v-else
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M19 12h.01M6 12h.01M18 12h.01M7 12h.01M17 12h.01M8 12h.01M16 12h.01M9 12h.01M15 12h.01M10 12h.01M14 12h.01M11 12h.01M13 12h.01"
                              />
                            </svg>
                          </button>
                        </div>
                </div>
                <div class="w-full flex flex-row justify-center">
                    <button
                      class="active:bg-[#009FD0] active:border-[#0088B2] active:border-4 hover:bg-[#0088B2] bg-[#1EB5E4] text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-sm md:w-5/12 flex items-center justify-center" type="button" @click="userLogin"
                    >
                        Iniciar Sesion
                        <Modal-Login-Icon class="ml-1"/>
                    </button>
                </div>
                <div class="w-full flex justify-evenly">
                    <span>¿No tienes cuenta?</span>
                    <a class="underline underline-offset-2 text-primary-600 " href="#" @click="openRegister" >Registrate aqui</a>
                </div>
              </form>
            </article>
            <article>
              <button
                type="button"
                class="flex active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                @click="openRegister"
              >
                Registrarse
                <register-icon />
              </button>
              <form
                class="bg-yellow-to-orange w-12/12 h-full p-5 flex flex-col space-y-2 right-0 top-0 z-50 animate-fade-in text-left gap-3 overflow-auto"
                :class="RegisterActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
                >
                <div class="flex justify-between items-center">
                      <p class="text-center  text-gray-700 font-Cabin ">
                        ¿Te gustaría estar al tanto de noticias y novedades en mi candidatura? Registrate para recibir la información más actualizada.
                      </p>
                  </div>
                  <div class=" text-left ">
                    <div class="flex flex-col justify-evenly">
                          <label for="name" class="my-3">Nombres</label>
                          <input id="name" v-model="usernameRegister" type="text" name="nombres" placeholder="Escribe tu nombre" class="w-full rounded-lg p-2" required>
                    </div>
                    <div class="flex flex-col justify-evenly">
                          <label for="lastName" class="my-3">Apellidos</label>
                          <input id="lastName" v-model="lastNameRegister" type="text" name="Apelldios" placeholder="Escribe tu apellido" class="w-full rounded-lg p-2" required>
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <label for="email" class="my-3">Email</label>
                        <input id="email" v-model="emailRegister" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2" required>
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <label for="cellphone" class="my-3">Celular</label>
                        <input id="cellphone" v-model="cellPhoneRegister" type="number" placeholder="3152687894" class="w-full rounded-lg p-2" required>
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <label for="password" class="my-3">Contraseña</label>
                        <div class="relative">
                          <input
                            id="password"
                            v-model="passwordRegister"
                            :type="showPassword ? 'text' : 'password'"
                            name="password"
                            placeholder="**********"
                            class="w-full rounded-lg p-2"
                            required
                          />
                          <button
                            type="button"
                            class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                            @click="togglePasswordVisibility"
                          >
                            <svg
                              v-if="showPassword"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            <svg
                              v-else
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M19 12h.01M6 12h.01M18 12h.01M7 12h.01M17 12h.01M8 12h.01M16 12h.01M9 12h.01M15 12h.01M10 12h.01M14 12h.01M11 12h.01M13 12h.01"
                              />
                            </svg>
                          </button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <label for="passwordConfirm" class="my-3">Confirmar Contraseña</label>
                        <div class="relative">
                          <input
                            id="passwordConfirm"
                            v-model="passwordConfirm"
                            :type="showPasswordConfirm ? 'text' : 'password'"
                            name="password"
                            placeholder="**********"
                            class="w-full rounded-lg p-2"
                            required
                          />
                          <button
                            type="button"
                            class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                            @click="togglePasswordVisibilityConfirm"
                          >
                            <svg
                              v-if="showPasswordConfirm"
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            <svg
                              v-else
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h.01M19 12h.01M6 12h.01M18 12h.01M7 12h.01M17 12h.01M8 12h.01M16 12h.01M9 12h.01M15 12h.01M10 12h.01M14 12h.01M11 12h.01M13 12h.01"
                              />
                            </svg>
                          </button>
                        </div>
                    </div>
                  </div>
                  <div class="w-full flex flex-row justify-start gap-2 mx-auto">
                      <input type="checkbox" class="border-none border-0 w-6 h-6 transform scale-150">
                      <p class="text-GrayTermsPrivacy text-left">
                          By submitting this form, you confirm that you have read and agree to Flowbite’s Terms of Service and Privacy Statement
                      </p>
                  </div>
                  <div
                    v-if="errRegister"
                    class="
                      p-4
                      mb-4
                      text-sm text-red-700
                      bg-red-100
                      rounded-lg
                    "
                    role="alert"
                  >
                    {{ errRegister }}
                  </div>
                  <div class="w-8/12 flex justify-evenly mx-auto">
                      <button
                        type="button"
                        class="active:bg-[#009FD0] active:border-[#0088B2] active:border-4 hover:bg-[#0088B2] bg-[#1EB5E4] text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-xs md:w-5/12 flex items-center justify-center"
                        :disabled="sendRegisterButton"
                        @click=userRegister()
                        >
                          Registrarse
                          <Modal-Register-Icon class="ml-1"/>
                      </button>
                      <Button
                      class="border border-solid border-black text-black rounded-lg px-4 py-2 hover:text-white hover:border-[#374151] hover:bg-[#374151]"
                      type="button"
                      @click ="openRegister"
                      >
                        Cerrar
                      </Button>
                  </div>
              </form>
            </article>
          </li>
          <li v-if="nav && isAuthenticated" class="m-auto flex gap-2 py-4 md:py-0">
            <article v-if="isAuthenticated" class="relative">
              <button class="active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" @click="dropDownMenu = !dropDownMenu">
                Mi perfil <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div :class="dropDownMenu ? 'absolute':'hidden'" class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-2 top-12">
                  <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                    <li>
                      <p class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">{{loggedInUser.username}}</p>
                    </li>
                    <li>
                      <p class="block px-4 py-2 hover:bg-gray-100 cursor-pointer" @click.prevent="userLogout">Log out</p>
                    </li>
                  </ul>
              </div>

            </article>
          </li>
          </ul>
        </div>
        <div class="lg:gap-5 md:gap-3 hidden md:flex md:w-auto md:mr-1 lg:mr-3 relative">
          <article v-if="isAuthenticated">
            <button class="active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0" @click="dropDownMenu = !dropDownMenu">
              Mi perfil <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <!-- Dropdown menu -->
            <div
            class="fixed top-[-1px]"
            :class="dropDownMenu ? 'w-screen h-screen bg-black bg-opacity-50 transition-shadow ease-in-out duration-75 left-0 z-10 overflow-auto':'bg-transparent'"
            @click="dropDownMenu = !dropDownMenu"
            >
            </div>
            <div :class="dropDownMenu ? 'absolute':'hidden'" class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-2 top-12">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                  <li>
                    <p class="block px-4 py-2 hover:bg-gray-100 cursor-pointer">{{loggedInUser.username}}</p>
                  </li>
                  <!-- <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Upload Image</a>
                  </li> -->
                  <li>
                    <p class="block px-4 py-2 hover:bg-gray-100 cursor-pointer" @click.prevent="userLogout">Log out</p>
                  </li>
                </ul>
            </div>

          </article>
          <button
            v-if="!isAuthenticated"
            type="button"
            class="active:bg-[#FFF7B2] active:border-[#FFEC42] hover:bg-[#FFF7B2] flex items-center gap-2 text-black bg-[#FFEC42] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            @click="openLogin"
          >
            Inciar sesión
            <Login-Icon />
          </button>
          <div
          class="fixed top-[-1px] "
          :class="LoginActive ? 'w-screen h-screen bg-black bg-opacity-50 transition-shadow ease-in-out duration-75 left-0 z-10':'bg-transparent'"
          @click="openLogin"
          >
          </div>
          <!-- Login form -->
          <form
            class="bg-yellow-to-orange w-3/12 p-5 flex flex-col space-y-2  rounded-xl right-28 top-24 z-50 animate-fade-in text-left gap-3"
            :class="LoginActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
            >
            <div class="flex justify-between items-center">
                <span>
                  Iniciar sesión
                </span>
                <Button
                class="border border-solid border-black text-black rounded-lg px-4 py-2 hover:text-white hover:border-[#374151] hover:bg-[#374151]" type="button"
                @click="openLogin"
                >
                  Cerrar
                </Button>
            </div>
            <div
            v-if="err"
            class="
              p-4
              mb-4
              text-sm text-red-700
              bg-red-100
              rounded-lg
            "
            role="alert"
            >
              {{ err }}
            </div>
            <div class="flex flex-col justify-evenly">
                <label for="emailLogin" class="my-3">Email</label>
                <input id="emailLogin" v-model="emailLogin" type="email" name="email" placeholder="name@example.com" required class="w-full rounded-lg p-2">
            </div>
            <div class="flex flex-col justify-evenly">
                <label for="passwordLogin" class="my-3">Contraseña</label>
                <input id="passwordLogin" v-model="passwordLogin" type="password" name="password" placeholder="**********" required class="w-full rounded-lg p-2">
            </div>
            <div class="w-full flex flex-row justify-center">
                <button
                  class="active:bg-[#009FD0] active:border-[#0088B2] active:border-4 hover:bg-[#0088B2] bg-[#1EB5E4] text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-sm md:w-5/12 flex items-center justify-center" type="button" @click="userLogin"
                >
                    Iniciar Sesion
                    <Modal-Login-Icon class="ml-1"/>
                </button>
            </div>
            <div class="w-full flex justify-evenly">
                <span>¿No tienes cuenta?</span>
                <a class="underline underline-offset-2 text-primary-600 " href="#" @click="openRegister" >Registrate aqui</a>
            </div>
          </form>

          <button
            v-if="!isAuthenticated"
            type="button"
            class="active:bg-[#FFF7B2] active:border-[#FFEC42] active:border hover:bg-[#FFF7B2] bg-[#FFEC42] flex items-center gap-2 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            @click="openRegister"
            >
            Registrarse
            <RegisterIcon />
          </button>
          <div
          class="fixed top-[-1px] xs:hideen md:fixed"
          :class="RegisterActive ? 'w-screen h-screen bg-black bg-opacity-50 transition-shadow ease-in-out duration-75 left-0 z-10 overflow-auto':'bg-transparent'"
          @click="openRegister"
          >
          </div>
          <!-- register form -->
          <form
            class="bg-yellow-to-orange w-4/12 p-5 flex flex-col space-y-2 gap-4 overflow-auto h-[500px] rounded-xl right-28 top-24 z-50 animate-fade-in"
            :class="RegisterActive ? 'fixed animate-fade-in':'animate-fade-off hidden '"
            >

            <div
              v-if="errRegister"
              class="
                p-4
                mb-4
                text-sm text-red-700
                bg-red-100
                rounded-lg
              "
              role="alert"
            >
              {{ errRegister }}
            </div>
            <div class="flex justify-between items-center">
                <p class="text-center  text-gray-700 font-Cabin ">
                  ¿Te gustaría estar al tanto de noticias y novedades en mi candidatura? Registrate para recibir la información más actualizada.
                </p>
            </div>
            <div class=" text-left ">
              <div class="flex flex-col justify-evenly">
                    <label for="name" class="my-3">Nombres</label>
                    <input id="name" v-model="usernameRegister" type="text" name="nombres" placeholder="Escribe tu nombre" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                    <label for="lastName" class="my-3">Apellidos</label>
                    <input id="lastName" v-model="lastNameRegister" type="text" name="Apelldios" placeholder="Escribe tu apellido" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="email" class="my-3">Email</label>
                  <input id="email" v-model="emailRegister" type="email" name="email" placeholder="name@example.com" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="cellphone" class="my-3">Celular</label>
                  <input id="cellphone" v-model="cellPhoneRegister" type="number" placeholder="3152687894" class="w-full rounded-lg p-2" required>
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="password" class="my-3">Contraseña</label>
                  <div class="relative">
                    <input
                      id="password"
                      v-model="passwordRegister"
                      :type="showPassword ? 'text' : 'password'"
                      name="password"
                      placeholder="**********"
                      class="w-full rounded-lg p-2"
                      required
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                      @click="togglePasswordVisibility"
                    >
                      <svg
                        v-if="showPassword"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M19 12h.01M6 12h.01M18 12h.01M7 12h.01M17 12h.01M8 12h.01M16 12h.01M9 12h.01M15 12h.01M10 12h.01M14 12h.01M11 12h.01M13 12h.01"
                        />
                      </svg>
                    </button>
                  </div>
                  <!-- <input id="password" v-model="passwordRegister" type="password" name="password" placeholder="**********" class="w-full rounded-lg p-2" required> -->
              </div>
              <div class="flex flex-col justify-evenly">
                  <label for="passwordConfirm" class="my-3">Confirmar Contraseña</label>
                  <div class="relative">
                    <input
                      id="passwordConfirm"
                      v-model="passwordConfirm"
                      :type="showPasswordConfirm ? 'text' : 'password'"
                      name="password"
                      placeholder="**********"
                      class="w-full rounded-lg p-2"
                      required
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                      @click="togglePasswordVisibilityConfirm"
                    >
                      <svg
                        v-if="showPasswordConfirm"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <svg
                        v-else
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h.01M19 12h.01M6 12h.01M18 12h.01M7 12h.01M17 12h.01M8 12h.01M16 12h.01M9 12h.01M15 12h.01M10 12h.01M14 12h.01M11 12h.01M13 12h.01"
                        />
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
            <div class="w-full flex flex-row justify-start gap-2 mx-auto">
                <input type="checkbox" class="border-none border-0 w-6 h-6 transform scale-150">
                <p class="text-GrayTermsPrivacy text-left">
                    By submitting this form, you confirm that you have read and agree to Flowbite’s Terms of Service and Privacy Statement
                </p>
            </div>
            <div class="w-8/12 flex justify-evenly mx-auto">
                <button
                  type="button"
                  class="active:bg-[#009FD0] active:border-[#0088B2] active:border-4 hover:bg-[#0088B2] bg-[#1EB5E4] text-white p-2 rounded-lg sm:w-3/12 sm:text-sm md:text-xs md:w-5/12 flex items-center justify-center"
                  :disabled="sendRegisterButton"
                  @click=userRegister()
                  >
                    Registrarse
                    <Modal-Register-Icon class="ml-1"/>
                </button>
                <Button
                class="border border-solid border-black text-black rounded-lg px-4 py-2 hover:text-white hover:border-[#374151] hover:bg-[#374151]"
                type="button"
                @click ="openRegister"
                >
                  Cerrar
                </Button>
            </div>
          </form>
        </div>

        <!-- v-if="success" -->
        <form class="hidden animate-fade-in bg-yellow-to-orange w-10/12 justify-center top-[50%] left-1/2 transform -translate-x-1/2 rounded-lg p-5 flex-col space-y-2 z-50 text-left gap-3">
          <div class="w-full flex flex-col justify-center gap-3">
            <span>Tu cuenta se ha creado exitosamente.</span>
            <div class="w-full m-auto flex border-black-3">
              <button
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1EB5E4] sm:w-fit hover:bg-[#0088B2] focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Suscrito
              </button>
              <lottie-animation class="rounded-lg w-6/12" path="./check-lotie.json" />
            </div>
        </div>
</form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
import MoralesLogo from '@/components/Icons/MoralesLogo.vue';
import LoginIcon from '@/components/Icons/LoginIcon.vue';
import RegisterIcon from '@/components/Icons/RegisterIcon.vue';
import ModalLoginIcon from '@/components/Icons/ModalLoginIcon.vue';
import ModalRegisterIcon from '@/components/Icons/ModalRegisterIcon.vue';
// import FacebookIcon from '@/components/Icons/FacebookIcon.vue';
// import GoogleIcon from '@/components/Icons/GoogleIcon.vue';

export default {
  name: 'NavbarComponent',
  components: { MoralesLogo, LoginIcon, RegisterIcon ,ModalLoginIcon ,ModalRegisterIcon,
    LottieAnimation,
    // FacebookIcon,GoogleIcon
  },
  data: () => ({
    nav: false,
    err: null,
    errRegister:null,
    success:null,
    sendRegisterButton:true,
    routes: [],
    emailLogin: '',
    passwordLogin: '',
    usernameRegister: '',
    lastNameRegister:'',
    emailRegister: '',
    cellPhoneRegister:'',
    passwordRegister: '',
    passwordConfirm:'',
    showPassword: false,
    showPasswordConfirm: false,
    dropDownMenu:false,
    RegisterActiveMobile:false,
    showPasswordLogin:false,
  }),
  computed:{
    ...mapGetters(['isAuthenticated']),
    ...mapGetters(['loggedInUser']),
    LoginActive() {
      return this.$store.state.statusModalLogin
    },
    RegisterActive() {
      return this.$store.state.statusModalRegister
    }
  },
  watch:{
    passwordConfirm(){
      if(this.passwordConfirm === this.passwordRegister && this.usernameRegister && this.lastNameRegister && this.emailRegister && this.cellPhoneRegister && this.passwordConfirm){
        this.sendRegisterButton = false
      }else{
        this.sendRegisterButton = true
      }
    }
  },
  async mounted() {
    const { data } = await this.$axios.$get('/api/navbars')
    this.routes = data;
  },

  methods: {
    togglePasswordVisibilityLogin() {
      this.showPasswordLogin = !this.showPasswordLogin
    },
    openRegisterMobile() {
      this.RegisterActiveMobile = !this.RegisterActiveMobile
    },
    togglePasswordVisibilityConfirm() {
      this.showPasswordConfirm = !this.showPasswordConfirm
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    async userLogout() {
      await this.$auth.logout()
    },
    openNavbar() {
      this.nav = !this.nav;
    },
    openLogin() {
      this.$store.dispatch('changeStatusModalLogin', !this.LoginActive);
      this.$store.dispatch('changeStatusModalRegister', false);
      this.err = null;
    },
    openRegister() {
      this.$store.dispatch('changeStatusModalRegister', !this.RegisterActive);
      this.$store.dispatch('changeStatusModalLogin', false);
      this.errRegister = '';
    },
    async userRegister() {
      try {
        this.$axios.setToken(false)
        await this.$axios.post('/api/auth/local/register', {
          email: this.emailRegister,
          password: this.passwordRegister,
          username: this.usernameRegister+this.lastNameRegister,
          cellphone:this.cellPhoneRegister,
          lastname:this.lastNameRegister,
          names:this.usernameRegister,
        })
        this.$store.dispatch('changeStatusModalRegister', !this.RegisterActive);
        this.$store.dispatch('changeStatusModalLogin', false);
        this.success = true
        this.openNavbar()
        setTimeout(() => {
          this.success = false
        }, 3000);
      } catch (e) {
        if (e.response) this.errRegister = e.response.data.error.message
      }
    },
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: { identifier: this.emailLogin, password: this.passwordLogin },
        })
        this.$store.dispatch('changeStatusModalLogin', !this.LoginActive);
        this.$store.dispatch('changeStatusModalRegister', false);
      } catch (e) {
        if (e.response) this.err = "El correo o la contraseña no son correctos."
      }
    },
  }
};
</script>

<style scoped>
a.nuxt-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #FFF177;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 1.5px;
  color: #FFF177;
}
::-webkit-scrollbar {
  width: 3px; /* Ancho de la barra de desplazamiento */
}

/* Estilo para la pista de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background-color: transparent; /* Color de fondo de la pista */
  border-radius: 1.5rem; /* Redondeo de la pista */
}

/* Estilo para la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background-color: #E5B331; /* Color de la barra de desplazamiento */
  border-radius: 1.5rem; /* Redondeo de la barra de desplazamiento */
}
</style>
