(function(){
  // Twinkling starfield, Mirmobe Sky style
  var c=document.getElementById('stars'); if(!c) return;
  var x=c.getContext('2d'), stars=[], dpr=Math.min(window.devicePixelRatio||1,2);
  function size(){c.width=innerWidth*dpr;c.height=innerHeight*dpr;stars=[];var n=Math.round(innerWidth*innerHeight/5200);
    for(var i=0;i<n;i++)stars.push({x:Math.random()*c.width,y:Math.random()*c.height,r:(Math.random()*1.1+.25)*dpr,p:Math.random()*6.28,s:.4+Math.random()*1.6,w:Math.random()<.08});}
  function draw(t){x.clearRect(0,0,c.width,c.height);for(var i=0;i<stars.length;i++){var s=stars[i],a=.35+.65*Math.abs(Math.sin(s.p+t/1000*s.s*.6));
    x.fillStyle=s.w?'rgba(240,194,122,'+a+')':'rgba(243,236,223,'+a*.85+')';x.beginPath();x.arc(s.x,s.y,s.r,0,6.28);x.fill();}
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches)requestAnimationFrame(draw);}
  addEventListener('resize',size);size();requestAnimationFrame(draw);
})();
window.SPIRAL='<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32.3 31.7c.6.5.4 1.4-.3 1.6-1 .4-2-.5-2-1.6 0-1.9 1.9-3 3.6-2.6 2.5.5 3.7 3.3 2.9 5.6-1 3.1-4.6 4.4-7.5 3.4-3.8-1.3-5.4-5.7-4.1-9.3 1.6-4.6 6.9-6.5 11.3-4.8 5.4 2 7.6 8.2 5.5 13.3M21.1 28.8c.4-8.4 8.2-14.8 16.6-14.4 8.6.4 15.8 6.4 20 13.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
document.querySelectorAll('[data-spiral]').forEach(function(el){el.innerHTML=window.SPIRAL;});
