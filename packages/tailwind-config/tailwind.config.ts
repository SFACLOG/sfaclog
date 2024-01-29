import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#030303',
          90: '#1A1A1A',
          80: '#333333',
          70: '#4D4D4D',
          60: '#666666',
          50: '#808080',
          40: '#999999',
          30: '#B3B3B3',
          20: '#CCCCCC',
          10: '#E6E6E6',
          5: '#F3F3F3',
          0: '#FFFFFF',
        },
        primary: {
          100: '#0059FF',
          90: '#196AFF',
          80: '#337AFF',
          70: '#4C8BFF',
          60: '#669BFF',
          50: '#7FACFF',
          40: '#99BDFF',
          30: '#B2CDFF',
          20: '#CCDEFF',
          10: '#E5EEFF',
          5: '#F5F8FF',
        },
        kakao: {
          yellow: '#FFE240',
        },
        stroke: { blue: '#99BDFF', 10: '#E6E6E6', 5: '#F3F3F3' },
        background: {
          100: '#666666',
          50: '#A9A9A9',
          5: '#F8F8F9',
        },
        system: {
          warning: '#FF0000',
          success: '#07A320',
        },
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },

      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      fontSize: {
        h1: [
          '34px',
          {
            fontWeight: '700',
          },
        ],
        h2: [
          '20px',
          {
            fontWeight: '700',
          },
        ],
        h3: [
          '20px',
          {
            fontWeight: '600',
          },
        ],
        title1: [
          '30px',
          {
            fontWeight: '700',
          },
        ],
        title2: [
          '26px',
          {
            fontWeight: '700',
          },
        ],
        title3: [
          '20px',
          {
            fontWeight: '600',
          },
        ],
        title4: [
          '16px',
          {
            fontWeight: '600',
          },
        ],
        subtitle: [
          '16px',
          {
            fontWeight: '700',
          },
        ],
        body1: [
          '18px',
          {
            fontWeight: '400',
          },
        ],
        body1_bold: [
          '18px',
          {
            fontWeight: '600',
          },
        ],
        body2: [
          '16px',
          {
            fontWeight: '400',
          },
        ],
        body2_bold: [
          '16px',
          {
            fontWeight: '600',
          },
        ],
        btn: [
          '14px',
          {
            fontWeight: '600',
          },
        ],
        tag: [
          '12px',
          {
            fontWeight: '600',
          },
        ],
        caption1: [
          '15px',
          {
            fontWeight: '400',
          },
        ],
        caption2: [
          '14px',
          {
            fontWeight: '400',
          },
        ],
        caption2_bold: [
          '14px',
          {
            fontWeight: '600',
          },
        ],
        caption3: [
          '12px',
          {
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
