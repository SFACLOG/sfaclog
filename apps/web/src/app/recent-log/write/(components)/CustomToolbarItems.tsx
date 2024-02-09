import {
  ICommand,
  TextState,
  TextAreaTextApi,
  selectWord,
  executeCommand,
  ExecuteState,
  getBreaksNeededForEmptyLineBefore,
  getBreaksNeededForEmptyLineAfter,
  insertBeforeEachLine,
} from '@uiw/react-md-editor';

const title1: ICommand = {
  name: 'title1',
  keyCommand: 'title1',
  buttonProps: { 'aria-label': 'Insert title1', title: 'Insert title1' },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 16.9344V16.1822H1.35101C1.58502 16.1822 1.79117 16.1543 1.96946 16.0986C2.15889 16.0429 2.30933 15.9315 2.42076 15.7643C2.53219 15.5972 2.58791 15.3465 2.58791 15.0122V6.85534C2.58791 6.53219 2.52662 6.29261 2.40404 6.13661C2.29261 5.9806 2.14218 5.88031 1.95274 5.83574C1.77445 5.78002 1.57387 5.75217 1.35101 5.75217H1V5H6.11473V5.75217H5.76372C5.54085 5.75217 5.3347 5.78002 5.14527 5.83574C4.95584 5.89146 4.8054 6.00289 4.69397 6.17004C4.58254 6.32604 4.52682 6.57676 4.52682 6.9222V10.2652H9.67498V6.9222C9.67498 6.57676 9.61926 6.32604 9.50783 6.17004C9.3964 6.00289 9.24597 5.89146 9.05653 5.83574C8.87824 5.78002 8.67209 5.75217 8.43809 5.75217H8.08708V5H13.2018V5.75217H12.8508C12.6279 5.75217 12.4218 5.78002 12.2323 5.83574C12.0429 5.89146 11.8925 6.00289 11.781 6.17004C11.6696 6.32604 11.6139 6.57676 11.6139 6.9222V15.0957C11.6139 15.4077 11.6696 15.6418 11.781 15.7978C11.9036 15.9538 12.0541 16.0596 12.2323 16.1153C12.4218 16.1599 12.6279 16.1822 12.8508 16.1822H13.2018V16.9344H8.08708V16.1822H8.43809C8.67209 16.1822 8.87824 16.1543 9.05653 16.0986C9.24597 16.0429 9.3964 15.9315 9.50783 15.7643C9.61926 15.5972 9.67498 15.3465 9.67498 15.0122V11.151H4.52682V15.0122C4.52682 15.3465 4.58254 15.5972 4.69397 15.7643C4.8054 15.9315 4.95584 16.0429 5.14527 16.0986C5.3347 16.1543 5.54085 16.1822 5.76372 16.1822H6.11473V16.9344H1Z'
        fill='#4D4D4D'
      />
      <path
        d='M15.6529 16.9342V16.3872H16.516C16.6943 16.3872 16.8483 16.3669 16.9779 16.3264C17.1157 16.2778 17.2211 16.1927 17.294 16.0711C17.375 15.9496 17.4156 15.7713 17.4156 15.5363V9.23933C17.213 9.49056 17.0225 9.71343 16.8442 9.90793C16.6659 10.0943 16.4957 10.2402 16.3337 10.3455C16.1716 10.4509 16.0095 10.5036 15.8474 10.5036C15.661 10.5036 15.507 10.4387 15.3855 10.3091C15.2639 10.1713 15.2031 9.99302 15.2031 9.77421C15.3652 9.73369 15.5313 9.68101 15.7015 9.61618C15.8798 9.54324 16.0743 9.44599 16.285 9.32443C16.5038 9.19476 16.747 9.03268 17.0144 8.83818L17.8653 8.20605H18.8014V15.5363C18.8014 15.7632 18.8378 15.9415 18.9108 16.0711C18.9837 16.1927 19.0891 16.2778 19.2268 16.3264C19.3646 16.3669 19.5186 16.3872 19.6888 16.3872H20.3938V16.9342H15.6529Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `# ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `# `;
    }
    api.replaceSelection(modifyText);
  },
};

