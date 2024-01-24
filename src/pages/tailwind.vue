<template>
    <div class="max-w-screen-xl mx-auto">
    <header class="flex items-center justify-between px-2 border-b h-14">
      <a class="dark:text-slate-200 uppercase font-bold text-purple-800" href="#">webDev</a>
      <nav class="hidden md:flex items-center gap-4">
        <ul class="flex gap-2 font-semibold text-gray-500">
          <li><a class="header-link" href="#">Home</a></li>
          <li><a class="header-link" href="#">About</a></li>
          <li><a class="header-link" href="#">Contact</a></li>
        </ul>
        <ul class="flex gap-2">
          <li><button class="header-buttons transition-all duration-300 delay-1000">Login</button></li>
          <li><button class="header-buttons">Register</button></li>
        </ul>
      </nav>
      <button class="dark:text-slate-200 inline-block md:hidden">
        Menu
      </button>
    </header>
  
    <!-- Breadcrumb -->
    <div class="flex items-center">
      <div class="flex items-center py-4 overflow-y-auto whitespace-nowrap">
        <a class="dark:text-slate-200 text-gray-600 hover:text-gray-900 decoration-gray-700 underline-offset-2" href="#">Home</a>
        <span class="mx-2 text-gray-500 ">&gt;</span>
        <a class="dark:text-slate-200 text-gray-600 hover:text-gray-900decoration-gray-700 underline-offset-2" href="#">News</a>
        <span class="mx-2 text-gray-500">&gt;</span>
        <a class="dark:text-slate-200 text-gray-600 hover:text-gray-900 decoration-gray-700 underline-offset-2" href="#">Tech</a>
      </div>
    </div>
    <!-- banners -->
    <section class="px-2 lg:flex lg:space-x-2">
      <a class="w-full lg:w-2/3 bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden" href="#">
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
      </a>

      <a class="w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden" href="#">
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
        </div>
      </a>
    </section>
  
    <main class="lg:flex ">
      <div class="w-full lg:w-2/3">
        <!-- post cards -->
        <section class="px-2 ">
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        <a class="block mb-10" href="#">
          <div class="flex">
            <div>
              <h3 class="dark:text-white mt-3 mb-2 text-gray-700 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.</h3>
              <p class="dark:text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis qui repudiandae repellendus,
                dolore et in numquam similique, eaque minima totam earum ad minus dignissimos hic voluptates? Deleniti,
                soluta dolorum.</p>
            </div>
          </div>
        </a>
        </section>
  
        <!-- Pagination -->
        <div class="mt-20 mb-10">
        <ul class="flex justify-center">
          <li><a class="pagination-item rounded-l-lg" href="#">Previouse</a></li>
          <li><a class="pagination-item" href="#">1</a></li>
          <li><a class="pagination-item" href="#">2</a></li>
          <li><a class="pagination-item dark:text-black border-blue-300 text-blue-600 bg-blue-100 hover:text-blue-600" href="#">3</a></li>
          <li><a class="pagination-item" href="#">4</a></li>
          <li><a class="pagination-item" href="#">5</a></li>
          <li><a class="pagination-item rounded-r-lg" href="#">Next</a></li>
        </ul>
        </div>
      </div>
  
      <div class="w-full lg:w-1/3">
        <!-- Topics -->
        <div class="mb-5">
          <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">Popular News</h5>
          <ul>
            <li class="px-1 py-4 dark:border-transparent dark:hover:border-gray-200 border-y border-white hover:border-gray-200">
              <a class="dark:text-slate-200 flex items-center text-gray-600" href="">
                <span class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to to-green-700"></span>
                Vue
                <span class="ml-auto text-gray-500">23 Articles</span>
              </a>
            </li>
            
            <li class="px-1 py-4 dark:border-transparent dark:hover:border-gray-200 border-y border-white hover:border-gray-200">
              <a class="dark:text-slate-200 flex items-center text-gray-600" href="">
                <span class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to to-orange-700"></span>
                Svelte
                <span class="ml-auto text-gray-500">20 Articles</span>
              </a>
            </li>
            
            <li class="px-1 py-4 dark:border-transparent dark:hover:border-gray-200 border-y border-white hover:border-gray-200">
              <a class="dark:text-slate-200 flex items-center text-gray-600" href="">
                <span class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to to-red-700"></span>
                Angular
                <span class="ml-auto text-gray-500">15 Articles</span>
              </a>
            </li>
            
            <li class="px-1 py-4 dark:border-transparent dark:hover:border-gray-200 border-y border-white hover:border-gray-200">
              <a class="dark:text-slate-200 flex items-center text-gray-600" href="">
                <span class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to to-blue-700"></span>
                React
                <span class="ml-auto text-gray-500">7 Articles</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- Divider -->
        <div class="border border-dotted"></div>
        <!-- subscribe -->
        <div class="my-5">
        <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
        <p class="text-gray-600 mb-4">Subscribe to our newsletter</p>
        <input placeholder="your email address"
          class="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600" type="email">
        <button class="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800">Subscribe</button>
        </div>
  
        <!-- Divider -->
        <div class="border border-dotted"></div>
        </div>
      
    </main>
  
  
  
    <footer class="border-t mt-10 py-10 px-2">
      <div class="md:flex">
        <div class="mb-5 w-full md:w-2/5">
          <h6 class="dark:text-slate-200 font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a class="footer-link"
                href="#">Team</a></li>
            <li><a class="footer-link"
                href="#">About us</a></li>
          </ul>
        </div>
  
        <div class="w-full md:w-2/5">
          <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li><a class="footer-link" href="#">Block</a></li>
            <li><a class="footer-link"
                href="#">Policy</a></li>
            <li><a class="footer-link"
                href="#">Documentation</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/5">
          <h6 class="dark:text-slate-200 font-semibold text-gray-700 mb-4">Contact US</h6>
          <ul>
            <li><a class="footer-link" href="#">icon</a></li>
            <li><a class="footer-link" href="#">icon</a></li>
            <li><a class="footer-link" href="#">icon</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
    data() {},
    name: 'tailwind-example'
}
</script>
<style></style>