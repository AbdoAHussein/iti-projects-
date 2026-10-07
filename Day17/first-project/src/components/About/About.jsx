import Contact from '../Contact/Contact'
export default function Home() {
    return (
        <>
            <div className="container text-center bg-light ">
                <div className="row">
                    <div className="col">
                        <h1>About</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos distinctio facere corporis autem? Qui soluta tempore blanditiis cumque officiis illo quaerat harum mollitia maxime at sunt accusantium rerum aspernatur ad alias, veniam perferendis! Repellat repellendus provident sequi nulla ducimus. Doloribus obcaecati, inventore fugit minima neque voluptatem ex consequuntur cupiditate?</p>
                    </div>
                    <div className="col">
                        <Contact />
                    </div>
                </div>
            </div>
        
        
        </>
        
    );
}
