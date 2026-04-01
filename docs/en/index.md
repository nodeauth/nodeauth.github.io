---
layout: home

hero:
  name: NodeAuth
  tagline: High-security, lightweight, cross-platform 2FA/TOTP management tool supporting Cloudflare Serverless and Docker on-premise deployment.
  actions:
    - theme: brand
      text: Demo
      link: https://demo.nodeauth.io
    - theme: alt
      text: Get Started
      link: /en/deploy/index
    - theme: alt
      text: GitHub Repo
      link: https://github.com/nodeauth/nodeauth-worker

features:
  - icon: 🛡️
    title: Ultimate Security
    details: AES-GCM-256 full database cold encryption, decryption keys stored only in local memory to ensure data sovereignty.
  - icon: ⚡
    title: Instant Startup
    details: 0.1s instant response based on PWA preloading technology, stable even in weak or offline environments.
  - icon: 🌍
    title: Flexible Deployment
    details: Supports zero-cost high-availability deployment on Cloudflare Workers and private Docker deployment.
  - icon: 📦
    title: 20+ App Migration
    details: Universal import engine automatically recognizes Bitwarden, 1Password, GA, Aegis, and other formats.
  - icon: 🔑
    title: Zero-Knowledge
    details: Core decryption keys are never uploaded. Even if the database is leaked, your privacy remains secure.
  - icon: 🔐
    title: Biometric Support
    details: Deeply integrated FaceID and fingerprint recognition (WebAuthn) for perfect balance of safety and efficiency.
  - icon: 🔄
    title: Smart Sync
    details: Multi-device conflict resolution with offline action offset optimization, ensuring millisecond-level alignment.
  - icon: 👻
    title: Ghost Mode
    details: Instant 15px Gaussian blur when backgrounded. Sensitive codes are only revealed after 250ms long-press.
  - icon: 🚑
    title: Emergency Recovery
    details: PDF Master Key backup ensures 100% asset retrieval even in extreme disaster scenarios.
  - icon: 🪣
    title: Multi-dimensional Backup
    details: Supports regular encrypted backups to S3, WebDAV, Telegram Bot, and Email.
  - icon: 📱
    title: Full Platform PWA
    details: Native App hand-feel, perfectly adapted to iOS, Android, and major desktop operating systems.
  - icon: 🛡️
    title: Smart Shield
    details: Automatically detects environment safety. Access is blocked if the environment is unhealthy to prevent tampering.
  - icon: 🎮
    title: Steam Guard Master
    details: Deep adaptation for Steam URI and .maFile, supporting segmented display and anti-phishing validation.
  - icon: 💡
    title: Next Code Pre-read
    details: Click to reveal the next period's dynamic code, ending the anxiety of last-second entries.
  - icon: 🎨
    title: Visual Chunking
    details: 3+3 or 2+3 whitespace segmentation greatly improves eye recognition and manual entry efficiency.
  - icon: 🔗
    title: Web3 Authentication
    details: Supports Ethereum wallet signature login for 100% self-hosted decentralized identity access.
  - icon: 🎡
    title: Mobile Hub Center
    details: One-hand optimized bottom navigation with an ergonomic arc layout for core functions.
  - icon: 🎟️
    title: Allowlist Gatekeeper
    details: Supports environment-level user admission rules, easily building invitation-based private instances.
  - icon: ❄️
    title: Physical Air-Gap
    details: True offline architecture, supporting physical-level local decryption in uncertain network environments.
  - icon: 📉
    title: Minimalist Philosophy
    details: Follows atomic design standards, removing all visual clutter to let the tool return to its security essence.
---

<style>
.VPHome {
  margin-bottom: 50px !important;
}

.VPFeature {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  height: 100% !important;
  padding: 0 !important;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  transition: border-color 0.25s;
}

.VPFeature:hover {
  border-color: var(--vp-c-brand);
  padding: 0 !important;
}

.VPFeature .box {
  display: grid !important;
  grid-template-columns: auto 1fr !important;
  grid-template-rows: auto auto !important;
  grid-template-areas: 
    "icon title"
    "details details" !important;
  column-gap: 0.5rem !important;
  align-items: center !important;
  width: 100% !important;
  padding: 12px 20px !important;
}

/** Homepage Feature Area: Responsive 4-Column Left-Aligned Layout **/
.VPFeatures .items {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: flex-start !important; /* Force left alignment */
  gap: 16px !important;
  max-width: none !important;
}

.VPFeatures .item {
  flex: 0 0 calc(25% - 12px) !important; /* Default 4 columns (100%/4 - gap) */
  max-width: none !important;
  box-sizing: border-box !important;
  padding: 0px !important;
}

@media (max-width: 1200px) {
  .VPFeatures .item {
    flex: 0 0 calc(33.333% - 11px) !important; /* 3 columns */
  }
}

@media (max-width: 960px) {
  .VPFeatures .item {
    flex: 0 0 calc(50% - 8px) !important; /* 2 columns */
  }
}

@media (max-width: 640px) {
  .VPFeatures .item {
    flex: 0 0 100% !important; /* 1 column */
  }
}

.VPFeature .icon {
  grid-area: icon;
  margin: 0 !important;
  width: 32px !important;
  height: 32px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: none !important;
  font-size: 18px;
}

.VPFeature .title {
  grid-area: title;
  margin: 0 !important;
  line-height: 1.4 !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1) !important;
}

.VPFeature .details {
  grid-area: details;
  margin-top: 2px !important;
  line-height: 1.5 !important;
  font-size: 0.88rem !important;
  color: var(--vp-c-text-2) !important;
}
</style>
