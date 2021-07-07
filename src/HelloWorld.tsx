const maliciousScript =`
<script>
    console.log('sent')
<script>
`

export default function HelloWorld(){
    const name = 'Kleber'

    const title = <h1>Hello, {name}</h1>

    return <div>
        {maliciousScript}
    </div>
}