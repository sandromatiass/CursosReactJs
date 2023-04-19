import './CampoTexto.css'

const CampoTexto = (props) => {
   
    const exemploConcatenacao = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={exemploConcatenacao} />
        </div>
    )
}

export default CampoTexto