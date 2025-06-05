# Full-Stack Applicant Tracking System Project Setup

Create a full-stack application for an Applicant Tracking System with the following specifications:

## Project Structure

Create a project with this directory structure:
```
.
├── backend/           # Express.js backend
│   ├── src/
│   │   ├── domain/        # Domain models and business logic
│   │   ├── application/   # Application services and use cases
│   │   ├── infrastructure/# Database and external services config
│   │   └── interfaces/    # API routes and controllers
├── frontend/         # React frontend
│   ├── public/      # Static files
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/        # Page-level components
│       └── services/     # API integration services
└── docker-compose.yml # Docker services configuration
```

## Backend Requirements

1. **Technology Stack:**
   - Express.js as web server
   - Sequelize as ORM and migrations manager
   - PostgreSQL database
   - Jest for testing

2. **Implementation Details:**
   - Follow Domain-Driven Design (DDD) principles
   - Implement Test-Driven Development (TDD)
   - Create a health check endpoint at `/api/health`
   - Run on port 3000

3. **User Model Fields:**
   - id (UUID, primary key)
   - email (unique, required)
   - firstName (required)
   - lastName (required)
   - status (enum: active/inactive)
   - timestamps (createdAt, updatedAt)

## Frontend Requirements

1. **Technology Stack:**
   - React
   - Bootstrap for styling
   - Jest for testing
   - Run on port 3001

2. **Implementation Details:**
   - Create a welcome page with ATS system description
   - Implement a responsive navigation header
   - Display key features of the ATS system
   - Follow component-based architecture

## Database Configuration

Use Docker Compose to manage PostgreSQL with these settings:
- Database name: ats_db
- Username: ats_user
- Password: ats_password
- Port: 5432

## Development Tools

1. **Create a Makefile with commands:**
   - `make setup`: Install dependencies
   - `make start`: Start all services
   - `make stop`: Stop all services
   - `make test`: Run tests
   - `make migrate`: Run database migrations
   - `make migrate-undo`: Rollback migrations
   - `make logs`: View service logs
   - `make clean`: Clean up dependencies

2. **Version Control:**
   - Initialize Git repository
   - Configure `.gitignore` for Node.js, React, and PostgreSQL
   - Use `.gitkeep` files to maintain empty directories

## Testing Requirements

1. **Backend Tests:**
   - Unit tests for the health check endpoint
   - Test database configuration
   - Model validation tests

2. **Frontend Tests:**
   - Component rendering tests
   - Content verification tests
   - User interaction tests

## File Contents

### Backend Configuration Files

1. **package.json:**
```json
{
  "name": "ats-backend",
  "version": "1.0.0",
  "description": "Backend for Applicant Tracking System",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "express": "^4.18.2",
    "sequelize": "^6.35.2",
    "pg": "^8.11.3",
    "pg-hstore": "^2.3.4",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "supertest": "^6.3.3",
    "@babel/core": "^7.23.7",
    "@babel/preset-env": "^7.23.7",
    "nodemon": "^3.0.2"
  }
}
```

### Frontend Configuration Files

1. **package.json:**
```json
{
  "name": "ats-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "bootstrap": "^5.3.2",
    "axios": "^1.6.2"
  },
  "scripts": {
    "start": "PORT=3001 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Docker Configuration

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: ats_user
      POSTGRES_PASSWORD: ats_password
      POSTGRES_DB: ats_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Makefile Configuration

```makefile
.PHONY: setup start stop test migrate migrate-undo logs clean

setup:
	cd backend && npm install
	cd frontend && npm install

start:
	docker-compose up -d
	cd backend && npm run dev &
	cd frontend && npm start

stop:
	docker-compose down
	pkill -f "node ./src/server.js"
	pkill -f "react-scripts start"

test:
	cd backend && npm test
	cd frontend && npm test

migrate:
	cd backend && npx sequelize-cli db:migrate

migrate-undo:
	cd backend && npx sequelize-cli db:migrate:undo

logs:
	docker-compose logs -f

clean:
	docker-compose down -v
	rm -rf backend/node_modules
	rm -rf frontend/node_modules
```

## Getting Started

1. Create the project structure
2. Copy all configuration files
3. Install dependencies: `make setup`
4. Start services: `make start`
5. Run migrations: `make migrate`
6. Access the application:
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000
   - Health Check: http://localhost:3000/api/health 