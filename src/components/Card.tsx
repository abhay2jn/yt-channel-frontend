interface CardProps {
  title: string;
  description: string;
  image: string;
}
const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] bg-[#0F0F0F] rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href="https://dl91era.com/"
          className="inline-block px-4 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
