import unnamed from "../../assets/Icons/unnamed 1.png";
import Home from "../../assets/Icons/Home.png";
import Ruqyah from "../../assets/Icons/Ruqyah.png";
import Memorize from "../../assets/Icons/Memorize.png";
import support from "../../assets/Icons/I want to support.png";
import Dua from "../../assets/Icons/Dua Q&A.png";
import Bookmark from "../../assets/Icons/Bookmark.png";
import Book from "../../assets/Icons/Book.png";
import All from "../../assets/Icons/AllDuas.png";
import Image from "next/image";
function IconSectiopn() {
  const logos = [
    {
      id: 1,
      logo: Home,
    },
    {
      id: 2,
      logo: All,
    },
    {
      id: 3,
      logo: Memorize,
    },
    {
      id: 4,
      logo: Ruqyah,
    },
    {
      id: 5,
      logo: Book,
    },
    {
      id: 6,
      logo: Bookmark,
    },
    {
      id: 7,
      logo: Dua,
    },
  ];
  return (
    <div className="bg-white dark:bg-[#15213b] h-[94vh] p-5 rounded flex items-center flex-col justify-between  sticky top-0 left-0 ">
      <Image width={300} alt="NextUI hero Image" src={unnamed} />
      <div>
        {logos?.map((icon) => (
          <Image
            key={icon.id}
            width={100}
            height={100}
            alt="NextUI hero Image"
            src={icon.logo}
            className="w-10 h-10 mb-4"
          />
        ))}
      </div>
      <Image width={300} alt="NextUI hero Image" src={support} />
    </div>
  );
}

export default IconSectiopn;
