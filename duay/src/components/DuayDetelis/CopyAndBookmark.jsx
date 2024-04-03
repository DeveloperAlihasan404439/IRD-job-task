import Image from "next/image";
import copy from "../../assets/Icons/copy.svg";
import bookmark from "../../assets/Icons/bookmark.svg";
import plan from "../../assets/Icons/plan.svg";
import share from "../../assets/Icons/share.svg";
import report from "../../assets/Icons/report.svg";
import './CopyAndBookmark.css'
function CopyAndBookmark() {
  return (
    <div className="wrapper">
      <div className="icon copy">
        <div className="tooltip">Copy</div>
        <span>
          <Image width={30} height={30} alt="copy" src={copy} />
        </span>
      </div>
      <div className="icon bookmark">
        <div className="tooltip">Bookmark</div>
        <span>
          <Image width={30} height={30} alt="bookmark" src={bookmark} />
        </span>
      </div>
      <div className="icon plan">
        <div className="tooltip">Plan</div>
        <span>
          <Image width={30} height={30} alt="plan" src={plan} />
        </span>
      </div>
      <div className="icon share">
        <div className="tooltip">Share</div>
        <span>
          <Image width={30} height={30} alt="share" src={share} />
        </span>
      </div>
      <div className="icon report">
        <div className="tooltip">Report</div>
        <span>
          <Image width={30} height={30} alt="report" src={report} />
        </span>
      </div>
      {/* <div className="flex gap-5 items-center justify-center mt-3 md:mt-0"> */}
    </div>
  );
}

export default CopyAndBookmark;
