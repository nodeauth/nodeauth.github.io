# Cloudflare Worker 部署教程 (推荐)

这是最省心、最快捷的部署方式。您完全不需要购买服务器，由 Cloudflare 全球加速网络免费为您托管，真正实现**零成本、零维护**。

---

## 🛠️ 部署步骤

### 1. 准备工作
1.  **Fork** 本项目仓库到您的 GitHub 账号。
2.  给本项目点一个 **Star** ⭐（这能帮您更方便地接收到后续更新提示）。

### 2. 一键自动化部署
1.  点击下方的部署按钮：<br />
    [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create)
2.  在弹出的页面中点击 **"Continue with GitHub"**。
3.  授权 Cloudflare 读取您的仓库，并选择您刚刚 Fork 的 `nodeauth` 项目。
4.  点击 **"部署"**，等待进度条完成后点击 **"继续处理项目"**。

### 3. 配置核心变量
部署成功后，应用暂时还无法运行，您需要注入安全密钥：
1.  进入项目控制面板，点击 **"设置" (Settings)** -> **"变量与机密" (Variables & Secrets)**。
2.  点击 **"添加"**，依次填入以下必需项（建议参考 [环境变量指南](./env-vars.md)）：
    *   `ENCRYPTION_KEY`：32 位以上随机密钥。
    *   `JWT_SECRET`：32 位以上随机密钥。
    *   `OAUTH_ALLOWED_USERS`：您的登录邮箱。
3.  **别忘了登录渠道**：如果您想用 GitHub 登录，还需添加 `OAUTH_GITHUB_CLIENT_ID` 等变量。
4.  完成后点击 **"部署"** 保存更改。

---

## 🌐 定制您的域名
默认情况下，Cloudflare 会分配一个 `xxx.workers.dev` 的二级域名。如果您有自己的域名：
1.  在项目设置中点击 **"触发器" (Triggers)**。
2.  找到 **"自定义域" (Custom Domains)** -> **"添加自定义域"**。
3.  输入您想绑定的域名（如 `2fa.example.com`），Cloudflare 会自动为您配置 DNS。

---

## �️ 进阶：本地开发
如果您是开发者，可以使用命令行工具进行调试：
1.  安装依赖：`npm install`
2.  本地预览：`npm run dev`
3.  手动部署：`npm run deploy`

<!-- [📸 UI截图提示：此处展示 Cloudflare Workers 控制面板的变量添加界面截图] -->