const title2: ICommand = {
  name: 'title2',
  keyCommand: 'title2',
  buttonProps: { 'aria-label': 'Insert title2', title: 'Insert title2' },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 17V16.2437H1.35294C1.58823 16.2437 1.79552 16.2157 1.97479 16.1596C2.16526 16.1036 2.31652 15.9916 2.42857 15.8235C2.54061 15.6554 2.59664 15.4033 2.59664 15.0672V6.86554C2.59664 6.54061 2.53501 6.29972 2.41176 6.14286C2.29972 5.98599 2.14846 5.88515 1.95798 5.84034C1.77871 5.78431 1.57703 5.7563 1.35294 5.7563H1V5H6.14285V5.7563H5.78991C5.56582 5.7563 5.35854 5.78431 5.16806 5.84034C4.97759 5.89636 4.82633 6.0084 4.71428 6.17647C4.60224 6.33333 4.54621 6.58543 4.54621 6.93277V10.2941H9.72268V6.93277C9.72268 6.58543 9.66665 6.33333 9.55461 6.17647C9.44256 6.0084 9.29131 5.89636 9.10083 5.84034C8.92156 5.78431 8.71428 5.7563 8.47898 5.7563H8.12604V5H13.2689V5.7563H12.9159C12.6919 5.7563 12.4846 5.78431 12.2941 5.84034C12.1036 5.89636 11.9524 6.0084 11.8403 6.17647C11.7283 6.33333 11.6723 6.58543 11.6723 6.93277V15.1512C11.6723 15.465 11.7283 15.7003 11.8403 15.8571C11.9636 16.014 12.1148 16.1204 12.2941 16.1765C12.4846 16.2213 12.6919 16.2437 12.9159 16.2437H13.2689V17H8.12604V16.2437H8.47898C8.71428 16.2437 8.92156 16.2157 9.10083 16.1596C9.29131 16.1036 9.44256 15.9916 9.55461 15.8235C9.66665 15.6554 9.72268 15.4033 9.72268 15.0672V11.1849H4.54621V15.0672C4.54621 15.4033 4.60224 15.6554 4.71428 15.8235C4.82633 15.9916 4.97759 16.1036 5.16806 16.1596C5.35854 16.2157 5.56582 16.2437 5.78991 16.2437H6.14285V17H1Z'
        fill='#4D4D4D'
      />
      <path
        d='M14.8281 16.9999V16.0098L16.8083 13.7852C17.1424 13.4104 17.4235 13.0722 17.6517 12.7707C17.8798 12.4611 18.0591 12.1758 18.1895 11.9151C18.328 11.6462 18.4258 11.3814 18.4828 11.1206C18.548 10.8598 18.5806 10.5828 18.5806 10.2894C18.5806 9.97977 18.5358 9.71494 18.4461 9.49493C18.3647 9.27491 18.2343 9.10379 18.055 8.98156C17.8839 8.85933 17.672 8.79821 17.4194 8.79821C17.0772 8.79821 16.8123 8.88377 16.6249 9.0549C16.4375 9.21787 16.3071 9.44196 16.2338 9.72716C16.1604 10.0124 16.1238 10.3383 16.1238 10.705C15.9038 10.705 15.7 10.6765 15.5126 10.6194C15.3333 10.5624 15.1907 10.4687 15.0848 10.3383C14.987 10.1998 14.9381 10.0164 14.9381 9.78828C14.9381 9.47863 15.0278 9.20157 15.207 8.95711C15.3945 8.71265 15.6715 8.51708 16.0382 8.37041C16.413 8.22373 16.8734 8.15039 17.4194 8.15039C17.9572 8.15039 18.4176 8.23595 18.8006 8.40708C19.1836 8.57005 19.477 8.80229 19.6807 9.10379C19.8844 9.40529 19.9863 9.76791 19.9863 10.1916C19.9863 10.4198 19.9537 10.6439 19.8885 10.8639C19.8233 11.0758 19.7296 11.2958 19.6073 11.524C19.4851 11.7521 19.3303 11.9884 19.1429 12.2329C18.9636 12.4774 18.7477 12.7422 18.495 13.0274C18.2424 13.3044 17.9572 13.61 17.6394 13.9441L15.806 15.9243H18.6295C18.9636 15.9243 19.1999 15.8346 19.3384 15.6553C19.4851 15.4761 19.591 15.2642 19.6562 15.0197L19.7173 14.7631H20.2918L20.2307 16.9999H14.8281Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `## ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `## `;
    }
    api.replaceSelection(modifyText);
  },
};

