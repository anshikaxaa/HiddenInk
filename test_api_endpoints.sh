#!/bin/bash

# Base URL of the deployed backend API
BASE_URL="https://hidden-ink.vercel.app/api/auth"

echo "Testing simple-test endpoint..."
curl -s -X GET "$BASE_URL/simple-test" | jq .

echo "Testing signup endpoint with missing fields..."
curl -s -X POST "$BASE_URL/signup" -H "Content-Type: application/json" -d '{}' | jq .

echo "Testing signup endpoint with valid data..."
curl -s -X POST "$BASE_URL/signup" -H "Content-Type: application/json" -d '{"email":"testuser@example.com","password":"password123"}' | jq .

echo "Testing login endpoint with invalid credentials..."
curl -s -X POST "$BASE_URL/login" -H "Content-Type: application/json" -d '{"email":"wrong@example.com","password":"wrongpass"}' | jq .

echo "Testing login endpoint with valid credentials..."
curl -s -X POST "$BASE_URL/login" -H "Content-Type: application/json" -d '{"email":"testuser@example.com","password":"password123"}' | jq .

# Add more tests for notes CRUD and encryption when implemented
