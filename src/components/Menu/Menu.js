import tableImg from "../../assets/tablesetting.jpg";

const dishes = [
    {
        name: 'Bread Basket',
        desc: 'Assortment of fresh baked fruit breads and muffins 5.50'
    },
    {
        name: 'Honey Almond Granola with Fruits',
        desc: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'
    },
    {
        name: 'Belgian Waffle',
        desc: 'Vanilla flavored batter with malted flour 7.50'
    },
    {
        name: 'Scrambled eggs',
        desc: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50'
    },
    {
        name: 'Blueberry Pancakes',
        desc: 'With syrup, butter and lots of berries 8.50'
    }
];

function Menu() {
    return (
        <div className="padding-64-0 flex-container flex-column-tablet flex-column-mobile">
            <div className="width-50 padding-12-24 width-100-tablet mobile-width-100">
                <h1 className="letter-spacing-5">Our Menu</h1>
                {dishes.map(dish => (<>
                    <br/>
                    <h4 className="letter-spacing-5">{dish.name}</h4>
                    <p className="margin-15-0 color-light-gray">{dish.desc}</p>
                </>))}
            </div>
            <div className="padding-12-24 width-50 width-100-tablet mobile-width-100">
                <img src={tableImg} alt="" className="h-image width-100 opac-75 border-radius-4"/>
            </div>
        </div>
    );
}

export default Menu;