const title3: ICommand = {
  name: 'title3',
  keyCommand: 'title3',
  buttonProps: { 'aria-label': 'Insert title3', title: 'Insert title3' },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 17V16.2437H1.35294C1.58823 16.2437 1.79552 16.2157 1.97479 16.1596C2.16526 16.1036 2.31652 15.9916 2.42857 15.8235C2.54061 15.6554 2.59664 15.4033 2.59664 15.0672V6.86554C2.59664 6.54061 2.53501 6.29972 2.41176 6.14286C2.29972 5.98599 2.14846 5.88515 1.95798 5.84034C1.77871 5.78431 1.57703 5.7563 1.35294 5.7563H1V5H6.14285V5.7563H5.78991C5.56582 5.7563 5.35854 5.78431 5.16806 5.84034C4.97759 5.89636 4.82633 6.0084 4.71428 6.17647C4.60224 6.33333 4.54621 6.58543 4.54621 6.93277V10.2941H9.72268V6.93277C9.72268 6.58543 9.66665 6.33333 9.55461 6.17647C9.44256 6.0084 9.29131 5.89636 9.10083 5.84034C8.92156 5.78431 8.71428 5.7563 8.47898 5.7563H8.12604V5H13.2689V5.7563H12.9159C12.6919 5.7563 12.4846 5.78431 12.2941 5.84034C12.1036 5.89636 11.9524 6.0084 11.8403 6.17647C11.7283 6.33333 11.6723 6.58543 11.6723 6.93277V15.1512C11.6723 15.465 11.7283 15.7003 11.8403 15.8571C11.9636 16.014 12.1148 16.1204 12.2941 16.1765C12.4846 16.2213 12.6919 16.2437 12.9159 16.2437H13.2689V17H8.12604V16.2437H8.47898C8.71428 16.2437 8.92156 16.2157 9.10083 16.1596C9.29131 16.1036 9.44256 15.9916 9.55461 15.8235C9.66665 15.6554 9.72268 15.4033 9.72268 15.0672V11.1849H4.54621V15.0672C4.54621 15.4033 4.60224 15.6554 4.71428 15.8235C4.82633 15.9916 4.97759 16.1036 5.16806 16.1596C5.35854 16.2157 5.56582 16.2437 5.78991 16.2437H6.14285V17H1Z'
        fill='#4D4D4D'
      />
      <path
        d='M17.6212 16.8213C17.0683 16.8213 16.6157 16.7572 16.2631 16.629C15.9186 16.5008 15.6662 16.3325 15.506 16.1242C15.3457 15.9159 15.2656 15.6956 15.2656 15.4632C15.2656 15.1988 15.3417 14.9985 15.494 14.8623C15.6542 14.7181 15.8545 14.646 16.0949 14.646C16.0949 14.9424 16.155 15.2028 16.2751 15.4272C16.3953 15.6435 16.5676 15.8157 16.7919 15.9439C17.0243 16.0641 17.2967 16.1242 17.6091 16.1242C17.9136 16.1242 18.194 16.0641 18.4504 15.9439C18.7068 15.8238 18.9151 15.6275 19.0754 15.3551C19.2356 15.0826 19.3157 14.7061 19.3157 14.2254C19.3157 13.9049 19.2316 13.6204 19.0633 13.3721C18.8951 13.1237 18.6547 12.9314 18.3423 12.7952C18.0298 12.659 17.6572 12.5909 17.2246 12.5909H16.7318V11.9419H17.2366C17.5891 11.9419 17.8976 11.8658 18.162 11.7136C18.4264 11.5614 18.6347 11.349 18.7869 11.0766C18.9472 10.7962 19.0273 10.4717 19.0273 10.1032C19.0273 9.63846 18.9311 9.27792 18.7388 9.02154C18.5466 8.76515 18.2381 8.63696 17.8135 8.63696C17.4769 8.63696 17.2166 8.72509 17.0323 8.90135C16.856 9.06961 16.7358 9.28994 16.6717 9.56235C16.6076 9.83476 16.5756 10.1312 16.5756 10.4517C16.2311 10.4517 15.9466 10.3876 15.7223 10.2594C15.506 10.1312 15.3978 9.90687 15.3978 9.58639C15.3978 9.28193 15.486 9.01352 15.6622 8.78117C15.8465 8.54081 16.1189 8.35253 16.4794 8.21633C16.848 8.07211 17.3007 8 17.8375 8C18.6227 8 19.2476 8.16825 19.7123 8.50476C20.185 8.84126 20.4214 9.31398 20.4214 9.92289C20.4214 10.2834 20.3372 10.6119 20.169 10.9084C20.0088 11.2048 19.7844 11.4572 19.496 11.6655C19.2156 11.8738 18.8911 12.0261 18.5225 12.1222C18.7549 12.1542 18.9992 12.2103 19.2556 12.2905C19.512 12.3706 19.7484 12.4908 19.9647 12.651C20.189 12.8112 20.3693 13.0195 20.5055 13.2759C20.6497 13.5323 20.7218 13.8528 20.7218 14.2374C20.7218 14.7261 20.6297 15.1387 20.4454 15.4752C20.2691 15.8037 20.0248 16.0681 19.7123 16.2684C19.4079 16.4607 19.0713 16.6009 18.7028 16.6891C18.3423 16.7772 17.9817 16.8213 17.6212 16.8213Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    let modifyText = `### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `### `;
    }
    api.replaceSelection(modifyText);
  },
};

