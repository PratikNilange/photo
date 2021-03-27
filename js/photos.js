(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="latur" style="background-image: url('/photos/tint/Latur-65ba1d.jpeg')" title="Latur">
  <img class="lazyload" data-src="/photos/thumbnail/Latur-ccf4df.jpeg" src="/photos/tint/Latur-65ba1d.jpeg" height="5773" width="4330" />
  <span class="full">
    <span style="background-image: url('/photos/large/Latur-686656.jpeg')"></span>
  </span>
  <a class="open" href="/latur" data-target="latur">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/reva-uni-fest-2018" data-target="reva-uni-fest-2018" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Redmi Note 7S</li>
    <li>1/4187</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="reva-uni-fest-2018" style="background-image: url('/photos/tint/REVA%20Uni%20Fest%202018-65ba1d.jpg')" title="REVA Uni Fest 2018">
  <img class="lazyload" data-src="/photos/thumbnail/REVA%20Uni%20Fest%202018-ccf4df.jpg" src="/photos/tint/REVA%20Uni%20Fest%202018-65ba1d.jpg" height="1200" width="1600" />
  <span class="full">
    <span style="background-image: url('/photos/large/REVA%20Uni%20Fest%202018-686656.jpg')"></span>
  </span>
  <a class="open" href="/reva-uni-fest-2018" data-target="reva-uni-fest-2018">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/latur" data-target="latur" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/bangalore-palace" data-target="bangalore-palace" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>InFocus M2_3G                  </li>
    <li>9997/1000000</li>
    <li><span class="aperture"><em>f</em>/</span>2.2</li>
	</ul> -->
</li>
<li class="item " id="bangalore-palace" style="background-image: url('/photos/tint/Bangalore%20Palace-65ba1d.jpg')" title="Bangalore Palace">
  <img class="lazyload" data-src="/photos/thumbnail/Bangalore%20Palace-ccf4df.jpg" src="/photos/tint/Bangalore%20Palace-65ba1d.jpg" height="1536" width="1152" />
  <span class="full">
    <span style="background-image: url('/photos/large/Bangalore%20Palace-686656.jpg')"></span>
  </span>
  <a class="open" href="/bangalore-palace" data-target="bangalore-palace">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/reva-uni-fest-2018" data-target="reva-uni-fest-2018" class="previous" title="Go to previous photo">
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
  <a href="/bangalore-palace" data-target="bangalore-palace" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
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
  <a href="/rajajinagar-bangalore" data-target="rajajinagar-bangalore" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/kial-bangalore" data-target="kial-bangalore" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="kial-bangalore" style="background-image: url('/photos/tint/KIAL%20Bangalore-65ba1d.jpg')" title="KIAL Bangalore">
  <img class="lazyload" data-src="/photos/thumbnail/KIAL%20Bangalore-ccf4df.jpg" src="/photos/tint/KIAL%20Bangalore-65ba1d.jpg" height="1200" width="1600" />
  <span class="full">
    <span style="background-image: url('/photos/large/KIAL%20Bangalore-686656.jpg')"></span>
  </span>
  <a class="open" href="/kial-bangalore" data-target="kial-bangalore">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rajkumar-road" data-target="rajkumar-road" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/garden-city-rajajinagar" data-target="garden-city-rajajinagar" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="garden-city-rajajinagar" style="background-image: url('/photos/tint/Garden%20City%20Rajajinagar-65ba1d.jpg')" title="Garden City Rajajinagar">
  <img class="lazyload" data-src="/photos/thumbnail/Garden%20City%20Rajajinagar-ccf4df.jpg" src="/photos/tint/Garden%20City%20Rajajinagar-65ba1d.jpg" height="1536" width="1152" />
  <span class="full">
    <span style="background-image: url('/photos/large/Garden%20City%20Rajajinagar-686656.jpg')"></span>
  </span>
  <a class="open" href="/garden-city-rajajinagar" data-target="garden-city-rajajinagar">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/kial-bangalore" data-target="kial-bangalore" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);