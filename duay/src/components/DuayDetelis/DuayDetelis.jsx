import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
import ToggleCategories from "./ToggleCategories";
import CopyAndBookmark from "./CopyAndBookmark";
function DuayDetelis({ subCategories,duayTitle,setDuayTitle }) {
  return (
    <div>
      <h2 className="lg:hidden  text-lg p-3 shadow-[3px_3px_3px_3px_rgba(0,0,0,0.2)] bg-[#ffffff] mb-5 text-[#393939] font-medium rounded transition duration-300 ease-in-out  lg:mr-5 flex items-center gap-2 dark:bg-[#15213b] dark:text-[#EEE]">
        <ToggleCategories duayTitle={duayTitle} setDuayTitle={setDuayTitle}/> {subCategories?.categories_title}
      </h2>
      {subCategories?.section?.map((categorie) => (
        <div key={categorie.section_id}>
          <h2 className="text-lg p-5 shadow-[3px_3px_3px_3px_rgba(0,0,0,0.2)] bg-[#ffffff] mb-5 text-[#393939] font-medium rounded transition duration-300 ease-in-out  lg:mr-5 dark:bg-[#15213b] dark:text-[#EEE]">
            <span className="text-[#1EA55C]">Section :</span>{" "}
            {categorie.section_title}
          </h2>
          <div>
            {categorie.sub_title?.map((subCategorie) => (
              <div
                key={subCategorie.sub_id}
                className="mb-5 p-5 bg-white shadow-md hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.2)] rounded  lg:mr-5 text-[#393939] text-xl dark:bg-[#15213b] dark:text-[#EEE]"
              >
                <div className="flex gap-2 items-center pb-7 ">
                  <Image
                    width={50}
                    height={50}
                    alt="duay logo"
                    src="https://duaruqyah.com/assets/duacard.svg"
                  />
                  <div className="flex gap-2 md:items-center">
                  <p className="text-[#1EA55C] text-lg">
                    {subCategorie.sub_id}
                  </p>
                  <p
                    id={`category${subCategorie.sub_id}`}
                    className="text-[#1EA55C] text-lg"
                  >
                    {subCategorie.duay_title}
                  </p>
                  </div>
                </div>
                {subCategorie.duay && (
                  <p className={`${subCategorie.duay && "pb-7"}`}>
                    {subCategorie.duay}
                  </p>
                )}

                {subCategorie.duay_arbi && (
                  <p
                    className={`${subCategorie.duay_arbi && "pb-7"} text-right`}
                  >
                    {subCategorie.duay_arbi}
                  </p>
                )}
                {subCategorie.transliteration && (
                  <p
                    className={`${
                      subCategorie.transliteration && "pb-7 italic"
                    }`}
                  >
                    <span className="font-medium">Transliteration</span> :{" "}
                    {subCategorie.transliteration}
                  </p>
                )}
                {subCategorie.translation && (
                  <p className={`${subCategorie.translation && "pb-7"}`}>
                    <span className="font-medium">Translation</span> :{" "}
                    {subCategorie.translation}
                  </p>
                )}
                {subCategorie.duay_hadis && (
                  <p className={`${subCategorie.duay_hadis && "pb-7"}`}></p>
                )}
                {subCategorie.reference && (
                  <>
                    <h2 className="text-[#1EA55C] font-medium  ">Reference</h2>
                    <p className={`${subCategorie.reference && "pb-7"}`}>
                      {subCategorie.reference}
                    </p>
                  </>
                )}
                <div className="md:flex justify-between items-center">
                  <AudioPlayer
                    duay_audio={subCategorie.duay_audio}
                    categorie={categorie.sub_title}
                  />
                  <CopyAndBookmark/>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DuayDetelis;
