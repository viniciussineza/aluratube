import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
function useForm(props) {
    const [values, setValues] = React.useState(props.initialValues);
    return {
        values,
        handleChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" name="titulo" onClick={() => setFormVisivel(false)}>
                            x
                        </button>
                        <input
                            placeholder="Título do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                </form>
            )
            : false}
        </StyledRegisterVideo>
    )
}