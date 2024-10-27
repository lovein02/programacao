document.getElementById('header').innerHTML = `
 <header>         
            <img src="./Imagens/masterDataLogo.png" alt="Master Data" class="logo">
            <h1>Manual Sistema - Petros</h1>
            <div>      
            <nav>    
                <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Frente de Caixa</a>
                    <div class="dropdown-content">
                        <a href="manualfrentedecaixa.html" >Login / Suprimento</a>
                        <a href="baixaDeAbastecimentos.html" >Baixa de Abastecimentos</a>
                        <a href="formaRecebimento.html" >Forma de Recebimento</a>
                        <a href="vendaDeItens.html" >Venda de Itens</a>
                        <a href="baixaRapidaDeAbastecimentos.html" >Baixa rápida de Abastecimentos</a>
                        <a href="cancelamentoDeVenda.html" >Cancelamento de Venda</a>
                        <a href="nfeNoFrenteDeCaixa.html" >Emitindo NFe no PDV</a>
                        <a href="AdiantamentoDeCliente.html" >Adiantamento de Cliente</a>
                        <a href="monitoramentoPista.html" >Cadastro de cartão IDF no PDV</a>
                        <a href="consultasERelatorios.html" >Consultas e Relatórios</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Corporativo</a>
                    <div class="dropdown-content">
                        <a href="cadastropessoa.html" >Cadastro Pessoa</a>
                        <a href="cadastrocliente.html">Cadastro Cliente</a>
                        <a href="#">Cadastro Cliente Simplificado</a>
                        <a href="#">Classe de Cliente</a>
                        <a href="#">Contrato de Crédito</a>
                        <a href="#">Cadastro de Colaborador</a>
                        <a href="#">Cadastro de Usuário</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Suprimento</a>
                    <div class="dropdown-content">
                        <a href="#">Cadastro de Item</a>
                        <a href="#">Ajuste de Estoque</a>
                    </div>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">L.M.C</a>
                    <div class="dropdown-content">
                        <a href="#">Fechamento de LMC</a>
                        <a href="#">Movimento LMC em lote</a>
                    </div>                
                </li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </div>
            </nav>
    </header>
`;

document.getElementById('footer').innerHTML = `
  <footer>
    <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
  </footer>
`;