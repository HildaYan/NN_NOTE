(function(){
  var c=document.getElementById('cornell'), tb=document.getElementById('toolbar');
  if(!c||!tb) return;
  var KEY='nn-notes-mode';
  function setMode(m){
    c.classList.toggle('mode-a',m==='A'); c.classList.toggle('mode-b',m==='B');
    tb.querySelector('[data-act=modeA]').classList.toggle('on',m==='A');
    tb.querySelector('[data-act=modeB]').classList.toggle('on',m==='B');
    try{localStorage.setItem(KEY,m)}catch(e){}
  }
  var saved='A'; try{saved=localStorage.getItem(KEY)||'A'}catch(e){}
  setMode(saved);
  tb.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    var a=b.dataset.act, qs=document.querySelectorAll('details.q');
    if(a==='modeA') setMode('A');
    else if(a==='modeB') setMode('B');
    else if(a==='open') qs.forEach(function(d){d.open=true});
    else if(a==='close') qs.forEach(function(d){d.open=false});
    else if(a==='quiz'){var on=document.body.classList.toggle('quiz');
      b.classList.toggle('on',on); b.textContent=on?'👁 顯示筆記':'🙈 遮住筆記(自測)';
      document.querySelectorAll('.note.reveal').forEach(function(n){n.classList.remove('reveal')});}
  });
  document.querySelectorAll('.note').forEach(function(n){
    n.addEventListener('click',function(){ if(document.body.classList.contains('quiz')) n.classList.toggle('reveal'); });
  });
  // 列印時自動展開
  window.addEventListener('beforeprint',function(){document.querySelectorAll('details').forEach(function(d){d.open=true})});
})();
