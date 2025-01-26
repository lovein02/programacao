import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavComponent = () => {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="#home">Minha Navegação</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          
          <NavDropdown title="Frente de Caixa" id="frente-caixa-dropdown">
            {['Login/Fechamento PDV', 'Baixa de Abastecimentos', 'Forma de Recebimento', 'Venda de Itens', 'Baixa Rápida de Abastecimentos', 'Cancelamento de venda', 'Emitindo NFe no PDV', 'Adiantamento de Cliente', 'Cadastro de Cartão IDF no PDV', 'Consultas e Relatórios'].map((label, i) => (
              <NavDropdown.Item key={`frente-caixa-item${i + 1}`} href={`#frente-caixa-item${i + 1}`}>
                {label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          
          <NavDropdown title="Corporativo" id="corporativo-dropdown">
            {['Submenu A', 'Submenu B', 'Submenu C', 'Submenu D', 'Submenu E', 'Submenu F', 'Submenu G'].map((label, i) => (
              <NavDropdown.Item key={`corporativo-item${i + 1}`} href={`#corporativo-item${i + 1}`}>
                {label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          
          <NavDropdown title="Suprimento" id="suprimento-dropdown">
            {['Submenu X', 'Submenu Y'].map((label, i) => (
              <NavDropdown.Item key={`suprimento-item${i + 1}`} href={`#suprimento-item${i + 1}`}>
                {label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          
          <NavDropdown title="L.M.C" id="lmc-dropdown">
            {['Submenu I', 'Submenu II', 'Submenu III'].map((label, i) => (
              <NavDropdown.Item key={`lmc-item${i + 1}`} href={`#lmc-item${i + 1}`}>
                {label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;