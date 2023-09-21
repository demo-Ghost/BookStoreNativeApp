import { Fab, Icon } from "native-base";
import BarcodeScannerIcon from "../../icons/BarcodeScannerIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FabBottom = () => {
  return (
    <Fab
      renderInPortal={false}
      shadow={2}
      size="sm"
      icon={
        <Icon
          color="white"
          as={MaterialCommunityIcons}
          name="barcode-scan"
          size="8"
        />
      }
    />
  );
};

export default FabBottom;
