import Link from 'next/link';
import Script from 'next/script';

export default function About() {
    return(
        <main>
            <header>
                <link rel="shortcut icon" href="/logo.png" />
                <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://www.instagram.com/ave26tacos/?hl=en" class="flex items-center">
                            <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Avenue 26 Logo" />
                        </a>
                        <div class="text-white text-4xl ml-36">Avenue 26 Tacos</div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">About</Link>
                                </li>
                                <li>
                                    <Link href="/menu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Menu</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <body>
                <div class="h-screen bg-cover bg-center bg-slate-800">
                    <h1 class="mb-4 text-4xl font-sans underline leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
                        ABOUT THE BUSINESS
                    </h1>
                    <figure class="md:flex-none bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img class="py-2.5 w-120 h-60 md:rounded-none mx-auto" src="/about.jpeg" alt="" />
                        <div class="content-evenly pt-6 md:p-8 text-center space-y-4">
                            <figcaption class="font-medium">
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Story</h1>
                            </figcaption>
                            <blockquote>
                                <p class="text-black-500 dark:text-black-400">
                                        A Los Angeles staple, this taco stand has amassed many followers through its prices and
                                    the quality of the food. From the help of food critics as well as youtubers, the Avenue 26 Tacos
                                    name began spreading like wild fire. Videos were posted raving about the authenticity of
                                    the tacos and having a $1 per taco price. Due to the popularity, prices have been raised and a secondary 
                                    location has been added. Although the quality of the food and atmosphere has not changed.
                                </p>
                            </blockquote>
                            <figcaption class="font-medium">
                            <h1 class="pt-3 mb-4 text-base font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Locations / Business Hours</h1>
                            </figcaption>
                            <blockquote><p class="text-black-500"> Refresh to see if the stands are open or closed if they do not appear.</p></blockquote>
                            <blockquote>
                                <p id="name" class="text-xl text-sky-500 dark:text-sky-400">
                                    Little Tokyo
                                </p>
                                <p>currently: <p id="tokIsOpen" class="font-bold text-green-400"></p><p id="tokIsClosed" class="font-bold text-red-500"></p></p>
                                <Script src="/script.js" strategy='afterInteractive'/>
                                <a href="https://www.google.com/maps/place/353+S+Alameda+St,+Los+Angeles,+CA+90013/@34.043778,-118.238535,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c639871e0a0d:0x11994ad59b6e0791!8m2!3d34.043778!4d-118.238535!16s%2Fg%2F11c87qg4px">
                                    <p class="hover:text-red-500 underline text-black-500 dark:text-black-400">
                                        DTLA 353 South Alameda 90013
                                    </p>
                                </a>
                                <p class="text-black-500 dark:text-black-400">
                                    Sunday - Thursday: 2pm - 2:30am
                                </p>
                                <p class="text-black-500 dark:text-black-400">
                                    Friday and Saturday: 2pm - 2:30am
                                </p>
                            </blockquote>
                            <blockquote>
                                <p class="text-xl text-sky-500 dark:text-sky-400">
                                    Eagle Rock
                                </p>
                                <p>currently: <p id="rockIsOpen" class="font-bold text-green-400"></p><p id="rockIsClosed" class="font-bold text-red-500"></p></p>
                                <Script src="/script.js" strategy='afterInteractive'/>
                                <a href="https://www.google.com/maps/place/1033+Neola+St,+Los+Angeles,+CA+90041/@34.1357824,-118.188902,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c3ee85b68415:0x8d705dc208b8de45!8m2!3d34.1357824!4d-118.188902!16s%2Fg%2F11shj8nytr">
                                    <p class="hover:text-red-500 underline text-black-500 dark:text-black-400">
                                        1033 Neola St 90041
                                    </p>
                                </a>
                                <p class="text-black-500 dark:text-black-400">
                                    Monday - Sunday: 5pm - 11pm
                                </p>
                            </blockquote>
                            <figcaption class="font-medium">
                            <h1 class="pt-3 mb-4 text-base font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Original website / Links</h1>
                            </figcaption>
                            <blockquote>
                                <p class="text-xl text-sky-500 dark:text-sky-400">
                                    Instagram link is located on the logo in the top left corner of the site.
                                </p>
                            </blockquote>
                            <blockquote>
                                <a href="https://originalave26.com" class="underline hover:text-red-500 text-black-500 active:text-red-500">
                                    <p>
                                        originalave26.com
                                    </p>
                                </a>
                            </blockquote>
                            <blockquote>
                                <a href="https://www.youtube.com/watch?v=qFglNTvnV6A" class="underline hover:text-red-500 text-black-500 active:text-red-500">
                                    <p>
                                        David So Youtube review
                                    </p>
                                </a>
                            </blockquote>
                            <blockquote>
                                <a href="https://www.youtube.com/watch?v=ZVOxkaFwOSQ" class="underline hover:text-red-500 text-black-500 active:text-red-500">
                                    <p>
                                        Insider Food Youtube review
                                    </p>
                                </a>
                            </blockquote>
                            <blockquote>
                                <a href="https://www.youtube.com/watch?v=X8lChOjW3M0" class="underline hover:text-red-500 text-black-500 active:text-red-500">
                                    <p>
                                        Real 92.3 Youtube review
                                    </p>
                                </a>
                            </blockquote>
                            <blockquote>
                                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Click Here</button></a>
                            </blockquote>
                        </div>
                    </figure>
                </div>

            </body>
        </main>
    )
}