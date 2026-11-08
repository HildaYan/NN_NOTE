/* 測驗引擎:填空(blank)、數值(num)、簡答(short)。自動批改,離線可用。
   題目格式見 quizdata*.js / examdata.js */
(function(){
  'use strict';
  function norm(s){
    s=String(s==null?'':s).normalize('NFKC').toLowerCase();
    s=s.replace(/[−–—‐-]/g,'-').replace(/[\s　]+/g,'').replace(/[()（）\[\]「」『』"'`“”‘’,，、。;；:：]/g,'');
    return s;
  }
  function parseNum(s){
    s=String(s==null?'':s).normalize('NFKC').replace(/[−–—]/g,'-').replace(/,/g,'').replace(/%/g,'').trim();
    if(/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(s)){var p=s.split('/');return parseFloat(p[0])/parseFloat(p[1]);}
    var v=parseFloat(s); return isNaN(v)?null:v;
  }
  function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

  function Quiz(root,data,opt){
    this.root=root; this.data=data; this.opt=opt||{}; this.id=this.opt.id||'quiz';
    this.render();
  }
  Quiz.prototype.render=function(){
    var self=this, h=[], total=0;
    this.data.forEach(function(q,i){
      var pts=q.pts||10; total+=pts; q._pts=pts;
      var tag=q.t==='short'?'簡答題':(q.t==='num'?'計算填空':'填空題');
      if(q.section) h.push('<div class="qz-sec">'+q.section+'</div>');
      h.push('<div class="qz" data-i="'+i+'"><div class="qz-h"><span class="qz-no">'+(i+1)+'</span><span class="qz-tag">'+tag+'</span><span class="qz-pts">'+pts+' 分</span></div>');
      if(q.t==='short'){
        h.push('<div class="qz-q">'+q.q+'</div><textarea class="qz-ta" rows="4" placeholder="用自己的話作答,寫出關鍵概念與名詞…"></textarea>');
      }else{
        var n=0, body=q.q.replace(/\{(\d+)\}/g,function(m,k){n++;return '<input class="qz-in" data-k="'+(k-1)+'" type="text" autocomplete="off" spellcheck="false" placeholder="'+(q.t==='num'?'數字':'答案')+'">';});
        h.push('<div class="qz-q">'+body+'</div>');
      }
      h.push('<div class="qz-fb" hidden></div></div>');
    });
    h.push('<div class="qz-bar"><button class="qz-btn main" data-a="submit">✅ 交卷並批改</button><button class="qz-btn" data-a="redo">🔄 清除重做</button><button class="qz-btn" data-a="wrong" hidden>🎯 只重做錯題</button><button class="qz-btn" data-a="show">👁 顯示/隱藏所有解答</button><span class="qz-total">滿分 '+total+' 分</span></div><div class="qz-result" hidden></div>');
    this.root.innerHTML=h.join('');
    this.root.addEventListener('click',function(e){
      var b=e.target.closest('button'); if(!b) return;
      var a=b.dataset.a;
      if(a==='submit') self.submit();
      else if(a==='redo') self.redo();
      else if(a==='wrong') self.redoWrong();
      else if(a==='show') self.toggleAnswers();
      else if(a==='override') self.override(+b.dataset.i);
    });
    this.root.addEventListener('keydown',function(e){ if(e.key==='Enter' && e.target.classList.contains('qz-in')){e.preventDefault();var ins=[].slice.call(self.root.querySelectorAll('.qz-in,.qz-ta'));var j=ins.indexOf(e.target);if(ins[j+1])ins[j+1].focus();}});
  };

  Quiz.prototype.gradeOne=function(q,i){
    var box=this.root.querySelector('.qz[data-i="'+i+'"]'), frac=0, detail=[];
    if(q.t==='short'){
      var txt=norm(box.querySelector('.qz-ta').value), hit=0;
      q.keys.forEach(function(g,gi){
        var ok=g.some(function(s){return txt.indexOf(norm(s))>=0;});
        if(ok) hit++; detail.push({ok:ok,label:q.labels?q.labels[gi]:('要點 '+(gi+1))});
      });
      var need=q.need||q.keys.length;
      frac=txt.length<2?0:Math.min(hit,need)/need;
      return {frac:frac,detail:detail,hit:hit,need:need};
    }
    var ins=[].slice.call(box.querySelectorAll('.qz-in')), ok=0;
    ins.forEach(function(inp,k){
      var v=inp.value, good=false;
      if(q.t==='num'){
        var x=parseNum(v), t=q.a[k]; var tol=(q.tol&&q.tol[k]!=null)?q.tol[k]:(q.tol0||0.01);
        good = x!==null && Math.abs(x-t)<=tol;
      }else{
        var nv=norm(v); good = nv.length>0 && q.a[k].some(function(s){return norm(s)===nv;});
      }
      inp.classList.toggle('good',good); inp.classList.toggle('bad',!good); if(good) ok++;
      detail.push(good);
    });
    frac=ins.length?ok/ins.length:0;
    return {frac:frac,detail:detail};
  };

  Quiz.prototype.submit=function(){
    var self=this, score=0, total=0, wrong=0;
    this.results=[];
    this.data.forEach(function(q,i){
      var box=self.root.querySelector('.qz[data-i="'+i+'"]'), r=self.gradeOne(q,i), fb=box.querySelector('.qz-fb');
      r.manual=false; self.results[i]=r; total+=q._pts;
      var pts=Math.round(r.frac*q._pts*10)/10; score+=pts;
      var cls=r.frac>=0.999?'ok':(r.frac>=0.6?'part':'no'), icon=cls==='ok'?'✅ 正確':(cls==='part'?'🟡 部分正確':'❌ 需要再看');
      if(cls==='no'||cls==='part') wrong++;
      box.classList.remove('ok','part','no'); box.classList.add(cls);
      var h='<div class="qz-score '+cls+'">'+icon+'・得 <b>'+pts+'</b> / '+q._pts+' 分</div>';
      if(q.t==='short'){
        h+='<div class="qz-keys">'+r.detail.map(function(d){return '<span class="qz-key '+(d.ok?'y':'n')+'">'+(d.ok?'✔ ':'✘ ')+esc(d.label)+'</span>';}).join('')+'</div>';
        h+='<div class="qz-note">批改方式:比對你的答案是否包含這些關鍵概念(需 '+r.need+' 項以上得滿分)。若你的說法正確但用詞不同,可按「我答對了」自評。</div>';
        if(r.frac<0.999) h+='<button class="qz-btn small" data-a="override" data-i="'+i+'">我答對了(自評改為滿分)</button>';
        h+='<div class="qz-model"><b>參考答案:</b>'+q.model+'</div>';
      }else{
        var ans=q.a.map(function(a,k){var s=q.t==='num'?a:a[0]; return '('+(k+1)+') '+esc(s);}).join(' 、 ');
        h+='<div class="qz-model"><b>標準答案:</b>'+ans+'</div>';
      }
      if(q.exp) h+='<div class="qz-exp"><b>解析:</b>'+q.exp+'</div>';
      fb.innerHTML=h; fb.hidden=false;
    });
    this.score=score; this.total=total; this.showResult(wrong);
  };
  Quiz.prototype.override=function(i){
    var q=this.data[i], box=this.root.querySelector('.qz[data-i="'+i+'"]');
    this.results[i].frac=1; this.results[i].manual=true;
    var s=0,t=0,self=this; this.data.forEach(function(qq,k){s+=self.results[k].frac*qq._pts;t+=qq._pts;});
    this.score=Math.round(s*10)/10; box.classList.remove('part','no'); box.classList.add('ok');
    var sc=box.querySelector('.qz-score'); sc.className='qz-score ok'; sc.innerHTML='✅ 自評正確・得 <b>'+q._pts+'</b> / '+q._pts+' 分';
    var ob=box.querySelector('[data-a=override]'); if(ob) ob.remove();
    this.showResult();
  };
  Quiz.prototype.showResult=function(wrongHint){
    var pct=Math.round(this.score/this.total*100), r=this.root.querySelector('.qz-result');
    var msg=pct>=90?'非常熟練!':(pct>=75?'掌握得不錯,補強錯題即可。':(pct>=60?'及格,但建議回頭複習錯誤的段落。':'建議先重讀本講「詳細教學」再重做。'));
    r.innerHTML='<div class="qz-big">總分 <b>'+this.score+'</b> / '+this.total+'(<b>'+pct+'%</b>)</div><div>'+msg+'</div>';
    r.hidden=false; this.root.querySelector('[data-a=wrong]').hidden=false;
    try{localStorage.setItem('nn-quiz-'+this.id,JSON.stringify({s:this.score,t:this.total,d:new Date().toISOString()}));}catch(e){}
    r.scrollIntoView({behavior:'smooth',block:'center'});
  };
  Quiz.prototype.redo=function(){
    this.root.querySelectorAll('.qz-in,.qz-ta').forEach(function(x){x.value='';x.classList.remove('good','bad');});
    this.root.querySelectorAll('.qz').forEach(function(b){b.classList.remove('ok','part','no');b.querySelector('.qz-fb').hidden=true;});
    this.root.querySelector('.qz-result').hidden=true; this.root.querySelector('[data-a=wrong]').hidden=true;
  };
  Quiz.prototype.redoWrong=function(){
    var self=this;
    this.root.querySelectorAll('.qz').forEach(function(b,i){
      if(self.results&&self.results[i]&&self.results[i].frac<0.999){
        b.querySelectorAll('.qz-in,.qz-ta').forEach(function(x){x.value='';x.classList.remove('good','bad');});
        b.classList.remove('ok','part','no'); b.querySelector('.qz-fb').hidden=true;
      }
    });
    var f=this.root.querySelector('.qz:not(.ok) .qz-in, .qz:not(.ok) .qz-ta'); if(f){f.focus();f.scrollIntoView({block:'center'});}
  };
  Quiz.prototype.toggleAnswers=function(){
    var self=this, anyHidden=false;
    this.root.querySelectorAll('.qz-fb').forEach(function(f){if(f.hidden)anyHidden=true;});
    this.data.forEach(function(q,i){
      var box=self.root.querySelector('.qz[data-i="'+i+'"]'), fb=box.querySelector('.qz-fb');
      if(anyHidden){
        if(!fb.innerHTML||!fb.querySelector('.qz-score')){
          var ans=q.t==='short'?q.model:q.a.map(function(a,k){return '('+(k+1)+') '+esc(q.t==='num'?a:a[0]);}).join(' 、 ');
          fb.innerHTML='<div class="qz-model"><b>'+(q.t==='short'?'參考答案':'標準答案')+':</b>'+ans+'</div>'+(q.exp?'<div class="qz-exp"><b>解析:</b>'+q.exp+'</div>':'');
        }
        fb.hidden=false;
      }else fb.hidden=true;
    });
  };

  window.mountQuiz=function(el,data,opt){ return new Quiz(el,data,opt); };
  document.addEventListener('DOMContentLoaded',function(){
    var el=document.getElementById('quiz'); if(!el) return;
    var n=el.dataset.lec; var data=(window.QUIZ||{})[n]; if(data) window.mountQuiz(el,data,{id:'lec'+n});
  });
})();
