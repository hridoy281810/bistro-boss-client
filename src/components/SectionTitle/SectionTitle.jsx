

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto my-8 text-center">
           <p className="text-yellow-600 ">---{subHeading}---</p> 
           <h3 className="text-3xl uppercase border-y-4 py-4 mt-2 font-semibold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;