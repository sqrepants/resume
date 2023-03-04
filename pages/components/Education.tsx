import Image, { StaticImageData } from "next/image";

export default function Education({
  time,
  school,
  certification,
  url,
  image,
}: {
  image: StaticImageData;
  time: string;
  certification: string;
  school: string;
  url: string;
}) {
  return (
    <a
      className="shadow-lg p-10 rounded-xl my-10 hover:scale-110 transition-all duration-500 cursor-pointer text-center"
      target="_blank"
      href={url}
    >
      <Image alt="" src={image} height="120" width="120" className="mx-auto" />

      <h1 className="text-lg font-medium pt-4 pb-2  text-gray-900 dark:text-gray-300">
        {school}
      </h1>
      <h2 className="text-lg font-medium pb-2  text-gray-900 dark:text-gray-300">
        {certification}
      </h2>
      <h3 className="text-lg font-medium pb-2  text-gray-900 dark:text-gray-300">
        {time}
      </h3>
    </a>
  );
}
