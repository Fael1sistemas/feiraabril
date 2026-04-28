const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Colorir para relaxar - Saude Mental | Feira de Ciencias</title>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--ct:#2c3e50;--cs:#5a6c7d;--cp:#5b9bd5;--csu:#7bc8a0;--s:0 8px 32px rgba(31,38,135,0.1);--br:24px;--tr:all .35s cubic-bezier(.23,1,.32,1)}
body{font-family:'Quicksand',sans-serif;background:linear-gradient(135deg,#e0f7fa,#e8f5e9,#f3e5f5);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:2rem 1rem;overflow-x:hidden;color:var(--ct)}
.dec{position:fixed;border-radius:50%;opacity:.12;pointer-events:none;z-index:0;animation:flt 10s ease-in-out infinite}
.dec:nth-child(1){width:140px;height:140px;background:var(--cp);top:5%;left:3%}
.dec:nth-child(2){width:90px;height:90px;background:var(--csu);top:60%;right:5%;animation-delay:2s}
.dec:nth-child(3){width:70px;height:70px;background:#a29bfe;bottom:10%;left:8%;animation-delay:4s}
.dec:nth-child(4){width:110px;height:110px;background:#f0c36d;top:25%;right:3%;animation-delay:1s}
.dec:nth-child(5){width:60px;height:60px;background:#e07a9e;top:45%;left:2%;animation-delay:3s}
.dec:nth-child(6){width:80px;height:80px;background:var(--csu);bottom:20%;right:10%;animation-delay:5s}
@keyframes flt{0%,100%{transform:translateY(0)scale(1)}50%{transform:translateY(-30px)scale(1.05)}}
nav{width:100%;max-width:1200px;background:rgba(255,255,255,.85);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.6);border-radius:50px;padding:.8rem 1.5rem;margin-bottom:2.5rem;display:flex;justify-content:space-between;align-items:center;box-shadow:var(--s);z-index:10}
.nav-logo{font-size:1.3rem;font-weight:700;color:var(--csu);text-decoration:none;display:flex;align-items:center;gap:.5rem}
.nav-links{display:flex;gap:1.2rem;list-style:none}
.nav-links a{text-decoration:none;color:var(--cs);font-weight:600;font-size:.95rem;padding:.4rem 1rem;border-radius:50px;transition:var(--tr)}
.nav-links a:hover{background:rgba(91,155,213,.1);color:var(--cp)}
.titulo{text-align:center;margin-bottom:2rem;z-index:1}
.titulo h1{font-size:2.5rem;font-weight:700;color:var(--ct);margin-bottom:.5rem}
.titulo p{font-size:1.1rem;color:var(--cs);font-weight:500}
.main{width:100%;max-width:900px;background:rgba(255,255,255,.7);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.6);border-radius:var(--br);padding:2rem;box-shadow:var(--s);z-index:1}
.area{width:100%;background:#fff;border-radius:16px;border:2px dashed rgba(91,155,213,.3);padding:1rem;margin-bottom:1.5rem;display:flex;justify-content:center;align-items:center;min-height:400px;position:relative;overflow:hidden}
.svg-c{width:100%;max-width:500px;display:none}
.svg-c.ativo{display:block}
.svg-c svg{width:100%;height:auto;display:block}
.svg-c svg *{fill:#f5f5f5;stroke:#ccc;stroke-width:.5;transition:fill .2s ease,stroke .2s ease;cursor:pointer}
.svg-c svg *:hover{stroke:var(--cp);stroke-width:1.5;filter:brightness(.95)}
.paleta{margin-bottom:1.5rem}
.paleta h3{font-size:1rem;font-weight:600;color:var(--cs);margin-bottom:.8rem;text-align:center}
.cores{display:flex;justify-content:center;flex-wrap:wrap;gap:.8rem}
.cor{width:44px;height:44px;border-radius:50%;border:3px solid transparent;cursor:pointer;transition:var(--tr);box-shadow:0 2px 8px rgba(0,0,0,.15);position:relative}
.cor:hover{transform:scale(1.15);box-shadow:0 4px 15px rgba(0,0,0,.25)}
.cor.sel{border-color:var(--ct);transform:scale(1.2);box-shadow:0 0 0 4px rgba(91,155,213,.3),0 4px 15px rgba(0,0,0,.25)}
.cor.sel::after{content:'✓';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:1.2rem;font-weight:bold;text-shadow:0 1px 3px rgba(0,0,0,.5)}
.botoes{display:flex;justify-content:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap}
.btn{font-family:'Quicksand',sans-serif;font-size:.95rem;font-weight:600;padding:.7rem 1.8rem;border:none;border-radius:50px;cursor:pointer;transition:var(--tr);text-decoration:none;display:inline-flex;align-items:center;gap:.5rem}
.limpar{background:linear-gradient(135deg,#e07a7a,#d35400);color:#fff;box-shadow:0 4px 15px rgba(224,122,122,.35)}
.limpar:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(224,122,122,.45)}
.des{background:rgba(255,255,255,.9);color:var(--ct);border:2px solid rgba(91,155,213,.3);box-shadow:0 2px 8px rgba(0,0,0,.08)}
.des:hover{background:var(--cp);color:#fff;border-color:var(--cp);transform:translateY(-2px)}
.des.ativo{background:var(--cp);color:#fff;border-color:var(--cp)}
.voltar{text-align:center;margin-top:1rem}
.btn-v{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.9);color:var(--cs);font-family:'Quicksand',sans-serif;font-size:.95rem;font-weight:600;padding:.7rem 1.8rem;border:2px solid rgba(91,155,213,.3);border-radius:50px;text-decoration:none;transition:var(--tr);box-shadow:0 2px 8px rgba(0,0,0,.08)}
.btn-v:hover{background:var(--cp);color:#fff;border-color:var(--cp);transform:translateY(-2px)}
@media(max-width:768px){nav{flex-direction:column;gap:.8rem;padding:1rem;border-radius:20px}.nav-links{gap:.6rem;flex-wrap:wrap;justify-content:center}.nav-links a{font-size:.85rem;padding:.3rem .8rem}.titulo h1{font-size:2rem}.main{padding:1.2rem}.cor{width:38px;height:38px}.btn{font-size:.85rem;padding:.6rem 1.4rem}}
</style>
</head>
<body>
<div class="dec"></div><div class="dec"></div><div class="dec"></div><div class="dec"></div><div class="dec"></div><div class="dec"></div>
<nav>
<a href="index.html" class="nav-logo">🌿 Saude Mental</a>
<ul class="nav-links">
<li><a href="index.html">Inicio</a></li>
<li><a href="jogo.html">Como esta?</a></li>
<li><a href="menu-jogos.html">Jogos</a></li>
</ul>
</nav>
<section class="titulo">
<h1>🎨 Colorir para relaxar</h1>
<p>Escolha uma cor e clique nas partes do desenho para pintar.</p>
</section>
<main class="main">
<div class="area" id="area"></div>
<div class="paleta">
<h3>Escolha uma cor</h3>
<div class="cores" id="cores"></div>
<div class="botoes">
<button class="btn limpar" id="btnLimpar">🗑️ Limpar</button>
<button class="btn des ativo" onclick="trocar(1)">Desenho 1</button>
<button class="btn des" onclick="trocar(2)">Desenho 2</button>
<button class="btn des" onclick="trocar(3)">Desenho 3</button>
<button class="btn des" onclick="trocar(4)">Desenho 4</button>
<button class="btn des" onclick="trocar(5)">Desenho 5</button>
</div>
<div class="voltar">
<a href="menu-jogos.html" class="btn-v">← Voltar ao menu</a>
</div>
</main>
<script>
const cores=[
{n:'Preto',v:'#000000'},{n:'Branco',v:'#ffffff'},{n:'Vermelho',v:'#e74c3c'},
{n:'Azul',v:'#3498db'},{n:'Verde',v:'#2ecc71'},{n:'Amarelo',v:'#f1c40f'},
{n:'Rosa',v:'#ff69b4'},{n:'Roxo',v:'#9b59b6'},{n:'Laranja',v:'#e67e22'},
{n:'Marrom',v:'#8b4513'}
];
let corSel='#000000';
function init(){
const pc=document.getElementById('cores');
cores.forEach((c,i)=>{
const d=document.createElement('div');
d.className='cor'+(i===0?' sel':'');
d.style.backgroundColor=c.v;
d.title=c.n;
d.onclick=()=>selCor(d,c.v);
pc.appendChild(d);
});
carregarSvgs();
}
function selCor(el,c){
corSel=c;
document.querySelectorAll('.cor').forEach(x=>x.classList.remove('sel'));
el.classList.add('sel');
}
let atual=1;
const svgs={};
function carregarSvgs(){
for(let i=1;i<=5;i++){
fetch('imgs/imagem'+i+'.svg')
.then(r=>r.text())
.then(t=>{
const d=document.createElement('div');
d.className='svg-c'+(i===1?' ativo':'');
d.id='svg-'+i;
const p=new DOMParser();
const doc=p.parseFromString(t,'image/svg+xml');
const s=doc.querySelector('svg');
if(s){
s.setAttribute('width','100%');
s.setAttribute('height','100%');
s.setAttribute('viewBox','0 0 600 600');
d.innerHTML=new XMLSerializer().serializeToString(s);
}
document.getElementById('area').appendChild(d);
addClick(d);
})
.catch(e=>{
const d=document.createElement('div');
d.className='svg-c'+(i===1?' ativo':'');
d.id='svg-'+i;
d.innerHTML='<svg viewBox="0 0 500 500" width="100%"><text x="50%" y="50%" text-anchor="middle" fill="#999">Erro ao carregar SVG '+i+'</text></svg>';
document.getElementById('area').appendChild(d);
});
}
}
function addClick(container){
container.addEventListener('click',e=>{
const t=e.target;
if(t.tagName==='path'||t.tagName==='circle'||t.tagName==='rect'||t.tagName==='ellipse'||t.tagName==='polygon'||t.tagName==='polyline'){
t.style.fill=corSel;
t.style.stroke='transparent';
}
});
}
function trocar(n){
document.querySelectorAll('.svg-c').forEach(x=>x.classList.remove('ativo'));
document.querySelectorAll('.des').forEach(x=>x.classList.remove('ativo'));
const s=document.getElementById('svg-'+n);
if(s)s.classList.add('ativo');
document.querySelectorAll('.des')[n-1].classList.add('ativo');
atual=n;
}
document.getElementById('btnLimpar').onclick=()=>{
const s=document.getElementById('svg-'+atual);
if(s){
s.querySelectorAll('path,circle,rect,ellipse,polygon,polyline').forEach(el=>{
el.style.fill='#f5f5f5';
el.style.stroke='#ccc';
});
}
};
init();
</script>
</body>
</html>`;

fs.writeFileSync('jogo-colorir.html', html);
console.log('OK');
