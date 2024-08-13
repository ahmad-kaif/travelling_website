import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         What do we stand for and how did we reach to it?

                      </h2>
                      <p className="mt-6 text-gray-600">
                      Remember the days when we used to fill our slam-books with career aspirations like scientist, teacher and doctor? Nobody at that time thought there could’ve been a career in Travelling, let alone being a travelpreneur! But as life happens, you understand that a career could be anything where you can be a problem-solver for the society.
                      And that’s how a few engineers from NIT Kurukshetra found that the travel industry in India needed a fresh burst of young energy! The need of the hour was to convert a dispersed agent based model to a more friendly ,transparent and an accessible community for Indian travellers, and hence WanderOn. Let’s have a closer look at the hustlers who’re on a mission to stir up people’s life with memorable experiences.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
