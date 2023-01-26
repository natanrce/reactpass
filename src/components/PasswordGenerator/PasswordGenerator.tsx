import { FC, useState } from 'react';

import cx from 'classnames';
// import InputRange from 'react-input-range-fork-for-react-18';

const MIN_LENGTH = 8;
const MAX_LENGTH = 60;

const DEFAULT_INPUT_RANGE_CLASSNAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'relative h-4',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value',
};

export const PasswordGenerator: FC = () => {
  const [password, setPassword] = useState('');
  const [minLength, setMinLength] = useState(MIN_LENGTH);
  const [sliderValue, setSliderValue] = useState(MIN_LENGTH);
  
  return (
    <div>
      {/* <InputRange 
        minValue={MIN_LENGTH}
        maxValue={MAX_LENGTH}
        value={sliderValue}
        onChange={(value) => setSliderValue(value as number)}
        classNames={{
          ...DEFAULT_INPUT_RANGE_CLASSNAMES
        }}
      /> */}
    </div>
  )
}
