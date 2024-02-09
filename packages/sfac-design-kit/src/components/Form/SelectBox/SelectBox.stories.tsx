import { SelectBox } from '.';
import { SelectChipBox } from './selectchipbox';
import { SelectSeriesBox } from './series';

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

// const chipoptions = [
//   <IconChip image='/images/chipIcon/django.svg'>Django</IconChip>,
//   <IconChip image='/images/chipIcon/figma.svg'>Figma</IconChip>,
//   <IconChip image='/images/chipIcon/flutter.svg'>Flutter</IconChip>,
//   <IconChip image='/images/chipIcon/git.svg'>Git</IconChip>,
//   <IconChip image='/images/chipIcon/java.svg'>Java</IconChip>,
//   <IconChip image='/images/chipIcon/javascript.svg'>Javascript</IconChip>,

//   <IconChip image='/images/chipIcon/kotlin.svg'>Kotlin</IconChip>,
//   <IconChip image='/images/chipIcon/mongodb.svg'>MongoDB</IconChip>,
//   <IconChip image='/images/chipIcon/mysql.svg'>MySQL</IconChip>,
//   <IconChip image='/images/chipIcon/nestjs.svg'>Nestjs</IconChip>,
//   <IconChip image='/images/chipIcon/nextjs.svg'>Nextjs</IconChip>,
//   <IconChip image='/images/chipIcon/nodejs.svg'>Nodejs</IconChip>,

//   <IconChip image='/images/chipIcon/react.svg'>React</IconChip>,
//   <IconChip image='/images/chipIcon/reactnative.svg'>ReactNative</IconChip>,
//   <IconChip image='/images/chipIcon/spring.svg'>Spring</IconChip>,

//   <IconChip image='/images/chipIcon/swift.svg'>Swift</IconChip>,
//   <IconChip image='/images/chipIcon/typescript.svg'>TypeScript</IconChip>,
//   <IconChip image='/images/chipIcon/vue.svg'>Vue</IconChip>,
// ];

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
