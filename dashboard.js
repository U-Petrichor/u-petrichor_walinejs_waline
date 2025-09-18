export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Waline Management System</title>
  </head>
  <body>
    <script>
      window.ALLOW_SOCIALS = ['github']; // 👈 只保留 GitHub
    </script>
    <script src="${
      process.env.WALINE_ADMIN_MODULE_ASSET_URL || '//unpkg.com/@waline/admin'
    }"></script>
  </body>
</html>`);
}
