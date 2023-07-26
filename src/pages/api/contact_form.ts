import nodemailer from "nodemailer"; 
import type { APIRoute } from 'astro';

export async function post<APIRoute>({params, request} : {params: any, request : Request})  {
    try{
        const data = await request.formData(); 
        const email = data.get("email")
        const subject = data.get("subject"); 
        const message = data.get("message");
        const transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST,
            port: import.meta.env.SMTP_PORT * 1,
            secure: true,
            auth: {
                user: import.meta.env.SMTP_USERNAME,
                pass: import.meta.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
                ciphers: 'SSLv3'
            }
        });

        const mailOptions = {
            from: email,
            to: 'hualbert.y@gmail.com',
            subject: `${subject}`,
            text: `Hello, someone has sent you a new message through your website: \n\n email: ${email} \n\n ${message}`
        };
        transporter.sendMail(mailOptions, function (error: any, info: any) {
                if (error) {
                    console.log("error: ", error)
                    return new Response(JSON.stringify({error}), {status: 404})

                }
            });
    return new Response(JSON.stringify({message: "success"}), {status: 200})
    } catch(error){
        console.log("error : ", error)
       return new Response(JSON.stringify({error}), {status: 404})

    }
}