'use client';

import { useState } from 'react';

import Dialog from './dialog';
import Button from './button';
import SendMessageForm from './forms/send-message';

export default function CallToAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative bg-white">
      <svg
        className="absolute inset-x-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 30"
      >
        <path
          className="fill-keystatic-gray-light"
          fill="inherit"
          d="M410.477.637c-12.622.533-27.091 1.599-32.325 2.398-4.926.8-15.085 1.732-22.166 1.999-7.08.266-15.084 1.198-17.547 2.131-5.85 2.131-41.253 5.595-43.408 4.13-.616-.533-9.236-.4-19.087.133-25.244 1.465-128.684 1.998-147.155.8-8.312-.667-32.017-1.067-52.335-1.067-20.319 0-41.869-.532-48.334-1.199-38.174-4.529-88.046-5.195-105.286-1.465-7.081 1.465-17.548 2.93-23.705 3.464-9.236.532-11.699 1.465-12.93 4.396-.924 2.264.615 4.795 4.31 7.06 3.386 2.131 6.773 7.06 7.696 11.723 1.232 4.662 3.694 8.26 6.157 8.659 2.463.4 4.002 3.73 4.31 9.724 1.232 25.178 2.463 31.972 5.85 34.903 2.462 1.998 3.386 5.195 1.847 9.058-1.232 3.997-.616 6.528 1.847 7.993 4.618 2.265 4.31 9.325-.308 11.723-1.54.932-2.155 1.998-1.232 2.398 4.003 1.731-1.847 7.193-9.85 8.925-11.392 2.798-20.319 11.456-17.857 17.718 1.232 3.863.616 5.728-3.694 7.726-3.078 1.465-3.694 2.531-1.847 2.531 5.541 0 4.31 8.659-.924 10.657-2.77.933-3.694 2.265-2.462 2.798 1.231.532 1.539 5.728.307 11.456-1.231 5.728-2.462 13.055-3.078 16.385-.924 3.331.616 7.993 3.078 10.658 2.771 2.531 4.31 5.195 4.003 5.861-.308.666.307 2.131 1.539 3.33 3.386 3.464 4.618 5.729 6.157 11.99.924 3.33 2.771 6.66 4.618 7.593 2.155 1.065 1.539 3.064-1.539 6.261-5.234 5.462-2.155 7.593 10.775 7.593 4.617 0 8.927.666 9.543 1.332.616.933 11.39 1.066 33.248.267 31.71-1.066 62.495-.267 83.121 2.264 5.85.666 20.627 2.531 32.325 4.13 12.007 1.465 27.092 3.064 33.864 3.33 6.465.4 14.778 1.466 18.472 2.531 9.851 2.665 19.703 3.73 46.178 4.796 53.259 2.131 86.815 4.13 100.053 5.995 7.697 1.065 23.705 2.131 35.404 2.264 18.163.134 23.705-.399 35.403-3.33 7.696-1.865 21.55-3.996 30.786-4.663 25.552-1.998 162.855-.266 189.331 2.398 8.62.8 34.48 1.466 58.492 1.199 23.705-.133 79.427-.133 123.451-.133 74.808.266 81.581.4 95.435 3.064 13.545 2.531 21.858 2.931 84.352 3.33 52.644.4 74.809 0 92.36-1.465 20.32-1.732 55.72-2.398 123.14-2.131 11.08.133 33.56-1.066 49.87-2.532 16.32-1.465 40.02-2.664 52.65-2.664 28.93 0 70.19-3.33 86.5-6.927 12.32-2.797 14.16-2.797 61.88-1.332 64.96 2.131 109.6 0 146.85-7.06 32.63-6.128 43.41-9.858 48.02-16.519 5.24-7.46 4.93-24.778-.61-32.637-3.7-5.063-4-8.793-1.85-15.986 2.46-8.792 1.85-17.185-1.85-24.378-.61-1.599-4.61-4.396-8.62-5.995-4-1.732-8-4.529-8.92-6.394-2.16-3.863 7.38-15.72 24.32-30.24 9.54-7.993 11.08-10.391 9.85-15.586-1.23-3.863-.31-6.927 2.46-8.526 3.7-2.397 7.7-28.241 4.31-28.241-.92 0-1.85-1.066-2.15-2.398-.62-2.664-3.7-10.124-5.85-14.654-.93-2.13-3.39-2.93-9.85-2.93-14.47 0-22.17-1.465-22.17-4.263 0-1.332-3.39-4.663-7.7-7.327-5.54-3.73-6.77-5.462-4.31-7.327 1.54-1.332 4.62-2.397 6.78-2.397 6.77 0-4.93-2.532-22.48-4.796-21.24-2.798-58.49-3.33-58.49-.8 0 1.066-1.54 1.333-3.69.667-4.01-1.066-42.49-1.732-124.07-2.265-43.1-.266-68.65-1.865-81.58-4.796-3.08-.666-11.39-1.465-18.78-1.865-7.39-.266-21.86-1.865-31.71-3.33-10.16-1.599-20.93-2.531-24.01-1.998-3.08.4-5.54.133-5.54-.533 0-1.732-21.86-1.732-26.79-.133-2.15.932-4.31.799-5.54 0-1.23-.933-4.62-.666-10.16.932-12.62 3.597-68.96 5.595-86.81 3.197-7.7-1.065-15.09-2.397-16.94-2.93-1.53-.533-13.85-1.333-26.78-1.865-13.237-.533-29.245-1.732-35.402-2.665-6.465-.932-17.24-1.465-24.321-1.065-8.62.266-14.161-.134-17.24-1.599-4.002-1.599-8.312-1.732-24.32-.8-10.775.667-46.794 1.6-79.735 1.999-32.94.533-67.42 1.066-76.656 1.332-8.928.267-20.011-.133-24.628-.666-14.778-2.131-41.253-2.797-132.686-3.33-80.658-.4-108.673-.933-147.771-2.531-5.849-.267-21.242 0-33.864.532Z"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl">
        <svg
          className="absolute right-8 top-0 w-10 -translate-y-1/2 md:w-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 124"
        >
          <path
            fill="#000"
            d="M13.169 122.883c9.665-2.25 26.865-6.787 27.626-7.274.457-.3 1.218-1.313 1.674-2.25.837-1.687.837-1.837.267-3.037-1.37-2.812-4.68-3.15-12.748-1.275-2.968.675-5.518 1.125-5.67.975-.342-.3.19-1.237 4.87-8.324 12.33-18.823 19.674-35.359 22.947-51.82 1.484-7.311 1.826-10.648 1.864-16.948.038-9.599-1.598-17.323-5.06-23.96-3.35-6.411-3.768-6.899-6.66-8.061-1.408-.563-2.626-.975-2.664-.9-.038.075.495 2.062 1.18 4.424 5.67 19.16 5.708 32.434.114 51.482C38.131 65.44 32.538 78 26.221 88.95c-4.072 7.012-13.585 20.323-15.26 21.373-.19.112-.456-1.05-.608-2.7-.457-5.137-1.37-12.936-1.789-15.073-.951-5.025-1.94-6.6-5.137-8.212l-1.598-.75-.19 1.013c-.38 1.612-.99 12.148-1.408 23.397-.343 9.524-.343 10.574.266 12.374 1.37 3.937 4.11 4.499 12.672 2.512Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl pt-12 pb-16 px-6 text-center md:pt-16 md:pb-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 33 36"
          className="mx-auto w-8"
        >
          <path
            fill="#000"
            fillRule="evenodd"
            d="M25.475.757a6.285 6.285 0 0 1 2.467.541c.075.445.321.774.737.985a1.28 1.28 0 0 1-.063.853 14.575 14.575 0 0 1-1.574 3.315 71.235 71.235 0 0 0-6.378 10.395 187.49 187.49 0 0 0 9.084-1.183c1.38.191 2.133.962 2.26 2.313-.114.754-.542 1.222-1.284 1.406-3.459.5-6.93.91-10.414 1.227a.653.653 0 0 0-.309.192 96.066 96.066 0 0 0 9.804 8.953c.596.672 1.96.969 1.768 1.99-.102.545-.602.733-.823 1.155-1.339.398-2.601.185-3.786-.64a176.583 176.583 0 0 1-10.065-9.401 76.27 76.27 0 0 0-2.277 3.835 60.483 60.483 0 0 1-4.93 8.786c-.472.306-.996.41-1.572.312-.678-.163-1.35-.38-2.016-.65-.5-.474-.63-1.032-.392-1.675a37.317 37.317 0 0 0 5.235-8.906 35.987 35.987 0 0 1 1.935-3.217c-3.189.415-6.39.82-9.602 1.216a5.314 5.314 0 0 1-2.69-1.488c-.314-.759-.144-1.39.509-1.892 2.927-.417 5.857-.819 8.79-1.205a46.712 46.712 0 0 0 2.551-.597c-2.41-3.5-4.933-6.93-7.566-10.288-1.018-1.498-.631-2.398 1.16-2.702.746-.063 1.42.13 2.022.58 2.631 3.718 5.28 7.419 7.947 11.103a426.154 426.154 0 0 1 6.713-10.942 18.337 18.337 0 0 0 1.753-3.73c.324-.254.66-.467 1.006-.641Z"
            clipRule="evenodd"
            opacity=".953"
          />
        </svg>

        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
          Tell us what{' '}
          <span className="relative">
            <svg
              className="absolute -right-1 bottom-0 w-[115%]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 109 62"
            >
              <path
                fill="#F7DE5B"
                d="M9.604.574 58.04 9.223l50.175 10.032-6.471 5.015.588 5.884.686 5.467-8.348 2.547 3.604 3.891 3.603 3.892-5.51 3.993 2.15 5.143 1.045 6.796-58.921-8.911L.95 43.202l5.24-4.823-3.076-5.834 3.88-5.782-1.717-4.875 8.936.616-4.968-9.464 3.91-6.67L9.604.574Z"
              />
            </svg>
            <span className="relative">you</span>
          </span>{' '}
          think
        </h2>
        <p className="mt-6">
          We're building Keystatic in the open as part of{' '}
          <a
            href="https://www.thinkmill.com.au/"
            target="_blank"
            className="cursor-pointer underline hover:text-thinkmill-red"
          >
            Thinkmill Labs
          </a>{' '}
          Research &amp; Development. Feedback on how we're going, what you're
          looking for, and what you'd like to see next is super helpful as we
          progress!
        </p>
        <div className="mx-auto mt-10 flex max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <Button
            href="https://github.com/Thinkmill/keystatic/discussions"
            target="_blank"
          >
            Join the discussion on GitHub
          </Button>

          <Button impact="light" onClick={() => setIsOpen(true)}>
            Send us a message
          </Button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        header={() => (
          <>
            <h2 className="pr-8 text-3xl font-bold sm:text-4xl sm:leading-tight">
              Send us a message
            </h2>
            <p className="mt-4 text-keystatic-gray-dark">
              Tell us what you think below.
            </p>
          </>
        )}
      >
        <div className="mt-6">
          <h3 className="text-2xl font-bold leading-7">
            Tell us a bit about yourself
          </h3>
          <SendMessageForm />
        </div>
      </Dialog>
    </section>
  );
}
