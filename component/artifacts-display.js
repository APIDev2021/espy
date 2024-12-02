class ArtifactsDisplay extends HTMLElement {
    static observedAttributes = [];

    constructor() {
      super();
    }

    connectedCallback() {

      this.innerHTML = `
        <div id="artifacts">

        <!-- HAZARD DIVIDER -->
        <div class="divider hazard artifacts-extra">
            <img src="artifact/hazard.gif"/>
        </div>

        <!-- HEX STAMPS -->
        <div class="artifacts-container artifacts-extra">
            <div id="hex-stamps" class="honeycomb hc-mini">
                <img src="artifact/espeon2.gif" />
                <img src="artifact/espeon3.gif" />
                <a href="https://al-the-raven.neocities.org/"
                    ><img src="artifact/pinkflower.png"
                /></a>
                <a href="https://mooeena.site/honeycomb"><img src="artifact/progress.png" /></a>
                <a href="https://mooeena.site/honeycomb"
                    ><img src="artifact/PuiPuiMolcar.png"
                /></a>
                <a href="https://www.deviantart.com/interocativo"
                    ><img src="artifact/Win98internetclick.gif"
                /></a>
                <a href="https://www.deviantart.com/interocativo">
                    <img src="artifact/tama.gif"
                /></a>
            </div>
        </div>

        <!-- BUTTONS -->
        <div class="artifacts-container buttons">
            <a href="https://neocities.org/site/espimyte">
                <img src="artifact/neocities_button.gif" />
            </a>
            <a href="https://validator.w3.org/feed/check.cgi?url=https%3A%2F%2Fespimyte.com%2Ffeed.xml">
                <img
                    src="artifact/valid-atom.png"
                    alt="[Valid Atom 1.0]"
                    title="Validate my Atom 1.0 feed"
                />
            </a>
            <a href="https://www.mabsland.com/Adoption.html" class="artifacts-extra" >
                <img src="artifact/Censor_NYRb.png" />
            </a>
            <iframe
                src="https://incr.easrng.net/badge?key=espimyte"
                style="background: url(//incr.easrng.net/bg.gif)"
                title="increment badge"
                width="88"
                height="31"
                frameborder="0"
            ></iframe>
            <a href="https://goooby.neocities.org/graphics">
                <img src="artifact/made-with-vsc.png" />
            </a>
            <img src="artifact/is_it_slow_say_so.gif" />
            <img src="artifact/questions-or-comments-email.gif" />
            <img src="artifact/parental-advisory.jpg" class="artifacts-extra" />
            <a href="https://shishka.neocities.org/shishka/buttons">
                <img src="artifact/minesweeper.gif" />
            </a>

            <a href="https://jack-dawlia.neocities.org/page/graphics">
                <img src="artifact/mobile-friendly.gif" />
            </a>
            <img src="artifact/go-2-hell.gif" />
            <img src="artifact/dream-diary.gif" />
            <img src="artifact/saul-goodman.gif" class="artifacts-extra"/>
            <a href="https://epic1.neocities.org/" class="artifacts-extra">
                <img src="artifact/epic.gif" />
            </a>
            <a href="https://web-cmd.neocities.org/" class="artifacts-extra">
                <img src="artifact/webcmd.gif" />
            </a>
        </div>

        <!-- BLINKIES -->
        <div class="artifacts-container blinkies">
            <img src="artifact/mad-scientist.gif" />
            <img src="artifact/gamer-self-diagnosed.gif" />
            <img src="artifact/i-glow-in-the-dark.gif" class="artifacts-extra" />
            <a href="https://radiotrophicfungi.tumblr.com/post/712591291386593280/blinkie-set-12-invasion" class="artifacts-extra" >
                <img src="artifact/im-an-alien.gif" />
            </a>
            <a href="https://emocowboy.neocities.org/?emo=/home/graphics/blinkies" >
                <img src="artifact/xd-a-lot.gif" />
            </a>
            <a href="https://transbro.neocities.org/Blinkies" class="artifacts-extra" >
                <img src="artifact/graphic-design.gif" />
            </a>
            <img src="artifact/evil-laughter.gif" />
            <img src="artifact/milk-drinker.gif" />
            <img src="artifact/be-cool.gif" />
            <a href="https://radiotrophicfungi.tumblr.com/post/749498947471654912/blinkie-set-63-tainted-cain" class="artifacts-extra" >
                <img src="artifact/tboi-hearts.gif" />
            </a>
            <a href="https://radiotrophicfungi.tumblr.com/post/712669948108046336/blinkie-set-18-the-lost-tboi">
                <img src="artifact/godhead.gif" />
            </a>
            <a href="https://radiotrophicfungi.tumblr.com/post/712597665888829440/blinkie-set-17-lover">
                <img src="artifact/very-lovely.gif" />
            </a>
            <img src="artifact/in-perfect-love.gif" class="artifacts-extra" />
            <a href="https://radiotrophicfungi.tumblr.com/post/748588313586417664/blinkie-set-60-interests" class="artifacts-extra" >
                <img src="artifact/virus.gif" />
            </a>
            <a href="https://graphics-cafe.tumblr.com/" class="artifacts-extra" >
                <img src="artifact/caution.gif" />
            </a>
            <a href="https://www.tumblr.com/creaturefan216/700734549974564864/frye-blinkies" class="artifacts-extra">
                <img src="artifact/frye-fan.gif" />
            </a>
            <a href="https://emocowboy.neocities.org/?emo=/home/graphics/blinkies" class="artifacts-extra" >
                <img src="artifact/screamo-fan.gif" />
            </a>
            <a href="https://www.tumblr.com/glittergroovy/759724655809560576">
                <img src="artifact/how-will-you-remember-me.gif" />
            </a>
            <a href="https://www.tumblr.com/glittergroovy/754147812647845888/font-options-on-blinkiescafe-displayed-on-various" class="artifacts-extra" >
                <img src="artifact/construction-symbols.gif" />
            </a>
            <a href="https://graphics-cafe.tumblr.com/" class="artifacts-extra" >
                <img src="artifact/traumatic-brain-injury.gif" />
            </a>
            <a href="https://www.tumblr.com/glittergroovy/740521754591674368/noikaido309-blinkies-dump-that-i-made-for-my">
                <img src="artifact/susumu-hirasawa.gif" />
            </a>
        </div>

        <!-- STAMPS -->
        <div class="artifacts-container stamps">
            <img src="artifact/virus-detected.jpg" class="artifacts-extra" />
            <a href="https://www.deviantart.com/skystamps/art/404-729969839" class="artifacts-extra">
                <img src="artifact/checker-pink.png" />
            </a>
            <img src="artifact/checker-blue.png" class="artifacts-extra" />
            <img src="artifact/i-love-my-computer.png" />
            <a href="https://www.deviantart.com/strange-little-cat/art/biohazard-stamp-137798493">
                <img src="artifact/biohazard.png" />
            </a>
            <a href="https://www.deviantart.com/azraellewormser/art/Stamp-Comics-56790984">
                <img src="artifact/comics-are-an-art-form.png" />
            </a>
            <a href="https://www.deviantart.com/marlenesstamps/art/Shiny-Espeon-279801899">
                <img src="artifact/shiny-espeon-love.png" />
            </a>
            <img src="artifact/my-heart-beats-for-you.gif" />
            <a href="https://www.deviantart.com/tppgraphics/art/DA-Stamp-Video-Games-01-153061553" class="artifacts-extra" >
                <img src="artifact/i-heart-video-games.gif" />
            </a>

            <a href="https://www.deviantart.com/dfmurcia/art/No-signal-stamp-126842315">
                <img src="artifact/no-signal.gif" />
            </a>
            <a href="https://www.deviantart.com/moonxviii/art/Mob-Psycho-100-636827452">
                <img src="artifact/100percent.gif" />
            </a>
            <a href="https://www.deviantart.com/kishifishy/art/Nichijou-Stamp-204176788" class="artifacts-extra" >
                <img src="artifact/nichijou.gif" />
            </a>
            <img src="artifact/river.gif" class="artifacts-extra" />
            <a href="https://www.deviantart.com/neoratz/art/pmmm-stamp-2-700112755">
                <img src="artifact/bebe.png" />
            </a>
            <a href="https://www.deviantart.com/softystamps/art/Pearl-Stamp-792587835" class="artifacts-extra">
                <img src="artifact/pearl-splatoon.png" />
            </a>
            <img src="artifact/p03.png" class="artifacts-extra"/>
            <a href="https://www.deviantart.com/kukurah/art/Uboa-Stamp-189998535" class="artifacts-extra">
                <img src="artifact/stop-messing-with-the-lights.gif" />
            </a>
            <a href="https://www.deviantart.com/jrtracey/art/Entomology-stamp-353089187" class="artifacts-extra" >
                <img src="artifact/entomology.png" />
            </a>
        </div>

        <!-- OTHER -->
        <div class="artifacts-container artifacts-extra">
            <a href="https://shishka.neocities.org/shishka/buttons">
                <img src="artifact/trip-machine.gif" />
            </a>
        </div>

        <!-- USERBOXES -->
        <div class="artifacts-container userboxes artifacts-extra">
            <img src="artifact/radioactive.jpg"/>
            <img src="artifact/wrong.jpg"/>
            <img src="artifact/lightswitch.jpg"/>
        </div>

        <!-- BUMPER STICKERS -->
        <div class="artifacts-container bumper-stickers artifacts-extra">
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/lost-or-stolen.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/beware-of-blog.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/brake-fluid.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/evil-genius.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/persist.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/the-system-is-you.jpeg"/>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="artifact/rickrolled.jpeg"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/quite_humble.png"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/authorized-by-god.gif"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/government-inspected.gif"/>
            </a>
            <a href="https://www.internetbumperstickers.com/">
                <img src="artifact/100correct.gif"/>
            </a>
        </div>

        <!-- CHAINS DIVIDER -->
        <div class="divider chains artifacts-extra">
            <img src="artifact/chains.gif"/>
        </div>

        <!-- PETS -->
        <div class="artifacts-container artifacts-extra pets">
            <a href="https://www.hypnospace.net/">
                <img src="artifact/squisherz-0023.png"/>
            </a>
            <a href="https://www.hypnospace.net/">
                <img src="artifact/squisherz-pitrool.png"/>
            </a>
        </div>

        <!-- GRAPHICS -->
        <div class="artifacts-container graphics artifacts-extra">
            <img src="artifact/poison-3d.gif" />
            <img src="artifact/microscope.gif" />
            <img src="artifact/beaker.gif" />
            <img src="artifact/flask.gif" />
        </div>

        <!-- PAGES -->
        <div class="artifacts-container pages artifacts-extra">
            <img src="artifact/goddess-biker-cover-1.jpeg" />
            <img src="artifact/goddess-biker-cover-2.png" />
            <img src="artifact/goddess-magazine-cover.jpeg" />
            <img src="artifact/goddess-wrench.png" />
            <img src="artifact/megumi.png" />
            <img src="artifact/urd.png" />
        </div>

        <!-- CHAINS DIVIDER -->
        <div class="divider chains artifacts-extra">
            <img src="artifact/chains.gif"/>
        </div>

        <!-- ARTFIGHT -->
        <div class="artifacts-container artfight artifacts-extra">
            <a href="https://artfight.net/">
                <img src="artifact/artfight-cyberpunk.png"/>
            </a>
            <a href="https://artfight.net/">
                <img src="artifact/artfight-bloom.png"/>
            </a>
            <a href="https://artfight.net/">
                <img src="artifact/artfight-werewolves.png"/>
            </a>
            <a href="https://artfight.net/">
                <img src="artifact/artfight-seafoam.png"/>
            </a>
        </div>

        <!-- BADGES -->
        <div class="artifacts-container badges">
            <img src="artifact/escape.gif"/>
            <img src="artifact/heart-powered.gif"/>
            <img src="artifact/sin-pride.gif"/>
            <img src="artifact/blender.png" class="artifacts-extra" />
            <img src="artifact/firefox.png" class="artifacts-extra" />
            <img src="artifact/100fool.gif"/>
        </div>

        <!-- DANDELIONS DIVIDER -->
        <div class="divider dandelions artifacts-extra">
            <img src="artifact/dandelions.png"/>
        </div>

    </div>`;

    const artifactsDiv = document.getElementById("artifacts");
    const hexStampsDiv = document.getElementById("hex-stamps");
    const hexStamps = [...document.querySelectorAll("#hex-stamps img")];

    initializeHexStampsListener();
    // countSources();

    function initializeHexStampsListener() {
        const promise = hexStamps.map(im=>new Promise(res=>
            im.onload=()=>res()
           ))
        Promise.all(promise).then(data=>{
            let boundingRect = artifactsDiv.getBoundingClientRect();
            setHexStampWidth(boundingRect);
        })
    
        addEventListener("resize", (event) => {
            let boundingRect = artifactsDiv.getBoundingClientRect();
            setHexStampWidth(boundingRect);
        });
    }

    function setHexStampWidth(boundingRect) {
        if (boundingRect.width < 210) {
            hexStampsDiv.className = "honeycomb hc-2";
        } else if (boundingRect.width < 245) {
            hexStampsDiv.className = "honeycomb hc-3";
        } else if (boundingRect.width < 290) {
            hexStampsDiv.className = "honeycomb hc-4";
        } else if (boundingRect.width < 340) {
            hexStampsDiv.className = "honeycomb hc-5";
        } else if (boundingRect.width < 400) {
            hexStampsDiv.className = "honeycomb hc-6";
        } else if (boundingRect.width < 440) {
            hexStampsDiv.className = "honeycomb hc-6";
        } else {
            hexStampsDiv.className = "honeycomb hc-7";
        }
    }

    function countSources() {
        const totalCount = artifactsDiv.getElementsByTagName("img").length;
        const sourcedCount = artifactsDiv.getElementsByTagName("a").length;
        const unsourcedCount = totalCount - sourcedCount;

        console.log(`SOURCED: ${sourcedCount}/${totalCount} (${unsourcedCount} unsourced)`);
    } 

    }

  }

  customElements.define('artifacts-display', ArtifactsDisplay);
  