#!/bin/bash

# Azure Custom Domain Setup Script
# Run this AFTER adding the TXT record to your DNS

echo "🌐 Setting up reportr.ai custom domain on Azure Container Apps..."

# Step 1: Add custom domain
echo "📝 Adding custom domain..."
az containerapp hostname add --hostname reportr.ai --name reportr-marketing-app --resource-group reportr-rg

# Step 2: Bind SSL certificate (auto-provisioned)
echo "🔒 Setting up SSL certificate..."
az containerapp hostname bind --hostname reportr.ai --name reportr-marketing-app --resource-group reportr-rg

# Step 3: Add www subdomain (optional)
echo "🌍 Adding www subdomain..."
az containerapp hostname add --hostname www.reportr.ai --name reportr-marketing-app --resource-group reportr-rg
az containerapp hostname bind --hostname www.reportr.ai --name reportr-marketing-app --resource-group reportr-rg

echo "✅ Domain setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Update your DNS CNAME record:"
echo "   reportr.ai → reportr-marketing-app.yellowmushroom-29dd0ed5.australiaeast.azurecontainerapps.io"
echo "2. Wait 5-10 minutes for DNS propagation"
echo "3. Test: https://reportr.ai"
echo ""
echo "💡 Your new marketing website will be live at reportr.ai!"