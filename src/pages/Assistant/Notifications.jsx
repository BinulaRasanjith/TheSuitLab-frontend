import { Button } from "@chakra-ui/react"

const Notifications = () => {
    return (
        <>
            <div className=" flex justify-between mx-10 my-8 p-5 gap-5 h-[80vh] border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                <div className=" flex flex-col justify-start align-middle pb-5 gap-10">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>Notifications</div>
                        <div className=' text-sm font-regular text-gray-400'>Customer&#39;s SMS and Email Service</div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className=' flex flex-col w-80 h-44 p-4 gap-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg'>
                            <div className=' text-lg font-bold'>Notify Fit-on Date</div>
                            <div className=' text-sm font-regular'>Message informing the customer to come for the fit-on of the suit</div>
                        </div>
                        <div className=' flex flex-col w-80 h-44 p-4 gap-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg text-white bg-black'>
                            <div className=' text-lg font-bold'>Notify Collection Date</div>
                            <div className=' text-sm font-regular'>Informing the customer to come for collecting the suit</div>
                        </div>
                    </div>
                    <div className=" flex flex-col">
                    </div>
                </div>
                <div className=" flex flex-col w-full p-9 gap-6 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                    <div className='flex flex-col'>
                        <div className=' text-2xl font-semibold'>Collection</div>
                    </div>

                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <textarea
                            className=" peer block w-full h-60 p-2 resize-none text-sm border border-solid border-gray-300 rounded bg-transparent appearence-none "
                            id="exampleFormControlTextarea1"
                            placeholder="Message"
                            rows="3"
                            value={"Hi [customer name], \n\nYour suit is ready for a fitting! We've finished tailoring your suit to your measurements. Please come in to our store at your earliest convenience to try it on. We're available from 10am to 6pm, Monday through Saturday. We can't wait to see you! \n\nSincerely, The Suit Lab Group"}>
                        </textarea>
                    </div>
                    <div className=" flex flex-col">
                        <Button colorScheme='green' size='md'>Save Changes</Button>
                    </div>
                </div>

                {/* <div className=" flex justify-center w-full">
                <div className=" flex flex-col justify-center h-screen">
                    <div className=" text-4xl font-semibold text-zinc-400">This notifications page is under development :(</div>
                </div>
            </div> */}
            </div>
        </>
    );
};

export default Notifications;