# Project Setup and Installation

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Database Setup](#database-setup)
4. [Start Project](#start-project)
5. [Running Tests](#running-tests)

## Prerequisites

Ensure you have the following tools installed:

- **Docker**: To run the project in containers.
- **Docker Compose**: For managing multi-container applications.

## Installation

1. **Clone the repository**:

   ```bash
   git clone git@gitlab.com:fr_kata_sf/c4-SF-0274-SQ02.git
   cd c4-SF-0274-SQ02
   ```

2. **Build docker images**

   ```bash
   docker-compose up --build
   ```

3. **Setup .env file**

   ```bash
   cp api/.env.example api/.env
   ```

4. **Install packages**

   ```bash
   docker exec -it pricing-api /bin/sh
   yarn install
   ```

## Database Setup

```bash
docker exec -it pricing-api /bin/sh
yarn migrate
yarn seed
```

## Start Project

```bash
docker exec -it pricing-api /bin/sh
yarn dev
```

## Running Tests

```bash
 docker exec -it pricing-api /bin/sh
 yarn migrate:test
 yarn seed:test
 yarn test
```

API: http://localhost:8001

Swagger API Docs: http://localhost:8001/docs
