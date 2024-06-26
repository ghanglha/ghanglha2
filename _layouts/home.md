
{% include head.html %}
{{content}}

{% include main-menu.html %}
    <div class="container">
    <section class="grid-3">
      {% for post in site.posts limit: 10 %}
        <div class="card">
            <a href="{{ post.url | absolute_url }}">
                <img src="{{post.featuredImage}}" alt="{{post.featuredImage}}">
                <h1>{{post.title}}</h1>
                <p>{{post.excerpt}}</p>
                <!-- <p>{{post.url | absolute_url}}</p> -->
            </a>
           <div class="card-meta"><span>{{post.date | date_to_string }}</span><span>{{post.category}}</span></div>
           <div class="flag">
            		<div class="blue"> </div>
            		<div class="white"> </div>
            		<div class="red"> </div>
            		<div class="yellow"> </div>	
            		<div class="green"> </div>		
            	</div>
        </div>
      {% endfor %} 
    </section>
    </div>


{% include about.html %}
{% include foot.html %}

