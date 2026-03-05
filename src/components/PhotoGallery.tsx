const placeholders = [
  "https://i.ibb.co/4gCYCdXg/1000172088-jpg.jpg",
  "https://i.ibb.co/1Gph5bqp/1000172099-jpg.jpg",
];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {placeholders.map((src, i) => (
        <div
          key={i}
          className="aspect-[4/5] rounded-lg overflow-hidden border border-gold/20 shadow-md hover:shadow-xl transition-shadow duration-500"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
