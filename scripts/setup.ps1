#!/usr/bin/env powershell
# Quick Database & Backend Setup Script for Windows

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Portfolio Backend Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check Node.js
Write-Host "`n[1/5] Checking Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Node.js $nodeVersion found" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "`n[2/5] Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Check if Docker is available
Write-Host "`n[3/5] Checking for Docker..." -ForegroundColor Yellow
$dockerAvailable = $false
try {
    $null = docker --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        $dockerAvailable = $true
        Write-Host "✓ Docker found" -ForegroundColor Green
    }
} catch {
    $dockerAvailable = $false
}

if ($dockerAvailable) {
    Write-Host "`n[4/5] Starting MySQL with Docker..." -ForegroundColor Yellow
    docker-compose up -d
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Docker container started" -ForegroundColor Green
        Write-Host "`n   Waiting for MySQL to be ready..." -ForegroundColor Cyan
        Start-Sleep -Seconds 3
    } else {
        Write-Host "✗ Failed to start Docker container" -ForegroundColor Red
    }
} else {
    Write-Host "⚠ Docker not found. Make sure MySQL is running locally!" -ForegroundColor Yellow
}

# Setup database schema
Write-Host "`n[5/5] Setting up database schema..." -ForegroundColor Yellow
npm run db:setup
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Database schema created" -ForegroundColor Green
} else {
    Write-Host "✗ Database schema creation failed" -ForegroundColor Red
    Write-Host "Make sure MySQL is running and credentials in .env are correct" -ForegroundColor Yellow
    exit 1
}

# Seed database
Write-Host "`n   Seeding sample data..." -ForegroundColor Cyan
npm run db:seed
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Sample data seeded" -ForegroundColor Green
} else {
    Write-Host "⚠ Seeding failed (this may not be critical)" -ForegroundColor Yellow
}

Write-Host "`n==================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. Start backend:    npm run dev" -ForegroundColor White
Write-Host "  2. Test health:      http://localhost:5000/api/health" -ForegroundColor White
Write-Host "  3. Frontend (new terminal): npm run dev" -ForegroundColor White
Write-Host "`nDocumentation:" -ForegroundColor Yellow
Write-Host "  • Database setup: DATABASE_SETUP.md" -ForegroundColor White
Write-Host "  • API Reference: README.md" -ForegroundColor White
Write-Host "`n" -ForegroundColor Cyan
