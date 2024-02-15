import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sfaclog.co@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});
const mailOptions = {
  from: 'sfaclog.co@gmail.com',
  to: '',
  subject: '이메일 인증번호를 확인하세요',
  text: '',
};

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('이메일 전송 성공:', info.response);
  } catch (error: any) {
    console.error('이메일 전송 실패:', error.message);
  }
};

export async function POST(req: Request, res: NextApiResponse) {
  const { email, code } = await req.json();

  console.log(code);
  mailOptions.to = email;
  mailOptions.text = code;
  try {
    await sendEmail();
    return NextResponse.json('good');
  } catch (error) {
    console.error('이메일 전송 중 오류:', error);
    return NextResponse.json('error');
  }
}
