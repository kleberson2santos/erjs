export default function HelloWorld(){
    const name = 'Kleber'

    const title = <h1>Hello, {name}</h1>

    const index = 0

    if(name==='Kleber'){
        return <div>
            <h1 tabIndex={index} style={{ background: 'red'}}>{ name }</h1>
        </div>
    }

    return <div>
        {title}
    </div>
}