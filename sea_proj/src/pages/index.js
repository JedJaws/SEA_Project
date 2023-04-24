import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
            <header>
                <link rel="shortcut icon" href="/logo.png" />
                <nav class="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://www.instagram.com/ave26tacos/?hl=en" class="flex items-center">
                            <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Avenue 26 Logo" />
                        </a>
                        <div class="text-white text-4xl ml-36 font-sans">Avenue 26 Tacos</div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                                </li>
                                <li>
                                    <Link href="/menu" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Menu</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <body class="h-screen bg-cover bg-center bg-[url('/bg_tacos.png')]">
                <img src="/logo.png" class="rounded-full w-96 h-96 mx-auto pt-5" alt="Avenue 26 Logo"/>
                <figcaption class="font-medium">
                    <h1 class="pt-6 mb-4 text-base font-extrabold leading-none tracking-tight text-white text-center md:text-3xl lg:text-4xl dark:text-white">
                        BUSINESS INSIDER AWARDED WITH THE HONORABLE DISTINCTION OF #1 BEST TACOS IN THE USA!
                    </h1>
                </figcaption>
            </body>
            <footer>
                <figure class="md:flex bg-black p-8 rounded md:p-0 dark:bg-slate-400">
                    <div class="pt-6 md:p-8 text-center mx-auto space-y-4">
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Unofficial Website for Avenue 26 tacos</span>
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a class="hover:text-red-500"href="https://originalave26.com/">originalave26.com</a></span>
                    </div>
                </figure>
            </footer>
        </main>
  )
}
