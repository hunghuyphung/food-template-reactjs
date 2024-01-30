import tableImg from '../../assets/tablesetting2.jpg';

function Catering() {
    return (
        <div className="padding-64-0 flex-container">
            <div className="width-50 padding-12-24 hide-small">
                <img src={tableImg} alt="" className="h-image opac-75 border-radius-4"/>
            </div>
            <div className="width-50 padding-12-24 text-center mobile-width-100">
                <h1 className="letter-spacing-5">About Catering</h1>
                <br/>
                <h5 className="letter-spacing-5">Tradition since 1889</h5>
                <p className="margin-18-0 text-justify font-18">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    We only use <span className="h-tag bc-light-gray">seasonal</span> ingredients.</p>
                <p className="margin-18-0 text-justify font-18 color-light-gray hide-tablet">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
}

export default Catering;