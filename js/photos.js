(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="angled-landscape" style="background-image: url('/photos/tint/Angled+Landscape-65ba1d.jpg')" title="Angled Landscape">
  <img class="lazyload" data-src="/photos/thumbnail/Angled+Landscape-ccf4df.jpg" src="/photos/tint/Angled+Landscape-65ba1d.jpg" height="5175" width="7758" />
  <span class="full">
    <span style="background-image: url('/photos/large/Angled+Landscape-686656.jpg')"></span>
  </span>
  <a class="open" href="/angled-landscape" data-target="angled-landscape">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/almost-due" data-target="almost-due" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/3200</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="almost-due" style="background-image: url('/photos/tint/Almost+Due-65ba1d.jpg')" title="Almost Due">
  <img class="lazyload" data-src="/photos/thumbnail/Almost+Due-ccf4df.jpg" src="/photos/tint/Almost+Due-65ba1d.jpg" height="6778" width="4521" />
  <span class="full">
    <span style="background-image: url('/photos/large/Almost+Due-686656.jpg')"></span>
  </span>
  <a class="open" href="/almost-due" data-target="almost-due">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/angled-landscape" data-target="angled-landscape" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/apples-in-the-sun" data-target="apples-in-the-sun" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="apples-in-the-sun" style="background-image: url('/photos/tint/Apples+In+The+Sun-65ba1d.jpg')" title="Apples In The Sun">
  <img class="lazyload" data-src="/photos/thumbnail/Apples+In+The+Sun-ccf4df.jpg" src="/photos/tint/Apples+In+The+Sun-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/photos/large/Apples+In+The+Sun-686656.jpg')"></span>
  </span>
  <a class="open" href="/apples-in-the-sun" data-target="apples-in-the-sun">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/almost-due" data-target="almost-due" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/apple-child" data-target="apple-child" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="apple-child" style="background-image: url('/photos/tint/Apple+&+Child-65ba1d.jpg')" title="Apple & Child">
  <img class="lazyload" data-src="/photos/thumbnail/Apple+&+Child-ccf4df.jpg" src="/photos/tint/Apple+&+Child-65ba1d.jpg" height="5974" width="3985" />
  <span class="full">
    <span style="background-image: url('/photos/large/Apple+&+Child-686656.jpg')"></span>
  </span>
  <a class="open" href="/apple-child" data-target="apple-child">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/apples-in-the-sun" data-target="apples-in-the-sun" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/abandoned-cube" data-target="abandoned-cube" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="abandoned-cube" style="background-image: url('/photos/tint/Abandoned+Cube-65ba1d.jpg')" title="Abandoned Cube">
  <img class="lazyload" data-src="/photos/thumbnail/Abandoned+Cube-ccf4df.jpg" src="/photos/tint/Abandoned+Cube-65ba1d.jpg" height="7690" width="5129" />
  <span class="full">
    <span style="background-image: url('/photos/large/Abandoned+Cube-686656.jpg')"></span>
  </span>
  <a class="open" href="/abandoned-cube" data-target="abandoned-cube">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/apple-child" data-target="apple-child" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/amy-szatkowski" data-target="amy-szatkowski" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="amy-szatkowski" style="background-image: url('/photos/tint/Amy+Szatkowski-65ba1d.jpg')" title="Amy Szatkowski">
  <img class="lazyload" data-src="/photos/thumbnail/Amy+Szatkowski-ccf4df.jpg" src="/photos/tint/Amy+Szatkowski-65ba1d.jpg" height="5185" width="7774" />
  <span class="full">
    <span style="background-image: url('/photos/large/Amy+Szatkowski-686656.jpg')"></span>
  </span>
  <a class="open" href="/amy-szatkowski" data-target="amy-szatkowski">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/abandoned-cube" data-target="abandoned-cube" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/attention-to-lighting" data-target="attention-to-lighting" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="attention-to-lighting" style="background-image: url('/photos/tint/Attention+To+Lighting-65ba1d.jpg')" title="Attention To Lighting">
  <img class="lazyload" data-src="/photos/thumbnail/Attention+To+Lighting-ccf4df.jpg" src="/photos/tint/Attention+To+Lighting-65ba1d.jpg" height="6276" width="4186" />
  <span class="full">
    <span style="background-image: url('/photos/large/Attention+To+Lighting-686656.jpg')"></span>
  </span>
  <a class="open" href="/attention-to-lighting" data-target="attention-to-lighting">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/amy-szatkowski" data-target="amy-szatkowski" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
`);