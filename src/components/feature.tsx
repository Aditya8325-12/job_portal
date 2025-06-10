import "aos/dist/aos.css";

const companies = [
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    website: "https://www.google.com",
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    website: "https://www.amazon.com",
  },
  {
    name: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    website: "https://www.netflix.com",
  },
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    website: "https://www.apple.com",
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    website: "https://www.microsoft.com",
  },
  {
    name: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    website: "https://www.meta.com",
  },
  {
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    website: "https://www.tesla.com",
  },
  {
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    website: "https://www.spotify.com",
  },
  {
    name: "Slack",
    logo: "https://logo.clearbit.com/slack.com",
    website: "https://www.slack.com",
  },
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    website: "https://www.airbnb.com",
  },
  {
    name: "Zoom",
    logo: "https://logo.clearbit.com/zoom.us",
    website: "https://zoom.us",
  },
  {
    name: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    website: "https://www.adobe.com",
  },
];

export default function FeaturedCompanies() {
  return (
    <section
      id="companies"
      className="bg-white w-full  py-20 flex flex-col justify-center items-center"
    >
      <div
        className="text-center px-4 w-10/12 flex justify-center flex-col items-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-2">Featured Companies</h2>
        <p className="text-gray-600">
          Trusted by leading global brands and startups alike
        </p>
      </div>

      <div className="mt-16 px-4 w-10/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-3 border border-gray-200 rounded-md hover:border-sky-300 transition cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-6 h-6 object-contain"
              />
              <h3 className="text-md ">{company.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
