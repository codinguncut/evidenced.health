(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const A=13,P=[{id:"control",label:"Usual care",publicPitch:"The village continues as before.",mustacheChance:0,constitutionChance:0,treatmentBurdenChance:0},{id:"grooming",label:"Grooming Drive",publicPitch:"A village-wide program combining coaching, supplies, and regular visits.",mustacheChance:.24,constitutionChance:.2,treatmentBurdenChance:.4},{id:"balanced",label:"Balanced Tonic",publicPitch:"A bottled daily regimen with nutritional and behavioral components.",mustacheChance:.15,constitutionChance:.8,treatmentBurdenChance:.5},{id:"fortifying",label:"Fortifying Soup",publicPitch:"A prepared-food program delivered on a regular schedule.",mustacheChance:.06,constitutionChance:.6,treatmentBurdenChance:0}],m={portraitBlobs:[{id:0,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:2,shape:"square",hasHat:!1,hasMustache:!1},{id:7,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:10,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:13,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:17,shape:"square",hasHat:!1,hasMustache:!1},{id:20,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:23,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:26,shape:"square",hasHat:!0,hasMustache:!1},{id:31,shape:"circle",hasHat:!1,hasMustache:!0},{id:34,shape:"square",hasHat:!1,hasMustache:!0},{id:37,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:42,shape:"circle",hasHat:!1,hasMustache:!1},{id:45,shape:"square",hasHat:!0,hasMustache:!1},{id:48,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:52,shape:"square",hasHat:!1,hasMustache:!1},{id:57,shape:"circle",hasHat:!1,hasMustache:!0},{id:61,shape:"circle",hasHat:!0,hasMustache:!1},{id:64,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:68,shape:"square",hasHat:!1,hasMustache:!0},{id:73,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:77,shape:"circle",hasHat:!0,hasMustache:!1},{id:81,shape:"square",hasHat:!1,hasMustache:!1},{id:85,shape:"square",hasHat:!1,hasMustache:!1},{id:90,shape:"circle",hasHat:!1,hasMustache:!1},{id:94,shape:"circle",hasHat:!1,hasMustache:!1},{id:97,shape:"circle",hasHat:!1,hasMustache:!1},{id:102,shape:"pentagon",hasHat:!0,hasMustache:!0},{id:106,shape:"circle",hasHat:!0,hasMustache:!1},{id:110,shape:"square",hasHat:!1,hasMustache:!1},{id:114,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:119,shape:"circle",hasHat:!1,hasMustache:!1},{id:123,shape:"square",hasHat:!1,hasMustache:!1},{id:126,shape:"circle",hasHat:!0,hasMustache:!1},{id:130,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:133,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:138,shape:"square",hasHat:!1,hasMustache:!1},{id:143,shape:"circle",hasHat:!1,hasMustache:!1},{id:149,shape:"square",hasHat:!1,hasMustache:!1},{id:152,shape:"square",hasHat:!1,hasMustache:!1},{id:155,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:158,shape:"square",hasHat:!1,hasMustache:!1},{id:161,shape:"circle",hasHat:!0,hasMustache:!1},{id:165,shape:"square",hasHat:!0,hasMustache:!1},{id:169,shape:"square",hasHat:!1,hasMustache:!0},{id:172,shape:"circle",hasHat:!1,hasMustache:!1},{id:178,shape:"square",hasHat:!1,hasMustache:!0},{id:183,shape:"circle",hasHat:!1,hasMustache:!1},{id:186,shape:"circle",hasHat:!1,hasMustache:!1},{id:193,shape:"circle",hasHat:!1,hasMustache:!1},{id:197,shape:"pentagon",hasHat:!1,hasMustache:!0},{id:200,shape:"square",hasHat:!1,hasMustache:!1},{id:207,shape:"square",hasHat:!1,hasMustache:!1},{id:211,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:215,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:219,shape:"square",hasHat:!1,hasMustache:!1},{id:225,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:228,shape:"circle",hasHat:!1,hasMustache:!0},{id:231,shape:"pentagon",hasHat:!1,hasMustache:!1},{id:235,shape:"circle",hasHat:!1,hasMustache:!1}],observationalHatGroups:[{label:"Hat",participants:31,deaths:13,deathRate:.41935483870967744},{label:"No hat",participants:146,deaths:86,deathRate:.589041095890411}],observationalMustacheGroups:[{label:"Mustache",participants:37,deaths:15,deathRate:.40540540540540543},{label:"No mustache",participants:140,deaths:84,deathRate:.6}],observationalShapeGroups:[{label:"Circle",participants:61,deaths:35,deathRate:.5737704918032787},{label:"Square",participants:64,deaths:36,deathRate:.5625},{label:"Pentagon",participants:52,deaths:28,deathRate:.5384615384615384}],observationalAccessoryGroups:[{label:"Both",participants:11,deaths:3,deathRate:.2727272727272727},{label:"Hat only",participants:20,deaths:10,deathRate:.5},{label:"Mustache only",participants:26,deaths:12,deathRate:.46153846153846156},{label:"Neither",participants:120,deaths:74,deathRate:.6166666666666667}],randomizedHatStudy:{groups:[{label:"Hat",participants:8900,deaths:4938,deathRate:.5548314606741573},{label:"No hat",participants:8800,deaths:4947,deathRate:.5621590909090909}],meanRiskDifference:-.007327630234933606,riskDifferenceStandardError:.007940274917115436},singleFutureArms:[{id:"control",label:"Usual care",participants:45,baselineHats:9,baselineCircles:18,baselineMustaches:8,blobScoreCount:45,blobScoreChangeSum:-14.920662572840229,blobScoreChangeSumSquares:1026.88343063308,blobScoreMeanChange:-.3315702793964495,blobScoreStandardError:.7184214536314255,surrogateEligible:37,newMustaches:1,surrogateRate:.02702702702702703,deaths:9,deathRate:.2},{id:"grooming",label:"Grooming Drive",participants:44,baselineHats:11,baselineCircles:15,baselineMustaches:5,blobScoreCount:44,blobScoreChangeSum:-40.00314336386509,blobScoreChangeSumSquares:1310.7932067672466,blobScoreMeanChange:-.909162349178752,blobScoreStandardError:.8207225761640657,surrogateEligible:39,newMustaches:13,surrogateRate:.3333333333333333,deaths:8,deathRate:.18181818181818182},{id:"balanced",label:"Balanced Tonic",participants:44,baselineHats:5,baselineCircles:14,baselineMustaches:12,blobScoreCount:44,blobScoreChangeSum:-215.18035803944804,blobScoreChangeSumSquares:2179.680589478329,blobScoreMeanChange:-4.890462682714728,blobScoreStandardError:.7719135082949178,surrogateEligible:32,newMustaches:4,surrogateRate:.125,deaths:16,deathRate:.36363636363636365},{id:"fortifying",label:"Fortifying Soup",participants:44,baselineHats:6,baselineCircles:14,baselineMustaches:12,blobScoreCount:44,blobScoreChangeSum:-152.59088819334283,blobScoreChangeSumSquares:1785.980776021757,blobScoreMeanChange:-3.4679747316668825,blobScoreStandardError:.8150277986817478,surrogateEligible:32,newMustaches:3,surrogateRate:.09375,deaths:4,deathRate:.09090909090909091}],confirmatoryArms:[{id:"control",label:"Usual care",participants:434,baselineHats:74,baselineCircles:126,baselineMustaches:69,blobScoreCount:434,blobScoreChangeSum:-131.2619326391723,blobScoreChangeSumSquares:10260.93841783734,blobScoreMeanChange:-.3024468493990145,blobScoreStandardError:.23321847517600752,surrogateEligible:365,newMustaches:7,surrogateRate:.019178082191780823,deaths:148,deathRate:.34101382488479265},{id:"grooming",label:"Grooming Drive",participants:434,baselineHats:64,baselineCircles:153,baselineMustaches:76,blobScoreCount:434,blobScoreChangeSum:-444.71004337933846,blobScoreChangeSumSquares:14418.79677440548,blobScoreMeanChange:-1.0246775193072315,blobScoreStandardError:.2725852199470266,surrogateEligible:358,newMustaches:91,surrogateRate:.2541899441340782,deaths:170,deathRate:.391705069124424},{id:"balanced",label:"Balanced Tonic",participants:433,baselineHats:80,baselineCircles:136,baselineMustaches:69,blobScoreCount:433,blobScoreChangeSum:-2088.987397867255,blobScoreChangeSumSquares:23292.74519874401,blobScoreMeanChange:-4.8244512652823435,blobScoreStandardError:.26579083084201643,surrogateEligible:364,newMustaches:51,surrogateRate:.1401098901098901,deaths:167,deathRate:.3856812933025404},{id:"fortifying",label:"Fortifying Soup",participants:433,baselineHats:77,baselineCircles:117,baselineMustaches:72,blobScoreCount:433,blobScoreChangeSum:-1303.0463067167439,blobScoreChangeSumSquares:17550.72344135863,blobScoreMeanChange:-3.0093448192072607,blobScoreStandardError:.26993094261530215,surrogateEligible:361,newMustaches:43,surrogateRate:.11911357340720222,deaths:119,deathRate:.2748267898383372}]};function S(s){return`${(s*100).toFixed(1)}%`}function d(s){return`${s>=0?"+":""}${(s*100).toFixed(1)} pp`}function y(s){return s.map(a=>`
    <div class="case-rate-row" aria-label="${a.label}: ${S(a.deathRate)}, ${a.deaths} of ${a.participants} died">
      <strong>${a.label}</strong>
      <div aria-hidden="true"><i style="width:${a.deathRate*100}%"></i></div>
      <b>${S(a.deathRate)}</b>
      <span>${a.deaths}/${a.participants} died</span>
    </div>`).join("")}function x(s){return s.map(a=>`
    <div class="case-endpoint-row" aria-label="${a.label}: ${S(a.rate)}, ${a.numerator} of ${a.denominator}">
      <strong>${a.label}</strong>
      <div aria-hidden="true"><i style="width:${a.rate*100}%"></i></div>
      <b>${S(a.rate)}</b>
      <span>${a.numerator}/${a.denominator}</span>
    </div>`).join("")}function F(s,a,r){return Math.max(a,Math.min(r,s))}function w(s,a,r){const o=t=>(F(t,a[0],a[1])-a[0])/(a[1]-a[0])*100;return s.map(t=>`
    <div class="case-ci-row" aria-label="${t.label}: ${r(t.estimate)}, 95% confidence interval ${r(t.low)} to ${r(t.high)}">
      <strong>${t.label}</strong>
      <div class="case-ci-plot" aria-hidden="true">
        ${a[0]<=0&&a[1]>=0?`<em style="left:${o(0)}%"></em>`:""}
        <span style="left:${o(t.low)}%;width:${o(t.high)-o(t.low)}%"></span>
        <i style="left:${o(t.estimate)}%"></i>
      </div>
      <b>${r(t.estimate)}</b>
      <small>95% CI ${r(t.low)} to ${r(t.high)}</small>
    </div>`).join("")}function E(s,a){const o=s/a,t=1+1.96**2/a,i=(o+1.96**2/(2*a))/t,l=1.96*Math.sqrt(o*(1-o)/a+1.96**2/(4*a**2))/t;return[i-l,i+l]}function N(s,a){return B(s.deaths,s.participants,s.deathRate,a.deaths,a.participants,a.deathRate)}function B(s,a,r,o,t,i){const[l,u]=E(s,a),[b,h]=E(o,t),n=r-i;return{estimate:n,low:n-Math.hypot(r-l,h-i),high:n+Math.hypot(u-r,i-b)}}function k(s,a){const r=N(s,a);return`<p class="case-effect-summary"><strong>${s.label} minus ${a.label}</strong><span>${d(r.estimate)} observed risk difference (95% CI ${d(r.low)} to ${d(r.high)})</span></p>`}function O(s){const o=64.80000000000001,t=Math.ceil(s.length/20)*o,i=48*.29,l=Math.sqrt(Math.PI*i**2)/2,u=Math.sqrt(2*Math.PI*i**2/(5*Math.sin(2*Math.PI/5))),b=Array.from({length:5},(h,n)=>{const g=-Math.PI/2+n*(2*Math.PI/5);return`${u*Math.cos(g)},${u*Math.sin(g)}`}).join(" ");return`<svg class="population-svg" viewBox="0 0 960 ${t}" role="img" aria-label="Sixty Year-10 survivors">
    ${s.map((h,n)=>{const g=n%20*48+24,M=Math.floor(n/20)*o+o/2,H=h.shape==="circle"?`<circle class="blob-body" r="${i}" />`:h.shape==="square"?`<rect class="blob-body" x="${-l}" y="${-l}" width="${l*2}" height="${l*2}" />`:`<polygon class="blob-body" points="${b}" />`,v=h.hasHat?'<path class="blob-hat" d="M -6.7 -14.4 L -5.8 -21.6 H 5.8 L 6.7 -14.4 H 10.6 V -11 H -10.6 V -14.4 Z" />':"",f=h.hasMustache?'<path class="blob-mustache" d="M 0 3.8 C -4 0.5 -8 0.5 -11 3.8 C -8 2 -6 8 -1 4 Z M 0 3.8 C 4 0.5 8 0.5 11 3.8 C 8 2 6 8 1 4 Z" />':"";return`<g class="blob" transform="translate(${g} ${M})" aria-label="Blob ${h.id}">${H}${v}${f}</g>`}).join("")}
  </svg>`}function Y(s,a={}){const r={groups:m.observationalHatGroups},o={groups:m.observationalMustacheGroups},t={groups:m.observationalShapeGroups},i=m.observationalAccessoryGroups,l=m.randomizedHatStudy,u={arms:m.singleFutureArms},b=u,h={arms:m.confirmatoryArms},n=u.arms.find(e=>e.id==="control"),g=u.arms.filter(e=>e.id!=="control").map(e=>({label:e.label,...B(e.newMustaches,e.surrogateEligible,e.surrogateRate,n.newMustaches,n.surrogateEligible,n.surrogateRate)})),M=u.arms.filter(e=>e.id!=="control").map(e=>{const c=e.blobScoreMeanChange-n.blobScoreMeanChange,p=Math.hypot(e.blobScoreStandardError,n.blobScoreStandardError);return{id:e.id,label:e.label,estimate:c,low:c-1.96*p,high:c+1.96*p}}),H=u.arms.filter(e=>e.id!=="control").map(e=>{const c=e.deathRate-n.deathRate,p=Math.sqrt(e.deathRate*(1-e.deathRate)/e.participants+n.deathRate*(1-n.deathRate)/n.participants);return{id:e.id,label:e.label,estimate:c,low:c-1.96*p,high:c+1.96*p}}),v=M.find(e=>e.id==="balanced"),f=h.arms.find(e=>e.id==="control"),R=h.arms.filter(e=>e.id!=="control").map(e=>{const c=e.deathRate-f.deathRate,p=Math.sqrt(e.deathRate*(1-e.deathRate)/e.participants+f.deathRate*(1-f.deathRate)/f.participants);return{id:e.id,label:e.label,estimate:c,low:c-1.96*p,high:c+1.96*p}}),T=R.find(e=>e.id==="fortifying"),z=h.arms.reduce((e,c)=>e+c.participants,0),D=M.map(e=>({label:e.label,estimate:e.estimate,low:e.low,high:e.high})),W=H.map(e=>({label:e.label,estimate:e.estimate,low:e.low,high:e.high})),C=l.meanRiskDifference,q=1.96*l.riskDifferenceStandardError,$=[{label:"Assigned hat minus no hat",estimate:C,low:C-q,high:C+q}];s.innerHTML=`
    <main class="investigation-shell">
      <header class="case-cover">
        ${a.showWorldNavigation===!1?`<nav aria-label="Site navigation">
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
            <p>Blob Village began with 240 citizens. By Year 10, only 177 remained alive. The Council is looking for a remedy, a program, or any other action that could extend the lives of those who remain.</p>
            <p>The village is not governed by chance alone. Defined biological and behavioral mechanisms shape how its citizens resist hazards, recover, accumulate injury, and die. Those mechanisms are real, but unknown to the investigators. (The hidden mechanics are explained in a collapsed appendix at the end of the article.)</p>
            <p>This investigation is based on a simulated population governed by fixed probabilistic rules. The rules remain stable, while individual rolls, histories, and outcomes vary by chance. Because this is a simulation, separate studies can branch from copies of the same Year-10 population; they are alternative futures, not one continuous timeline.</p>
            <p>The Council supplies records for the 177 blobs alive in the saved village at Year 10. We can see shape, hats, mustaches, and later deaths. We have no complete measurements of prior health, physiology, behavior, or accumulated injury.</p>
            <figure class="case-cohort-portrait">${O(m.portraitBlobs)}<figcaption>Sixty of the 177 Year-10 survivors. The investigation begins with blobs, not columns.</figcaption></figure>
            <p>Our task is not merely to find which visible group lives longer. It is to identify something the village can <em>do</em> to improve longevity.</p>
            <aside class="case-plain-note"><strong>How to read the rates</strong><span>A death rate below means the share of blobs alive at Year 10 who die during the stated follow-up.</span></aside>
            <details class="case-terms"><summary>Study language</summary><dl><div><dt>Cohort</dt><dd>the 177 blobs entering the study</dd></div><div><dt>Baseline</dt><dd>Year 10, when features are recorded</dd></div><div><dt>Follow-up</dt><dd>the period from Year 10 to Year 20</dd></div><div><dt>Outcome</dt><dd>death during follow-up</dd></div></dl></details>
            <p>With the mechanisms hidden, the investigation begins with what can be seen: which visible groups appear to fare better?</p>
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
            <h2>The records suggest several hypotheses</h2>
            <p>We record visible features at Year 10 and follow the cohort through Year 20. Hats could represent a behavior-adjacent clue; mustaches could represent a physiological marker. Shape was fixed at birth and can be compared but not assigned.</p>
            <aside class="case-question"><span>Before seeing the results</span><strong>What could a difference between visible groups establish, and what would you still need to know before recommending a change?</strong></aside>
            <div class="case-observation-grid">
              <article><h3>Hats</h3>${y(r.groups)}${k(r.groups[0],r.groups[1])}</article>
              <article><h3>Mustaches</h3>${y(o.groups)}${k(o.groups[0],o.groups[1])}</article>
              <article><h3>Shape <small>fixed at birth</small></h3>${y(t.groups)}<p class="case-effect-summary"><span>Exploratory three-group comparison; no reference group was selected.</span></p></article>
              <article><h3>Hats + mustaches <small>combined clues</small></h3>${y(i)}${k(i[0],i[3])}</article>
            </div>
            <p><strong>A finding, not yet a recommendation:</strong> mortality proportions differ in this cohort. These exploratory differences could reflect group composition, chance, or both; the table does not explain why.</p>
            <aside class="case-plain-note"><strong>Why include shape?</strong><span>Because it provides a deliberately non-actionable comparison. Shape may separate groups with different outcomes, but it is fixed at birth and cannot be prescribed as a remedy. That makes the distinction between predicting risk and offering something useful to change easier to see.</span></aside>
            <details class="case-terms"><summary>Inferential language</summary><dl><div><dt>Exposure</dt><dd>the visible feature used to define groups</dd></div><div><dt>Association</dt><dd>a difference in outcomes between observed groups</dd></div><div><dt>Confidence interval</dt><dd>a range of effect sizes reasonably compatible with the observed data under the stated model</dd></div><div><dt>Observational study</dt><dd>group membership is recorded, not assigned</dd></div></dl></details>
            <p>The commission now has several patterns worth investigating. Before turning any of them into policy, it has to ask whether the compared groups differ in more than the feature named on the chart.</p>
          </div>
        </section>

        <section id="case-confounding" class="case-section">
          <div class="case-number">02</div>
          <div>
            <p class="case-kicker">Compare</p>
            <h2>The columns are not comparable</h2>
            <p>No lottery created the natural hat and no-hat groups. Hats accumulated during the first ten years. Their wearers may also have differed in prior health, behavior, exposure, opportunity, or luck. The mortality table contains no guarantee that hats are the only difference.</p>
            <p>If an unmeasured factor influenced both who acquired hats and who later died, it would confound the comparison. We do not need to know its name to see that the study design permits it. Repeating the trial could average later chance, but it would preserve the same naturally formed groups at baseline.</p>
            <aside class="case-margin-note"><strong>The information boundary</strong><span>Perhaps hat wearers began healthier, avoided more hazards, or received more help. We need not choose a story: the records cannot rule these stories out.</span></aside>
            <details class="case-terms"><summary>Epidemiological language</summary><dl><div><dt>Confounding</dt><dd>a pre-exposure common cause influences both who has the exposure and the later outcome</dd></div><div><dt>Comparability</dt><dd>whether groups are sufficiently alike for a fair causal contrast</dd></div><div><dt>Exchangeability</dt><dd>the technical ideal that groups could trade exposure labels without changing their expected outcomes</dd></div><div><dt>Unmeasured confounding</dt><dd>the relevant common cause is not recorded</dd></div></dl></details>
            <p>The cleanest way to escape those naturally formed groups is to create new groups by lottery. If hats are truly a lever, assigning them should reproduce the advantage.</p>
          </div>
        </section>

        <section id="case-assign" class="case-section">
          <div class="case-number">03</div>
          <div>
            <p class="case-kicker">Assign</p>
            <h2>The Council puts hats to the test</h2>
            <aside class="case-question"><span>Make a prediction</span><strong>What result would support hats as the source of the observed advantage? What result would weaken that explanation?</strong></aside>
            <p>The observational result survives as a hypothesis, not a policy. The Council sees that more hat wearers survive and proposes producing more hat wearers. We repeat the randomized hat trial 100 times from the saved Year-10 cohort. Random assignment breaks the connection between receiving a hat and whatever prior characteristics usually make hat wearers different.</p>
            <div class="case-assignment-grid">
              <article><h3>Average assigned outcomes</h3>${y(l.groups)}<p class="case-effect-summary"><span>Counts are deaths / trial-observations across 100 alternative branches, not distinct residents.</span></p></article>
              <article><h3>Assigned-hat effect <small>mean across 100 branches</small></h3>${w($,[-.05,.05],d)}</article>
            </div>
            <p><strong>Assessment:</strong> assigned hats change average mortality risk by ${d(C)} (95% CI ${d($[0].low)} to ${d($[0].high)}). The estimated difference is small and the interval includes zero, so the randomized result is inconclusive and does not reject the no-effect hypothesis.</p>
            <blockquote class="case-verdict-line">The hat is where the advantage shows up, not where it comes from.</blockquote>
            <p>Observing more hats among survivors does not mean that bringing about more hats brings about more survival. The randomized branches do not reveal what makes natural hat wearers different; they show that assigning hats does not reproduce the large observational advantage.</p>
            <div class="case-fixed-grid"><section><span>Randomization fixes</span><strong>How the comparison groups form</strong><p>Prior characteristics no longer decide who receives a hat.</p></section><section><span>Randomization does not fix</span><strong>Whether a hat is a useful treatment</strong><p>A fair test can show that the proposed lever does not work.</p></section></div>
            <details class="case-terms"><summary>Causal language</summary><dl><div><dt>Randomized controlled trial</dt><dd>assignment, rather than prior history, determines exposure</dd></div><div><dt>Causal effect</dt><dd>the outcome difference produced by assigning the feature</dd></div><div><dt>Marker versus lever</dt><dd>prediction by a marker does not show that changing it changes the outcome</dd></div></dl></details>
            <p>The failed hat program does not end the search. It redirects it: instead of copying a sign found on healthier blobs, the Council now tests interventions intended to change health itself.</p>
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
            <p>Assigning the behavioral clue fails. Mustaches now take a different role: not a treatment to glue on, but a physiology-like marker that might respond quickly when a real program changes the blob. The Council offers three interventions. Their internal effects are unknown to us.</p>
            <div class="case-programs">
              ${P.filter(e=>e.id!=="control").map((e,c)=>`
                <article><span>Program ${String.fromCharCode(65+c)}</span><h3>${e.label}</h3><p>${e.publicPitch}</p></article>`).join("")}
            </div>
            <p>If residents chose their own program, each arm could attract blobs with different prior histories. The commission therefore assigns the 177 Year-10 survivors to usual care or one of the three programs by lottery. Randomization addresses how the groups form; it does not decide whether the trial's endpoint represents longer life.</p>
            <details class="case-terms"><summary>Trial language</summary><dl><div><dt>Treatment arm</dt><dd>a group assigned to one program or usual care</dd></div><div><dt>Random assignment</dt><dd>chance, rather than prior history, determines which program each blob receives</dd></div></dl></details>
            <p>Mortality requires years of follow-up. A new mustache can be observed immediately. The Council, having schedules, selects the quick endpoint first.</p>
          </div>
        </section>

        <section id="case-surrogate" class="case-section">
          <div class="case-number">05</div>
          <div>
            <p class="case-kicker">Measure the surrogate</p>
            <h2>The first decision uses a quick endpoint</h2>
            <p>Among blobs without a mustache at baseline, the endpoint is simple: has a new mustache appeared during treatment or by Year 11? Immediate marker and physiology measurements are recorded before treatment burden; mortality follow-up counts every death after assignment.</p>
            <aside class="case-question"><span>Decision point</span><strong>When would creating more mustaches justify expecting longer lives? Has this trial established that link?</strong></aside>
            <div class="case-uncertainty-grid">
              <article>
                <h3>New mustaches</h3>
                <p class="case-chart-reference">Usual care: <strong>${S(n.surrogateRate)} (${n.newMustaches}/${n.surrogateEligible})</strong></p>
                <div class="case-endpoint-chart surrogate embedded">
                  ${x(b.arms.filter(e=>e.id!=="control").map(e=>({label:e.label,rate:e.surrogateRate,numerator:e.newMustaches,denominator:e.surrogateEligible})))}
                </div>
              </article>
              <article>
                <h3>Difference from usual care <small>new-mustache risk difference; 0 = no effect; positive means more mustaches</small></h3>
                ${w(g,[-.2,.55],d)}
              </article>
            </div>
            <p>On the chosen endpoint, the result looks decisive. The Grooming Drive produces the most new mustaches, and its comparison with usual care excludes no effect. The Council can name a surrogate winner without waiting for mortality.</p>
            <div class="case-recommendation"><span>Provisional surrogate-only decision</span><strong>Prefer the Grooming Drive</strong><p>It moves the visible marker more than any rival. This is not yet a mortality conclusion.</p></div>
            <p>But the recommendation is only as sound as the substitution beneath it. The trial has measured mustaches precisely; it has not yet shown that manufacturing them improves health.</p>
            <aside class="case-safety-signal"><span>Before the order is signed</span><h3>Two objections reach the Council</h3><p>First, the Grooming Drive might be manufacturing mustaches rather than health. Second, early mortality follow-up, including deaths during the treatment visit, is too sparse and immature to establish benefit or harm. A mustache-only rollout is difficult to defend.</p></aside>
            <details class="case-terms"><summary>Endpoint language</summary><dl><div><dt>Biomarker</dt><dd>a measured sign related to an underlying biological process</dd></div><div><dt>Surrogate endpoint</dt><dd>a substitute outcome used in place of the outcome that ultimately matters</dd></div><div><dt>Surrogate validation</dt><dd>testing whether treatment effects on the surrogate reliably predict effects on meaningful outcomes</dd></div><div><dt>Safety signal</dt><dd>an early indication of possible harm that requires further investigation</dd></div></dl></details>
            <p>The objections do not prove that the Grooming Drive is harmful, but they make a mustache-only decision hard to defend. The Council asks the laboratory for a more credible early measure.</p>
          </div>
        </section>

        <section id="case-blob-score" class="case-section">
          <div class="case-number">06</div>
          <div>
            <p class="case-kicker">Measure the serious surrogate</p>
            <h2>The laboratory offers a more informative shortcut</h2>
            <p>Mustaches have been the best quick sign available, but they are difficult to defend at a conference. The laboratory offers Blob Score instead: a blood-test-like, continuous measure of physiological resilience. Lower is considered better. In untreated blobs, lower scores tend to accompany longer survival.</p>
            <p>This looks like progress. Yet a credible laboratory measure can track one genuine part of health while overlooking another.</p>
            <p>Every blob is tested once before treatment and again immediately after the program's marker and physiology effects, before treatment burden and long mortality follow-up. “Post-treatment change” means the second score minus the baseline score. A negative change is considered an improvement.</p>
            <p>Blob Score includes random measurement error, but that is not its deepest limitation. It measures one genuine dimension of health while missing other pathways through which a program could help or harm. A larger sample can average away random error; it cannot make an incomplete endpoint represent what it omits.</p>
            <p>Both charts below come from the same single trial. Blob Score is measured immediately; mortality means death by Year ${A}. Each chart shows an effect <strong>relative to usual care</strong>: the result in an intervention arm minus the result in the usual-care arm. If the intervention made no difference, that subtraction would equal zero. Zero is therefore the null, or no-effect, value marked by the vertical line. “pp” means percentage points; each 95% confidence interval shows the range of effects reasonably compatible with this trial's approximate analysis.</p>
            <div class="case-uncertainty-grid">
              <article>
                <h3>Blob Score effect vs usual care <small>post-treatment change; 0 = no effect; negative is better</small></h3>
                ${w(D,[-8,6],e=>`${e>=0?"+":""}${e.toFixed(1)}`)}
              </article>
              <article>
                <h3>Death risk effect vs usual care <small>${A-10}-year risk difference; 0 = no effect; negative is better</small></h3>
                ${w(W,[-.4,.4],d)}
              </article>
            </div>
            <p><strong>Do not compare the magnitudes across charts:</strong> Blob Score points and mortality percentage points are different units. Read each interval against its own zero line. Balanced Tonic has the largest estimated Blob Score improvement, while Fortifying Soup's mortality estimate remains compatible with benefit, no effect, or harm.</p>
            <div class="case-recommendation"><span>Provisional surrogate-only decision</span><strong>Prefer Balanced Tonic</strong><p>Its estimated Blob Score effect is ${v.estimate.toFixed(1)} points (95% CI ${v.low.toFixed(1)} to ${v.high.toFixed(1)}). This chart does not establish that its effect differs from Fortifying Soup's.</p></div>
            <p><strong>What the laboratory shows:</strong> Balanced Tonic changes the measured dimension of physiology. The test moves. Whether the blobs live longer remains unresolved. A valid surrogate requires evidence that treatment-induced changes in the score reliably predict the net effect on meaningful outcomes.</p>
            <p>That leaves the commission with a practical dilemma: should it trust the endpoint that answers quickly and consistently, or wait for a better estimate of the outcome it actually cares about?</p>
          </div>
        </section>

        <section id="case-hard-endpoint" class="case-section">
          <div class="case-number">07</div>
          <div>
            <p class="case-kicker">Extend and enlarge</p>
            <h2>A larger trial waits five years for the answer</h2>
            <p>The first trial offers a promising mortality estimate but cannot exclude no effect. The Council therefore commissions a new confirmatory trial: ${z.toLocaleString()} Year-10 survivors, randomized among the same four programs and followed for five years.</p>
            <p>This is not a replay of the original 177 blobs. A larger independently generated cohort supplies more participants, while two additional years of follow-up supply more deaths. A study can report only the follow-up it has accrued: a trial beginning today cannot provide its 20-year mortality result today. The Council chooses a five-year outcome and waits five years for it.</p>
            <p>Based on the first trial, Fortifying Soup versus usual care is specified as the primary confirmatory mortality comparison. The other two comparisons are retained as descriptive context.</p>
            <div class="case-endpoint-chart mortality">
              ${x(h.arms.map(e=>({label:e.label,rate:e.deathRate,numerator:e.deaths,denominator:e.participants})))}
            </div>
            <p>The raw rates now favor Fortifying Soup. The remaining question is whether the gap is still compatible with chance variation, so the commission examines the risk difference and its confidence interval.</p>
            <div class="case-uncertainty-grid single">
              <article>
                <h3>Death risk effects vs usual care <small>5-year risk difference; 0 = no effect; negative is better</small></h3>
                ${w(R,[-.16,.14],d)}
              </article>
            </div>
            <p>The descriptive Grooming Drive and Balanced Tonic intervals include zero. In the prespecified primary comparison, Fortifying Soup reduces five-year mortality by ${d(T.estimate)} relative to usual care (95% CI ${d(T.low)} to ${d(T.high)}). Its interval excludes zero, providing evidence of a mortality benefit in this confirmatory trial.</p>
            <div class="case-recommendation corrected"><span>Confirmatory recommendation</span><strong>Adopt the Fortifying Soup</strong><p>Under the Council's simplified rule, mortality is the decision endpoint: Fortifying Soup has the lowest observed five-year risk, and its prespecified comparison with usual care excludes no effect. The trial does not separately establish superiority over every active program.</p></div>
            <p>Randomization makes the treatment groups comparable in each analysis. Mustaches reward the most visible response; Blob Score rewards the strongest response on one real but incomplete pathway. Neither answers the full practical question. Good allocation cannot guarantee that an endpoint is valid.</p>
            <aside class="case-plain-note"><strong>Why the answer becomes clearer</strong><span>The new trial estimates a five-year outcome, not a more precise version of the earlier three-year outcome. Waiting longer produces more deaths, and larger enrollment narrows the interval around the five-year effect.</span></aside>
            <details class="case-terms"><summary>Outcome language</summary><dl><div><dt>Hard endpoint</dt><dd>a clinically meaningful outcome measured directly</dd></div><div><dt>Absolute risk difference</dt><dd>one fixed-horizon mortality risk subtracted from another</dd></div><div><dt>Adverse effect</dt><dd>harm caused by an intervention</dd></div></dl></details>
            <p>The Council finally has enough evidence to choose a program. It still does not know why that program works, which raises one last question about what the trial has and has not established.</p>
          </div>
        </section>

        <section class="case-section">
          <div class="case-number">08</div>
          <div>
            <p class="case-kicker">The information boundary</p>
            <h2>The mechanism remains under investigation</h2>
            <p>The trials establish observable effects with different degrees of certainty. Grooming Drive produces the most new mustaches, while its confirmatory mortality estimate is higher than usual care but remains compatible with no difference. Fortifying Soup produces fewer new mustaches than the other active programs and lower five-year mortality than usual care. That pattern is enough to reject the surrogate-only recommendation.</p>
            <p><strong>What the trials do not reveal:</strong> they do not identify the biological pathway, explain the harms and benefits, or prove which internal changes connect treatment to death.</p>
            <p>Several mechanisms could fit the same outcome pattern. A separate mechanistic investigation might distinguish them. Until then, the responsible report stops at what random assignment and follow-up actually show.</p>
            <details class="case-terms"><summary>Inferential boundary</summary><dl><div><dt>Effect estimation</dt><dd>measuring what assignment changes in the observed outcomes</dd></div><div><dt>Mechanistic inference</dt><dd>explaining the pathway through which the effect occurs</dd></div></dl></details>
            <p>A useful decision does not require a fictional explanation. The commission can recommend the treatment effect it has measured while leaving the biological mechanism open for further study.</p>
          </div>
        </section>

        <section id="case-verdict" class="case-section case-closing">
          <div class="case-number">09</div>
          <div>
            <p class="case-kicker">Verdict</p>
            <h2>Three questions before believing the obvious story</h2>
            <ol>
              <li><strong>Are the observed groups comparable?</strong><span>The way they formed gives us no assurance. Unmeasured differences could confound the comparison.</span></li>
              <li><strong>Is the visible feature a lever?</strong><span>Assigned hats do not reproduce the observational advantage. A sign of advantage is not necessarily its source.</span></li>
              <li><strong>Does the trial measure the outcome we care about?</strong><span>The surrogates say “mustaches” and “Blob Score.” The commission says “longer lives.”</span></li>
            </ol>
            <div class="case-translation"><span>Outside Blob World</span><h3>The names change; the questions do not</h3><dl><div><dt>Hats</dt><dd>A lifestyle, adherence, or social marker associated with healthier people.</dd></div><div><dt>Mustaches</dt><dd>A crude surrogate that an intervention can manufacture without delivering the hoped-for benefit.</dd></div><div><dt>Blob Score</dt><dd>A plausible laboratory biomarker that measures one real but incomplete pathway.</dd></div><div><dt>Longer lives</dt><dd>The patient-important benefit the intervention is meant to produce.</dd></div></dl></div>
            <p class="case-final-line">First ask whether the groups are comparable. Then ask whether changing the thing you measure changes the thing you mean to improve.</p>
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
                <li>Constitution and Wisdom are initially rolled independently as the sum of three four-sided dice (<code>3d4</code>). While their sum exceeds 19, one attribute is chosen anew at random and rerolled. This cap makes the accepted values dependent.</li>
                <li>Shape is assigned randomly and has no effect.</li>
                <li>Each annual hazard and stress check rolls one 20-sided die (<code>d20</code>). A blob without a hat has an annual hat chance equal to one quarter of its Wisdom score, expressed as a percentage (Wisdom 8 → 2%). Mustache chance works the same way from Constitution (Constitution 8 → 2%). Accessories persist and have no causal effect.</li>
                <li>The original village contains 240 blobs. The studies begin with the 177 survivors at Year 10.</li>
              </ul></section>
              <section><h3>Blob Score</h3><ul>
                <li><code>Blob Score = 70 - 2 × Constitution + measurement error</code>; lower is better.</li>
                <li>Random measurement error averages zero and has a standard deviation of about 3.5 points; independent before-and-after errors make change scores noisier.</li>
                <li>The score measures Constitution, but omits Wisdom, Damage, and treatment burden. It can therefore move in the right direction while missing the net effect on survival.</li>
              </ul></section>
            </div>

            <h3 class="case-mechanics-table-title">Hidden intervention calibration</h3>
            <div class="case-mechanics-table" role="table" aria-label="Hidden intervention effects">
              <div role="row"><strong role="columnheader">Program</strong><strong role="columnheader">Direct mustache</strong><strong role="columnheader">Chance of up to +3 Constitution</strong><strong role="columnheader">Chance of +1 Damage</strong></div>
              <div role="row"><b role="rowheader">Usual care</b><span role="cell">0%</span><span role="cell">0%</span><span role="cell">0%</span></div>
              <div role="row"><b role="rowheader">Grooming Drive</b><span role="cell">24%</span><span role="cell">20%</span><span role="cell">40%</span></div>
              <div role="row"><b role="rowheader">Balanced Tonic</b><span role="cell">15%</span><span role="cell">80%</span><span role="cell">50%</span></div>
              <div role="row"><b role="rowheader">Fortifying Soup</b><span role="cell">6%</span><span role="cell">60%</span><span role="cell">0%</span></div>
            </div>
            <p class="case-mechanics-footnote">Program effects are applied after random assignment at Year 10. Immediate mustache and Constitution effects, including the post-treatment Blob Score, are recorded before treatment burden is applied; mortality includes treatment-related deaths. Constitution is capped at 12. Natural annual mustache acquisition continues afterward.</p>
          </div>
        </details>
      </article>
    </main>`,window.scrollTo(0,0)}const I=document.querySelector("#app");if(!I)throw new Error("Missing #app element");Y(I,{showWorldNavigation:!1});
