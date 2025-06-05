# Applicant Tracking System

A full-stack application for managing job applicants and tracking their application process.

## Project Structure

```
.
├── backend/           # Express.js backend
├── frontend/         # React frontend
└── docker-compose.yml # Docker services configuration
```

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- Make

## Getting Started

1. Clone the repository
2. Run `make setup` to install dependencies
3. Run `make start` to start all services

## Available Make Commands

- `make setup` - Install all dependencies
- `make start` - Start all services (backend, frontend, database)
- `make stop` - Stop all services
- `make test` - Run tests for both backend and frontend
- `make migrate` - Run database migrations
- `make migrate-undo` - Rollback last migration
- `make logs` - View logs from all services

## Development

### Backend
- Express.js with Sequelize ORM
- DDD architecture
- Jest for testing
- PostgreSQL database

### Frontend
- React with Bootstrap
- Component-based architecture
- Jest for testing

## API Documentation

The backend API is available at `http://localhost:3000`
The frontend application runs at `http://localhost:3001`
