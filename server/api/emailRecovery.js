const router = require("express").Router();
const { User } = require("../db/User");
const nodemailer = require("nodemailer");

router.put("/reset_password", async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });
  res.send(await user.update(req.body));
});

router.post("/send_recovery_email", async (req, res) => {
  const { email } = req.body;
  console.log("\n\nthe email in the backend", email);
  try {
    const user = User.findOne({ where: { email } });
    console.log("\n\nuser: ", user);
    const pending = await sendOTPVerificationEmail(req);
    res.send(pending);
  } catch (error) {
    console.error("there was an error sending the email");
  }
});

const sendOTPVerificationEmail = async (req) => {
  const { email, OTP } = req.body;
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // TLS requires secureConnection to be false
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "JANELLY'S COMPANY PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
          <html lang="en" >
          <head>
            <meta charset="UTF-8">
            <title>Janelly's email template</title>
          </head>
          <body>
          <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Hello {userName}</a>
              </div>
              <p>We received a request to reset the password associated with this email address.
              If you made this request, please use the code below otherwise disregard this email</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
              <p style="font-size:0.9em;">Regards,<br />Janelly's App Name</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>Janelly's company</p>
                <p>123 somwhereinNYC</p>
                <p>New York</p>
              </div>
            </div>
          </div>
          </body>
          </html> `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (!error) {
        return resolve({
          status: "PENDING",
          message: "OTP email sent",
          data: {
            email,
            info,
          },
        });
      } else {
        console.log(
          "\n\n\n\n\n\ninside error sending email transporter.sendMail, Step 3",
          error
        );
        return reject({
          status: "FAILED , An error has occured",
          message: error.message,
          data: {
            email,
          },
        });
      }
    });
  });
};

/**
 * 
 * EXAMPLE OF EMAIL: 
 * 
 * Hello,
We received a request to reset the password associated with this email address. If you made this request, please follow the instructions below.
Click the link below to reset your password:

https://fsastore.com/setpassword?Token=329e74405510bd9c29270aeb64699f46531014f854d483
If clicking the link doesn’t work, you can copy and paste the link into your browser’s address window, or retype it there. Once you have returned to FSAstore.com, we will give you instructions for resetting your password.

If you did not request to have your password reset, we strongly recommend resetting your password to ensure the safety of your account. Your security is important to us.

Thank you for visiting FSAstore.com!
 * 
 */

module.exports = router;
