
let res;
let tudo = '';
let completo = '';
let incompleto = '';
let naoIniciado = '';

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => { res = json; res = res.filter((e) => e.userId === 1); converter(res);})


const converter = (res) =>{
  res.forEach(e => {
    // console.log(e)
    
    if(e.completed === true){
      completo += `
      <div class="card atividade row">
        <h5 class="card-header header-completa">Featured</h5>
          <div class="card-body row">
            <h5 class="card-title col-8">${e.title}</h5>
              <p class="card-text col-4">🟢 Completada</p>
          </div>
      </div>`;
      tudo += completo;
    } else if(e.id >= 10 && e.completed !== true){
      incompleto += `
        <div class="card atividade row">
          <h5 class="card-header header-incompleta">Featured</h5>
          <div class="card-body row">
            <h5 class="card-title col-8">${e.title}</h5>
            <p class="card-text col-4">🟡 Incompletada</p>
          </div>
        </div>
      `
      tudo += incompleto;
    } else {
      naoIniciado += `
        <div class="card atividade row">
          <h5 class="card-header header-nao-iniciada">Featured</h5>
          <div class="card-body row">
            <h5 class="card-title col-8">${e.title}</h5>
            <p class="card-text col-4">🔴 Não Iniciada</p>
          </div>
        </div>
      `
      tudo += naoIniciado;
    }
  });
  console.log(tudo)
  document.getElementById('atividades').innerHTML += `
  ${tudo}`;
}