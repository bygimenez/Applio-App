export default function Header() {
    return (
      <header className="max-w-[25svh] w-fit h-full bg-[#111111]/50 border-r border-white/10 z-[200]">
          <div className="flex flex-col gap-4 justify-start items-end ml-auto p-4 h-full">
            <a className="text-xl flex gap-4 w-full ml-auto items-center justify-end" href="/">
              <span className="flex items-center justify-center m-auto h-12 w-12 rounded-xl border-white/20 border hover:bg-white/10 slow hover:shadow-xl hover:shadow-[#00AA68]/20">
              <img src="/favicon.png" className="w-7 h-7" alt="Applio APP Logo" />
              </span>
            </a>
            <a className="text-xl flex gap-4 w-full ml-auto items-center justify-end" href="/models">
              <span className="w-12 h-12 flex items-center justify-center m-auto rounded-xl border-white/20 border hover:bg-white/10 slow">            
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-6 text-white"
              >
                <path d="M16 6l4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              </span>
            </a>
            <a className="text-xl flex gap-4 w-full ml-auto items-center justify-end" href="/convert">
              <span className="h-12 w-12 flex items-center justify-center m-auto rounded-xl border-white/20 border hover:bg-white/10 slow">            
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7z" />
              </svg>
              </span>
            </a>
            <a className="text-xl flex gap-4 w-full ml-auto mt-auto " href="/settings">
              <span className="h-12 w-12 flex items-center justify-center m-auto rounded-xl border-white/20 border hover:bg-white/10 slow">            
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                />
              </svg>
              </span>
            </a>
            <a className="text-xl flex gap-4 w-full ml-auto" href="/account">
              <span className="h-12 w-12 flex items-center justify-center m-auto rounded-xl border-white/20 border hover:bg-white/10 slow">            
              <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                </svg>
              </span>
            </a>
          </div>
      </header>
    )
  }