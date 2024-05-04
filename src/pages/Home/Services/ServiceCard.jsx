import { Link } from "react-router-dom";



const ServiceCard = ({ services }) => {
    const { _id, img, price, title } = services;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-lg text-orange-500 font-bold">Price: ${price} </p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}><button className="btn bg-[rgb(245,57,120)] text-white">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

