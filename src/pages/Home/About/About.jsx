import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero  bg-base-200 py-12 my-12 border">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='w-1/2 relative'>
                    <img src={person} className='w-3/4 rounded-lg shadow-2xl' />
                    <img src={parts} className='w-1/2 absolute right-10 top-1/2 border-8 border-white rounded-lg shadow-2xl' />
                </div>
                <div className='lg:w-1/2 p-4 font-bold'>
                    <h1 className="text-3xl text-orange-700 font-bold mb-7">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-warning font-bold text-lg text-white bg-[rgb(245,57,120)] ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;