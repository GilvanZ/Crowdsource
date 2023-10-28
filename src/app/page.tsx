import ActionCard from "./components/ActionCard";

{/* 1:33:56 */}
export default function Home() {

  const actions: IAction[]=[
    {
      img:'https://jpeg.org/images/jpeg-home.jpg',
      title:'Action',
      description:'Solution for a problem',
      author:'zack gilvan',
      address:{
        uf:'PR',
        city:'Maringa',
        neighborhood:'Zona 02'
      },
      amountCollected: 150,
      totalGoal:1000,
      finalDate:'2023-10-23'

    },
    {
      img:'https://jpeg.org/images/jpeg-home.jpg',
      title:'A big problem',
      description:'A lot of problem',
      author:'Zack Gilvan',
      address:{
        uf:'PR',
        city:'Maringa',
        neighborhood:'Zona 02'
      },
      amountCollected: 150,
      totalGoal:1000,
      finalDate:'2023-10-23'

    }
  ]

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold">
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1360] justify-center py-4">
        {actions.map((actions,index)=><ActionCard key={index} action={actions}/>)}
      </div>
    </main>
  )
}
