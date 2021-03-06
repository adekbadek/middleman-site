###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  # activate :livereload, apply_css_live: false, apply_js_live: false
end

# tell Middleman to create a folder for each .html file and place the built template file as the index of that folder
activate :directory_indexes

activate :autoprefixer

activate :external_pipeline,
  name: :webpack,
  command: build? ? './node_modules/webpack/bin/webpack.js -p' : './node_modules/webpack/bin/webpack.js --watch -d',
  source: ".tmp/dist",
  latency: 1

###
# Helpers
###

# Build-specific configuration
configure :build do
  # Use relative URLs
  activate :relative_assets

  # Minify CSS on build
  activate :minify_css
end
