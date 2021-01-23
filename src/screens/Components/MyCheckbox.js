import * as React from 'react';
import {Checkbox} from 'react-native-paper';
const MyCheckbox = ({props}) => {
  const [c, setC] = React.useState(props.checked);

  return (
    <Checkbox
      status={c ? 'checked' : 'unchecked'}
      onPress={() => {
        setC(!c);
        props.setChecked(!c);
      }}
    />
  );
};
export default MyCheckbox;
