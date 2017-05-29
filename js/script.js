// inicio formulario
var formulario = document.querySelector("#formMensagem");
var mensagem = document.querySelector('.mensagem');
var fecharMensagem = document.querySelector('#fecharMensagem');

formulario.addEventListener("submit", function(event) {
	event.preventDefault();
	mensagem.classList.add("visivel");
	setTimeout(function() {
		mensagem.classList.remove("visivel");
	}, 2000);
})

fecharMensagem.addEventListener("click", function(event) {
	event.preventDefault();
	mensagem.classList.remove("visivel");
})

function adicionarMensagem(){
	
	return false;
}

formulario.onsubmit = adicionarMensagem;
// fim formulario



// função para visualizar descriçao do curso, ao passar o mouse em cima.(section: cursos)

function hoverCursos(event) {
	var descCurso = this.querySelector('.desc-curso');
	descCurso.classList.add("visivel");
}

function hoverOutCursos(event) {
	var descCurso = this.querySelector('.desc-curso');
	descCurso.classList.remove("visivel");
}


var cursos = document.querySelectorAll('.img-cursos');

for (var i = 0; i < cursos.length; i++) {
	cursos[i].addEventListener("mouseover", hoverCursos);
	cursos[i].addEventListener("mouseout", hoverOutCursos);
}
// fim da função


// scroll do cabecalho//

var pagina = document.documentElement;
var cabecalho = document.querySelector('#cabecalho');

window.onscroll = function(){
   var sTop = (this.pageYOffset || pagina.scrollTop)  - (pagina.clientTop || 0);
   
   if (sTop > 180){
   		cabecalho.style.background = "#ed2c6f"
   }else {
   		cabecalho.style.background = "transparent"
   	}
};


// botao Hamburguer//

var botaomenuHamburguer = document.querySelector(".botao.menuHamburguer");

	function abrirMenu(){

		var menu = document.querySelector("#navegacao");

		console.log("funcionou");

		if(menu.className == "menuHorizontal visivel"){

			menu.className = "menuHorizontal";

		} else{
			menu.className = "menuHorizontal visivel";
		}
	}

botaomenuHamburguer.onclick = abrirMenu;

// fim botao hamburguer