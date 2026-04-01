import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "NodeAuth Wiki",
    description: "高安全、轻量级二步验证 (2FA/TOTP) 管理工具WIKI文档",
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: '🏠 首页', link: '/' },
            { text: '🛠️ 部署教程', link: '/deploy/index' },
            { text: '📱 PWA指南', link: '/pwa/' },
            { text: '📥 搬家迁移', link: '/data/import' },
            { text: '☁️ 云端备份', link: '/data/backup' }
        ],

        sidebar: [
            {
                text: '🚀 项目特色',
                items: [
                    { text: '项目介绍', link: '/features/index' },
                    { text: '极致安全', link: '/features/security' },
                    { text: '极致体验', link: '/features/experience' }
                ]
            },
            {
                text: '🛠️ 部署教程',
                items: [
                    { text: '部署方案（三选一）', link: '/deploy/index' },
                    { text: 'Cloudflare Worker 部署', link: '/deploy/cf-worker' },
                    { text: 'Docker 私有化部署', link: '/deploy/docker' },
                    { text: 'GitHub Action 自动化部署', link: '/deploy/github-action' },
                    { text: '环境变量配置指南', link: '/deploy/env' },
                    { text: '项目初始化教程', link: '/deploy/setup' },
                    { text: '更新与维护指南', link: '/deploy/update' }
                ]
            },
            {
                text: '📱 PWA 安装指南',
                link: '/pwa/'
            },
            {
                text: '📥 搬家迁移',
                items: [
                    { text: '全平台数据导入', link: '/data/import' }
                ]
            },
            {
                text: '📂 备份设置与管理',
                items: [
                    { text: '云端自动备份', link: '/data/backup' },
                    { text: '数据手动导出', link: '/data/export' }
                ]
            },
            {
                text: '🚑 容灾自救中心',
                items: [
                    { text: '灾难恢复决策矩阵', link: '/recovery/index' }
                ]
            },
            {
                text: '👤 账号管理',
                items: [
                    { text: '基础操作 (增删改查)', link: '/vault/index' },
                    { text: '进阶管理 (排序搜索)', link: '/vault/efficiency' }
                ]
            },
            {
                text: '🛡️ 安全访问控制',
                items: [
                    { text: '通行密钥', link: '/security/passkey' },
                    { text: '安全锁定', link: '/security/lock' },
                    { text: '离线模式', link: '/security/offline-mode' },
                    { text: '防窥模式', link: '/security/ghost-mode' },
                    { text: '设备管理', link: '/security/session' }
                ]
            },
            {
                text: '🧰 实用工具',
                items: [
                    { text: 'TOTP 核心工具箱', link: '/tools/index' },
                    { text: '2FA APP 生态排行榜', link: '/tools/ranking' },
                    { text: '辅助小工具 (密码/QR)', link: '/tools/utils' }
                ]
            },
            {
                text: '🎨 个性化设置',
                link: '/settings/appearance'
            },
            {
                text: '💡 其他说明',
                items: [
                    { text: '离线功能边界说明', link: '/misc/offline-limits' },
                    { text: '联系作者与路线图', link: '/misc/contacts' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/nodeauth/nodeauth-worker' }
        ],

        footer: {
            message: '基于 GNU AGPL v3 协议开源',
            copyright: `Copyright © ${new Date().getFullYear()} NodeAuth`
        }
    }
})
