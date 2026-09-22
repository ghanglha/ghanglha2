{% include head.html %}
    <div class="container-flued blog-container" style='background-image:url({{page.featuredImage}});'>
        <div class="banner-featured ">
            <div class="banner-title article-heading">
                <h1>{{page.title}}</h1>
                <span>{{page.date | date_to_string }}</span>
            </div>
        </div>
    </div>
    <div class="container">
    <section>
        <article>
            {% if page.videoUrl %}
              <video controls style="max-width:100%;">
                <source src="{{ page.videoUrl }}">
              </video>
            {% endif %}
           {{content}}
        </article>
            {% include main-menu-aside.html %}
    </section>
    </div>
{% include foot.html %}

