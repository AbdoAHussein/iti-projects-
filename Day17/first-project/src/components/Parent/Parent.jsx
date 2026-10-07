import { useState } from "react";
import Child from "../Child/Child"

export default function parent() {
    let [cars,setCars]=useState({
        brand: "Mercedes",
        model: "C-Class",
        year: 2023
    })
    return (
        <>
        <div className="container-fluid mt-5">
            <Child cars={cars} />
        </div>
        
        </>
        
    );
}
