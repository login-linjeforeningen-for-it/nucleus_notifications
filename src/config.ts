import dotenv from 'dotenv'

dotenv.config()

const { FIREBASE_SECRET } = process.env

if (!FIREBASE_SECRET) {
    throw new Error("Missing FIREBASE_SECRET.")
}

const config = {
    api: "https://workerbee.login.no/api/v2",
    test_api: "https://dev.workerbee.login.no/api/v2",
    app_api: process.env.APP_API_URL || "https://app.login.no/api",
    admin_token: process.env.APP_API_ADMIN_TOKEN || "",
    service_account: JSON.parse(FIREBASE_SECRET)
}

export default config
