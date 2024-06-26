import ServiceCard from "./ServiceCard";
import { SlCalender } from "react-icons/sl";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import useServices from "../../../hooks/useServices";


const Services = () => {
    // now data load from server mongoDB
    /** now use useHook => 02 lastest version */
    const service = useServices();

    /**load from home by use fetch => 1 */
    // const service = useLoaderData();
    // console.log(service)



    // const [service, setService] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [])

    return (
        <div className="my-12">
            <div className="text-center font-bold space-y-5">
                <h3 className="text-2xl text-orange-700">Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="w-[600px] mx-auto ">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {
                    service.map(services => <ServiceCard
                        key={services._id}
                        services={services}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center my-8">
                <button className="btn btn-outline font-bold btn-secondary">More Services</button>
            </div>
            <div className="flex gap-4 mx-auto justify-center bg-black py-24 px-12 rounded-xl my-24">
                <div className="w-2/6 flex text-white font-bold text-lg gap-4 items-center">
                    <div className="text-red-500 ">
                        <SlCalender className="w-10 h-10"></SlCalender>
                    </div>
                    <div>
                        <p className="">We are open monday-friday</p>
                        <p className="text-3xl">7:00 am - 9:00 pm</p>
                    </div>

                </div>
                <div className="w-2/6 flex text-white font-bold text-lg gap-4 items-center">
                    <div className="text-red-500 ">
                        <BiSolidPhoneCall className="w-10 h-10"></BiSolidPhoneCall>
                    </div>
                    <div>
                        <p className="">Have a question?</p>
                        <p className="text-3xl">+2545 251 2658</p>
                    </div>

                </div>
                <div className="w-2/6 flex text-white font-bold text-lg gap-4 items-center">
                    <div className="text-red-500 ">
                        <FaMapMarkedAlt className="w-10 h-10"></FaMapMarkedAlt>
                    </div>
                    <div>
                        <p className="">Need a repair? our address</p>
                        <p className="text-3xl">Liza Street, New York</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;