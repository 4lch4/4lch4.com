hugo-build:
	hugo

update-tag:
	@if [ -z "$(VERSION)" ]; then echo "VERSION variable has not been set" && exit 1; fi
	@echo "Adding v$(VERSION) tag..."
	@git tag v$(VERSION) -m "Release v$(VERSION)"
	@$(MAKE) push

update-theme:
	@git add themes/toha
	@git commit -m 'chore: updated toha theme submodule'
	@git push

push:
	@echo "Pushing to Gitea..."
	@git push --follow-tags

start:
	@echo "Starting server..."
	@hugo server -w

build:
	@echo "Building for Vercel..."
	@vercel build -t $(VERCEL_TOKEN) --prod .

deploy: build
	@echo "Deploying to Vercel..."
	@vercel deploy -t $(VERCEL_TOKEN) --prod
