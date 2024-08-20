import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselComp } from "../../components/CarouselComp";

export const HomeEnigma = () => {
  return (
    <>
      <div id="Home" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 place-items-center lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-accent-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2L56 72c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c-35.3 0-64 28.7-64 64l0 71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4c0 0 0 0 0 0s0 0 0 0l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0l.1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9l0-71c0-35.3-28.7-64-64-64l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4L0 480c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-85.4z" /></svg>
            </div>
            <div className="max-w-xl mb-6">
              <div className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <p className="text-5xl">Turning 5 with Enigma: A Celebration of Creativity!</p>
              </div>
              <p className="text-base text-gray-700 md:text-lg">
                Enigma turns 5! This journey has been filled with inspiring moments, creative ideas, and remarkable achievements. We can’t wait to see what we will achieve next together with you.
              </p>
            </div>
            <div>
              <button className="cursor-pointer py-2 px-5 bg-[#3266a8] hover:bg-[#709edb] font-bold w-auto text-white rounded-full">
                <a href="https://www.instagram.com/enigmacamp/" target="_blank">
                  <p>Celebrate with Us</p>
                </a>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="./assets/enigma/DSC04010.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="./assets/enigma/DSC04026.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="./assets/enigma/DSC04033.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 sm:mx-auto">
          <h2 id="OurCultures" className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
            Get ready to achieve more, together
          </h2>
        </div>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-3">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center text-3xl w-12 h-12 mb-3 rounded-full bg-indigo-50">
                <span className="font-bold text-blue-700">R</span>
              </div>
            </div>
            <div>
              <h6 className="mb-2 leading-5 text-xl font-bold text-blue-700 uppercase">
                RESPECT
              </h6>
              <p className="text-sm text-gray-900">
                Treat and honor one another with mutual respect and consideration.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center text-3xl w-12 h-12 mb-3 rounded-full bg-indigo-50">
                <span className="font-bold text-blue-700">E</span>
              </div>
            </div>
            <div>
              <h6 className="mb-2 leading-5 text-xl font-bold text-blue-700 uppercase">
                Effective & Efficient
              </h6>
              <p className="text-sm text-gray-900">
                Maximize work processes to achieve the best possible outcomes.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center text-3xl w-12 h-12 mb-3 rounded-full bg-indigo-50">
                <span className="font-bold text-blue-700">A</span>
              </div>
            </div>
            <div>
              <h6 className="mb-2 leading-5 text-xl font-bold text-blue-700 uppercase">
                AGILE
              </h6>
              <p className="text-sm text-gray-900">
                Adapt and adjust swiftly to changes.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center text-3xl w-12 h-12 mb-3 rounded-full bg-indigo-50">
                <span className="font-bold text-blue-700">D</span>
              </div>
            </div>
            <div>
              <h6 className="mb-2 leading-5 text-xl font-bold text-blue-700 uppercase">
                Discipline
              </h6>
              <p className="text-sm text-gray-900">
                Follow and adhere to rules, including those related to self-discipline.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center text-3xl w-12 h-12 mb-3 rounded-full bg-indigo-50">
                <span className="font-bold text-blue-700">Y</span>
              </div>
            </div>
            <div>
              <h6 className="mb-2 leading-5 text-xl font-bold text-blue-700 uppercase">
                Yes I can
              </h6>
              <p className="text-sm text-gray-900">
                Maintain a positive and optimistic outlook in all situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="OurMoments" className="px-8 mt-12">
        <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">

          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <div className="max-w-xl mb-10 sm:mx-auto">
              <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
                Our Moments
              </h2>
            </div>
          </span>{" "}
        </h2>
        <CarouselComp />
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="max-w-xl mb-10 sm:mx-auto">
            <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:text-center">
              Let’s Grow Together with Enigma
            </h2>
          </div>
          <p className="text-base text-gray-700 md:text-lg">
            As we reach the end of this journey, remember that growth is a continuous process. With Enigma by your side, you’re equipped to embrace new challenges and achieve your goals. Ready to take the leap?
          </p>
          <button className="mt-5 cursor-pointer py-2 px-5 bg-[#3266a8] hover:bg-[#709edb] font-bold w-auto text-white rounded-full">
            <a href="https://www.instagram.com/enigmacamp/" target="_blank">
              <p>Celebrate with Us</p>
            </a>
          </button>
        </div>
      </div>

      <div id="ContactUs" className="bg-gray-900 text-white">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid grid-cols-6 gap-10 row-gap-6 mb-8">
                    <div className="sm:col-span-3 col-span-6 d w-auto">
                        <a
                            href="https://akcdn.detik.net.id/community/media/visual/2023/05/26/pragos-little-krishna-1_169.png?w=620"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img
                                src="./assets/enigma/LogoGrowWithEnigmaCamp-PNG.png"
                                alt="Enigma Logo"
                                className="w-24"
                            />
                        </a>
                        <div className="mt-6">
                            <p className="text-sm">
                            Established in 2017 as part of PT. Square Techno Indonesia, then evolved into PT. Enigma Cipta Humanika in August 2019. We specialized in IT Bootcamp and Talent Management, offering two key programs: Talent as a Service and Training as a Service. Our mission is to empower software engineers to support your business.</p>
                        </div>
                    </div>
                    <div className="sm:col-span-2 col-span-6 space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-white">
                            Contacts
                        </p>
                        <div className="flex">
                            <p className="mr-1  ">Phone:</p>
                            <a
                                href="tel:+02127806212"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-white-400 hover:text-blue-800"
                            >
                                +02127806212
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1">Email:</p>
                            <a
                                href="mailto:info@enigmacamp.com"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-white-400 hover:text-blue-800"
                            >
                                info@enigmacamp.com
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1">Address:</p>
                            <a
                                href="https://maps.app.goo.gl/HSw6R1qSCLQTArXD8"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-white-400 hover:text-blue-800"
                            >
                                Enigma Camp Training Center Jakarta, Ragunan
                            </a>
                        </div>
                    </div>
                    <div className='sm:col-span-1 col-span-6'>
                        <span className="text-base font-bold tracking-wide text-white">
                            Social
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a 
                                href='https://x.com/enigmacamp'
                                target='_blank'
                                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href='https://www.instagram.com/enigmacamp/'
                                target='_blank'
                                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href='https://www.facebook.com/profile.php?id=100089567792931'
                                target='_blank'
                                className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
                    <p className="text-sm text-gray-400">
                        © Copyright 2024 by BangIniDiisiApa?. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
};
