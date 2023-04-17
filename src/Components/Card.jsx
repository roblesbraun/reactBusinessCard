import Header from './Header'
import About from './About'
import Interests from './Interests'
import Socials from './Socials'

function Card() {
    return (
        <div className='w-80 bg-slate-800 rounded-xl shadow-2xl'>
            <Header />
            <About />
            <Interests />
            <Socials />
        </div>
    )
}

export default Card