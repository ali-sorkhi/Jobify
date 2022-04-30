import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "آمار", path: "/", icon: <IoBarChartSharp /> },
  { id: 2, text: "همه شغل ها", path: "all-jobs", icon: <MdQueryStats /> },
  { id: 3, text: "اضافه کردن شغل", path: "add-job", icon: <FaWpforms /> },
  { id: 4, text: "کاربر", path: "profile", icon: <ImProfile /> },
];

export default links;
