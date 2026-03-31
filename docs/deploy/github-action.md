# GitHub Action 自动化部署 (开发者推荐)

如果您希望拥有更高的控制权、版本追溯能力，或者需要更精确地管理 Cloudflare D1 数据库，GitHub Action 是最稳健的选择。

---

## 🛠️ 部署流程

### 1. 准备工作 (D1 数据库)
在 Cloudflare 后台创建一个名为 `nodeauth-db` 的数据库，并记录其 **Database ID**。
*   进入 `存储和数据库` -> `D1` -> `创建数据库`。

### 2. 获取 API 令牌
1.  登录 Cloudflare 控制面板。
2.  进入 [API 令牌页面](https://dash.cloudflare.com/profile/api-tokens)。
3.  点击 **"创建令牌"**，选择 **"编辑 Cloudflare Workers"** 模板。
4.  按照提示完成创建，并复制保存生成的令牌。

### 3. 配置仓库机密 (Secrets)
这是最关键的一步，绝不要把您的核心密钥写在代码里。
1.  进入您的 GitHub 项目，点击 **"Settings"** -> **"Secrets and variables"** -> **"Actions"**。
2.  点击 **"New repository secret"**，依次添加以下内容：

| 机密名 | 获取来源 / 建议值 |
| :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | 您刚刚在 Cloudflare 生成的 API 令牌 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Workers 后台右侧显示的账户 ID |
| `CLOUDFLARE_D1_DATABASE_ID` | 您刚刚创建的 `nodeauth-db` 的 ID |
| `CLOUDFLARE_D1_DATABASE_NAME` | `nodeauth-db` |
| `ENCRYPTION_KEY` | 32 位以上随机密钥 |
| `JWT_SECRET` | 32 位以上随机密钥 |
| `OAUTH_ALLOWED_USERS` | 您的登录白名单邮箱 |
| **三方登录机密 (示例)** | **详细获取请参考 [登录平台配置](./env-vars.md#-登录平台配置-至少配置一个-支持多个)** |
| `OAUTH_GITHUB_CLIENT_ID` | 您申请的 GitHub Client ID |
| `OAUTH_GITHUB_CLIENT_SECRET`| 您申请的 GitHub Client Secret |
| `OAUTH_GITHUB_REDIRECT_URI` | `https://您的域名/oauth/callback` |

### 4. 触发部署
*   **初次部署**：点击项目顶部的 **"Actions"**，选择 `Deploy to Cloudflare Workers` 工作流，点击 **"Run workflow"**。
*   **后续更新**：每当您向 `main` 分支推送代码，GitHub 都会自动帮您完成部署并同步数据库。

---

## 💡 为什么选择 GitHub Action？
*   **部署全透明**：每一次部署都有日志记录，出错时一目了然。
*   **机密更安全**：所有密钥由 GitHub 高强度加密存储，即便仓库被公开，密钥也依然处于保护状态。
*   **持续集成**：自动化测试与预览机制能确保您推送的代码始终是可用的。

<!-- [📸 UI截图提示：此处展示 GitHub Secrets 的配置页面截图及 Actions 运行状态截图] -->
