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
            <img src="https://drive.google.com/file/d/1hZKKDmRk_L0bhSqbDsNptcHcJK8Mmj3u/view" alt="image" />
        </div>
    );
};

export default Header;