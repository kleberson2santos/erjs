import { useState } from "react"

//edf -> snippet
export default function Person() {
    const [person, setPerson] = useState<string>('João')

    setTimeout(()=>{
        setPerson((state)=>{
            console.log(state);
            return 'Kleberson'
        })
    }, 2000)

    return <div>
    <h1>Perfil</h1>
    <h1>Este é o perfil de {person}</h1>
    </div>
};
