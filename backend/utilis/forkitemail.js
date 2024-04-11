const fs = require("fs");
const nodemailer = require("nodemailer");
const { convert } = require("html-to-text");
// Read the HTML template file
const template = fs.readFileSync("./views/emailTemplate.html", "utf8");

// user => email,name,.. ; url => for something like reset password link
// new Email(user,url)
module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.from = `Mohammed Raza <${process.env.EMAIL_FROM}>`;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
  }
  createTransport() {
    if (process.env.NODE_ENV === "development") {
      // using sendgrid we will send real email
      return nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "razavittesting123@gmail.com", // Your Gmail address
          pass: "ebhz cpdy grdf jtai", // Your Gmail password
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // send the actual email
  async send(subject) {
    // 1) Render Html based on a pug template
    // const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
    //   firstName: this.firstName,
    //   url: this.url,
    //   subject,
    // });
    // Render the HTML template with your data
    const html = template
      .replace(/{{firstName}}/g, this.firstName)
      .replace(/{{url}}/g, this.url)
      .replace(/{{subject}}/g, subject);

    // 2) Define the mail option
    const mailOptions = {
      from: "razavittesting123@gmail.com",
      to: this.to,
      subject,
      html,
      text: convert(html),
    };
    // 3) create a transport and send email
    await this.createTransport().sendMail(mailOptions);
  }

  // async sendWelcome() {
  //   await this.send("welcome", "Welcome to the natours family");
  // }
  async sendResetPassword() {
    await this.send("Password Recovery from ForkIT (valid for 10 minute only)");
  }
};
