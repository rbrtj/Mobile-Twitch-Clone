import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";

type UserProfilePictureProps = {
  size?: number;
  source: ImageSourcePropType;
};

const defaultSize = 64;

const UserProfilePicture = ({
  size = defaultSize,
  source,
}: UserProfilePictureProps) => {
  return (
    <View
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        source={source}
      />
    </View>
  );
};

export default UserProfilePicture;
