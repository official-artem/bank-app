import CardIcon from "@/assets/card_icon.svg";
import PINIcon from "@/assets/password_icon.svg";
import LockIcon from "@/assets/lock_icon.svg";
import SliderIcon from "@/assets/slider-icon.svg";
import ArrowIcon from "@/assets/right-arrow-icon.svg";

export const links = [
  {
    id: 1,
    img: CardIcon,
    title: "Show Card Details",
    url: "/cards",
    arrow_img: ArrowIcon,
  },
  {
    id: 2,
    img: PINIcon,
    title: "Your PIN",
    url: "/cards",
    arrow_img: ArrowIcon,
  },
  {
    id: 3,
    img: LockIcon,
    title: "Security Code",
    url: "/cards",
    arrow_img: ArrowIcon,
  },
  {
    id: 4,
    img: SliderIcon,
    title: "Edit Limits",
    url: "/cards",
    arrow_img: ArrowIcon,
  },
];
