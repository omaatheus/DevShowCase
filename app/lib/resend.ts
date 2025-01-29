import { Resend } from 'resend';

const resendId: any = process.env.RESEND_API_KEY

export const resend = new Resend(resendId);

