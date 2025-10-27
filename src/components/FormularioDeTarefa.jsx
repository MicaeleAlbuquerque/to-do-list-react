import { useState } from 'react';

function FormularioDeTarefa({ onAdd }) {
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa.trim()) {
      onAdd(tarefa);
      setTarefa('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex">
      <input
        type="text"
        placeholder="Adicionar nova tarefa..."
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        className='form-control me-2'
      />
      <button type="submit" className="btn btn-primary">Adicionar</button>
    </form>
  );
}

export default FormularioDeTarefa;


// mb-4: Margem inferior (margin-bottom) de tamanho 4.
// d-flex: Torna o formulário um container flexível (ajuda a alinhar o input e o botão).
// form-control: Classe padrão do Bootstrap para campos de formulário.
// me-2: Margem final (margin-end, ou à direita) de tamanho 2.
// btn: Classe base para botões.
// btn-primary: Define a cor principal (azul padrão) do botão.