const development = {
  name: "development",
  asset_path: "./assets",
  session_cookie_key: "blahsomething",
  db: "codeial_development",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "agrawal.sarthak2599",
      pass: "Sarthak@123",
    },
  },
  google_client_id:
    "584598468791-71lhl01sgsn7a51hplsv07fnlnh6dgnl.apps.googleusercontent.com",
  google_client_secret: "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",
  google_callback_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: 'codeial',
};

const production = {
  name: "production",
  asset_path: process.env.CODEIAL_ASSET_PATH,
  session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
  db: process.env.CODEIAL_DB,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.CODEIAL_GMAIL_USERNAME,
      pass: process.env.CODEIAL_GMAIL_PASSWORD,
    },
  },
  google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
  google_callback_url: process.env.CODEIAL_GOOGLE_CLIENT_CALLBACK_URL,
  jwt_secret: process.env.CODEIAL_JWT_SECRET,
};

module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);