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
            <img src="https://github.com/mahmudul-11/fundamental-project/blob/main/src/assets/images/Image_1.JPG" alt="image" />
        </div>
    );
};

export default Header;