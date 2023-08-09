const ContactDetails = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 md:py-10 px-2 md:px-5">
            <div className="flex flex-col items-center py-5 sm:py-10">
                <h1 className="text-xl sm:text-4xl font-bold">We would love to</h1>
                <h1 className="text-xl sm:text-4xl font-bold">hear from you</h1>
            </div>
            <div className="flex flex-col items-center justify-center m-auto">
                <p>We would like to help and answer any questions or concerns you might have. Any</p>
                <p> problem regarding your product, service or instruction contact us, you are only a</p>
                <p> second away.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20">
                <div className="p-3">
                    <div className="pt-5 text-xl"><p>TELEPHONE</p></div>
                    <div className="pb-5"><hr className="bg-black-opacity-50"></hr></div>
                    <div className="flex-flex-col">
                        <p>(+ 94) 112 522 5221</p>
                        <p>(+ 94) 112 522 5222</p>
                        <p>(+ 94) 112 522 5223</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className="pt-5 text-xl"><p>EMAIL</p></div>
                    <div className="pb-5"><hr /></div>
                    <div className="flex-flex-col">
                        <p>info@thesuitlabs.com</p>
                    </div>
                </div>
                <div className="p-3">
                    <div className="pt-5 text-xl"><p>ADDRESS</p></div>
                    <div className="pb-5"><hr /></div>
                    <div className="flex-flex-col">
                        <p>The Suit Lab</p>
                        <p>No 296,</p>
                        <p>W. A. Weerasinghe Mw,</p>
                        <p>Colombo 10,</p>
                        <p>Sri Lanka.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails