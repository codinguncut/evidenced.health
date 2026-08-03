(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function d(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=d(a);fetch(a.href,i)}})();const T=13,B=[{id:"control",label:"Usual care",publicPitch:"The village continues as before.",mustacheChance:0,constitutionChance:0,treatmentBurdenChance:0},{id:"grooming",label:"Grooming Drive",publicPitch:"A conspicuous campaign for visible vitality.",mustacheChance:.24,constitutionChance:.2,treatmentBurdenChance:.4},{id:"balanced",label:"Balanced Tonic",publicPitch:"A respectable bottle promising support inside and out.",mustacheChance:.15,constitutionChance:.8,treatmentBurdenChance:.5},{id:"fortifying",label:"Fortifying Soup",publicPitch:"Less visible excitement; more alleged structural support.",mustacheChance:.06,constitutionChance:.6,treatmentBurdenChance:0}],h={portraitBlobs:[{id:0,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:2,shape:"square",hasHat:!1,hasMustache:!1},{id:7,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:10,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:13,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:17,shape:"square",hasHat:!1,hasMustache:!1},{id:20,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:23,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:26,shape:"square",hasHat:!0,hasMustache:!1},{id:31,shape:"circle",hasHat:!1,hasMustache:!0},{id:34,shape:"square",hasHat:!1,hasMustache:!0},{id:37,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:42,shape:"circle",hasHat:!1,hasMustache:!1},{id:45,shape:"square",hasHat:!0,hasMustache:!1},{id:48,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:52,shape:"square",hasHat:!1,hasMustache:!1},{id:57,shape:"circle",hasHat:!1,hasMustache:!0},{id:61,shape:"circle",hasHat:!0,hasMustache:!1},{id:64,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:68,shape:"square",hasHat:!1,hasMustache:!0},{id:73,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:77,shape:"circle",hasHat:!0,hasMustache:!1},{id:81,shape:"square",hasHat:!1,hasMustache:!1},{id:85,shape:"square",hasHat:!1,hasMustache:!1},{id:90,shape:"circle",hasHat:!1,hasMustache:!1},{id:94,shape:"circle",hasHat:!1,hasMustache:!1},{id:97,shape:"circle",hasHat:!1,hasMustache:!1},{id:102,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:106,shape:"circle",hasHat:!0,hasMustache:!1},{id:110,shape:"square",hasHat:!1,hasMustache:!1},{id:114,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:119,shape:"circle",hasHat:!1,hasMustache:!1},{id:123,shape:"square",hasHat:!1,hasMustache:!1},{id:126,shape:"circle",hasHat:!0,hasMustache:!1},{id:130,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:133,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:138,shape:"square",hasHat:!1,hasMustache:!1},{id:143,shape:"circle",hasHat:!1,hasMustache:!1},{id:149,shape:"square",hasHat:!1,hasMustache:!1},{id:152,shape:"square",hasHat:!1,hasMustache:!1},{id:155,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:158,shape:"square",hasHat:!1,hasMustache:!1},{id:161,shape:"circle",hasHat:!0,hasMustache:!1},{id:165,shape:"square",hasHat:!0,hasMustache:!1},{id:169,shape:"square",hasHat:!1,hasMustache:!0},{id:172,shape:"circle",hasHat:!1,hasMustache:!1},{id:178,shape:"square",hasHat:!1,hasMustache:!0},{id:183,shape:"circle",hasHat:!1,hasMustache:!1},{id:186,shape:"circle",hasHat:!1,hasMustache:!1},{id:193,shape:"circle",hasHat:!1,hasMustache:!1},{id:197,shape:"pentagon",hasHat:!1,hasMustache:!0},{id:200,shape:"square",hasHat:!1,hasMustache:!1},{id:207,shape:"square",hasHat:!1,hasMustache:!1},{id:211,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:215,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:219,shape:"square",hasHat:!1,hasMustache:!1},{id:225,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:228,shape:"circle",hasHat:!1,hasMustache:!0},{id:231,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:235,shape:"circle",hasHat:!1,hasMustache:!1}],observationalHatGroups:[{label:"Hat",participants:31,deaths:13,deathRate:.41935483870967744},{label:"No hat",participants:146,deaths:86,deathRate:.589041095890411}],observationalMustacheGroups:[{label:"Mustache",participants:37,deaths:15,deathRate:.40540540540540543},{label:"No mustache",participants:140,deaths:84,deathRate:.6}],observationalShapeGroups:[{label:"Circle",participants:61,deaths:35,deathRate:.5737704918032787},{label:"Square",participants:64,deaths:36,deathRate:.5625},{label:"Pentagon",participants:52,deaths:28,deathRate:.5384615384615384}],observationalAccessoryGroups:[{label:"Both",participants:11,deaths:3,deathRate:.2727272727272727},{label:"Hat only",participants:20,deaths:10,deathRate:.5},{label:"Mustache only",participants:26,deaths:12,deathRate:.46153846153846156},{label:"Neither",participants:120,deaths:74,deathRate:.6166666666666667}],randomizedHatGroups:[{label:"Hat",participants:8900,deaths:4938,deathRate:.5548314606741573},{label:"No hat",participants:8800,deaths:4947,deathRate:.5621590909090909}],interventionArms:[{id:"control",label:"Usual care",participants:4500,baselineHats:812,baselineCircles:1502,baselineMustaches:986,blobScoreCount:4500,blobScoreChangeSum:528.194433520548,blobScoreChangeSumSquares:109076.57099076189,blobScoreMeanChange:.11737654078234401,blobScoreStandardError:.07338005387164866,surrogateEligible:3514,newMustaches:54,surrogateRate:.015367103016505406,deaths:926,deathRate:.20577777777777778},{id:"grooming",label:"Grooming Drive",participants:4400,baselineHats:765,baselineCircles:1523,baselineMustaches:871,blobScoreCount:4400,blobScoreChangeSum:-5023.122057234636,blobScoreChangeSumSquares:136144.378744554,blobScoreMeanChange:-1.1416186493715081,blobScoreStandardError:.08208275854114166,surrogateEligible:3529,newMustaches:904,surrogateRate:.2561632190422216,deaths:1215,deathRate:.2761363636363636},{id:"balanced",label:"Balanced Tonic",participants:4400,baselineHats:720,baselineCircles:1537,baselineMustaches:952,blobScoreCount:4400,blobScoreChangeSum:-19810.176117901923,blobScoreChangeSumSquares:223380.34574870075,blobScoreMeanChange:-4.502312754068619,blobScoreStandardError:.08326350978840026,surrogateEligible:3448,newMustaches:584,surrogateRate:.16937354988399073,deaths:1163,deathRate:.26431818181818184},{id:"fortifying",label:"Fortifying Soup",participants:4400,baselineHats:803,baselineCircles:1538,baselineMustaches:891,blobScoreCount:4400,blobScoreChangeSum:-14632.057050782023,blobScoreChangeSumSquares:197392.7442012073,blobScoreMeanChange:-3.325467511541369,blobScoreStandardError:.08766016179763532,surrogateEligible:3509,newMustaches:300,surrogateRate:.08549444286121402,deaths:789,deathRate:.17931818181818182}],singleFutureArms:[{id:"control",label:"Usual care",participants:45,baselineHats:9,baselineCircles:18,baselineMustaches:8,blobScoreCount:45,blobScoreChangeSum:-14.920662572840229,blobScoreChangeSumSquares:1026.88343063308,blobScoreMeanChange:-.3315702793964495,blobScoreStandardError:.7184214536314255,surrogateEligible:37,newMustaches:1,surrogateRate:.02702702702702703,deaths:9,deathRate:.2},{id:"grooming",label:"Grooming Drive",participants:44,baselineHats:11,baselineCircles:15,baselineMustaches:5,blobScoreCount:44,blobScoreChangeSum:-40.00314336386509,blobScoreChangeSumSquares:1310.7932067672466,blobScoreMeanChange:-.909162349178752,blobScoreStandardError:.8207225761640657,surrogateEligible:39,newMustaches:13,surrogateRate:.3333333333333333,deaths:8,deathRate:.18181818181818182},{id:"balanced",label:"Balanced Tonic",participants:44,baselineHats:5,baselineCircles:14,baselineMustaches:12,blobScoreCount:44,blobScoreChangeSum:-215.18035803944804,blobScoreChangeSumSquares:2179.680589478329,blobScoreMeanChange:-4.890462682714728,blobScoreStandardError:.7719135082949178,surrogateEligible:32,newMustaches:4,surrogateRate:.125,deaths:16,deathRate:.36363636363636365},{id:"fortifying",label:"Fortifying Soup",participants:44,baselineHats:6,baselineCircles:14,baselineMustaches:12,blobScoreCount:44,blobScoreChangeSum:-152.59088819334283,blobScoreChangeSumSquares:1785.980776021757,blobScoreMeanChange:-3.4679747316668825,blobScoreStandardError:.8150277986817478,surrogateEligible:32,newMustaches:3,surrogateRate:.09375,deaths:4,deathRate:.09090909090909091}],confirmatoryArms:[{id:"control",label:"Usual care",participants:434,baselineHats:74,baselineCircles:126,baselineMustaches:69,blobScoreCount:434,blobScoreChangeSum:-131.2619326391723,blobScoreChangeSumSquares:10260.93841783734,blobScoreMeanChange:-.3024468493990145,blobScoreStandardError:.23321847517600752,surrogateEligible:365,newMustaches:7,surrogateRate:.019178082191780823,deaths:148,deathRate:.34101382488479265},{id:"grooming",label:"Grooming Drive",participants:434,baselineHats:64,baselineCircles:153,baselineMustaches:76,blobScoreCount:434,blobScoreChangeSum:-444.71004337933846,blobScoreChangeSumSquares:14418.79677440548,blobScoreMeanChange:-1.0246775193072315,blobScoreStandardError:.2725852199470266,surrogateEligible:358,newMustaches:91,surrogateRate:.2541899441340782,deaths:170,deathRate:.391705069124424},{id:"balanced",label:"Balanced Tonic",participants:433,baselineHats:80,baselineCircles:136,baselineMustaches:69,blobScoreCount:433,blobScoreChangeSum:-2088.987397867255,blobScoreChangeSumSquares:23292.74519874401,blobScoreMeanChange:-4.8244512652823435,blobScoreStandardError:.26579083084201643,surrogateEligible:364,newMustaches:51,surrogateRate:.1401098901098901,deaths:167,deathRate:.3856812933025404},{id:"fortifying",label:"Fortifying Soup",participants:433,baselineHats:77,baselineCircles:117,baselineMustaches:72,blobScoreCount:433,blobScoreChangeSum:-1303.0463067167439,blobScoreChangeSumSquares:17550.72344135863,blobScoreMeanChange:-3.0093448192072607,blobScoreStandardError:.26993094261530215,surrogateEligible:361,newMustaches:43,surrogateRate:.11911357340720222,deaths:119,deathRate:.2748267898383372}]};function w(s){return`${(s*100).toFixed(1)}%`}function v(s){return`${s>=0?"+":""}${(s*100).toFixed(1)} pp`}function y(s){return s.map(t=>`
    <div class="case-rate-row">
      <strong>${t.label}</strong>
      <div><i style="width:${t.deathRate*100}%"></i></div>
      <b>${w(t.deathRate)}</b>
      <span>${t.deaths}/${t.participants} died</span>
    </div>`).join("")}function k(s){return s.map(t=>`
    <div class="case-endpoint-row">
      <strong>${t.label}</strong>
      <div><i style="width:${t.rate*100}%"></i></div>
      <b>${w(t.rate)}</b>
      <span>${t.numerator}/${t.denominator}</span>
    </div>`).join("")}function E(s,t,d){return Math.max(t,Math.min(d,s))}function H(s,t,d){const r=a=>(E(a,t[0],t[1])-t[0])/(t[1]-t[0])*100;return s.map(a=>`
    <div class="case-ci-row">
      <strong>${a.label}</strong>
      <div class="case-ci-plot">
        ${t[0]<=0&&t[1]>=0?`<em style="left:${r(0)}%"></em>`:""}
        <span style="left:${r(a.low)}%;width:${r(a.high)-r(a.low)}%"></span>
        <i style="left:${r(a.estimate)}%"></i>
      </div>
      <b>${d(a.estimate)}</b>
      <small>95% CI ${d(a.low)} to ${d(a.high)}</small>
    </div>`).join("")}function A(s){const r=64.80000000000001,a=Math.ceil(s.length/20)*r,i=48*.29,c=Math.sqrt(Math.PI*i**2)/2,g=Math.sqrt(2*Math.PI*i**2/(5*Math.sin(2*Math.PI/5))),b=Array.from({length:5},(n,l)=>{const p=-Math.PI/2+l*(2*Math.PI/5);return`${g*Math.cos(p)},${g*Math.sin(p)}`}).join(" ");return`<svg class="population-svg" viewBox="0 0 960 ${a}" role="img" aria-label="Sixty Year-10 survivors">
    ${s.map((n,l)=>{const p=l%20*48+24,M=Math.floor(l/20)*r+r/2,f=n.shape==="circle"?`<circle class="blob-body" r="${i}" />`:n.shape==="square"?`<rect class="blob-body" x="${-c}" y="${-c}" width="${c*2}" height="${c*2}" />`:`<polygon class="blob-body" points="${b}" />`,m=n.hasHat?'<path class="blob-hat" d="M -6.7 -14.4 L -5.8 -21.6 H 5.8 L 6.7 -14.4 H 10.6 V -11 H -10.6 V -14.4 Z" />':"",S=n.hasMustache?'<path class="blob-mustache" d="M 0 3.8 C -4 0.5 -8 0.5 -11 3.8 C -8 2 -6 8 -1 4 Z M 0 3.8 C 4 0.5 8 0.5 11 3.8 C 8 2 6 8 1 4 Z" />':"";return`<g class="blob" transform="translate(${p} ${M})" aria-label="Blob ${n.id}">${f}${m}${S}</g>`}).join("")}
  </svg>`}function I(s,t={}){const d={groups:h.observationalHatGroups},r={groups:h.observationalMustacheGroups},a={groups:h.observationalShapeGroups},i=h.observationalAccessoryGroups,c={groups:h.randomizedHatGroups},g={arms:h.interventionArms},b={arms:h.singleFutureArms},n={arms:h.confirmatoryArms},l=b.arms.find(e=>e.id==="control"),p=b.arms.filter(e=>e.id!=="control").map(e=>{const o=e.blobScoreMeanChange-l.blobScoreMeanChange,u=Math.hypot(e.blobScoreStandardError,l.blobScoreStandardError);return{id:e.id,label:e.label,estimate:o,low:o-1.96*u,high:o+1.96*u}}),M=b.arms.filter(e=>e.id!=="control").map(e=>{const o=e.deathRate-l.deathRate,u=Math.sqrt(e.deathRate*(1-e.deathRate)/e.participants+l.deathRate*(1-l.deathRate)/l.participants);return{id:e.id,label:e.label,estimate:o,low:o-1.96*u,high:o+1.96*u}}),f=p.find(e=>e.id==="balanced"),m=n.arms.find(e=>e.id==="control"),S=n.arms.filter(e=>e.id!=="control").map(e=>{const o=e.deathRate-m.deathRate,u=Math.sqrt(e.deathRate*(1-e.deathRate)/e.participants+m.deathRate*(1-m.deathRate)/m.participants);return{id:e.id,label:e.label,estimate:o,low:o-1.96*u,high:o+1.96*u}}),C=S.find(e=>e.id==="fortifying"),$=n.arms.reduce((e,o)=>e+o.participants,0),q=p.map(e=>({label:e.label,estimate:e.estimate,low:e.low,high:e.high})),x=M.map(e=>({label:e.label,estimate:e.estimate,low:e.low,high:e.high}));s.innerHTML=`
    <main class="investigation-shell">
      <header class="case-cover">
        ${t.showWorldNavigation===!1?`<nav aria-label="Site navigation">
          <a href="/">Back to Evidenced Health</a>
        </nav>`:""}
        <p>Blob Village Department of Questionable Longevity</p>
        <h1>The Longevity Commission</h1>
        <div>A field investigation into signs, causes, treatments, and the regrettable difference between them.</div>
      </header>

      <article class="case-file">
        <section class="case-section case-opening">
          <div class="case-number">00</div>
          <div>
            <p class="case-kicker">The problem</p>
            <h2>Blob Village needs your help</h2>
            <figure class="case-bob-portrait">
              <svg viewBox="0 0 240 260" role="img" aria-labelledby="bob-portrait-title bob-portrait-desc">
                <title id="bob-portrait-title">Bob</title>
                <desc id="bob-portrait-desc">A friendly green blob with bright eyes and a broad smile.</desc>
                <ellipse class="appeal-bob-shadow" cx="120" cy="232" rx="72" ry="13" />
                <path class="appeal-bob-body" d="M46 187C35 149 43 99 71 68 94 43 140 39 169 57 202 78 211 132 199 177 188 219 157 236 120 237 82 237 57 219 46 187Z" />
                <path class="appeal-bob-highlight" d="M75 92C64 111 60 139 65 158" />
                <g class="appeal-bob-eyes">
                  <ellipse cx="94" cy="130" rx="15" ry="18" />
                  <ellipse cx="148" cy="130" rx="15" ry="18" />
                  <circle cx="98" cy="133" r="6" />
                  <circle cx="152" cy="133" r="6" />
                </g>
                <path class="appeal-bob-smile" d="M91 166Q120 193 150 166" />
              </svg>
              <figcaption>Bob, one of Blob Village's 177 Year-10 survivors.</figcaption>
            </figure>
            <p>Blob Village began with 240 citizens. By Year 10, only 177 remained alive. The Council was looking for a remedy, a program, or any other action that could extend the lives of those who remained.</p>
            <p>The village was not governed by chance alone. Defined biological and behavioral mechanisms shaped how its citizens resisted hazards, recovered, accumulated injury, and died. Those mechanisms were real, but unknown to the investigators. (The hidden mechanics are explained in a collapsed appendix at the end of the article.)</p>
            <p>This investigation is based on a simulated population governed by fixed probabilistic rules. The rules remain stable, while individual rolls, histories, and outcomes vary by chance.</p>
            <p>The Council supplied records for the 177 blobs alive in the saved village at Year 10. We could see shape, hats, mustaches, and later deaths. We had no complete measurements of prior health, physiology, behavior, or accumulated injury.</p>
            <figure class="case-cohort-portrait">${A(h.portraitBlobs)}<figcaption>Sixty of the 177 Year-10 survivors. The investigation began with blobs, not columns.</figcaption></figure>
            <p>Our task was not merely to find which visible group lived longer. It was to identify something the village could <em>do</em> to improve longevity.</p>
            <aside class="case-plain-note"><strong>How to read the rates</strong><span>A death rate below means the share of blobs alive at Year 10 who died during the stated follow-up.</span></aside>
            <details class="case-terms"><summary>Study language</summary><dl><div><dt>Cohort</dt><dd>the 177 blobs entering the study</dd></div><div><dt>Baseline</dt><dd>Year 10, when features were recorded</dd></div><div><dt>Follow-up</dt><dd>the period from Year 10 to Year 20</dd></div><div><dt>Outcome</dt><dd>death during follow-up</dd></div></dl></details>
            <p>With the mechanisms hidden, the investigation had to begin with what could be seen: which visible groups appeared to fare better?</p>
          </div>
        </section>

        <header class="case-act">
          <span>Act I</span>
          <h2>Can an association tell us what to change?</h2>
          <p>First the commission must turn a pattern already present in the village into a defensible action.</p>
        </header>

        <section id="case-observe" class="case-section">
          <div class="case-number">01</div>
          <div>
            <p class="case-kicker">Observe</p>
            <h2>The village already contained several excellent hypotheses</h2>
            <p>We recorded visible features at Year 10 and followed the cohort through Year 20. Hats and mustaches both appeared protective, and blobs with both clues formed another tempting profile. Hats looked like a behavior-adjacent clue; mustaches looked like a physiological marker. Shape was fixed at birth and could be compared but not assigned.</p>
            <aside class="case-question"><span>Before seeing the results</span><strong>If one visible group dies less often, what would you recommend changing?</strong></aside>
            <div class="case-observation-grid">
              <article><h3>Hats</h3>${y(d.groups)}</article>
              <article><h3>Mustaches</h3>${y(r.groups)}</article>
              <article><h3>Shape <small>fixed at birth</small></h3>${y(a.groups)}</article>
              <article><h3>Hats + mustaches <small>combined clues</small></h3>${y(i)}</article>
            </div>
            <p><strong>A finding, not yet a recommendation:</strong> the groups truly had different outcomes. The table did not explain why.</p>
            <aside class="case-plain-note"><strong>Why include shape?</strong><span>Because it provides a deliberately non-actionable comparison. Shape may separate groups with different outcomes, but it is fixed at birth and cannot be prescribed as a remedy. That makes the distinction between predicting risk and offering something useful to change easier to see.</span></aside>
            <details class="case-terms"><summary>Inferential language</summary><dl><div><dt>Exposure</dt><dd>the visible feature used to define groups</dd></div><div><dt>Association</dt><dd>a difference in outcomes between observed groups</dd></div><div><dt>Observational study</dt><dd>group membership was recorded, not assigned</dd></div></dl></details>
            <p>The commission now had several patterns worth investigating. Before turning any of them into policy, it had to ask whether the compared groups differed in more than the feature named on the chart.</p>
          </div>
        </section>

        <section id="case-confounding" class="case-section">
          <div class="case-number">02</div>
          <div>
            <p class="case-kicker">Compare</p>
            <h2>The columns had not been made comparable</h2>
            <p>No lottery created the natural hat and no-hat groups. Hats accumulated during the first ten years. Their wearers may also have differed in prior health, behavior, exposure, opportunity, or luck. The mortality table contained no guarantee that hats were the only difference.</p>
            <p>If an unmeasured factor influenced both who acquired hats and who later died, it would confound the comparison. We did not need to know its name to see that the study design permitted it. Repeating the trial could average later chance, but it would preserve the same naturally formed groups at baseline.</p>
            <aside class="case-margin-note"><strong>The information boundary</strong><span>Perhaps hat wearers began healthier, avoided more hazards, or received more help. We need not choose a story: the records could not rule these stories out.</span></aside>
            <details class="case-terms"><summary>Epidemiological language</summary><dl><div><dt>Confounding</dt><dd>a third factor is related to both exposure and outcome</dd></div><div><dt>Comparability</dt><dd>whether groups are sufficiently alike for a fair causal contrast</dd></div><div><dt>Exchangeability</dt><dd>the technical ideal that groups could trade exposure labels without changing their expected outcomes</dd></div><div><dt>Unmeasured confounding</dt><dd>the relevant third factor was not recorded</dd></div></dl></details>
            <p>The cleanest way to escape those naturally formed groups was to create new groups by lottery. If hats were truly a lever, assigning them should reproduce the advantage.</p>
          </div>
        </section>

        <section id="case-assign" class="case-section">
          <div class="case-number">03</div>
          <div>
            <p class="case-kicker">Assign</p>
            <h2>The Council puts hats to the test</h2>
            <aside class="case-question"><span>Make a prediction</span><strong>If wearing a hat caused a net survival benefit, the randomly assigned hat group should have lower mortality than the assigned no-hat group.</strong></aside>
            <p>The observational result survived as a hypothesis, not a policy. The Council saw that more hat wearers survived and proposed producing more hat wearers. We repeated the randomized hat trial 100 times from the saved Year-10 cohort. Random assignment broke the connection between receiving a hat and whatever prior characteristics usually made hat wearers different.</p>
            <div class="case-assignment-grid single">
              <article><h3>Assigned hats</h3>${y(c.groups)}</article>
            </div>
            <blockquote class="case-verdict-line">The hat was where the advantage showed up, not where it came from.</blockquote>
            <p>Observing more hats among survivors did not mean that bringing about more hats would bring about more survival. The trial did not reveal what made natural hat wearers different; it showed that changing hat status was not enough to reproduce their advantage.</p>
            <div class="case-fixed-grid"><section><span>Randomization fixed</span><strong>How the comparison groups formed</strong><p>Prior characteristics no longer decided who received a hat.</p></section><section><span>Randomization did not fix</span><strong>Whether a hat was a useful treatment</strong><p>A fair test can show that the proposed lever does not work.</p></section></div>
            <details class="case-terms"><summary>Causal language</summary><dl><div><dt>Randomized controlled trial</dt><dd>assignment, rather than prior history, determined exposure</dd></div><div><dt>Causal effect</dt><dd>the outcome difference produced by assigning the feature</dd></div><div><dt>Direction of causality</dt><dd>prediction by a marker does not show that changing it changes the outcome</dd></div></dl></details>
            <p>The failed hat program did not end the search. It redirected it: instead of copying a sign found on healthier blobs, the Council would test interventions intended to change health itself.</p>
          </div>
        </section>

        <header class="case-act">
          <span>Act II</span>
          <h2>Can a fair trial still answer the wrong question?</h2>
          <p>The commission now tests genuine programs. Randomization can make the groups comparable, but it cannot choose a meaningful outcome for us.</p>
        </header>

        <section class="case-section">
          <div class="case-number">04</div>
          <div>
            <p class="case-kicker">Revise</p>
            <h2>Three programs arrive with persuasive brochures</h2>
            <p>Assigning the behavioral clue failed. Mustaches now took a different role: not a treatment to glue on, but a physiology-like marker that might respond quickly when a real program changed the blob. The Council offered three interventions. Their internal effects were unknown to us.</p>
            <div class="case-programs">
              ${B.filter(e=>e.id!=="control").map((e,o)=>`
                <article><span>Program ${String.fromCharCode(65+o)}</span><h3>${e.label}</h3><p>${e.publicPitch}</p></article>`).join("")}
            </div>
            <p>If residents chose their own program, each arm could attract blobs with different prior histories. The commission therefore assigned programs by lottery. Before examining any outcomes, the investigators checked the visible baseline features to see what chance imbalances remained.</p>
            <h3 class="case-subheading">Before outcomes: did the lottery look fair?</h3>
            <p>Hat status and shape were recorded before treatment. They were not intervention targets; they were observable checks on the randomization. Baseline mustache status was checked for the same reason.</p>
            <div class="case-balance-table" role="table" aria-label="Observable baseline balance across randomized intervention arms">
              <div role="row"><strong>Assigned arm</strong><strong>Hat</strong><strong>Circle</strong><strong>Mustache</strong></div>
              ${g.arms.map(e=>`
                <div role="row"><b>${e.label}</b><span>${w(e.baselineHats/e.participants)}</span><span>${w(e.baselineCircles/e.participants)}</span><span>${w(e.baselineMustaches/e.participants)}</span></div>`).join("")}
            </div>
            <aside class="case-margin-note"><strong>What randomization did</strong><span>It made these baseline differences accidental rather than part of the process deciding who received each program. It did not make every percentage exactly equal.</span></aside>
            <div class="case-fixed-grid"><section><span>Randomization fixed</span><strong>Who received each program</strong><p>Known and unknown prior characteristics no longer directed treatment assignment.</p></section><section><span>Randomization did not fix</span><strong>What the trial chose to measure</strong><p>A fair lottery can still be judged by an endpoint that misses benefits or harms.</p></section></div>
            <details class="case-terms"><summary>Trial language</summary><dl><div><dt>Treatment arm</dt><dd>a group assigned to one program or usual care</dd></div><div><dt>Baseline covariate</dt><dd>a characteristic recorded before treatment</dd></div><div><dt>Covariate balance</dt><dd>how similar those characteristics appear across arms</dd></div></dl></details>
            <p>Mortality required years of follow-up. Mustache gain could be measured immediately. The Council, having schedules, selected the quick endpoint first.</p>
          </div>
        </section>

        <section id="case-surrogate" class="case-section">
          <div class="case-number">05</div>
          <div>
            <p class="case-kicker">Measure the surrogate</p>
            <h2>The Grooming Drive wins before lunch</h2>
            <p>The trial randomized the same Year-10 survivors to usual care or one of the three programs. Among blobs without a mustache at baseline, the endpoint was simple: had a new mustache appeared by Year 11?</p>
            <aside class="case-question"><span>Decision point</span><strong>If mustaches predict survival, should the program that creates the most mustaches win?</strong></aside>
            <div class="case-endpoint-chart surrogate">
              ${k(g.arms.map(e=>({label:e.label,rate:e.surrogateRate,numerator:e.newMustaches,denominator:e.surrogateEligible})))}
            </div>
            <p>On the chosen endpoint, the result looked decisive. The Grooming Drive produced new mustaches more often than any rival, so the Council could name a winner without waiting for mortality.</p>
            <div class="case-recommendation"><span>Council recommendation</span><strong>Adopt the Grooming Drive</strong><p>It moved the visible marker more than any rival. If mustaches faithfully represented strengthening, this would be sensible.</p></div>
            <p>But the recommendation was only as sound as the substitution beneath it. The trial had measured mustaches precisely; it had not yet shown that manufacturing them improved health.</p>
            <aside class="case-safety-signal"><span>Before the order was signed</span><h3>Two objections reached the Council</h3><p>First, the Grooming Drive might be manufacturing mustaches rather than health. Second, clinicians had heard early reports of poor outcomes among some participants. The reports were too sparse and immature to establish harm, but they made immediate rollout difficult to defend.</p></aside>
            <details class="case-terms"><summary>Endpoint language</summary><dl><div><dt>Biomarker</dt><dd>a measured sign related to an underlying biological process</dd></div><div><dt>Surrogate endpoint</dt><dd>a substitute outcome used in place of the outcome that ultimately matters</dd></div><div><dt>Surrogate validation</dt><dd>testing whether treatment effects on the surrogate reliably predict effects on meaningful outcomes</dd></div><div><dt>Safety signal</dt><dd>an early indication of possible harm that requires further investigation</dd></div></dl></details>
            <p>The objections did not prove that the Grooming Drive was harmful, but they made a mustache-only decision hard to defend. The Council asked the laboratory for a more credible early measure.</p>
          </div>
        </section>

        <section id="case-blob-score" class="case-section">
          <div class="case-number">06</div>
          <div>
            <p class="case-kicker">Measure the serious surrogate</p>
            <h2>The laboratory offers a more respectable shortcut</h2>
            <p>Mustaches had been the best quick sign available, but they were difficult to defend at a conference. The laboratory offered Blob Score instead: a blood-test-like, continuous measure of physiological resilience. Lower was considered better. In untreated blobs, lower scores tended to accompany longer survival.</p>
            <p>This looked like progress. Yet a credible laboratory measure can track one genuine part of health while overlooking another.</p>
            <p>Every blob was tested once before treatment and again at the end of the treatment visit, before the long mortality follow-up began. “Post-treatment change” means the second score minus the baseline score. A negative change was considered an improvement.</p>
            <p>Blob Score included random measurement error, but that was not its deepest limitation. It measured one genuine dimension of health while missing other pathways through which a program could help or harm. A larger sample could average away random error; it could not make an incomplete endpoint represent what it omitted.</p>
            <p>Both charts below come from the same single trial. Blob Score was measured immediately after treatment; mortality meant death by Year ${T}. Each chart shows an effect <strong>relative to usual care</strong>: the result in an intervention arm minus the result in the usual-care arm. If the intervention made no difference, that subtraction would equal zero. Zero is therefore the null, or no-effect, value marked by the vertical line.</p>
            <div class="case-uncertainty-grid">
              <article>
                <h3>Blob Score effect vs usual care <small>post-treatment change; 0 = no effect; negative is better</small></h3>
                ${H(q,[-8,6],e=>`${e>=0?"+":""}${e.toFixed(1)}`)}
              </article>
              <article>
                <h3>Death risk effect vs usual care <small>${T-10}-year risk difference; 0 = no effect; negative is better</small></h3>
                ${H(x,[-.4,.3],v)}
              </article>
            </div>
            <p><strong>Do not compare the magnitudes across charts:</strong> Blob Score points and mortality percentage points are different units. Read each interval against its own zero line. Balanced Tonic showed a clear effect on Blob Score, while Fortifying Soup's mortality estimate remained compatible with benefit, no effect, or harm.</p>
            <div class="case-recommendation"><span>Preliminary laboratory recommendation</span><strong>Prefer Balanced Tonic</strong><p>Its Blob Score effect was ${f.estimate.toFixed(1)} points (95% CI ${f.low.toFixed(1)} to ${f.high.toFixed(1)}), excluding no effect.</p></div>
            <p><strong>What the laboratory had shown:</strong> Balanced Tonic changed the measured dimension of physiology. The test moved. Whether the blobs lived longer remained unresolved. A valid surrogate would require evidence that treatment-induced changes in the score reliably predict the net effect on meaningful outcomes.</p>
            <p>That left the commission with a practical dilemma: should it trust the endpoint that answered quickly and consistently, or wait for a better estimate of the outcome it actually cared about?</p>
          </div>
        </section>

        <section id="case-hard-endpoint" class="case-section">
          <div class="case-number">07</div>
          <div>
            <p class="case-kicker">Extend and enlarge</p>
            <h2>A larger trial waits five years for the answer</h2>
            <p>The first trial had offered a promising mortality estimate but could not exclude no effect. The Council therefore commissioned a new confirmatory trial: ${$.toLocaleString()} Year-10 survivors, randomized among the same four programs and followed for five years.</p>
            <p>This was not a replay of the original 177 blobs. A larger independently generated cohort supplied more participants, while two additional years of follow-up supplied more deaths.</p>
            <div class="case-endpoint-chart mortality">
              ${k(n.arms.map(e=>({label:e.label,rate:e.deathRate,numerator:e.deaths,denominator:e.participants})))}
            </div>
            <p>The raw rates now favored Fortifying Soup. The remaining question was whether the gap was still compatible with chance variation, so the commission examined the risk difference and its confidence interval.</p>
            <div class="case-uncertainty-grid single">
              <article>
                <h3>Death risk effects vs usual care <small>5-year risk difference; 0 = no effect; negative is better</small></h3>
                ${H(S,[-.16,.14],v)}
              </article>
            </div>
            <p>The Grooming Drive and Balanced Tonic intervals included zero. Fortifying Soup reduced five-year mortality by ${v(C.estimate)} relative to usual care (95% CI ${v(C.low)} to ${v(C.high)}). Its interval excluded zero, providing statistically significant evidence of a mortality benefit in this confirmatory trial.</p>
            <div class="case-recommendation corrected"><span>Confirmatory recommendation</span><strong>Adopt the Fortifying Soup</strong><p>It produced the lowest five-year mortality, and its comparison with usual care excluded no effect.</p></div>
            <p>Randomization had made the treatment groups comparable in each analysis. Mustaches rewarded the most visible response; Blob Score rewarded the strongest response on one real but incomplete pathway. Neither answered the full practical question. Good allocation cannot guarantee that an endpoint is valid.</p>
            <aside class="case-plain-note"><strong>Why the answer became clearer</strong><span>Longer follow-up produced more outcome events, and larger enrollment narrowed the interval. Statistical significance came from a more informative trial, not from changing the endpoint after seeing the result.</span></aside>
            <details class="case-terms"><summary>Outcome language</summary><dl><div><dt>Hard endpoint</dt><dd>a clinically meaningful outcome measured directly</dd></div><div><dt>Absolute risk difference</dt><dd>one death rate subtracted from another</dd></div><div><dt>Adverse effect</dt><dd>harm caused by an intervention</dd></div></dl></details>
            <p>The Council finally had enough evidence to choose a program. It still did not know why that program worked, which raised one last question about what the trial had and had not established.</p>
          </div>
        </section>

        <section class="case-section">
          <div class="case-number">08</div>
          <div>
            <p class="case-kicker">The information boundary</p>
            <h2>The mechanism remains under investigation</h2>
            <p>The trials established observable effects. Grooming Drive caused many more mustaches and higher mortality than usual care. Fortifying Soup caused fewer new mustaches and lower mortality. Those findings were enough to reject the surrogate-based recommendation.</p>
            <p><strong>What the trials did not reveal:</strong> they did not identify the biological pathway, explain the harms and benefits, or prove which internal changes connected treatment to death.</p>
            <p>Several mechanisms could fit the same outcome pattern. A separate mechanistic investigation might distinguish them. Until then, the responsible report stopped at what random assignment and follow-up had actually shown.</p>
            <details class="case-terms"><summary>Inferential boundary</summary><dl><div><dt>Effect estimation</dt><dd>measuring what assignment changed in the observed outcomes</dd></div><div><dt>Mechanistic inference</dt><dd>explaining the pathway through which the effect occurred</dd></div></dl></details>
            <p>A useful decision did not require a fictional explanation. The commission could recommend the treatment effect it had measured while leaving the biological mechanism open for further study.</p>
          </div>
        </section>

        <section id="case-verdict" class="case-section case-closing">
          <div class="case-number">09</div>
          <div>
            <p class="case-kicker">Verdict</p>
            <h2>Three questions before believing the obvious story</h2>
            <ol>
              <li><strong>Were the observed groups comparable?</strong><span>The way they formed gave us no assurance. Unmeasured differences could confound the comparison.</span></li>
              <li><strong>Was the visible feature a lever?</strong><span>Assigned hats said no. A sign of advantage was not its source.</span></li>
              <li><strong>Did the trial measure the outcome we cared about?</strong><span>The surrogates said “mustaches” and “Blob Score.” The commission had said “longer lives.”</span></li>
            </ol>
            <div class="case-translation"><span>Outside Blob World</span><h3>The names change; the questions do not</h3><dl><div><dt>Hats</dt><dd>A lifestyle, adherence, or social marker associated with healthier people.</dd></div><div><dt>Mustaches</dt><dd>A crude surrogate that an intervention can manufacture without delivering the hoped-for benefit.</dd></div><div><dt>Blob Score</dt><dd>A plausible laboratory biomarker that measures one real but incomplete pathway.</dd></div><div><dt>Longer lives</dt><dd>The patient-important benefit the intervention was meant to produce.</dd></div></dl></div>
            <p class="case-final-line">First ask whether the groups are comparable. Then ask whether changing the thing you measured changes the thing you meant to improve.</p>
            <aside class="case-outlook"><strong>Cases still in the cabinet</strong><span>Treatment-seeking after health worsens can demonstrate reverse causation. Adjustment using imperfect visible clues can demonstrate residual confounding. Shape can demonstrate false positives and failed replication. A stack of biased studies can demonstrate why meta-analysis is not an alchemist.</span></aside>
          </div>
        </section>

        <details class="case-mechanics">
          <summary><span>Behind the simulation</span><strong>Show the hidden dynamics, measurements, and intervention rules</strong></summary>
          <div class="case-mechanics-body">
            <p>These rules generated the evidence above. They were fixed throughout the investigation but unavailable to its investigators.</p>

            <div class="case-mechanics-flow" aria-label="The two annual paths into damage">
              <div class="case-mechanics-path">
                <section><span>At birth</span><strong>Constitution = 3d4</strong></section><b aria-hidden="true">→</b>
                <section><span>Each year</span><strong>Hazard = d20</strong><small>Roll at or below Constitution: resist</small></section><b aria-hidden="true">→</b>
                <section><span>On failure</span><strong>Damage +1</strong></section>
              </div>
              <div class="case-mechanics-path">
                <section><span>At birth</span><strong>Wisdom = 3d4</strong></section><b aria-hidden="true">→</b>
                <section><span>Each year</span><strong>Stress = d20</strong><small>Roll at or below Wisdom: self-care</small></section><b aria-hidden="true">→</b>
                <section><span>On success</span><strong>Damage -1</strong></section>
              </div>
              <div class="case-mechanics-death"><strong>Damage is never below 0</strong><b aria-hidden="true">→</b><strong>Damage ≥ 5 means death</strong></div>
            </div>

            <div class="case-mechanics-notes">
              <section><h3>Initialization and visible clues</h3><ul>
                <li>Constitution and Wisdom are rolled independently. If their sum exceeds 19, one is chosen at random and rerolled until the sum is at most 19.</li>
                <li>Shape is assigned randomly and has no effect.</li>
                <li>Each year, a blob without a hat has an annual hat chance equal to one quarter of its Wisdom score, expressed as a percentage (Wisdom 8 → 2%). Mustache chance works the same way from Constitution (Constitution 8 → 2%). Accessories persist and have no causal effect.</li>
                <li>The original village contains 240 blobs. The studies begin with the 177 survivors at Year 10.</li>
              </ul></section>
              <section><h3>Blob Score</h3><ul>
                <li><code>Blob Score = 70 - 2 × Constitution + measurement error</code>; lower is better.</li>
                <li>The centered measurement noise has a standard deviation of about 3.5 points; independent before-and-after errors make change scores noisier.</li>
                <li>The score measures Constitution, but omits Wisdom, Damage, and treatment burden. It can therefore move in the right direction while missing the net effect on survival.</li>
              </ul></section>
            </div>

            <h3 class="case-mechanics-table-title">Hidden intervention calibration</h3>
            <div class="case-mechanics-table" role="table" aria-label="Hidden intervention effects">
              <div role="row"><strong>Program</strong><strong>Direct mustache</strong><strong>Chance of +3 Constitution</strong><strong>Chance of +1 Damage</strong></div>
              <div role="row"><b>Usual care</b><span>0%</span><span>0%</span><span>0%</span></div>
              <div role="row"><b>Grooming Drive</b><span>24%</span><span>20%</span><span>40%</span></div>
              <div role="row"><b>Balanced Tonic</b><span>15%</span><span>80%</span><span>50%</span></div>
              <div role="row"><b>Fortifying Soup</b><span>6%</span><span>60%</span><span>0%</span></div>
            </div>
            <p class="case-mechanics-footnote">Program effects are applied after random assignment at Year 10. Natural annual mustache acquisition continues afterward.</p>
          </div>
        </details>
      </article>
    </main>`,window.scrollTo(0,0)}const R=document.querySelector("#app");if(!R)throw new Error("Missing #app element");I(R,{showWorldNavigation:!1});
