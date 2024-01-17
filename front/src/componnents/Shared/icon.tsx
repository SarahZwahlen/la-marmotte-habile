import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
  iconName: IconName;
}
const IconSolid = (props: IconProps) => {
  const iconLookup: IconLookup = {
    prefix: "fas",
    iconName: props.iconName,
  };
  const IconDefinition: IconDefinition = findIconDefinition(iconLookup);
  return <FontAwesomeIcon icon={IconDefinition} />;
};

export default IconSolid;
