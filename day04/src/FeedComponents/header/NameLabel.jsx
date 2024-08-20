import { LuBadgeCheck } from "react-icons/lu";
const NameLabel = (props) => {
  return (
    <div className="flex gap-1">
      <span className="font-semibold text-xl">{props.name || "UnNamed"}</span>
      <span style={{ color: "3897f0" }}>
        {props.isPopular && <LuBadgeCheck />}
      </span>
    </div>
  );
};
export default NameLabel;
