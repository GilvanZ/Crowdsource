'use client'

import Button from "@/components/button"
import Card from "@/components/card"
import { Icon } from "@iconify/react/dist/iconify.js"
import TextInput from "../../../../components/textInput"
import { LoginPageActionTypes } from "../../page"

type LoginFormProps = {
  handleSetAction: (action:LoginPageActionTypes) => void
}

const LoginForm = ({handleSetAction}:LoginFormProps)=>{
    return(
        <Card className="border-[#121212]">
        <TextInput 
          label="E-mail"
          labelClassNames="text-black"
          className="rounded-md" 
          iconLeft="uil:envelope-alt" 
          placeholder="E-mail">
        </TextInput>
        <TextInput 
          label="Senha"
          labelClassNames="text-black"
          className="rounded-md" 
          iconLeft="uil:key-skeleton-alt" 
          placeholder="Senha" 
          type="password">
        </TextInput>
        <div className="mb-6 text-left">
          <a href="#" className="tex-sub text-sm underline">Esqueci a senha</a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Button 
            className="rounded-md ">
            Entrar
          </Button> 
        <Button 
          className="rounded-md" 
          iconLeft="uil:facebook-f" 
          variant="secondary">
          Entrar com facebook
        </Button>
        <Button 
          className="rounded-md" 
          iconLeft="fe:google" 
          variant="secondary">
          Entrar com Google
        </Button>
        </div>
        <div className="mt-[24px]">
          <span className="cursor-pointer flex gap-2 items-center underline" onClick={()=>handleSetAction("register")}>
            <Icon icon={'uil:plus-square'}/>
            Quero criar uma conta

          </span>
        </div>
      </Card>
    )
}

export default LoginForm