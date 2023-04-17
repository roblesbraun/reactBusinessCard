import mePhoto from '../assets/me.jpeg'

function Header() {
    return (
        <div>
            <img className='rounded-t-lg' src={mePhoto} alt="My Photo" />
            <div className='flex flex-col items-center mt-5'>
                <h1 className='font-bold text-2xl text-slate-100'>Oscar Robles</h1>
                <h3 className='text-sm text-orange-200'>Frontend Developer</h3>
                <h4 className='text-xs mt-2 text-slate-300'>Systems & Technology Information Engineer</h4>
            </div>
            <div className='flex justify-evenly mt-5'>
                <button className='px-3 py-2 bg-slate-100 rounded-md w-28 flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4">
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    Email
                </button>
                <button className='px-3 py-2 bg-sky-500 rounded-md w-28 text-slate-100 flex items-center justify-center gap-2'>
                    <a href="https://www.linkedin.com/in/oscar-alexander-robles-braun-3b0200225/" className='flex items-center justify-center gap-2'>
                        <svg className="w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Header