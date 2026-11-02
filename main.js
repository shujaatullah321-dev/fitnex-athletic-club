(function(){
var C=window.FITNEX||{},wa=(C.WHATSAPP_NUMBER||'').replace(/\D/g,'');
document.getElementById('yr').textContent=new Date().getFullYear();
if(C.ADDRESS)document.getElementById('addr').textContent=C.ADDRESS;
if(C.FACEBOOK_URL)document.getElementById('fbLink').href=C.FACEBOOK_URL;
document.querySelectorAll('.wa-only').forEach(function(a){if(!wa){a.classList.add('hide');return}a.href='https://wa.me/'+wa+'?text='+encodeURIComponent(a.dataset.wa||'');a.target='_blank';a.rel='noopener'});
var pl=document.getElementById('phoneLink');if(C.PHONE_NUMBER){pl.textContent=C.PHONE_NUMBER;pl.href='tel:'+C.PHONE_NUMBER.replace(/[^\d+]/g,'')}else pl.parentNode.classList.add('hide');
// menu
var nav=document.querySelector('.nav'),bg=document.querySelector('.burger');
bg.addEventListener('click',function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
document.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open')})});
// package prefill
document.querySelectorAll('[data-pkg]').forEach(function(a){a.addEventListener('click',function(){var s=document.querySelector('select[name=pkg]');s.value=a.dataset.pkg})});
// form -> WhatsApp if set
document.getElementById('joinForm').addEventListener('submit',function(e){e.preventDefault();var f=e.target,t='Assalam o Alaikum! Name: '+f.name.value+'\nPhone: '+f.phone.value+'\nInterested in: '+f.pkg.value+(f.msg.value?'\n'+f.msg.value:''),n=document.getElementById('formNote');n.hidden=false;
 if(wa){window.open('https://wa.me/'+wa+'?text='+encodeURIComponent(t),'_blank');n.textContent='Opening WhatsApp…'}else{n.innerHTML='Thanks! Please message us on <a href="'+(C.FACEBOOK_URL||'#')+'" target="_blank" rel="noopener">Facebook</a> with your details and we will get back to you.'}});
// reveals
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,els=document.querySelectorAll('.reveal');
if(rm||!('IntersectionObserver'in window)){els.forEach(function(e){e.classList.add('in')})}else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)})}
// desktop-only cursor glow + magnetic buttons
if(rm||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
var g=document.querySelector('.glow'),x=0,y=0,raf=0;
addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;if(!raf)raf=requestAnimationFrame(function(){g.style.transform='translate3d('+x+'px,'+y+'px,0)';raf=0})},{passive:true});
document.querySelectorAll('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
})();
