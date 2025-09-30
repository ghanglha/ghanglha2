source "https://rubygems.org"

ruby "~> 3.2.2"

# Jekyll core
gem "jekyll", "~> 4.3.4"
gem "webrick", "~> 1.3"
gem "jekyll-sass-converter"
gem "minima", "~> 2.5"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
end

# Windows / JRuby support (ignored on Linux)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"
end
