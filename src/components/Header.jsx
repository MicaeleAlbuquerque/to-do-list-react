import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-light p-3 mb-4 d-flex gap-3 border-bottom">
      <NavLink className={({ isActive }) =>
isActive ? "btn btn-sm btn-secondary" : "btn btn-sm btn-outline-info"
}
 to="/" end>Todas</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? "btn btn-sm btn-secondary" : "btn btn-sm btn-outline-info"
      } to="/pendentes">Pendentes</NavLink>
      <NavLink className={({ isActive }) =>
        isActive ? "btn btn-sm btn-secondary" : "btn btn-sm btn-outline-info"
      } to="/concluidas">Concluídas</NavLink>
    </nav>
  );
}

export default Header;


// Classe Bootstrap: O que faz no Header
// bg-light: Define o fundo da navegação como cinza claro.
// p-3: Adiciona padding (espaçamento interno) de tamanho 3.
// mb-4: Adiciona margem inferior de tamanho 4 (para separar do conteúdo abaixo).
// d-flex: Torna a navegação um contêiner flexível (alinha os itens horizontalmente).
// gap-3: Adiciona um espaço de tamanho 3 entre os links.
// border-bottom: Adiciona uma linha sutil na parte inferior.
// btn / btn-sm: Classes base para dar aos links a aparência de um botão pequeno.
// btn-primary: Botão azul, usado quando o link está ativo.
// btn-outline-primary: Botão com borda azul, usado quando o link está inativo.
