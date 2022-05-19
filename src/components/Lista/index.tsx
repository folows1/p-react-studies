import Item from './Item';
import style from './Lista.module.scss';

export interface ITarefa {
    tarefa: string;
    tempo: string;
    selecionado: boolean;
    completado: boolean;
    id: string;
}

interface Props {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefa: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;