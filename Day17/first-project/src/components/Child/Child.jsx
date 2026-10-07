
export default function Child({cars}) {
    let {brand,model,year}=cars
    
    return (
        <>
        <div className="container bg-warning">
            <h2>Car Details</h2>
            <h3>Car Brand:{brand}</h3>
            <h3>Car Model:{model}</h3>
            <h3>Car Year:{year}</h3>
        </div>
        </>
        
    );
}
