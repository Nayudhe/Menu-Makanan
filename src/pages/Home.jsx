import React from 'react';
import Logo from '../gambar/Chef.jpg'


export const Home = () => {
  return (
    
<main class="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
    <header class="z-30 flex items-center w-full h-24 sm:h-32">
        <div class="container flex items-center justify-between px-6 mx-auto">
            <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
                Menu Makanan
            </div>
            <div class="flex items-center">
                <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                    <a href="#" class="flex px-6 py-2">
                        Home
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        Lihat Menu
                    </a>
                    <a href="#" class="flex px-6 py-2">
                        NotFound
                    </a>
                </nav>
                <button class="flex flex-col ml-4 lg:hidden">
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div class="container relative flex px-6 py-16 mx-auto">
            <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                </span>
                <h1 class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    Silahkan 
                    <span class="text-5xl sm:text-7xl">
                        Pilih menu 
                    </span>
                </h1>
                <p class="text-sm text-gray-700 sm:text-base dark:text-white">
                    Pilihlah menu terbaik untuk dan jadikan menu favorit kamu
                </p>
                <div class="flex mt-8">
                    <a href="#" class="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                        KLIK DISINI
                    </a>
                    <a href="#" class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        BACA PETUNJUK
                    </a>
                </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                <img src={Logo} class="max-w-xs m-auto md:max-w-sm"/>
            </div>
        </div>
    </div>
</main>

  )
}

export default Home