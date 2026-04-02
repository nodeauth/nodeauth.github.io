# 环境变量配置指南

不论您使用哪种部署方式，都需要配置以下核心环境变量。这些变量直接决定了系统的安全性与功能可用性。

## 🔐 核心安全密钥 (必须配置)

这些变量是系统运行的基石，**必须**设为 **32 位以上**的复杂随机字符串。

| 变量名 | 必填 | 作用与建议 |
| :--- | :--- | :--- |
| `ENCRYPTION_KEY` | ✅ | **核心：** 数据库加密密钥。所有的 2FA 种子在入库前都会用这个密钥加密。**设定后请勿更改**，否则旧数据将无法解密。 |
| `JWT_SECRET` | ✅ | **登录：** 用于签发 JWT 登录令牌。要求高强度随机字符串。 |

---

## 🛡️ 准入白名单 (必须配置)

NodeAuth 拒绝公开注册，必须预设允许进入的用户。

| 变量名 | 必填 | 示例与说明 |
| :--- | :--- | :--- |
| `OAUTH_ALLOWED_USERS` | ✅ | 允许登录的邮箱或 Telegram ID。多个用户请用**半角逗号** `,` 分开。如：`admin@example.com,12345678` |

---

## ☁️ 登录平台配置 (至少配置一个,支持多个)

您必须至少配置一种三方登录方式，否则将无法登录系统。

