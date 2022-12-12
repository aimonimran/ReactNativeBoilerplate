import {Switch as RNSwitch} from 'react-native';
import React, {useState} from 'react';

const Switch = () => {
  const [isNew, setIsNew] = useState(true);

  return (
    <RNSwitch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
  );
};

export default Switch;
