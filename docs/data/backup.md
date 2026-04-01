# 云端自动备份设置

实现异地冗余备份是防止极端风险的最后一道防线。NodeAuth 支持多通道自动同步，确保您的 2FA 资产在任何情况下都能“一键回血”。

---

## 📧 配置 SMTP 邮件自发 (最全能)
这是最通用的异地备份方式，您可以将加密后的备份包自动发送到您的工作或私人邮箱。
1. **SMTP服务器**: 如 `smtp.gmail.com` 或 `smtp.qq.com`。
2. **端口**: 通常为 `465` (SSL) 或 `587` (TLS)。
3. **账号与授权码**: 输入您的邮箱地址和第三方应用授权码（注意不是登录密码）。
4. **收件人**: 建议设置为您最常用的备用邮箱。

## 🤖 配置 Telegram 自动备份 (最方便)
基于 Telegram Bot 的备份方式不仅实时，而且查看非常直观：
1. 向 **[@BotFather](https://t.me/BotFather)** 申请一个机器人并获得 `Bot Token`。
2. 通过 **[@userinfobot](https://t.me/userinfobot)** 获得您的个人 `Chat ID`。
3. 在 NodeAuth 设置中填入这两项。
4. **优势**：您可以随时通过机器人向 Telegram 发送加密备份包，相当于拥有一个触手可及的异地私有备份库。

## 🪣 配置 S3 / R2 云存储 (极客首选)
1. **Endpoint**: 您的 S3 终结点 (如 `https://xxx.r2.cloudflarestorage.com`)。
2. **Bucket**: 存储桶名称。
3. **Access Key / Secret Key**: API 访问凭证。
4. **Region**: 填写对应的区域（如 `auto`）。

## ☁️ 配置 WebDAV (私有云用户)
适用于群晖、威联通、坚果云或 Alist 用户：
1. **URL**: 您的 WebDAV 挂载点地址。
2. **目录**: 指定存放文件夹（如 `/backup/nodeauth/`）。
3. **认证**: 输入 WebDAV 账号及密码。

---

## 📥 主流网盘集成 (OAuth 授权)
NodeAuth 通过官方 OAuth 2.0 协议深度适配了主流网盘，点击“授权”即可实现增量备份。

### 🔼 Google Drive (谷歌云端硬盘)
*   **私密存储**：默认使用 `appDataFolder` 隔离存储，有效防止误删。
*   **低延迟**：得益于 Cloudflare 全球骨干网络，同步极快。
*   **🛠️ 配置指南**：
    1. 访问 [Google Cloud Console](https://console.cloud.google.com/) 创建项目并启用 `Google Drive API`。
    2. 在“OAuth 同意屏幕”添加范围：`https://www.googleapis.com/auth/drive.file`。
    3. 创建“OAuth 客户端 ID” (Web 应用程序)，设置重定向 URI：`https://您的域名/api/backups/oauth/google/callback`。
    4. 变量：
        *   `OAUTH_GOOGLE_CLIENT_ID`
        *   `OAUTH_GOOGLE_CLIENT_SECRET`
        *   `OAUTH_GOOGLE_BACKUP_REDIRECT_URI` : `https://您的域名/api/backups/oauth/google/callback`

### 🔼 Microsoft OneDrive
*   **极高稳定性**：利用 Microsoft Graph API 分片上传，支持大容量备份。
*   **🛠️ 配置指南**：
    1. 访问 [Azure 应用注册](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade) 注册应用（支持个人账户）。
    2. “重定向 URI” 选 Web 并填入：`https://您的域名/api/backups/oauth/microsoft/callback`。
    3. “API 权限”添加 `Files.ReadWrite.AppFolder` 和 `offline_access` 并授予确认。
    4. 变量：
        *   `OAUTH_MICROSOFT_CLIENT_ID`
        *   `OAUTH_MICROSOFT_CLIENT_SECRET`
        *   `OAUTH_MICROSOFT_BACKUP_REDIRECT_URI` : `https://您的域名/api/backups/oauth/microsoft/callback`

### 🔼 百度网盘 (Baidu Netdisk)
*   **国内友好**：特别为中国大陆用户适配，通过官方认证保障。
*   **🛠️ 配置指南**：
    1. 访问 [百度开放平台控制台](https://pan.baidu.com/union/console/applist) 创建“软硬一体”应用。
    2. “安全设置”中填入回调地址：`https://您的域名/api/backups/oauth/baidu/callback`。
    3. 开通“网盘基础服务”权限。
    4. 变量：
        *   `OAUTH_BAIDU_CLIENT_ID` (AppKey)
        *   `OAUTH_BAIDU_CLIENT_SECRET` (SecretKey)
        *   `OAUTH_BAIDU_BACKUP_REDIRECT_URI` : `https://您的域名/api/backups/oauth/baidu/callback`

### 🔼 Dropbox
*   **极简体验**：API 响应快，适合追求极致速度的用户。
*   **🛠️ 配置指南**：
    1. 访问 [Dropbox App Console](https://www.dropbox.com/developers/apps) 选择 `Scoped access` -> `App folder`。
    2. 在 `Redirect URIs` 填入：`https://您的域名/api/backups/oauth/dropbox/callback`。
    3. `Permissions` 勾选 `files.content.write`, `files.content.read`, `files.metadata.read`。
    4. 变量：
        *   `OAUTH_DROPBOX_CLIENT_ID` (App key)
        *   `OAUTH_DROPBOX_CLIENT_SECRET` (App secret)
        *   `OAUTH_DROPBOX_BACKUP_REDIRECT_URI` : `https://您的域名/api/backups/oauth/dropbox/callback`

---

## 🔑 OAuth 授权操作流
1. 前往“数据管理” -> “**云端备份设置**”。
2. 选择您拥有的网盘图标，点击“**立即绑定**”。
3. 在弹出的官方授权页面，确认授予 NodeAuth `写入权限`。
4. **令牌自动刷新**：即便修改了网盘密码，只要未撤销权限，系统将通过 `Refresh Token` 永久同步。

---

## 🛡️ 备份策略与安全自检
*   **二重加密**：所有备份包通过“备份解密密码”二次打包，即便网盘被盗也无法解密。
*   **冗余冲突解决**：采用 `version_timestamp` 逻辑，保障多设备写入时不被覆盖。
*   **保留份数控制**：可设置保留最近 N 份备份，系统会自动清理物理过期旧副本。

> [!TIP]
> **异地容灾提取**：如果您从云端（如 Telegram 或 S3）下载了加密备份文件，但由于某种原因无法访问 NodeAuth 实例，请参考 [离线解密指南](../recovery/index.md#进阶-手动离线解密-decrypt_backup-js) 使用脚本进行脱机数据提取。

<!-- [📸 UI截图提示：此处展示包含多维度备份源（S3/Email/TG/网盘）的配置列表全景图] -->
