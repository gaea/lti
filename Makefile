.PHONY: setup start stop test migrate migrate-undo logs clean

setup:
	cd backend && npm install
	cd frontend && npm install

start:
	docker compose up -d
	cd backend && npm run dev &
	cd frontend && npm start

stop:
	docker compose down
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
	docker compose logs -f

clean:
	docker compose down -v
	rm -rf backend/node_modules
	rm -rf frontend/node_modules
