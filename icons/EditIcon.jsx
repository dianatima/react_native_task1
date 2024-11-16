import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EditIcon = (props) => (
  <Svg
    {...props}
    width={28}
    height={28}
    fill="none"
  >
    <Path
      stroke="#BDBDBD"
      d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25ZM17.71 4.04a.996.996 0 0 0 0-1.41L15.37.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
    />
  </Svg>
)
export default EditIcon
