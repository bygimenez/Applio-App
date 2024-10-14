import "./App.css";
import { useEffect, useState } from "react";
import { platform } from "@tauri-apps/plugin-os";
import { Effect, getCurrentWindow } from "@tauri-apps/api/window";
import { isFirstRun, setNotFirstRun } from "./scripts/isFirstTime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/layout/header";
import { TitleBar } from "./components/layout/titlebar";
import Welcome from "./components/first-time/welcome";
import PreInstall from "./components/first-time/pre-install";
import { supabase } from "./utils/database";

function App() {
  const [loading, setLoading] = useState(true);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    async function setWindowEffect() {
      const currentPlatform = await platform();
      if (currentPlatform === "windows") {
        document.documentElement.style.background = 'transparent';
        document.documentElement.style.backgroundColor = 'rgba(17, 17, 17, 0.7)';
        await getCurrentWindow().setEffects({effects: [Effect.Acrylic]});
        setLoading(false);
      } else {
        document.documentElement.style.background = '#111111';
        setLoading(false);
      }

      console.log(currentPlatform);
    }

    checkFirstRun();
    checkUpdates();
    setWindowEffect();
  }, []);

  const checkFirstRun = async () => {
    const isFirstTime = await isFirstRun(); 
    console.log(isFirstTime);
    if (isFirstTime) {
        console.log('First time run, continuing...');
        window.location.href = '/first-time';
        setNotFirstRun();
        
    } else {
        console.log('Not first time...')
    }
}

  const checkUpdates = async () => {
      const eventSource = new EventSource('http://localhost:5123/check-update');
      eventSource.onmessage = (event) => {
        console.log(event.data);
        if (event.data.includes('up to date')) {
          setUpdateAvailable(false);
          eventSource.close();
        } else {
          setUpdateAvailable(true);
          eventSource.close();
        }
      }
      return () => {
        eventSource.close(); 
    };
}

  return (
    <Router>
      {updateAvailable && window.location.pathname !== "/first-time" && (<a href="/first-time" className="hover:bg-black/20 slow absolute left-24 top-2 w-fit p-2 px-4 shadow-lg shadow-green-500/10 h-fit border border-white/20 rounded-xl" style={{zIndex: 300}}>
        <p className="text-xs">Update available!</p>
      </a>)}
      <TitleBar />
      <div className="flex w-screen h-screen gap-0">
      {window.location.pathname !== "/first-time" && <Header />}
      {loading && <div className="absolute inset-0 w-screen h-screen bg-[#111111] slow z-50">
        <span className="flex justify-center items-center m-auto h-screen">
        <svg
								aria-hidden="true"
								className="w-8 h-8 animate-spin text-neutral-800 fill-white"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
        </span>
      </div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/first-time" element={<FirstTime />} />
        <Route path="/models" element={<Models />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="grid h-screen w-screen">
      <main className="flex flex-col items-center justify-start mt-8 w-full overflow-auto">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full p-4">
          <div className="col-span-3 row-span-2 rounded-xl bg-[#111111]/50 w-full h-full border border-white/20 shadow-2xl shadow-[#00AA68]/20">
            <div className="pt-6 flex flex-col w-full h-full rounded-xl justify-center items-center noise relative" style={{ background: 'radial-gradient(150% 150% at 50% 10%, #111111A3 40%, #00AA68 100%)' }}>  
            <h1 className="text-[100px] font-bold title">Applio</h1>
            </div>
          </div>
          <div className="col-span-1 rounded-xl bg-[#111111]/50 w-full h-full border border-white/20">
            <div className="pt-6 flex flex-col w-full h-full rounded-xl justify-end items-start noise relative p-4">  
                <p className="text-xl">Now with <span className="title font-semibold text-green-400">Applio AI</span></p> 
                <p className="text-sm text-neutral-300">All models will have a description generated with artificial intelligence based on the character's name, language and profession.</p>
            </div>
          </div>
          <div className="col-span-1 rounded-xl bg-[#111111]/50 w-full h-full border border-white/20">
          <div className="pt-6 flex flex-col w-full h-full rounded-xl justify-end items-start noise relative p-4">  
                <p className="text-xl">Cloud <span className="text-blue-400">sync</span></p>
                <p className="text-sm text-neutral-300">You will be able to see the inferences you have made, the trained models or any data from this application elsewhere in our ecosystem.</p>
            </div>
          </div>
          <div className="col-span-1 rounded-xl bg-[#111111]/50 w-full h-full border border-white/20">
          <div className="pt-6 flex flex-col w-full h-full rounded-xl justify-end items-start noise relative p-4">  
                <p className="text-xl">Customize to your 
                <span className="text-red-400 ml-1">l</span>
                <span className="text-yellow-400">i</span>
                <span className="text-green-400">k</span>
                <span className="text-blue-400">i</span>
                <span className="text-purple-400">n</span>
                <span className="text-pink-400">g</span>
                </p>
                <p className="text-sm text-neutral-300">In your settings you can change the theme of the application to your liking, or import a pre-made one from the community.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )};

function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-center text-xl font-bold title">Not Found :(</h1>
    </div>
  )};


