.PHONY: install
install:
	npm i

.PHONY: ci
ci:
	npm ci --also=dev

# run the development server
.PHONY: dev
dev:
	npm run start

# create an optimized production build
.PHONY: build
build:
	npm run build


# prettier + eslint + tsc
.PHONY: lint
lint:
	npm run format
	npm run lint
	npm run type-check




