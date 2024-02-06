# Bento Frontend Installation Guide

🍱 Welcome to the Bento Frontend Installation Guide! 🍱

**Prerequisites:**
- Node 16.17.1
- NPM 8.15.0
- Lerna 6.6.7

**Installation Steps:**

1. **Clone Bento Frontend Repository:**
   ```bash
   git clone https://github.com/CBIIT/bento-frontend.git
   cd bento-frontend
   ```

2. **Install Node Modules:**
   ```bash
   npm install
   ```

3. **Navigate to Nginx Configuration Directory:**
   ```bash
   cd packages/bento-frontend/nginx/
   ```

4. **Install Nginx:**
   - Use the provided guide "local-nginx-setup-for-frontend.txt" to install Nginx on your Linux-based system.

5. **Return to the Root Folder:**
   ```bash
   cd ../../../
   ```

6. **Run Lerna to Start Bento Frontend:**
   ```bash
   lerna run start
   ```

🚀 Following these steps should have Bento Frontend up and running on your system. Enjoy exploring Bento! 🚀
