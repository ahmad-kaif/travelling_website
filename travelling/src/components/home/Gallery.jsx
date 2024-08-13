import React from 'react'

const Gallery = () => {
  return (
    <>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-6xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Happy Customers</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Creating Memories, Fullfilling Dreams and Enjoying every moment</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="../../../public/indianPackagePics/chakrata.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="../../../public/indianPackagePics/narkama.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="../../../public/indianPackagePics/kargil.jpeg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="../../../public/indianPackagePics/kullu.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="../../../public/indianPackagePics/solangValley.jpeg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-fill h-full  object-center block" src="../../../public/indianPackagePics/nainital.jpeg"/>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </>
  )
}

export default Gallery
