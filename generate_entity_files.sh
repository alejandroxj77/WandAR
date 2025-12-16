#!/bin/bash

# Check if parameter is passed
if [ -z "$1" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

NAME=$1

# Define paths
declare -a paths=(
  "./data/repositories/${NAME}RepositoryImpl.ts"
  "./data/dataSources/interfaces/${NAME}DataSourceInterface.ts"
  "./data/dataSources/entities/${NAME}DataSourceEntity.ts"
  "./data/dataSources/implementations/${NAME}DataSourceImpl.ts"
  "./repositories/${NAME}RepositoryInterface.ts"
)

# Create all required files
for path in "${paths[@]}"; do
  dir=$(dirname "$path")
  mkdir -p "$dir"
  touch "$path"
  echo "Created: $path"
done

# Ask if optional context file should be created
read -p "Do you want to create ${NAME}Context.ts in ./domain/contexts? (y/n): " create_context

if [[ "$create_context" =~ ^[Yy]$ ]]; then
  mkdir -p "./domain/contexts"
  touch "./domain/contexts/${NAME}Context.ts"
  echo "Created: ./domain/contexts/${NAME}Context.ts"
else
  echo "Skipped context file."
fi
