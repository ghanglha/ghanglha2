{% include head.html %}
    <div class="container-flued blog-container" style='background-image:url({{page.featured-image}})'>
        <div class="banner-featured ">
            <div class="banner-title article-heading">
                <h1>Pretraining topic: {{page.title}}</h1>
                <span>10/14/2023</span>
            </div>
        </div>
    </div>
    <div class="container">
    <section>
        <article>
           {{content}}
        </article>
            {% include aside.html %}
    </section>
    </div>
{% include foot.html %}

