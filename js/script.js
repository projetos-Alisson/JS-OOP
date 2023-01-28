class Produto{
    constructor(){
       this.id = 1;
       this.arrayProdutos = []
       
    }
   
    salvar(){
        let produto = this.lerDados()  //Recebe todos os dados do lerDados()

        if(this.validaCampos(produto)){ //Se verdadeiro, o usuário poderá add o produto
            this.adicionar(produto)

            
            // alert('salvar')
        }
        // console.log(this.arrayProdutos)
        this.listaTabela();
        this.cancelar();

    }

    listaTabela(){
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow(); //Vai inserir uma nova linha na tabela (no tbody)

            let td_ID = tr.insertCell();
            let td_Produto = tr.insertCell();
            let td_Valor = tr.insertCell();
            let td_Acoes= tr.insertCell();

            //Inserção de dados do array dnetro da tabela
            td_ID.innerText = this.arrayProdutos[i].id;
            td_Produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_Valor.innerText = this.arrayProdutos[i].preco;


            //Adiciona a classe center dentro da coluna (td)
            td_ID.classList.add('center')

            //BOTÕES DE EDIÇÃO

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/botao-editar.png';
            
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/lixeira.png';
            //setAttribute('evento,'ação')
            imgDelete.setAttribute("onclick" ,"produto.deletar("+ this.arrayProdutos[i].id +")")

            td_Acoes.appendChild(imgEdit) //Indica que a img é um filho da td_ID
            td_Acoes.appendChild(imgDelete);
           
            //<td><img></td>

            console.log(this.arrayProdutos)
        }   

    }

    lerDados(){
        let produto = {}
        
        //Dados da tabela
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++

    }

    //Se o usuário NÃO PREENCHER o campo
    validaCampos(produto){
        let msg = '';
        if (produto.nomeProduto == '') {
            msg += ' Informe o nome do produto \n';

            
        }

        if (produto.preco == ''){
            msg += ' Informe o preço do produto \n';

        }
        
        //Se o usuário PREENCHER o CAMPO
        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    cancelar(){
        //Limpa os cmapos ao cliclar em "cancelar"
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }



    deletar(id){
      // alert('Deletar o Id' + id);

      let tbody = document.getElementById('tbody');

      for(let i = 0; i < this.arrayProdutos.length; i++){
        if(this.arrayProdutos[i].id == id) {
            this.arrayProdutos.splice(i, 1); //Altera o conteúdo da lista; "i" (contador) indica o indice dos objetos da array; "1", representa quantos itens serão apagados;
            tbody.deleteRow(i)
        }
      }
        console.log(this.arrayProdutos);
    }
}
var produto = new Produto()