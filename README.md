# Mirmobe Apps

Pay hub for Mirmobe's apps. Each app: pay 0.05 SOL on-chain (Solana Pay QR, Phantom / Solflare deep links, Jupiter / any-wallet link) and verify the tx signature client-side, or buy in USD on Shopify.

- `index.html` – catalog
- `pay.html?app=<slug>` – pay page
- `apps.js` – catalog data (edit links/prices here)
- `vendor/` – bundled qrcode-generator (MIT) and @solana/web3.js (MIT)

Verification is client-side (per browser) and is not tamper-proof.
