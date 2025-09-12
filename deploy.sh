#!/bin/bash

echo "🌸 Deploying ZenBites to Vercel..."

# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod

echo "✅ Deployment complete! Your ZenBites website is now live."