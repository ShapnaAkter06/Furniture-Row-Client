import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ bookFurniture, setBookFurniture }) => {
    const { title, resale_Price } = bookFurniture;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            product: title,
            productPrice: resale_Price,
            name,
            email,
            phone,
            location,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBookFurniture(null);
                    toast.success("Booking Confirmed");
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="" placeholder='Resale Price' value={title} className="input w-full input-bordered" disabled />
                        <input name='name' type="" placeholder='Resale Price' value={resale_Price} className="input w-full input-bordered" disabled />
                        <input name='name' type="name" placeholder='Your name' defaultValue={user?.displayName} className="input w-full input-bordered" disabled />
                        <input name='email' type="email" placeholder='Email Address' defaultValue={user?.email} className="input w-full input-bordered" disabled />
                        <input name='phone' type="text" placeholder='Phone Number' className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder='Location' className="input w-full input-bordered" />
                        <br />
                        <input className='w-full btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;