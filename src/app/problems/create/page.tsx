'use client'

import LoginSidebarImage from "@/app/login/components/loginSidebarImage"
import Select from "@/components/Select"
import Button from "@/components/button"
import TextArea from "@/components/textArea"
import TextInput from "@/components/textInput"
import { twMerge } from "tailwind-merge"
import ProblemsSidebarImage from "../components"
import React from "react"


type ProblemCreateState = {
    title?:'string',
    description?:'string',
    uf?: 'string',
    city?: 'string',
    neighborhood?:'string',
    imageUrl?:'string',
    pix?:'string',
    votingPeriod?:'string'
}


export default function ProblemCreate(){

    

    const labelStyle = 'text-base text-black text-2xl'
    const defaultLabelClasses = 'block font-bold text-black text-2xl'
    const mergedLabelClasses = twMerge(labelStyle, defaultLabelClasses)

    const [state, setState] = React.useState<ProblemCreateState>({
        city: '',
        description: '',
        neighborhood:'',
        pix:'',
        title:'',
        uf:'',
        votingPeriod:''

    })

    const handleChangeState = (updatedValues:ProblemCreateState)=>{
        setState((previousState)=>({
            ...previousState,
            ...updatedValues
        }))
    }

    return(
        <main>
            <div className="flex h-screen-navbar">
                <ProblemsSidebarImage/>
                <div className="flex flex-1 justify-center pl-10 pr-10 pb-10 overflow-auto ">
                    <div className="mt-20 max-w-[588px] w-[100%]">
                        <TextInput 
                        onChange={(event)=>handleChangeState({title:event.target.value})}
                        value={state.title}
                         labelClassNames={labelStyle} label="Título da ação" placeholder="Título da ação"/>
                        <TextArea
                        onChange={(event)=>handleChangeState({description:event.target.value})}
                        value={state.description}
                        labelClassNames={labelStyle} rows={4} label="Descrição do problema" className="resize-none"/>
                        <div className="flex flex-col">
                            <label className={`${mergedLabelClasses}`}>Localização</label>
                            <div className="flex gap-2 max-w-[100%]">
                                <TextInput
                                onChange={(event)=>handleChangeState({uf:event.target.value})}
                                value={state.uf}
                                label="" placeholder="Estado - UF"/>
                                <TextInput
                                onChange={(event)=>handleChangeState({city:event.target.value})}
                                value={state.city}
                                label="" placeholder="Cidade"/>
                                <TextInput
                                onChange={(event)=>handleChangeState({neighborhood:event.target.value})}
                                value={state.neighborhood}
                                label="" placeholder="Bairro"/>
                            </div>
                        </div>

                        <TextInput 
                            label="Carregue a sua imagem"
                            labelClassNames={`${labelStyle} mb-2`}
                            placeholder="insira o link aqui"
                            iconLeft="uil:image-upload"
                            onChange={(event)=>handleChangeState({imageUrl:event.target.value})}
                            value={state.imageUrl}
                            subDescription={
                                <span className="block mb-2 text-sm font-[400]">
                                    Coloque no campo abaixo o <strong>link</strong> para a sua imagem, ela será utilizada como capa da sua ação, a resolução mínima para não perder muita qualidade é de 800x400px.
                                </span>
                            }
                        />
                        <TextInput 
                            onChange={(event)=>handleChangeState({pix:event.target.value})}
                            value={state.pix}
                            label="Chave Pix"
                            labelClassNames={`${labelStyle} mb-2`}
                            subDescription={
                                <span className="block mb-2 text-sm font-[400]">
                                    Insira a chave pix de quem ficará responsável por receber as doações e dar vida a solução encontrada, seja pessoa física ou jurídica.
                                </span>
                            }
                        />
                        <Select 
                            onChange={(event)=>handleChangeState({votingPeriod:event.target.value})}
                            value={state.votingPeriod}
                            labelClassNames={`${labelStyle} mb-0`}
                            label="Período de votação"
                            subDescription="Escolha por quanto tempo as pessoas vão poder votar em uma solução para o seu problema. O perído de arrecadação é de 30 dias ou até bater a meta."
                            option={[
                                {value:3, text: "3 dias"},
                                {value:7, text: "7 dias"},
                                {value:15, text: "15 dias"},
                                {value:20, text: "20 dias"}
                            ]}    
                        />
                        <div className="flex flex-col gap-10px pb-10">
                            <Button className="rounded-[10px] pb-[24px] pt-[24px] text-xl">Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}