const bold: ICommand = {
  name: 'bold',
  keyCommand: 'bold',
  shortcuts: 'ctrlcmd+b',
  prefix: '**',
  buttonProps: {
    'aria-label': 'Add bold text (ctrl + b)',
    title: 'Add bold text (ctrl + b)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.1758 18.834H4V3H11.6914C13.6322 3.02865 15.0072 3.59082 15.8164 4.68652C16.3034 5.3597 16.5469 6.16536 16.5469 7.10352C16.5469 8.07031 16.3034 8.84733 15.8164 9.43457C15.5443 9.764 15.1432 10.0648 14.6133 10.3369C15.4225 10.6305 16.0312 11.096 16.4395 11.7334C16.8548 12.3708 17.0625 13.1442 17.0625 14.0537C17.0625 14.9919 16.8262 15.8333 16.3535 16.5781C16.0527 17.0723 15.6768 17.4876 15.2256 17.8242C14.7171 18.2109 14.1156 18.4759 13.4209 18.6191C12.7334 18.7624 11.985 18.834 11.1758 18.834ZM11.1006 11.8623H7.1582V16.084H11.0469C11.7415 16.084 12.2822 15.9909 12.6689 15.8047C13.3708 15.4609 13.7217 14.8021 13.7217 13.8281C13.7217 13.0046 13.3815 12.4388 12.7012 12.1309C12.3216 11.959 11.7881 11.8695 11.1006 11.8623ZM12.7441 8.84375C13.1738 8.58594 13.3887 8.12402 13.3887 7.45801C13.3887 6.72038 13.1022 6.2334 12.5293 5.99707C12.0352 5.83236 11.4049 5.75 10.6387 5.75H7.1582V9.24121H11.0469C11.7415 9.24121 12.3073 9.10872 12.7441 8.84375Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '**',
    });
    const state1 = api.setSelectionRange(newSelectionRange);
    executeCommand({
      api,
      selectedText: state1.selectedText,
      selection: state.selection,
      prefix: state.command.prefix || '**',
    });
  },
};

