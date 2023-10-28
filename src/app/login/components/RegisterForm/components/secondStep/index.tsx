'use client'

import Button from "@/components/button"
import TextInput from "@/components/textInput"
import { RegisterFormState } from "../.."


type SecondStepProps = () => {
    state:RegisterFormState,
    handleChangeState:(updateValues:RegisterFormState)=> void 
}
{/*CONTINUAR DAQUI 1:58:31 */}
const SecondStep = ({state, handleChangeState}:SecondStepProps)=>{
    return(
        <>
            <TextInput label="Nome completo" placeholder="Nome" type="text" iconLeft="uil:user" onChange={(event)=>handleChangeState({fullName:event.target.value})} value={state.fullName}/>
            <TextInput label="Data de nascimento" placeholder="DD/MM/AAAA" type="date" iconLeft="uil:calendar-alt" onChange={(event)=>handleChangeState({dateOfBirth:event.target.value})} value={state.dateOfBirth.toString()}/>
            <TextInput label="Celular" placeholder="(00) 9 0000-0000" type="text" iconLeft="uil:phone-alt"onChange={(event)=>handleChangeState({cellphone:event.target.value})} value={state.cellphone}/>

            <div className="mt-[24px]">
                <Button className="rounded-md w-[100%]" >Próximo</Button>
            </div>
        </>
    )
}

export default SecondStep
