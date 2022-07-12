import "./NoFound.css";
import { FrownTwoTone } from "@ant-design/icons";
import { propIcon } from "../../helpers/settingsFormAntd";

const NoFound = () => {
  return (
    <div className="page-no-found">
      <div id="text-page-no-found">Page is not found</div>
      <div id="icon-page-no-found">
        <FrownTwoTone {...propIcon} />
      </div>
    </div>
  );
};

export default NoFound;
