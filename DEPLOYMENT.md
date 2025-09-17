# Deployment Guide

## Azure Container Apps Deployment

### Prerequisites
- Azure subscription with Container Apps provider registered
- GitHub repository with secrets configured

### GitHub Secrets Required

Add these secrets to your GitHub repository at:
`https://github.com/orlevReportr/reportr-marketing/settings/secrets/actions`

1. **ACR_USERNAME** = `reportrmarketingregistry`
2. **ACR_PASSWORD** = `[Your ACR Password from Terraform output]`
3. **SENDGRID_API_KEY** = `[Your SendGrid API Key]`
4. **AZURE_CREDENTIALS** =
```json
{
  "clientId": "[Your Client ID]",
  "clientSecret": "[Your Client Secret]",
  "subscriptionId": "[Your Subscription ID]",
  "tenantId": "[Your Tenant ID]"
}
```

### Infrastructure Deployment

1. Ensure Azure CLI is logged in and Terraform is installed
2. Navigate to terraform directory: `cd terraform`
3. Set environment variable: `export TF_VAR_sendgrid_api_key="your-sendgrid-key"`
4. Initialize Terraform: `terraform init`
5. Apply configuration: `terraform apply`

### Application Deployment

Once GitHub secrets are configured, simply push to main branch:
```bash
git push origin main
```

The GitHub Actions workflow will automatically:
- Build Docker image
- Push to Azure Container Registry
- Deploy to Azure Container Apps

### Cost Information
- **Container Registry**: ~$1/month
- **Container App**: $0 when idle, ~$5-10/month when active
- **Log Analytics**: ~$2-5/month
- **Total**: ~$8-16/month