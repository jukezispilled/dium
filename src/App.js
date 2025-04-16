import React, { useState } from 'react';

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-cover text-white" style={{ backgroundImage: 'url("/gay.jpg")' }}>
      {showBanner && (
        <div className="bg-[#1E243C] text-sky-200 p-2 flex justify-center items-center text-xs font-light">
          <span>Welcome to Gay! Let's send this shit fam. CA: updating...</span>
          <button onClick={() => setShowBanner(false)} className="text-sky-100 font-light absolute right-5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/">
            <img src="ray.png" alt="Raydium" className="size-14 rounded-full" />
          </a>
          <nav className="md:flex items-center gap-6 text-md hidden md:visible text-slate-200 pl-5">
            <a href="/" className="text-sky-100">
              Swap
            </a>
            <a href="https://x.com/gaydiumpump" className="">
              Twitter
            </a>
            <a href="/" className="flex justify-center gap-1 items-center">
              More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sky-200 hidden md:block">
            Priority: <span className="text-[#69CDDB]">Turbo</span>
          </div>
          <div className="relative text-sky-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <button className="bg-[#69CDDB] px-4 py-2 rounded-md text-md text-[#191F34] font-medium">
            Connect Wallet
          </button>
        </div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="max-w-[480px] mx-auto">
          <div className="relative bg-[#1E243C] rounded-xl p-6 space-y-4">
            <div className='absolute -top-8 right-0 flex items-center text-xs gap-1 text-[#69CDDB]'>
              <div className='flex justify-center items-center gap-1'>
                <div className='bg-[#1E243C] text-sky-200 rounded-full p-1.5 flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                  </svg>
                  0.5%
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <div className='relative w-full bg-[#151A2E] rounded-lg'>
              <div className='w-full flex justify-between p-3'>
                <div className='text-sm'>
                  From
                </div>
                <div className='flex justify-center items-center gap-1 text-slate-500 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>
                  <div className='underline'>0</div>
                  <div className='rounded-lg bg-[#1E243C] p-1'>
                    Max
                  </div>
                  <div className='rounded-lg bg-[#1E243C] p-1'>
                    50%
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-between p-2 bg-[#070B15] rounded-lg'>
                <div className='text-2xl md:text-3xl'>
                  <div className='p-2 bg-[#1E243C] rounded-lg flex justify-center items-center gap-2'>
                    <img src="sol.png" alt="Raydium" className="size-8 rounded-full border-2 border-[#2d334e]" />
                      SOL
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div className='text-2xl md:text-3xl flex justify-end'>
                    13
                  </div>
                  <div className='flex justify-end text-sm text-slate-500'>
                    ~$1,791.27
                  </div>
                </div>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 bg-[#91A7E3] size-10 md:size-12 -bottom-7 md:-bottom-8 flex justify-center items-center rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#070B15" className="size-4 md:size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            </div>
            <div className='w-full bg-[#151A2E] rounded-lg'>
              <div className='w-full flex justify-between p-3'>
                <div className='text-sm'>
                  To
                </div>
                <div className='flex justify-center items-center gap-1 text-slate-500 text-xs'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg>
                  <div className='underline'>0</div>
                  <div className='rounded-lg bg-[#1E243C] p-1'>
                    Max
                  </div>
                  <div className='rounded-lg bg-[#1E243C] p-1'>
                    50%
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-between p-2 bg-[#070B15] rounded-lg'>
                <div className='text-2xl md:text-3xl'>
                  <div className='p-2 bg-[#1E243C] rounded-lg flex justify-center items-center gap-2'>
                    <img src="ray.png" alt="Raydium" className="size-8 rounded-full border-2 border-[#2d334e]" />
                      GAY
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
                <div className='flex flex-col justify-between'>
                  <div className='text-2xl md:text-3xl flex justify-end'>
                    56,000,000
                  </div>
                  <div className='flex justify-end text-sm text-slate-500'>
                    ~$1,721.35
                  </div>
                </div>
              </div>
            </div>
            <div className=''>

            </div>
            <a href="https://pump.fun/">
              <button className="bg-[#69CDDB] w-full rounded-md py-2 text-md font-medium text-[#191F34]">Swap</button>
            </a>
          </div>
        </div>
        <div className="max-w-[800px] mx-auto mt-8 hidden md:block">
          <h2 className="text-xl font-bold mb-4 text-white">Recent Swaps</h2>
          <div className="bg-[#1E243C] rounded-lg overflow-hidden">
            <table className="min-w-full bg-[#1E243C]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Pair</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className='text-sky-200'>
                <tr className=''>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="ray.png" alt="Raydium" className="size-8 rounded-full" />
                      <span className="text-sm font-medium">GAY/SOL</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium flex items-center gap-1">1.5 SOL 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                       7,302,849 GAY</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">2 min ago</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="ray.png" alt="Raydium" className="size-8 rounded-full" />
                      <span className="text-sm font-medium">GAY/SOL</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium flex items-center gap-1">2 SOL 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                       11,634,906 GAY</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">5 min ago</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="ray.png" alt="Raydium" className="size-8 rounded-full" />
                      <span className="text-sm font-medium">GAY/SOL</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium flex items-center gap-1">0.5 SOL 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                       2,985,032 GAY</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">8 min ago</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="ray.png" alt="Raydium" className="size-8 rounded-full" />
                      <span className="text-sm font-medium">GAY/SOL</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium flex items-center gap-1">3 SOL 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                       18,040,027 GAY</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">10 min ago</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <div className='w-screen flex justify-between py-4 px-8 bg-[#1E243C] text-sm md:hidden text-slate-500'>
        <div className='text-sky-200'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
          </div>
          Swap
        </div>
        <a href="https://x.com/GaydiumWTF" className='md:hover:text-sky-200 transition ease-in-out duration-150'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-6' fill="currentColor" viewBox="0 0 50 50">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
          Twit
        </a>
        <a href="https://t.me/GayPortalSolana" className='md:hover:text-sky-200 transition ease-in-out duration-150'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-6' fill="currentColor" viewBox="0 0 50 50">
              <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"></path>
            </svg>
          </div>
          Tele
        </a>
        <div className='md:hover:text-sky-200 transition ease-in-out duration-150'>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
          </div>
          More
        </div>
      </div>
    </div>
  );
}