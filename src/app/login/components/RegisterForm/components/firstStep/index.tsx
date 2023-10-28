'use client'

import Button from "@/components/button"
import TextInput from "@/components/textInput"
import { RegisterFormState } from "../.."

type FirstStepProps = {
    handleNextStep: ()=>void
    state: RegisterFormState
    handleChangeState: (updatedValues : RegisterFormState) => void
}

const FirstStep =  ({handleNextStep, state, handleChangeState}:FirstStepProps)=>{
    return(
        <>
            <TextInput label="Email" placeholder="E-mail" type="email" iconLeft="uil:envelope-alt" onChange={(event)=>handleChangeState({email: event.target.value})} value={state.email}/>
            <TextInput label="Senha" placeholder="Senha" type="password" iconLeft="uil:key-skeleton-alt" onChange={(event)=>handleChangeState({password:event.target.value})} value={state.password}/>
            <TextInput label="Confirmar a senha" placeholder="Confirmar a senha" type="password" iconLeft="uil:key-skeleton-alt" onChange={(event)=>handleChangeState({confirmPassword:event.target.value})} value={state.confirmPassword}/>
            <div className="mt-[24px]">
                <Button onClick={handleNextStep} className="rounded-md w-[100%]" >Próximo</Button>
            </div>
        </>
    )
}

export default FirstStep