(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="kial-20bangalore" style="background-image: url('/photos/tint/KIAL%2520Bangalore-65ba1d.jpg')" title="KIAL%20Bangalore">
  <img class="lazyload" data-src="/photos/thumbnail/KIAL%2520Bangalore-ccf4df.jpg" src="/photos/tint/KIAL%2520Bangalore-65ba1d.jpg" height="1200" width="1600" />
  <span class="full">
    <span style="background-image: url('/photos/large/KIAL%2520Bangalore-686656.jpg')"></span>
  </span>
  <a class="open" href="/kial-20bangalore" data-target="kial-20bangalore">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rajkumar-20road" data-target="rajkumar-20road" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="rajkumar-20road" style="background-image: url('/photos/tint/Rajkumar%2520Road-65ba1d.jpg')" title="Rajkumar%20Road">
  <img class="lazyload" data-src="/photos/thumbnail/Rajkumar%2520Road-ccf4df.jpg" src="/photos/tint/Rajkumar%2520Road-65ba1d.jpg" height="800" width="600" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rajkumar%2520Road-686656.jpg')"></span>
  </span>
  <a class="open" href="/rajkumar-20road" data-target="rajkumar-20road">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/kial-20bangalore" data-target="kial-20bangalore" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rajajinagar-20bangalore" data-target="rajajinagar-20bangalore" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="rajajinagar-20bangalore" style="background-image: url('/photos/tint/Rajajinagar%2520Bangalore-65ba1d.jpg')" title="Rajajinagar%20Bangalore">
  <img class="lazyload" data-src="/photos/thumbnail/Rajajinagar%2520Bangalore-ccf4df.jpg" src="/photos/tint/Rajajinagar%2520Bangalore-65ba1d.jpg" height="800" width="600" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rajajinagar%2520Bangalore-686656.jpg')"></span>
  </span>
  <a class="open" href="/rajajinagar-20bangalore" data-target="rajajinagar-20bangalore">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rajkumar-20road" data-target="rajkumar-20road" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);