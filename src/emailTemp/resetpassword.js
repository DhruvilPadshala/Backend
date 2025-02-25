const resetPasswordTemplate = {
  html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Reset Your Password</title>
          </head>
          <body style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
                  <tr>
                      <td align="center">
                          <table role="presentation" width="450px" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); text-align: center;">
                              <tr>
                                  <td style="padding: 20px 0;">
                                      <h2 style="color: #333;">🔒 Reset Your Password</h2>
                                      <p style="color: #666; font-size: 16px;">Hello <strong>{{username}}</strong>,</p>
                                      <p style="font-size: 14px; color: #555;">We received a request to reset your password. Use the code below to reset it:</p>
                                      <div style="background: #007bff; color: #fff; font-size: 20px; font-weight: bold; padding: 12px; border-radius: 5px; display: inline-block; margin-top: 10px;">
                                          {{resetCode}}
                                      </div>
                                      <p style="font-size: 14px; color: #555; margin-top: 15px;">This code is valid for **15 minutes**. If you didn’t request this, please ignore this email.</p>
                                      <p style="font-size: 12px; color: #888;">For security reasons, never share this code with anyone.</p>
                                      <p style="font-size: 12px; color: #888;">If you need help, contact our support team at <a href="mailto:support@example.com" style="color: #007bff; text-decoration: none;">support@example.com</a></p>
                                      <p style="font-size: 12px; color: #888; margin-top: 10px;">&copy; 2025 Our Company. All rights reserved.</p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
          </html>
      `,
  subject: "🔒 Reset Your Password",
};

module.exports = { resetPasswordTemplate };