const italic = {
  name: 'italic',
  keyCommand: 'italic',
  shortcuts: 'ctrlcmd+i',
  prefix: '*',
  buttonProps: {
    'aria-label': 'Add italic text (ctrl + i)',
    title: 'Add italic text (ctrl + i)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 18.708L6.308 17.256L8.134 16.618L10.576 5.09L9.014 4.452L9.3 3H15.482L15.174 4.452L13.304 5.09L10.884 16.618L12.49 17.256L12.16 18.708H6Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '*',
    });
    const state1 = api.setSelectionRange(newSelectionRange);
    executeCommand({
      api,
      selectedText: state1.selectedText,
      selection: state.selection,
      prefix: state.command.prefix || '*',
    });
  },
};
const strikethrough = {
  name: 'strikethrough',
  keyCommand: 'strikethrough',
  shortcuts: 'ctrl+shift+x',
  buttonProps: {
    'aria-label': 'Add strikethrough text (ctrl + shift + x)',
    title: 'Add strikethrough text (ctrl + shift + x)',
  },
  prefix: '~~',
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 11H19V13H3V11Z' fill='#4D4D4D' />
      <path
        d='M17.8262 3V5.80371H13.0889V10H9.75879V5.80371H5V3H17.8262Z'
        fill='#4D4D4D'
      />
      <path d='M9.75879 14V18.834H13.0889V14H9.75879Z' fill='#4D4D4D' />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '~~',
    });
    const state1 = api.setSelectionRange(newSelectionRange);
    executeCommand({
      api,
      selectedText: state1.selectedText,
      selection: state.selection,
      prefix: state.command.prefix || '~~',
    });
  },
};

const quote = {
  name: 'quote',
  keyCommand: 'quote',
  shortcuts: 'ctrlcmd+q',
  prefix: '> ',
  buttonProps: {
    'aria-label': 'Insert a quote (ctrl + q)',
    title: 'Insert a quote (ctrl + q)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 10.6157V5H10.0317V9.50534C10.0317 11.5979 9.52381 13.2776 8.50794 14.5445C7.50617 15.8114 6.0388 16.6299 4.10582 17V14.758C5.53086 14.3025 6.4903 13.5196 6.98413 12.4093C7.2522 11.8256 7.36508 11.2278 7.32275 10.6157H4ZM17.5397 14.4804C16.552 15.7758 15.0705 16.6157 13.0952 17V14.758C14.5485 14.3167 15.515 13.5053 15.9947 12.3238C16.1922 11.8541 16.291 11.2847 16.291 10.6157H12.9894V5H19V9.50534C19 11.5409 18.5132 13.1993 17.5397 14.4804Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '> ',
    });
    const state1 = api.setSelectionRange(newSelectionRange);
    const breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
      state1.text,
      state1.selection.start,
    );
    const breaksBefore = Array(breaksBeforeCount + 1).join('\n');
    const breaksAfterCount = getBreaksNeededForEmptyLineAfter(
      state1.text,
      state1.selection.end,
    );
    const breaksAfter = Array(breaksAfterCount + 1).join('\n');
    const modifiedText = insertBeforeEachLine(
      state1.selectedText,
      state.command.prefix || '> ',
    );
    api.replaceSelection(
      '' + breaksBefore + modifiedText.modifiedText + breaksAfter,
    );
    const selectionStart = state1.selection.start + breaksBeforeCount;
    const selectionEnd = selectionStart + modifiedText.modifiedText.length;
    api.setSelectionRange({
      start: selectionStart,
      end: selectionEnd,
    });
  },
};

