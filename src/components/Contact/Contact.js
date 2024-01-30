
function Contact() {
    return (
        <div className="padding-64-16">
            <h1 className="letter-spacing-5">Contact</h1>
            <br/>
            <p className="margin-15-0">We offer full-service catering for any event, large or small. We understand your
                needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do
                not hesitate to contact us.</p>
            <p className="margin-18-0"><b className="color-light-blue font-18">Catering Service, 42nd Living St, 43043
                New York, NY</b></p>
            <p className="margin-15-0">You can also contact us by phone 00553123-2323 or email catering@catering.com, or
                you can send us a message here:</p>
            <p className="margin-15-0">
                <input type="text" placeholder="Name" className="h-input padding-16-8"/>
            </p>
            <p className="margin-15-0">
                <input type="text" placeholder="How many people" className="h-input padding-16-8"/>
            </p>
            <p className="margin-15-0">
                <input type="text" placeholder="Date" className="h-input padding-16-8"/>
            </p>
            <p className="margin-15-0">
                <input type="text" placeholder="Messages \ Special requirements" className="h-input padding-16-8"/>
            </p>
            <p className="margin-15-0">
                <button className="h-button margin-16-0">SEND MESSAGE</button>
            </p>
        </div>
    );
}

export default Contact;