import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function PaymentModal(props) {

    const {setIsOpen, isOpen, price} = props;

    function closeModal() {
        setIsOpen(false)
    }

    const razorpay = () => {
        let options = {
            key: 'rzp_test_9yxFFuHG5uY58d',
            amount: price*100,
            currency: "INR",
            name: "BMS CLONE",
            Description: "Movie Sale",
            image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
            handler: () => {
                setIsOpen(false);
                alert("Payment Succesfull")
            },
            theme: {color: "#70d9ca"}
        }

        let razorpay = new window.Razorpay(options);
        razorpay.open();
    }

    return (
        <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModal}
            >
            <div className="min-h-screen px-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
                >
                &#8203;
                </span>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-samuel-300 shadow-xl rounded-2xl">
                    <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                    >
                    Make Payment
                    </Dialog.Title>
                    <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Choode Payment Mode
                    </p>
                    </div>

                    <div className="mt-4 flex">
                    <button
                        type="button"
                        className="inline-flex justify-center mx-2 px-4 py-2 text-sm font-medium text-samuel-900 bg-samuel-100 border border-transparent rounded-md hover:bg-samuel-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-samuel-500"
                        onClick={razorpay()}
                    >
                        Pay Rs. {price}
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center mx-2 px-4 py-2 text-sm font-medium text-samuel-900 bg-samuel-100 border border-transparent rounded-md hover:bg-samuel-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white-500"
                        onClick={closeModal}
                    >
                    Cancel Payment Process
                    </button>
                    </div>
                </div>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}
