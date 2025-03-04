import profilePic from './assets/Ash_Tree_-_geograph.org.uk_-_590710.jpg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Alexander</h2>
            <p className="card-text">I am studying at SSES</p>
        </div>
    );
}

export default Card;