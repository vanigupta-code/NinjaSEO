import { BsCurrencyDollar, BsClipboardCheck, BsLinkedin } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

const icons = {
  "bs-currency-dollar": <BsCurrencyDollar className="text-4xl" />,
  "ai-outline-heart": <AiOutlineHeart className="text-4xl" />,
  "bs-clipboard-check": <BsClipboardCheck className="text-4xl" />,
  "bs-linkedin": <BsLinkedin />,
  "cg-menu-grid-0": <CgMenuGridO className="text-4xl" />,
};

const Icons = ({ name }) => icons[name] ?? null;

export default Icons;
