import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const axiosSecure = useAxiosSecure();

    // const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {

        /**axios */
        // axios.get(url, { withCredentials: true })
        //     .then(res => {
        //         setBookings(res.data)
        //     })

        /**fetch */
        // fetch(url, {credentials: 'include'}) 
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        /**axiosSecure */
        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [url, axiosSecure])


    return (
        <div className="py-12">
            <h2 className="text-5xl mx-auto text-center font-bold mb-12"> Your Booking List: <span className="text-green-700">{bookings.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                            ></BookingRow>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;