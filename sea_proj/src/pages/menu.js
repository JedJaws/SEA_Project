import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
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
                                    <Link href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </li>
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Menu</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <body>
                <div class="h-screen bg-cover bg-center bg-slate-800">
                    <h1 class="mb-4 text-4xl font-sans underline leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">MENU</h1>
                    <ul class="list-none text-center text-white">
                        <li>
                            THIS IS LA! OUR CITY OUR HOME!
                        </li>
                    </ul>
                    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/tacos.png" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                        Tacos - $2
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Meats: Chicken, Beef, Marinated Pork, Pork Belly, Beef Head
                        </div>
                        </figcaption>
                        <blockquote>
                            <p class="text-gray-500 dark:text-gray-400">An authentic LA street taco filled with your choice of meat and sauce, accompanied with onions and cilantro. This a perfectly cheap meal to have after a Dodger game, while still providing amazing quality ingredients.</p>
                        </blockquote>
                    </div>
                    </figure>
                    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/burrito.png" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                           Burritos - $9
                           w/ cheese - $10
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Meats: Chicken, Beef, Marinated Pork, Pork Belly, Beef Head
                        </div>
                        </figcaption>
                        <blockquote>
                            <p class="text-gray-500 dark:text-gray-400">This jam packed burrito is filled with your choice of meat, rice, beans, cheese, onions and cilantro. Each bite will be of equal excellence and will have you begging for more.</p>
                        </blockquote>
                    </div>
                    </figure>
                    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/quesadilla.png" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                           Quesadilla - $10
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Meats: Chicken, Beef, Marinated Pork, Pork Belly, Beef Head
                        </div>
                        </figcaption>
                        <blockquote>
                            <p class="text-gray-500 dark:text-gray-400">Our quesadillas rival our competitors not by just the quality of our ingredients, but by how its constructed. This quesadilla is filled with your choice of meat, cheese, onions and cilantro.</p>
                        </blockquote>
                    </div>
                    </figure>
                    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/mulitas.png" alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                           Mulitas - $6
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            Meats: Chicken, Beef, Marinated Pork, Pork Belly, Beef Head
                        </div>
                        </figcaption>
                        <blockquote>
                            <p class="text-gray-500 dark:text-gray-400">The mullitas are created with two street taco tortillas filled with cheese and your choice of meat. As if creating many circle sized quesdillas with the food consumption consistency of tacos.</p>
                        </blockquote>
                    </div>
                    </figure>
                </div>

            </body>
        </main>
    )
}