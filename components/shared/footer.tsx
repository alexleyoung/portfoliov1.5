import React from "react";

export default function Footer() {
  return (
    <footer className='pb-10 px-4 text-center text-gray-500 dark:bg-darkBg flex flex-col items-center justify-center w-full'>
      <section className='max-w-[28rem]'>
        <small className='mb-2 block text-xs'>
          &copy; 2024 Alex Young. All rights reserved.
        </small>
        <p className='text-xs'>
          <span className='font-semibold'>
            How about we break the ice and start a conversation?
          </span>
        </p>
      </section>
    </footer>
  );
}
