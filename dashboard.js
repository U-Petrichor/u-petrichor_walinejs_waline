module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Waline Management System</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
      <script>
      window.SITE_URL = ${JSON.stringify(process.env.SITE_URL)};
      window.SITE_NAME = ${JSON.stringify(process.env.SITE_NAME)};
      window.recaptchaV3Key = ${JSON.stringify(process.env.RECAPTCHA_V3_KEY)};
      window.turnstileKey = ${JSON.stringify(process.env.TURNSTILE_KEY)};
      window.serverURL = 'https://${req.headers.host}/api/';
      window.ALLOW_SOCIALS = ['qq', 'weibo', 'github', 'google'];  // 只显示这些登录方式
      </script>
      <script src="${process.env.WALINE_ADMIN_MODULE_ASSET_URL || '//unpkg.com/@waline/admin'}"></script>
    </body>
  </html>`);
  return res.end();
};
