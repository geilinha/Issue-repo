import { Card } from '../components/Card'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='max-w-6xl mt-8 ml-auto mr-auto bg-slate-400'>

        <main className='text-slate-800'>
          <Card 
            numero={1558}
            descricao={'Issue > Tela tal > Erro'}
            />
          <Card 
            numero={1558}
            descricao={'Issue > Tela tal > Erro'}
            />


        </main>
      </div> 
    </div>
  )
}