### 1. GitHub (推荐，最简单)
1. 访问 GitHub [Developer Settings](https://github.com/settings/developers) -> **OAuth Apps** -> **New OAuth App**。
2. **Homepage URL**: `https://您的域名`
3. **Authorization callback URL**: `https://您的域名/oauth/callback`
4. 注册后记录 `Client ID` 和 `Client Secret`。
5. **填入环境变量**：
   *   `OAUTH_GITHUB_CLIENT_ID`
   *   `OAUTH_GITHUB_CLIENT_SECRET`
   *   `OAUTH_GITHUB_REDIRECT_URI`: `https://您的域名/oauth/callback`

<details>
<summary>点击查看：Github OAuth 配置示意图</summary>
<img width="600" alt="Github OAuth 配置示意" src="/deploy/aa03b15f-deb2-4e48-bf4b-e57be342adbb.png" />
</details>

### 2. Cloudflare Access (Zero Trust)
1. 进入 **Cloudflare Zero Trust Dashboard** -> **Access** -> **Applications**。
2. 点击 **Add an Application** -> 选择 **SaaS**。
3. **Application name**: `nodeauth`
4. **Authentication protocol**: `OIDC`
5. **Redirect URL**: `https://您的域名/oauth/callback`
6. 在配置页获取 `Client ID` 和 `Client Secret`。
7. **填入环境变量**：
   *   `OAUTH_CLOUDFLARE_CLIENT_ID`
   *   `OAUTH_CLOUDFLARE_CLIENT_SECRET`
   *   `OAUTH_CLOUDFLARE_REDIRECT_URI`: `https://您的域名/oauth/callback`
   *   `OAUTH_CLOUDFLARE_ORG_DOMAIN`: 您的团队域名（如 `example.cloudflareaccess.com`）

<details>
<summary>点击查看：Cloudflare Access OAuth 配置示意图</summary>
<img height="250" src="/deploy/c6101ee8-f3c3-44f6-9286-f17865f8fb10.png" /><br />
<img height="300" src="/deploy/5ad539ec-1f0a-4141-be31-88f676c8011a.png" /><br />
<img height="300" src="/deploy/e4b00a92-9eb6-44a3-8819-b34e4dff2107.png" /><br />
<img height="500" src="/deploy/1e315f8f-1932-4c90-a2d7-0edf8049529f.png" /><br />
<img height="200" src="/deploy/c35b3083-96f1-46de-aa98-ae1b5bda0c78.png" />
</details>

### 3. Google
1. 前往 [Google Cloud Console](https://console.cloud.google.com/)，创建一个新项目。
2. 导航至 **API & Services** -> **OAuth consent screen**，完成基础设置。
3. 导航至 **Credentials** -> **Create Credentials** -> **OAuth client ID**。
4. 应用类型选择：**Web application**。
5. **Authorized redirect URIs**: `https://您的域名/oauth/callback`
6. **填入环境变量**：
   *   `OAUTH_GOOGLE_CLIENT_ID`
   *   `OAUTH_GOOGLE_CLIENT_SECRET`
   *   `OAUTH_GOOGLE_REDIRECT_URI`: `https://您的域名/oauth/callback`

### 4. Telegram
虽然 Telegram 无需 `REDIRECT_URI` 变量，但需要通过 BotFather 绑定域名：
1. 在 Telegram 搜索并添加官方机器人 **[@BotFather](https://t.me/BotFather)**，发送 `/newbot` 创建机器人。
2. 记录生成的 **Token** (`OAUTH_TELEGRAM_BOT_TOKEN`) 和 **用户名** (`OAUTH_TELEGRAM_BOT_NAME`)。
3. 对着 @BotFather 发送 `/setdomain` 指令，选择您的机器人，输入您的**应用域名**（如 `nodeauth.pages.dev`，不含 https）。
4. **关键步骤 (注册 Webhook)**：
   将下方链接中的 `<Token>` 和 `<域名>` 替换后，在浏览器中访问一次：
   `https://api.telegram.org/bot<Token>/setWebhook?url=https://<域名>/api/telegram/webhook`
5. **填入环境变量**：
   *   `OAUTH_TELEGRAM_BOT_NAME`
   *   `OAUTH_TELEGRAM_BOT_TOKEN`

### 5. Gitee
1. 访问 Gitee [第三方应用设置](https://gitee.com/oauth/applications) -> **创建应用**。
2. **应用回调地址**: `https://您的域名/oauth/callback`
3. 勾选权限：`user_info`。
4. **填入环境变量**：
   *   `OAUTH_GITEE_CLIENT_ID`
   *   `OAUTH_GITEE_CLIENT_SECRET`
   *   `OAUTH_GITEE_REDIRECT_URI`: `https://您的域名/oauth/callback`

### 6. NodeLoc 社区
1. 访问 [NodeLoc OAuth 设置](https://nodeloc.com/account/oauth-apps) 创建应用。
2. **Redirect URI**: `https://您的域名/oauth/callback`
3. **填入环境变量**：
   *   `OAUTH_NODELOC_CLIENT_ID`
   *   `OAUTH_NODELOC_CLIENT_SECRET`
   *   `OAUTH_NODELOC_REDIRECT_URI`: `https://您的域名/oauth/callback`

### 7. Web3 钱包登录 (WalletConnect)
1. 在 [WalletConnect Cloud](https://cloud.walletconnect.com/) 注册并创建一个新项目。
2. 填入：`OAUTH_WALLETCONNECT_PROJECT_ID`。
3. (可选) `OAUTH_WALLETCONNECT_SELF_PROXY=true` 可开启内置代理。

---

## 🗄️ 数据库引擎配置 (仅限 Docker 方式部署)

如果您使用 Cloudflare Workers 部署，系统会自动使用 D1 数据库，**无需配置**以下变量。

如果您在 Docker 或自己的服务器上部署：
*   **默认使用 SQLite**：仅需挂载 `/app/data` 目录，无需配置以下变量。
*   **使用 MySQL / PostgreSQL**：**必须**完整填写以下所有连接信息 (`DB_HOST` 到 `DB_NAME`)。

| 变量名 | 必填 (非 SQLite) | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `DB_ENGINE` | ✅ | `sqlite` | 数据库类型：支持 `sqlite`, `mysql`, `postgresql`。 |
| `DB_HOST` | ✅ | - | 数据库服务器地址。支持本地 `localhost`、Docker 服务名 `mysql-db`，以及 **远程域名** (如：`aws-1.pooler.supabase.com`) 或 **公网 IP**。 |
| `DB_PORT` | ✅ | - | 数据库端口。MySQL 默认为 `3306`，PostgreSQL 默认为 `5432`。 |
| `DB_USER` | ✅ | - | 数据库用户名。 |
| `DB_PASSWORD` | ✅ | - | 数据库密码。 |
| `DB_NAME` | ✅ | - | 具体的数据库名称。 |
| `DB_SSL` | ❌ | `false` | 是否启用 SSL 连接（连接远程云数据库如 Supabase 时建议设为 `true`）。 |

---

## 📦 云端自动备份配置 (可选)
详细配置流程请参考 [云端备份设置指南](../data/backup)。

如果您已配置了 Google 登录，部分变量可以通用，但**回调地址 (Redirect URI)** 必须使用备份专用路径。

| 网盘平台 | 客户端 ID 变量 | 客户端密钥 变量 | 备份专用回调地址变量 |
| :--- | :--- | :--- | :--- |
| **Google** | `OAUTH_GOOGLE_CLIENT_ID` | `OAUTH_GOOGLE_CLIENT_SECRET` | `OAUTH_GOOGLE_BACKUP_REDIRECT_URI` |
| **OneDrive** | `OAUTH_MICROSOFT_CLIENT_ID` | `OAUTH_MICROSOFT_CLIENT_SECRET` | `OAUTH_MICROSOFT_BACKUP_REDIRECT_URI` |
| **Dropbox** | `OAUTH_DROPBOX_CLIENT_ID` | `OAUTH_DROPBOX_CLIENT_SECRET` | `OAUTH_DROPBOX_BACKUP_REDIRECT_URI` |
| **Baidu** | `OAUTH_BAIDU_CLIENT_ID` | `OAUTH_BAIDU_CLIENT_SECRET` | `OAUTH_BAIDU_BACKUP_REDIRECT_URI` |

*注：回调地址统一格式为 `https://您的域名/api/backups/oauth/[平台名]/callback`*

---

## ⚙️ 其他可选配置

| 变量名 | 默认值 | 说明 |
| :--- | :--- | :--- |
| `LOG_LEVEL` | `info` | 日志级别：`debug`, `info`, `warn`, `error` |
| `PORT` | `3000` | (仅 Docker) 后端监听端口 |


> [!CAUTION]
> **警告**：修改 `ENCRYPTION_KEY` 会导致所有已存账号的验证码计算错误或无法解密。在备份完成前，请勿随意变动。
