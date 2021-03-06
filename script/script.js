
let res;
let tudo;
let completo;
let incompleto;
let check;

document.addEventListener('DOMContentLoaded', iniciaPagina, false);

document.getElementById('filtros').addEventListener('click', reloadPagina)

function reloadPagina(event){
  converter(res);
  if(check[0].checked && check[1].checked || !check[0].checked && !check[1].checked){
    document.getElementById('atividades').innerHTML += `${tudo}`;
  }else if(check[1].checked){
    document.getElementById('atividades').innerHTML += `${incompleto}`;
  }else if(check[0].checked){
    document.getElementById('atividades').innerHTML += `${completo}`;
  }
}

function iniciaPagina() {  
  check = document.getElementsByName('filtro');

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => { 
    res = json; 
    res = res.filter((e) => e.userId === 1);
    converter(res);
    document.getElementById('atividades').innerHTML += `${tudo}`;
  });
}

const converteCompleto = (title) =>{
  return `
      <div class="card atividade row">
        <h5 class="card-header header-completa">Featured</h5>
          <div class="card-body row">
            <h5 class="card-title col-8">${title}</h5>
              <p class="card-text col-4">🟢 Completa</p>
          </div>
      </div>
  `;
}

const converterIncompleto = (title) => {
  return `
    <div class="card atividade row">
      <h5 class="card-header header-incompleta">Featured</h5>
      <div class="card-body row">
        <h5 class="card-title col-8">${title}</h5>
        <p class="card-text col-4">🟡 Incompleta</p>
      </div>
    </div>
  `
}

const converter = (res) =>{
  completo = '';
  incompleto = '';
  tudo = '';
  document.getElementById('atividades').innerHTML = ``;
  res.forEach(e => { 
    if(e.completed === true /* && check[0].checked === false  */){
      completo += converteCompleto(e.title);
      tudo += converteCompleto(e.title);
    }else if(e.completed === false /* && check[1].checked === false */) {
      incompleto += converterIncompleto(e.title);
      tudo += converterIncompleto(e.title);
    }
  }); 
}