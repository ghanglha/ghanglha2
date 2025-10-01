source "https://rubygems.org"

ruby "~> 3.2.3"

# Jekyll core
gem "jekyll", "~> 4.4.1"
gem "webrick", "~> 1.3"         # Required for Ruby >= 3.0
gem "jekyll-sass-converter"
gem "minima", "~> 2.5"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"           # optional, recommended for SEO
end

# Windows / JRuby support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"
end
