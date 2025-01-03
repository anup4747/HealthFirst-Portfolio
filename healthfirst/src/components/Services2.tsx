import { Link } from "react-router-dom";

interface ServiceFeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  imageOnRight: boolean;
}

interface ServiceFeatureData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageOnRight: boolean;
}

const servicesData: ServiceFeatureData[] = [
  {
    id: 1,
    title: "3 Days Free Trial for Health Club",
    description:
      "Experience our state-of-the-art health club facilities with a complimentary 3-day trial. Access to all equipment, classes, and amenities included. Perfect opportunity to jumpstart your fitness journey and see if our club is the right fit for you.",
    imageUrl:
      "https://i.pinimg.com/736x/79/b1/1e/79b11ea72a9bfc686b40b0a976022829.jpg",
    imageOnRight: true,
  },
  {
    id: 2,
    title: "Face Yoga Sessions",
    description:
      "Discover the natural way to maintain facial muscle tone and skin elasticity with our expert-led face yoga sessions. Learn techniques to reduce tension, improve circulation, and achieve a natural glow. Perfect for all ages and skin types.",
    imageUrl:
      "https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg",
    imageOnRight: false,
  },
  {
    id: 3,
    title: "Free Consultation Sessions",
    description:
      "Book a free consultation with our certified trainers to discuss your fitness goals, current lifestyle, and create a personalized plan. Get expert advice on nutrition, exercise, and wellness strategies tailored to your needs.",
    imageUrl:
      "https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg",
    imageOnRight: true,
  },
];

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  title,
  description,
  imageUrl,
  imageOnRight = true,
}) => {
  return (
    <div className="container mx-auto px-4 py-5 mt-5">
      <div
        className={`flex flex-col ${
          imageOnRight ? "md:flex-row gap-9" : "md:flex-row-reverse gap-20"
        } items-center `}
      >
        {/* Content */}
        <div
          className={`flex-1 max-w-xl ${
            imageOnRight ? "my-28" : "mr-28 max-sm:mr-0"
          } items-center gap-9`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-lg shadow-black shadow-lg overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-[350px] object-cover ${
                imageOnRight ? " " : "mr-10"
              } `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services2: React.FC =()=> {
  return (
    <section className="mt-10">
      <div>
        {servicesData.map((feature) => (
          <ServiceFeature
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            imageOnRight={feature.imageOnRight}
          />
        ))}
      </div>

      <Link to="/contact">
        <div className="w-full flex justify-center mt-3">
          
          <button className="bg-green-600 text-lg  text-white py-3 px-8 rounded-xl hover:bg-green-700 transition animate-bounceIn">
            Join Now !
          </button>
        </div>
      </Link>
    </section>
  );
}

export default Services2;