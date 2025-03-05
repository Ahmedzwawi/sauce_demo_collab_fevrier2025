#!/bin/bash
echo "Exécution des tests avec le tag @TC-001"
npx cypress run --env grepTags=@TC-003
