import "./NoFound.css";
import { WarningTwoTone } from "@ant-design/icons";
import { propIcon } from "../../helpers/settingsFormAntd";

const NoFound = () => {
  return (
    <div className="page-no-found">
      <div id="text-page-no-found">Page under construction</div>
      <div id="icon-page-no-found">
        <WarningTwoTone {...propIcon} />
      </div>
    </div>
  );
};

export default NoFound;
