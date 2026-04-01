# Automatic Cloud Backup

Off-site redundant backup is the last line of defense against extreme risks. NodeAuth supports multi-channel automatic synchronization, ensuring your 2FA assets can be recovered with one click in any situation.

---

## 📧 Configure SMTP Email (Most Universal)
This is the most common off-site backup method. You can automatically send encrypted backup packages to your work or private email.
1. **SMTP Server**: e.g., `smtp.gmail.com` or `smtp.qq.com`.
2. **Port**: Usually `465` (SSL) or `587` (TLS).
3. **Account & App Password**: Enter your email address and third-party app authorization code (note: this is not your login password).
4. **Recipient**: It is recommended to set this to your most commonly used backup email.

## 🤖 Configure Telegram Backup (Most Convenient)
The Telegram Bot-based backup method is both real-time and visually intuitive:
1. Contact **[@BotFather](https://t.me/BotFather)** to create a bot and get a `Bot Token`.
2. Get your personal `Chat ID` via **[@userinfobot](https://t.me/userinfobot)**.
3. Enter these two items in the NodeAuth settings.
4. **Advantages**: You can send encrypted backup packages to Telegram at any time via the bot, essentially having a private off-site backup library at your fingertips.

## 🪣 Configure S3 / R2 Cloud Storage (Geek's Choice)
1. **Endpoint**: Your S3 endpoint (e.g., `https://xxx.r2.cloudflarestorage.com`).
2. **Bucket**: Storage bucket name.
3. **Access Key / Secret Key**: API access credentials.
4. **Region**: Enter the corresponding region (e.g., `auto`).

## ☁️ Configure WebDAV (Private Cloud Users)
Suitable for Synology, QNAP, Nutstore, or Alist users:
1. **URL**: Your WebDAV mount point address.
2. **Directory**: Specify the storage folder (e.g., `/backup/nodeauth/`).
3. **Authentication**: Enter your WebDAV account and password.

---

## 📥 Mainstream Cloud Drive Integration (OAuth)
NodeAuth deeply integrates with mainstream cloud drives using the official OAuth 2.0 protocol. Simply click "Authorize" to enable incremental backups.

### 🔼 Google Drive
*   **Private Storage**: Uses `appDataFolder` isolation by default to prevent accidental deletion.
*   **Low Latency**: Synchronizes extremely fast thanks to Cloudflare's global backbone network.
*   **🛠️ Configuration Guide**:
    1. Visit [Google Cloud Console](https://console.cloud.google.com/) to create a project and enable the `Google Drive API`.
    2. Add scope in "OAuth consent screen": `https://www.googleapis.com/auth/drive.file`.
    3. Create an "OAuth client ID" (Web application) and set the redirect URI: `https://your-domain.com/api/backups/oauth/google/callback`.
    4. Variables:
        *   `OAUTH_GOOGLE_CLIENT_ID`
        *   `OAUTH_GOOGLE_CLIENT_SECRET`
        *   `OAUTH_GOOGLE_BACKUP_REDIRECT_URI` : `https://your-domain.com/api/backups/oauth/google/callback`

### 🔼 Microsoft OneDrive
*   **High Stability**: Uses Microsoft Graph API chunked uploading, supporting large capacity backups.
*   **🛠️ Configuration Guide**:
    1. Visit [Azure App Registration](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) to register an app (supports personal accounts).
    2. Select Web for "Redirect URI" and enter: `https://your-domain.com/api/backups/oauth/microsoft/callback`.
    3. Add `Files.ReadWrite.AppFolder` and `offline_access` in "API permissions" and grant consent.
    4. Variables:
        *   `OAUTH_MICROSOFT_CLIENT_ID`
        *   `OAUTH_MICROSOFT_CLIENT_SECRET`
        *   `OAUTH_MICROSOFT_BACKUP_REDIRECT_URI` : `https://your-domain.com/api/backups/oauth/microsoft/callback`

### 🔼 Baidu Netdisk
*   **Domestic Friendly**: Specially adapted for users in mainland China, guaranteed by official certification.
*   **🛠️ Configuration Guide**:
    1. Visit [Baidu Open Platform Console](https://pan.baidu.com/union/console/applist) and create a "Hardware/Software Integrated" application.
    2. Enter the callback address in "Security Settings": `https://your-domain.com/api/backups/oauth/baidu/callback`.
    3. Enable "Netdisk Basic Service" permissions.
    4. Variables:
        *   `OAUTH_BAIDU_CLIENT_ID` (AppKey)
        *   `OAUTH_BAIDU_CLIENT_SECRET` (SecretKey)
        *   `OAUTH_BAIDU_BACKUP_REDIRECT_URI` : `https://your-domain.com/api/backups/oauth/baidu/callback`

### 🔼 Dropbox
*   **Minimalist Experience**: Fast API response, suitable for users seeking maximum speed.
*   **🛠️ Configuration Guide**:
    1. Visit [Dropbox App Console](https://www.dropbox.com/developers/apps) and select `Scoped access` -> `App folder`.
    2. Enter in `Redirect URIs`: `https://your-domain.com/api/backups/oauth/dropbox/callback`.
    3. Check `files.content.write`, `files.content.read`, `files.metadata.read` in `Permissions`.
    4. Variables:
        *   `OAUTH_DROPBOX_CLIENT_ID` (App key)
        *   `OAUTH_DROPBOX_CLIENT_SECRET` (App secret)
        *   `OAUTH_DROPBOX_BACKUP_REDIRECT_URI` : `https://your-domain.com/api/backups/oauth/dropbox/callback`

---

## 🔑 OAuth Authorization Flow
1. Go to "Data Management" -> "**Cloud Backup Settings**".
2. Select your cloud drive icon and click "**Bind Now**".
3. In the official authorization page that pops up, confirm granting NodeAuth `write permissions`.
4. **Token Auto-refresh**: Even if you change your cloud drive password, as long as the permission is not revoked, the system will permanently sync via the `Refresh Token`.

---

## 🛡️ Backup Strategy & Security Check
*   **Double Encryption**: All backup packages are secondary-encrypted with a "backup decryption password". Even if the cloud drive is compromised, the data remains unreadable.
*   **Redundancy & Conflict Resolution**: Uses `version_timestamp` logic to ensure data is not overwritten when multiple devices are writing.
*   **Retention Control**: Set the number of recent backups to keep (N); the system will automatically clean up expired copies.

> [!TIP]
> **Off-site Disaster Retrieval**: If you download an encrypted backup file from the cloud (like Telegram or S3) but cannot access your NodeAuth instance, refer to the [Offline Decryption Guide](../recovery/index.md#advanced-manual-offline-decryption-decrypt_backup-js) for instructions on using scripts for offline data extraction.

<!-- [📸 UI Mockup Tip: Config list showing multi-dimensional backup sources (S3/Email/TG/Cloud Drives)] -->