const image = {
  name: 'image',
  keyCommand: 'image',
  shortcuts: 'ctrlcmd+k',
  prefix: '![image](',
  suffix: ')',
  buttonProps: {
    'aria-label': 'Add image (ctrl + k)',
    title: 'Add image (ctrl + k)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.8831 2H4.35862C4.15281 2 3.93231 2.01454 3.7412 2.04362C2.75626 2.20355 2.00653 3.03231 2.00653 4.00646C2.00653 8.61551 1.99183 13.21 2.00653 17.8191C2.00653 18.9822 3.02087 20 4.19691 20H18.0007C18.4123 20 18.7799 19.8691 19.1033 19.6365C19.7207 19.1712 19.9853 18.5315 19.9853 17.79C20 15.5073 20 13.21 20 10.9128V4.07916C20 2.78514 19.1915 2 17.8831 2ZM7.37223 4.68982C8.68058 4.67528 9.73902 5.72213 9.73902 7.03069C9.73902 8.32472 8.69528 9.37157 7.38693 9.37157C6.07859 9.37157 5.02015 8.31018 5.02015 7.03069C5.02015 5.75121 6.07858 4.68982 7.37223 4.68982ZM17.839 16.9903C17.7949 17.063 17.6626 17.1066 17.4862 17.1212C17.4715 17.1357 17.4421 17.1357 17.4127 17.1357H8.34247C7.66624 17.1357 6.97532 17.1212 6.29909 17.1212C5.99038 17.1212 5.66697 17.1066 5.35826 17.1066C5.06425 17.1066 4.78494 17.1648 4.47623 17.1357C4.46152 17.1357 4.46152 17.1357 4.43212 17.1212C4.41742 17.1212 4.38802 17.1066 4.35862 17.0921C4.16751 16.9758 4.56443 16.685 4.62323 16.5977C4.82904 16.336 7.12232 13.1664 7.15172 13.1228C7.46044 12.6721 7.88675 12.4103 8.32777 12.4103C8.97459 12.4103 9.31271 13.0937 9.81252 13.3845C10.4887 13.7771 10.9298 13.2536 11.2532 12.7302C11.4737 12.3813 11.7089 12.0323 11.9294 11.6688C12.0617 11.4653 12.194 11.2472 12.3263 11.0291C12.488 10.7819 12.6497 10.5347 12.8114 10.273L13.1348 9.76414C13.1642 9.72052 13.1789 9.69144 13.2083 9.66236C13.326 9.48788 13.473 9.38611 13.5759 9.38611C13.6788 9.38611 13.7964 9.48788 13.8993 9.6769C15.0165 11.6543 16.1485 13.6607 17.251 15.609L17.7802 16.5541C17.8243 16.6268 17.8537 16.6995 17.8684 16.7577C17.8831 16.8304 17.8831 16.9321 17.839 16.9903Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    let newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '![image](',
      suffix: state.command.suffix,
    });
    let state1 = api.setSelectionRange(newSelectionRange);
    if (
      state1.selectedText.includes('http') ||
      state1.selectedText.includes('www')
    ) {
      executeCommand({
        api,
        selectedText: state1.selectedText,
        selection: state.selection,
        prefix: state.command.prefix || '![image](',
        suffix: state.command.suffix,
      });
    } else {
      newSelectionRange = selectWord({
        text: state.text,
        selection: state.selection,
        prefix: '![',
        suffix: ']()',
      });
      state1 = api.setSelectionRange(newSelectionRange);
      if (state1.selectedText.length === 0) {
        executeCommand({
          api,
          selectedText: state1.selectedText,
          selection: state.selection,
          prefix: '![image',
          suffix: '](url)',
        });
      } else {
        executeCommand({
          api,
          selectedText: state1.selectedText,
          selection: state.selection,
          prefix: '![',
          suffix: ']()',
        });
      }
    }
  },
};

