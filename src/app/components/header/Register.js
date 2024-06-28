export function Register() {
  return (
    <div>
      <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.47 2 2 6.47 2 12c0 1.97.56 3.8 1.53 5.36l-1.42 1.42c-.41-.91-.64-1.91-.64-2.95 0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10c-4.45 0-8.17-2.93-9.46-7H6.66v-1.96h3.5c.06-.31.1-.62.1-.94 0-.31-.04-.62-.1-.94H6.66v-1.96h4.88c1.16-1.35 2.83-2.34 4.76-2.66L11.3 9.1c-.59-.19-1.21-.3-1.86-.3-2.21 0-4 1.79-4 4s1.79 4 4 4c1.77 0 3.24-1.15 3.77-2.75h2.37v-1.96h-3.61c-.22-.66-.56-1.27-1.02-1.79l2.05-2.05C17.24 6.16 14.8 5 12 5z"></path>
          </svg>
        </div>
        <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Register
        </div>
      </button>
    </div>
  );
}
