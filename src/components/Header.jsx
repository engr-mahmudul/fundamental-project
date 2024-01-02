const Header = () => {
    let marks = 85;
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            {
                marks>80?
                <h1>A++</h1>
                :
                <h1>Pass</h1>
            }
        </div>
    );
};

export default Header;