const link = {
  name: 'link',
  keyCommand: 'link',
  shortcuts: 'ctrlcmd+l',
  prefix: '[',
  suffix: '](url)',
  buttonProps: {
    'aria-label': 'Add a link (ctrl + l)',
    title: 'Add a link (ctrl + l)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.16927 13.7503H6.41927C4.86094 13.7503 3.66927 12.5587 3.66927 11.0003C3.66927 9.44199 4.86094 8.25033 6.41927 8.25033H9.16927C9.71927 8.25033 10.0859 7.88366 10.0859 7.33366C10.0859 6.78366 9.71927 6.41699 9.16927 6.41699H6.41927C3.8526 6.41699 1.83594 8.43366 1.83594 11.0003C1.83594 13.567 3.8526 15.5837 6.41927 15.5837H9.16927C9.71927 15.5837 10.0859 15.217 10.0859 14.667C10.0859 14.117 9.71927 13.7503 9.16927 13.7503ZM15.5859 6.41699H12.8359C12.2859 6.41699 11.9193 6.78366 11.9193 7.33366C11.9193 7.88366 12.2859 8.25033 12.8359 8.25033H15.5859C17.1443 8.25033 18.3359 9.44199 18.3359 11.0003C18.3359 12.5587 17.1443 13.7503 15.5859 13.7503H12.8359C12.2859 13.7503 11.9193 14.117 11.9193 14.667C11.9193 15.217 12.2859 15.5837 12.8359 15.5837H15.5859C18.1526 15.5837 20.1693 13.567 20.1693 11.0003C20.1693 8.43366 18.1526 6.41699 15.5859 6.41699ZM7.33594 11.0003C7.33594 11.5503 7.7026 11.917 8.2526 11.917H13.7526C14.3026 11.917 14.6693 11.5503 14.6693 11.0003C14.6693 10.4503 14.3026 10.0837 13.7526 10.0837H8.2526C7.7026 10.0837 7.33594 10.4503 7.33594 11.0003Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    let newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: state.command.prefix || '[',
      suffix: state.command.suffix,
    });
    let state1 = api.setSelectionRange(newSelectionRange);
    if (
      state1.selectedText.includes('http') ||
      state1.selectedText.includes('www')
    ) {
      newSelectionRange = selectWord({
        text: state.text,
        selection: state.selection,
        prefix: '[](',
        suffix: ')',
      });
      state1 = api.setSelectionRange(newSelectionRange);
      executeCommand({
        api,
        selectedText: state1.selectedText,
        selection: state.selection,
        prefix: '[](',
        suffix: ')',
      });
    } else {
      if (state1.selectedText.length === 0) {
        executeCommand({
          api,
          selectedText: state1.selectedText,
          selection: state.selection,
          prefix: '[title',
          suffix: '](url)',
        });
      } else {
        executeCommand({
          api,
          selectedText: state1.selectedText,
          selection: state.selection,
          prefix: state.command.prefix || '[',
          suffix: state.command.suffix,
        });
      }
    }
  },
};

