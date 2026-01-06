export default function Footer() {
  return (
    <footer className=" pb-12">
      <div className="flex flex-col gap-4">
        {/* Heart Icon */}
        <svg
          height="24px"
          width="24px"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-light"
        >
          <g fill="currentColor">
            <path
              d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
              fill="currentColor"
              fillOpacity="0.3"
              stroke="none"
            />
            <path
              d="M8.529 15.222C8.826 15.377 9.173 15.377 9.47 15.222C11.04 14.403 15.999 11.435 15.999 6.609C16.007 4.489 14.295 2.763 12.173 2.75C10.896 2.766 9.709 3.41 9 4.47C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.529 15.222Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        {/* Text Content */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-muted-light">
            Designed & Made with{' '}
            <span className="bg-muted-foreground bg-clip-text text-transparent">
              ❤️
            </span>
          </span>
          <span className="text-muted-foreground text-sm">
            © 2025 Darshit Shukla. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
