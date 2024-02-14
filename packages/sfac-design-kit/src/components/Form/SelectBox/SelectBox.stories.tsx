import { SelectBox } from '.';
import { SelectChipBox } from './selectchipbox';
import { SelectSeriesBox } from './series';
import { SelectBoxPosition } from './selectboxposition';

export default {
  title: 'FORMS/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
};

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: '데이터', label: '데이터' },
  { value: '부트캠프', label: '부트캠프' },
];
export const Default = {
  args: {
    options,
    title: 'selectOption',
  },
};

export const Useage = () => (
  <>
    <SelectBox options={options} title='고르시오'></SelectBox>
  </>
);

export const Series = () => (
  <>
    <SelectSeriesBox title='시리즈 선택 및 추가'></SelectSeriesBox>
  </>
);

export const ChipBox = () => (
  <>
    <SelectChipBox title='시리즈 선택 및 추가'></SelectChipBox>
  </>
);
export const SelectPosition = () => (
  <>
    <SelectBoxPosition
      title='시리즈 선택 및 추가'
      options={options}
    ></SelectBoxPosition>
  </>
);
