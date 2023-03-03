import Image from "next/image";

export default function Experience({
  time,
  company,
  role,
  summary,
  techStack,
  skills,
  url,
  image,
}: {
  image: StaticImageData;
  time: string;
  company: string;
  role: string;
  summary: string;
  techStack: string;
  skills: string;
  url: string;
}) {
  return (
    <a
      className="shadow-lg p-10 rounded-xl my-10 hover:scale-110 transition-all duration-500 cursor-pointer"
      target="_blank"
      href={url}
    >
      <Image alt="" src={image} height="120" width="120" />

      <h3 className="text-lg font-medium pt-2 pb-2  text-gray-900 dark:text-gray-300">
        {time}
      </h3>
      <h3 className="text-lg font-medium pb-2  text-gray-900 dark:text-gray-300">
        {company} - {role}
      </h3>
      <p className="pt-4 text-gray-900 dark:text-gray-300">{summary}</p>
      <h4 className="pt-4 text-gray-900 dark:text-gray-300">Tools I used</h4>
      <p className="py-1 text-gray-900 dark:text-gray-300">
        Tech Stacks: {techStack}
      </p>
      <p className="py-1 text-gray-900 dark:text-gray-300">Skills: {skills}</p>
    </a>
  );
}
