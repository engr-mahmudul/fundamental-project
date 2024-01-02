const Header = () => {
    let marks = 5;
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            {(
                ()=>{
                    if (marks>80){
                        return <h1>A+</h1>
                    }
                    else return <h1>Pass</h1>
                }
            )()}
        </div>
    );
};

export default Header;