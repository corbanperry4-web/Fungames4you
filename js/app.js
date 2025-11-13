// Loads games from games.json and handles UI interactions
async function loadGames(){
  try{
    const res = await fetch('games.json', {cache: "no-store"});
    const games = await res.json();
    window.GAMES = games;
    renderGames(games);
  }catch(e){
    console.error('Failed to load games.json', e);
    document.getElementById('games-grid').innerHTML = '<p style="color:#faa">Failed to load games.json</p>';
  }
}

function renderGames(games){
  const grid = document.getElementById('games-grid');
  grid.innerHTML = '';
  const searchVal = (document.getElementById('search').value || '').toLowerCase();
  games.forEach(game=>{
    if(searchVal && !(game.title.toLowerCase().includes(searchVal) || (game.tags||[]).join(' ').includes(searchVal))) return;
    const card = document.createElement('article');
    card.className = 'card';
    const thumb = document.createElement('img');
    thumb.src = game.thumbnail || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="200"><rect width="100%" height="100%" fill="%230b1220"/></svg>';
    thumb.alt = game.title;
    const h = document.createElement('h3'); h.textContent = game.title;
    const p = document.createElement('p'); p.textContent = game.description || '';
    const actions = document.createElement('div'); actions.className='actions';
    const play = document.createElement('button'); play.className='play-btn'; play.textContent='Play';
    play.addEventListener('click',()=>openGame(game));
    const info = document.createElement('button'); info.className='info-btn'; info.textContent='Info';
    info.addEventListener('click',()=>alert((game.longDescription || game.description || 'No description') + '\n\nSource: '+(game.url||'local')));
    actions.appendChild(play); actions.appendChild(info);
    card.appendChild(thumb); card.appendChild(h); card.appendChild(p); card.appendChild(actions);
    grid.appendChild(card);
  });
}

function openGame(game){
  // For local games, game.url should be a relative path like "games/snake.html"
  const modal = document.getElementById('game-modal');
  modal.setAttribute('aria-hidden','false');
  document.getElementById('modal-title').textContent = game.title;
  const frame = document.getElementById('game-frame');
  frame.src = game.url;
  // For external sites, embedding might be blocked by X-Frame-Options
}

function closeModal(){
  const modal = document.getElementById('game-modal');
  modal.setAttribute('aria-hidden','true');
  const frame = document.getElementById('game-frame');
  // clear src to stop audio/CPU
  frame.src = 'about:blank';
}

document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('search').addEventListener('input', ()=>renderGames(window.GAMES || []));
document.getElementById('add-game-btn').addEventListener('click', ()=>{
  alert('To add a game: open games.json and add an entry. See README for the template and legal notes.');
});

loadGames();