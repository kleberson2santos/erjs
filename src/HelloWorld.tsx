export default function HelloWorld(){
    const name = 'Kleber'

    const title = <h1>Hello, {name}</h1>


    if(name==='Kleber'){
        return <div>
            <h1 style={{ background: 'red'}}>{ name }</h1>
        </div>
    }

    return <div>
        {title}
    </div>
}