const codeBlock = {
  name: 'codeBlock',
  keyCommand: 'codeBlock',
  shortcuts: 'ctrlcmd+shift+j',
  prefix: '```',
  buttonProps: {
    'aria-label': 'Insert Code Block (ctrl + shift + j)',
    title: 'Insert Code Block (ctrl + shift +j)',
  },
  icon: (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.25137 15.2959L6.70492 15.8421C6.63206 15.915 6.54827 15.9514 6.45355 15.9514C6.35883 15.9514 6.27505 15.915 6.20219 15.8421L1.10929 10.7513C1.03643 10.6784 1 10.5947 1 10.5C1 10.4053 1.03643 10.3216 1.10929 10.2487L6.20219 5.15787C6.27505 5.08504 6.35883 5.04862 6.45355 5.04862C6.54827 5.04862 6.63206 5.08504 6.70492 5.15787L7.25137 5.7041C7.32423 5.77693 7.36066 5.86069 7.36066 5.95537C7.36066 6.05005 7.32423 6.1338 7.25137 6.20663L2.95628 10.5L7.25137 14.7934C7.32423 14.8662 7.36066 14.95 7.36066 15.0446C7.36066 15.1393 7.32423 15.2231 7.25137 15.2959ZM13.7104 3.63935L9.63388 17.743C9.60474 17.8377 9.54827 17.9087 9.46448 17.956C9.38069 18.0034 9.29508 18.0125 9.20765 17.9834L8.53005 17.7976C8.43534 17.7685 8.3643 17.7121 8.31694 17.6283C8.26958 17.5445 8.26047 17.4553 8.28962 17.3607L12.3661 3.25699C12.3953 3.16231 12.4517 3.0913 12.5355 3.04396C12.6193 2.99662 12.7049 2.98751 12.7923 3.01665L13.4699 3.20237C13.5647 3.2315 13.6357 3.28794 13.6831 3.3717C13.7304 3.45545 13.7395 3.54467 13.7104 3.63935ZM20.8907 10.7513L15.7978 15.8421C15.725 15.915 15.6412 15.9514 15.5464 15.9514C15.4517 15.9514 15.3679 15.915 15.2951 15.8421L14.7486 15.2959C14.6758 15.2231 14.6393 15.1393 14.6393 15.0446C14.6393 14.95 14.6758 14.8662 14.7486 14.7934L19.0437 10.5L14.7486 6.20663C14.6758 6.1338 14.6393 6.05005 14.6393 5.95537C14.6393 5.86069 14.6758 5.77693 14.7486 5.7041L15.2951 5.15787C15.3679 5.08504 15.4517 5.04862 15.5464 5.04862C15.6412 5.04862 15.725 5.08504 15.7978 5.15787L20.8907 10.2487C20.9636 10.3216 21 10.4053 21 10.5C21 10.5947 20.9636 10.6784 20.8907 10.7513Z'
        fill='#4D4D4D'
      />
    </svg>
  ),
  execute: (state: ExecuteState, api: TextAreaTextApi) => {
    const newSelectionRange = selectWord({
      text: state.text,
      selection: state.selection,
      prefix: '```\n',
      suffix: '\n```',
    });
    const state1 = api.setSelectionRange(newSelectionRange);

    let prefix = '\n```\n';
    let suffix = '\n```\n';
    if (
      state1.selectedText.length >= prefix.length + suffix.length - 2 &&
      state1.selectedText.startsWith(prefix) &&
      state1.selectedText.endsWith(suffix)
    ) {
      prefix = '```\n';
      suffix = '\n```';
    } else {
      if (
        (state1.selection.start >= 1 &&
          state.text.slice(
            state1.selection.start - 1,
            state1.selection.start,
          ) === '\n') ||
        state1.selection.start === 0
      ) {
        prefix = '```\n';
      }
      if (
        (state1.selection.end <= state.text.length - 1 &&
          state.text.slice(state1.selection.end, state1.selection.end + 1) ===
            '\n') ||
        state1.selection.end === state.text.length
      ) {
        suffix = '\n```';
      }
    }
    const newSelectionRange2 = selectWord({
      text: state.text,
      selection: state.selection,
      prefix,
      suffix,
    });
    const state2 = api.setSelectionRange(newSelectionRange2);
    executeCommand({
      api,
      selectedText: state2.selectedText,
      selection: state.selection,
      prefix,
      suffix,
    });
  },
};

export {
  title1,
  title2,
  title3,
  bold,
  italic,
  strikethrough,
  quote,
  image,
  link,
  codeBlock,
};
