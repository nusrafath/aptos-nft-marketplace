# Aptos NFT Marketplace

A modern NFT marketplace built on the Aptos blockchain using Next.js, TypeScript, and the Aptos SDK.

## Features

- ✨ NFT Minting
- 🛍️ NFT Marketplace (Buy/Sell)
- 💰 Creator Donations
- 📊 Marketplace Statistics
- 🔄 NFT Transfers
- 👛 Petra Wallet Integration
- 🎨 Rarity System
- 📱 Responsive Design

## Smart Contract Features

- NFT Minting with rarity levels
- Listing NFTs for sale
- Purchasing NFTs
- Creator donations
- NFT transfers
- Marketplace statistics

## Frontend Features

- Responsive design
- Wallet connection management
- NFT browsing and filtering
- Creator statistics
- Transaction notifications
- Protected routes

## Security Features

- Protected routes middleware
- Wallet connection verification
- Input validation
- Transaction error handling
- Secure wallet integration

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Blockchain**: Aptos Network
- **Wallet**: Petra Wallet
- **Smart Contract**: Move Language
- **UI Components**: Radix UI, Shadcn/ui
- **State Management**: React Hooks

## Prerequisites

- Node.js 18+
- Aptos CLI
- Petra Wallet Browser Extension
- Git

## Environment Setup

1. **Install Aptos CLI**

   ```bash
   curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3

   # Verify installation
   aptos --version
   ```

2. **Install Petra Wallet**
   - Install the Petra Wallet browser extension from [Chrome Web Store](https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci)
   - Create a new wallet or import existing one
   - Switch to Testnet network

## Smart Contract Deployment

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd aptos-nft-marketplace
   ```

2. **Configure Aptos Account**

   ```bash
   # Create new account
   aptos init

   # Fund your account with test tokens
   # Visit https://aptoslabs.com/testnet-faucet
   ```

3. **Deploy the Smart Contract**

   ```bash
   # Navigate to contract directory
   cd aptos-contracts

   # Compile the contract
   aptos move compile

   # Deploy to testnet
   aptos move publish
   ```

## Frontend Setup

1. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```
