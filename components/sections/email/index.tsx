import React from 'react'

import { press,poppins } from '@/utils/font'

export const EmailComponent = () => {
  return (
  <section className={`${poppins.className} col-span-12 flex justify-center items-center py-24`}>
    <div className="w-full max-w-3xl flex flex-col gap-12">
      <div className={`${press.className} text-center text-5xl md:text-7xl font-extrabold leading-tight`}>
        <h1 className="text-PrimaryCol">LET'S WORK</h1>
        <h1 className="text-SecondaryCol">TOGETHER</h1>
      </div>
      <form className="flex flex-col gap-8 bg-avatarBG p-4 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm text-ThirdCol">Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span className="text-sm text-ThirdCol">Email</span>
            <input
              type="email"
              placeholder="your@email.com"
              className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-ThirdCol">Message</span>
          <textarea
            placeholder="Tell me about your project..."
            className="p-4 rounded-xl bg-stackBG text-PrimaryCol placeholder:text-ThirdCol outline-none focus:ring-2 focus:ring-SecondaryCol transition min-h-[160px] resize-none"
          />
        </div>
        <button
          type="submit"
          className="text-base text-PrimaryCol font-extrabold p-4 w-full bg-stacksBG hover:bg-stackBG shadow-2xl rounded-2xl hover:text-SecondaryCol"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}