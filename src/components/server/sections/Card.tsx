import Image from "next/image";

export interface CardProps {
  icon?: string;
  image?: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function ProjectCard({ image, title, description }: CardProps) {
  if (!image) return null;
  
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}