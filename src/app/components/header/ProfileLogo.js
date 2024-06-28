export default function ProfileLogo() {
  return (
    <div>
      <div className="flex items-center bg-white rounded-full shadow-box-up p-1 dark:bg-box-dark dark:shadow-box-dark-out">
        <div className="dark:bg-buttons-box-dark rounded-full p-1.5 md:p-2">
          <a
            href="#"
            title="Go to about me page"
            className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 border-transparent bg-light-secondary dark:bg-light-secondary-dark hover:border-2 hover:border-black hover:bg-white dark:hover:bg-black focus:opacity-100 focus:outline-none active:border-2 active:border-black active:bg-white dark:active:bg-black font-medium rounded-full text-xs text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
