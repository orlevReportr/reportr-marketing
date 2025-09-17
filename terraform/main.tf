terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Use existing resource group
data "azurerm_resource_group" "main" {
  name = "reportr-rg"
}

# Container Registry
resource "azurerm_container_registry" "main" {
  name                = "reportrmarketingregistry"
  resource_group_name = data.azurerm_resource_group.main.name
  location            = data.azurerm_resource_group.main.location
  sku                 = "Basic"
  admin_enabled       = true

  tags = {
    Environment = "production"
    Project     = "reportr-marketing"
  }
}

# Log Analytics Workspace (required for Container Apps)
resource "azurerm_log_analytics_workspace" "main" {
  name                = "reportr-marketing-logs"
  location            = data.azurerm_resource_group.main.location
  resource_group_name = data.azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = 30

  tags = {
    Environment = "production"
    Project     = "reportr-marketing"
  }
}

# Container Apps Environment
resource "azurerm_container_app_environment" "main" {
  name                       = "reportr-marketing-env"
  location                   = data.azurerm_resource_group.main.location
  resource_group_name        = data.azurerm_resource_group.main.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id

  tags = {
    Environment = "production"
    Project     = "reportr-marketing"
  }
}

# Container App
resource "azurerm_container_app" "main" {
  name                         = "reportr-marketing-app"
  container_app_environment_id = azurerm_container_app_environment.main.id
  resource_group_name          = data.azurerm_resource_group.main.name
  revision_mode                = "Single"

  template {
    min_replicas = 0
    max_replicas = 2

    container {
      name   = "reportr-marketing"
      image  = "mcr.microsoft.com/azuredocs/containerapps-helloworld:latest"
      cpu    = 0.25
      memory = "0.5Gi"

      env {
        name  = "SENDGRID_API_KEY"
        value = var.sendgrid_api_key
      }

      env {
        name  = "NODE_ENV"
        value = "production"
      }
    }
  }

  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = 3000

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }

  registry {
    server   = azurerm_container_registry.main.login_server
    username = azurerm_container_registry.main.admin_username
    password_secret_name = "registry-password"
  }

  secret {
    name  = "registry-password"
    value = azurerm_container_registry.main.admin_password
  }

  tags = {
    Environment = "production"
    Project     = "reportr-marketing"
  }
}

# Output important information
output "container_app_url" {
  value = "https://${azurerm_container_app.main.latest_revision_fqdn}"
  description = "The URL of the deployed container app"
}

output "container_registry_url" {
  value = azurerm_container_registry.main.login_server
  description = "Container registry URL"
}

output "container_registry_username" {
  value = azurerm_container_registry.main.admin_username
  description = "Container registry username"
}

output "container_registry_password" {
  value = azurerm_container_registry.main.admin_password
  description = "Container registry password"
  sensitive = true
}