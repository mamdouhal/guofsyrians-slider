#!/bin/bash

# API Testing Script for Guofsyrians Slider Backend
# Tests all API endpoints

# Configuration
API_URL=${1:-"http://localhost:8787"}

echo "🧪 Testing Guofsyrians Slider API"
echo "=================================="
echo "API URL: $API_URL"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Function to test an endpoint
test_endpoint() {
    local name=$1
    local endpoint=$2
    local expected_field=$3
    
    echo -e "${BLUE}Testing:${NC} $name"
    echo "  GET $endpoint"
    
    response=$(curl -s "$API_URL$endpoint")
    
    # Check if response contains expected field
    if echo "$response" | grep -q "$expected_field"; then
        echo -e "  ${GREEN}✓ PASSED${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "  ${RED}✗ FAILED${NC}"
        echo "  Response: $response"
        ((TESTS_FAILED++))
    fi
    echo ""
}

# Start tests
echo "Starting API tests..."
echo ""

# Test 1: Health Check
test_endpoint "Health Check" "/" "Guofsyrians Slider API"

# Test 2: Get all cities
test_endpoint "Get All Cities" "/api/cities" "success"

# Test 3: Get specific city
test_endpoint "Get City (Istanbul)" "/api/cities/istanbul" "إسطنبول"

# Test 4: Get universities by city
test_endpoint "Get Universities (Istanbul)" "/api/cities/istanbul/universities" "success"

# Test 5: Get specific university
test_endpoint "Get University" "/api/universities/istanbul-universities" "الجامعات"

# Test 6: Get links by university
test_endpoint "Get Links (Istanbul)" "/api/universities/istanbul-universities/links" "success"

# Test 7: Get full catalog
test_endpoint "Get Full Catalog" "/api/catalog" "children"

# Test 8: Test 404
echo -e "${BLUE}Testing:${NC} 404 Not Found"
echo "  GET /api/invalid-endpoint"
response=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL/api/invalid-endpoint")
if [ "$response" = "404" ]; then
    echo -e "  ${GREEN}✓ PASSED${NC} (Got 404 as expected)"
    ((TESTS_PASSED++))
else
    echo -e "  ${RED}✗ FAILED${NC} (Expected 404, got $response)"
    ((TESTS_FAILED++))
fi
echo ""

# Summary
echo "=================================="
echo "Test Summary:"
echo -e "  ${GREEN}Passed: $TESTS_PASSED${NC}"
echo -e "  ${RED}Failed: $TESTS_FAILED${NC}"
echo "=================================="

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}All tests passed! ✓${NC}"
    exit 0
else
    echo -e "${RED}Some tests failed!${NC}"
    exit 1
fi
