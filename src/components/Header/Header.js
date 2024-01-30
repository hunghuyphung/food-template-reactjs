
function Header() {
    return (
        <div
            className="display-top padding-8-16 flex-container flex-space-between bc-white h-card"
            style={{height: '54.5px'}}
        >
            <a href="#" className="h-button letter-spacing-4 color-black hover-grey">Gourmet au Catering</a>
            <div className="hide-small">
                <a href="#" className="h-button letter-spacing-4 color-black hover-grey">About</a>
                <a href="#" className="h-button letter-spacing-4 color-black hover-grey">Menu</a>
                <a href="#" className="h-button letter-spacing-4 color-black hover-grey">Contact</a>
            </div>
        </div>
    );
}

export default Header;