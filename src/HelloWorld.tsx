export default function HelloWorld(){
    const name = 'Kleber'

    return <div>
        <h1>
            Hello, { name === 'Kleber'+1 ? 'Dev' : 'Batata'} !!!
        </h1>
    </div>
}