import Swal from "sweetalert2";

const BookingRow = ({ booking, bookings, setBookings }) => {

    const { _id, date, service, price, img, status } = booking;

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete Booking');
        if (proceed) {
            fetch(`https://58-car-doctor-server.vercel.app/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Booking Removed Successfully !",
                            icon: "success"
                        });
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);

                    }
                })
        }
    }
    // order confirm
    const handleConfirm = id => {
        fetch(`https://58-car-doctor-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <tr>
            <th>
                {
                    status === 'confirm' ?
                        <span className="font-bold text-primary"></span>
                        :
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-black text-white btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                }
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>


            </td>
            <td>
                {service}

            </td>
            <td>{date} </td>
            <td>${price} </td>
            <th>
                {
                    status === 'confirm' ?
                        <span className="font-bold text-primary">Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-outline btn-ghost btn-xs font-bold text-red-600 text-sm">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;