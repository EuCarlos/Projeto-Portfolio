# 💻 PORTFÓLIO
![Website](https://img.shields.io/website?down_color=blue&down_message=off&label=site&up_color=red&up_message=on&url=http%3A%2F%2Fcarlosalves.vercel.app%2F) ![GitHub language count](https://img.shields.io/github/languages/count/eucarlos/Projeto-Portfolio) ![GitHub top language](https://img.shields.io/github/languages/top/eucarlos/Projeto-Portfolio?color=orange) ![GitHub repo size](https://img.shields.io/github/repo-size/eucarlos/Projeto-Portfolio?color=yellow) ![GitHub](https://img.shields.io/github/license/eucarlos/Projeto-Portfolio) ![GitHub branch checks state](https://img.shields.io/github/checks-status/eucarlos/Projeto-Portfolio/master)

<p align="center"><img width="100" src="https://i.pinimg.com/originals/cf/6a/38/cf6a3872dd21637a42594ca709769705.gif"></p>

Decidir montar meu portfólio e disponibilizar o template para quem quiser utilizar. Fiquem a vontade para utilizar:
 - Site oficial: [carlosalves.vercel.app](http://carlosalves.vercek.app/)
 - Site Template: [eucarlos.github.io](https://eucarlos.github.io/Projeto-Portfolio/)
 
### Linguagens usadas no projeto
  
HTML | CSS | JavaScript
:---: | :---: | :---:
<img src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" width="80">|<img src="https://cdn.clipart.email/644c01230b320e0f2ee93a7b64e3c54e_css-3-logo-png-picture-364523-css-3-logo-png_1600-1600.png" width="80">|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" width="80">

### Ferramentas Usadas no Projeto

Durante todo o processo de criação do PORTFÓLIO foi utilizados ferramentas como APIs, Ilustrações, fontes e entre outro para ajudar e acrescentar em algo no site. E essas ferramentas são:

| FERRAMENTA | DESCRIÇÃO | LINK |
| ------ | ------ | ------ |
| Normalize.CSS | Alternativa moderna e pronta para redefinições CSS | [Acesse Aqui](https://necolas.github.io/normalize.css/)
| Font Awesome | Biblioteca de Icones  | [Acesse Aqui](https://fontawesome.com/icons)
| API de Frases | API em NodeJS com várias frases de livros | [Acesse Aqui](https://github.com/allugo/Frases-Livros-API)
| unDraw | Ilustrações Open-Source | [Acesse Aqui](https://undraw.co/)
| Google Fonts | Fonte Source Code Pro | [Acesse Aqui](https://fonts.google.com/specimen/Source+Code+Pro?preview.text=Source%20Code%20Pro&preview.text_type=custom&query=source&sidebar.open=true&selection.family=Source+Code+Pro:wght@300;500)
| PlaceHolder | Imagens ajustaveis | [Acesse Aqui](https://placeholder.com/)
| Static Forms | Envio de conteúdo do formulário para o seu e-mail | [Acesse Aqui](https://www.staticforms.xyz/)
|Vercel | Hospedagem de Sites | [Acesse aqui](https://vercel.com/)

### Template
A cores estão definidas em variaveis CSS no arquivo `style.css`, caso queira apenas mudar as cores do site basta trocar os valores hexadecimais:
```
:root {
    --yellow-safron: #f8c537;
    --yellow-goldenroad: #ecb009;
    --dark-jungle-green: #0D1E24;
    --gunmetal: #16323c;
    --white-color: #ffffff;
}
```
### Imagens
Para substituir as imagens basta trocar os links do placeholder por imagens do seu repertorios de imagens. São esse quatro tamanho de imagem:
| Tamanho das Imagens | Descrição
| ------ | ------ |
|![favcon](http://via.placeholder.com/16x16/f8c537/0d1e24) |**Favcon:** pode ser substituido por ico, deve ter o tamanho 16x16. |
|![fluxo](http://via.placeholder.com/96x96/f8c537/0d1e24) |**Ferramentas:** pode ser subtuido por imagens do seu fluxo de tabalho(por exemplo Dart, Flutte...), devem ter o tamanho 96x96. |
|![perfil](http://via.placeholder.com/150x150/f8c537/0d1e24) | **Sobre:** pode ser substituido por uma imagem sua, deve ter um tamanho de 150x150 |
|![img](http://via.placeholder.com/555x270/f8c537/0d1e24) | **Cards:** as imagens dos cards podem ser substituido imagens dos seus projetos pessoais e profissionais, devem ter o tamanho de 555x270 |
###### **Obs.:** Não é necessario seguir a fundo as sugestões acima, mas é essecial seguir os tamanhos das imagens como padrão.

### Cards
Para adicionar cards extra basta copiar o codigo abaixo na tag `<main class="portfolio>"`:
```sh
<article class="cards">
         <a href="#" target="_blank"><img src="http://via.placeholder.com/555x270/f8c537/0d1e24" width="100%"></a>
         <div class="inner">
             <a href="#">Titulo Principal</a>
             <h4>Titulo Secundario</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium lacinia sapien, non dapibus nam.</p>
         </div>
</article>
```
Em seguida é só substituir os elementos do card.

### Formulario
O Formulario de E-mail foi validado pelo [**Static Forms**](https://www.staticforms.xyz/). De acordo com a **hostgator**:
>"Os formulários de contato são um canal de comunicação entre empresas e clientes. Por isso é fundamental disponibilizar este espaço em sites, blogs e outras ferramentas, como aplicativos. Eles são extremamente populares para promover o relacionamento entre marcas e seus clientes ou audiência."

Para isso acesse o site [**staticforms.xyz**](https://www.staticforms.xyz/), em seguida crie uma chave de acesso. Procure pelo codigo abaixo e coloque a chave de acesso no formulario.
```
<<input type="hidden" name="accessKey" value="[INSERIR A CHAVE DE ACESSO AQUI]">
```
Pronto, formulario configurado.

### Icones no Rodapé
Enfim, usamos a Biblioteca de Icones [**Font Awesome**](https://fontawesome.com/icons) para os icones de redes sociais que estão no Rodapé.
```
<a href="#"><i class="fab fa-linkedin"></i></a>`
```
Deixei como padrão os icones do Linkedin, Instagram, Facebook e Twitter. Mas pode ser substuido por varios outros, basta procurar no [fontawesome.com/icons](https://fontawesome.com/icons).

# LICENÇA
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licença Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />Este obra está licenciado com uma Licença <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Atribuição-NãoComercial 4.0 Internacional</a>.

<h3> Você tem o direito de: </h3>
<ul>
  <li><b>Compartilhar —</b> copiar e redistribuir o material em qualquer suporte ou formato.</li>
  <li><b>Adaptar —</b> remixar, transformar, e criar a partir do material.</li>
</ul>
<h3> De acordo com os termos seguintes:</h3>
<ul>
  <li><b>Atribuição —</b> Você deve dar o crédito apropriado, prover um link para a licença e indicar se mudanças foram feitas. Você deve fazê-lo em qualquer circunstância razoável, mas de nenhuma maneira que sugira que o licenciante apoia você ou o seu uso.</li>
  <li><b>NãoComercial —</b> Você não pode usar o material para fins comerciais.</li>
  <li><b>CompartilhaIgual —</b> Se você remixar, transformar, ou criar a partir do material, tem de distribuir as suas contribuições sob a mesma licença que o original.</li>
</ul>
