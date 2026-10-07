import About from '../About/About'
import Parent from '../Parent/Parent'
export default function Home() {
    return (
        <>
        <div className="container-fluid">
            <h1>Home Page</h1>
            <div className="container my-5">
                <About />
                <Parent />
            </div>
        </div>
        
        </>
        
    );
}
