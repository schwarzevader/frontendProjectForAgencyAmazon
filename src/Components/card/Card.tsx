import "./Card.css"

export function Card(){
    return(
        <div className="card-container" >
            <h1>data.id</h1>
            <p>data.name</p>
            <p>data.mail</p>
            <p>data.phoneNumber</p>
        </div>
    );
}