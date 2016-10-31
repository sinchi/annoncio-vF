Accounts.onCreateUser(function (options, user) {
  Meteor.setTimeout(function () {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;
});

  Accounts.emailTemplates.siteName = "Annoncio";
  Accounts.emailTemplates.from     = "Annoncio <admin@annoncio.com>";

  Accounts.emailTemplates.verifyEmail = {
    subject() {
      return "[Annoncio] Verifier votre email ";
    },
    text( user, url ) {
      let emailAddress   = user.emails[0].address,
          urlWithoutHash = url.replace( '#/', '' ),
          supportEmail   = "support@annoncio.com",
          emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

      return emailBody;
    }
  };
