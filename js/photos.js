(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="kial-bangalore" style="background-image: url('/photos/tint/KIAL%20Bangalore-65ba1d.jpg')" title="KIAL Bangalore">
  <img class="lazyload" data-src="/photos/thumbnail/KIAL%20Bangalore-ccf4df.jpg" src="/photos/tint/KIAL%20Bangalore-65ba1d.jpg" height="1200" width="1600" />
  <span class="full">
    <span style="background-image: url('/photos/large/KIAL%20Bangalore-686656.jpg')"></span>
  </span>
  <a class="open" href="/kial-bangalore" data-target="kial-bangalore">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rajkumar-road" data-target="rajkumar-road" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="rajkumar-road" style="background-image: url('/photos/tint/Rajkumar%20Road-65ba1d.jpg')" title="Rajkumar Road">
  <img class="lazyload" data-src="/photos/thumbnail/Rajkumar%20Road-ccf4df.jpg" src="/photos/tint/Rajkumar%20Road-65ba1d.jpg" height="800" width="600" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rajkumar%20Road-686656.jpg')"></span>
  </span>
  <a class="open" href="/rajkumar-road" data-target="rajkumar-road">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/kial-bangalore" data-target="kial-bangalore" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rajajinagar-bangalore" data-target="rajajinagar-bangalore" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="rajajinagar-bangalore" style="background-image: url('/photos/tint/Rajajinagar%20Bangalore-65ba1d.jpg')" title="Rajajinagar Bangalore">
  <img class="lazyload" data-src="/photos/thumbnail/Rajajinagar%20Bangalore-ccf4df.jpg" src="/photos/tint/Rajajinagar%20Bangalore-65ba1d.jpg" height="800" width="600" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rajajinagar%20Bangalore-686656.jpg')"></span>
  </span>
  <a class="open" href="/rajajinagar-bangalore" data-target="rajajinagar-bangalore">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rajkumar-road" data-target="rajkumar-road" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);