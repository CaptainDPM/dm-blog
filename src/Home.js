const Home = () => {

    const handleClick = () => {
        alert("Welcome to the page.")
    }

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Test button</button>
        </div>
     );
}
 
export default Home;