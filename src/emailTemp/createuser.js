const createUserSuccessTemplate = {
  html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Platform</title>
        </head>
        <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                    <td align="center">
                        <table role="presentation" width="600px" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
                            <tr>
                                <td align="center">
                                    <h2 style="color: #333; margin-bottom: 10px;">🎉 Welcome to Our Platform!</h2>
                                    <p style="color: #666; font-size: 16px; margin: 0;">Your account has been successfully created.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 0;">
                                    <p style="font-size: 14px; color: #555;">Dear <strong>{{username}}</strong>,</p>
                                    <p style="font-size: 14px; color: #555;">We are excited to have you on board. Here are your account details:</p>
                                    <p style="font-size: 14px; color: #555;"><strong>Email:</strong> {{userEmail}}</p>
                                    <p style="font-size: 14px; color: #555;"><strong>Username:</strong> {{username}}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-size: 12px; color: #888; text-align: center; padding-top: 20px;">
                                    <p>Need help? Contact our support team at <a href="mailto:support@ourplatform.com" style="color: #007bff; text-decoration: none;">support@ourplatform.com</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `,
  subject: "🎉 Welcome! Your Account Has Been Created",
};

module.exports = { createUserSuccessTemplate };