function FirstTime() {
  const [page, setPage] = useState(0)

  const handleNextPage = () => {
      setPage(page + 1);
  }


  return (
      <main className="absolute inset-0 bg-[#0a0a0a] w-full h-full p-4 flex flex-col justify-center items-center">
      {page === 0 && (<Welcome next={handleNextPage} />)}
       {page === 1 && (<PreInstall />)}
      </main>
  )
}

function Models() {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [info, setInfo] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getModels() {
      setLoading(true);
      if (!value) {
        setData([]);
        setLoading(false);
        return;
      }
      const { data, error } = await supabase.from('models').select('*').ilike('name', `%${value}%`).limit(12);
      if (error) {
        console.log(error);
        setData(null);
      } 
      if (data && data.length > 0) {
        console.log(data);
        setData(data);
        setLoading(false);
      } else {
        setData(null);
        setLoading(false);
      }
      
    }
    getModels();
  }, [value]);

  const downloadModel = async (_id: string, link: string) => {
    setDropdownOpen(true)
    setInfo('Starting...');
    setStatus('Sending request...');
    setError(false)
    try {
      const eventSource = new EventSource(`http://localhost:5123/download?link=${encodeURIComponent(link)}`)

      eventSource.onmessage = (event) => {
        console.log(event.data)
        setStatus(event.data)
        if (event.data.includes('Downloading model')) {
          setInfo('Downloading')
          setStatus('Downloading model...');
        }
        if (event.data.includes('downloaded!')) {
          setInfo('Downloaded');
          setStatus('Downloaded successfully');
          eventSource.close();
        }
        if (event.data.includes('error')) {
          setInfo('Error');
          setStatus('Error downloading model, please try again.');
          setError(true)
          eventSource.close();
        } 
      };
  
      eventSource.onerror = (err) => {
        console.log(info);
        console.error('Error with event source:', err);
        eventSource.close(); 
        setError(true)
        setStatus('We detected an error, please try again.');
      };

      return () => {
        eventSource.close(); 
      };
    } catch (error) {
      console.error('Error:', error);
      setStatus('We detected an error. Please try again later.');
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col py-12 pr-4 relative p-4">
      {dropdownOpen && ( 
        <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-2xl backdrop-filter w-full h-full">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-2xl h-fit min-h-[15svh] border border-white/20 bg-[#111111] shadow rounded-xl p-4">
            <h1 className="font-medium text-2xl">Downloading model</h1>
            <div className="w-full flex rounded-full h-2.5 dark:bg-gray-700 mt-4">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: info === 'Starting...' ? '20%' : info === 'Downloading' ? '50%' : info === 'Downloaded' || info === 'Error' ? '100%' : '0%'}} />
            </div>
            {!error && (<p className="text-xs text-neutral-400 pl-0.5 mt-1">{status}</p>)}
            {error && (<div className="px-4 py-2 my-4 text-sm rounded-xl bg-red-500/20 border border-white/10 text-neutral-300">{status}</div>)}
            {(info === 'Downloaded' || error) && (<button type="button" className="flex justify-end ml-auto px-6 py-1.5 bg-white text-black rounded-xl text-sm" onClick={() => setDropdownOpen(false)}>Close</button>)}
            </div>
          </div>
        </div> 
    )}
      <input type="text" className="w-full h-12 rounded-xl border-white/20 border focus:outline-none bg-[#111111]/50 p-4" placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="w-full  mt-6">
      {!loading && data === null && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-center text-neutral-300">No results found</h1>
        </div>
      )}
      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-center text-neutral-300">Loading...</h1>
        </div>
      )}
      {!value && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-center text-neutral-300">Start searching for your favorite model</h1>
        </div>
      )}
      {!loading && data && (
        <div className="grid grid-cols-3 gap-2 w-full">
          {data.map((item: any) => (
            <button
              onClick={() => downloadModel(item.id, item.link)}
              type="button"
              className="w-full h-full min-h-[20svh] text-left rounded-xl border-white/20 border focus:outline-none bg-[#111111]/50 p-4 hover:shadow-xl hover:shadow-white/20 slow flex flex-col items-start justify-start"
              key={item.id}
            >
              <h1 className="font-semibold title text-neutral-200 text-lg">{item.name}</h1>
              <p className="text-xs">created by {item.author_username} at 												
              <span className="pl-1">{new Date(item.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</span></p>
            <div className="justify-end flex mt-auto gap-2">
            <p className="bg-[#111111] px-2 rounded-md text-sm">{item.epochs} epochs</p>
            <p className="bg-[#111111] px-2 rounded-md text-sm">{item.algorithm}</p>
            <p className="bg-[#111111] px-2 rounded-md text-sm">{item.likes} likes</p>
            </div>
            </button>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

function Settings() {
  return (
    <div className="grid h-screen w-screen">
      <main className="flex flex-col items-end justify-end mt-8 w-full overflow-auto">
        <div className="flex gap-4 w-full h-full p-4 pb-0">
          <div className="col-span-3 row-span-2 rounded-t-xl bg-[#111111]/20 w-full h-full border border-white/20 ">
            <div className="flex flex-col w-full h-full rounded-xl justify-start items-start p-4">  
              <h1 className="text-xl font-bold title">Settings</h1>
              <a href="/first-time" type="button" className="px-2 rounded-xl border border-white/10 my-4">re-install</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
