'use client'
import React from "react"
import LoginForm from "./components/loginForm"
import LoginSidebarImage from "./components/loginSidebarImage"
import RegisterForm from "./components/RegisterForm"

export type LoginPageActionTypes = "login" | "register"

type LoginPageAction = {
  component:React.ReactNode
}

type LoginPageActions = {
  [key in LoginPageActionTypes]:LoginPageAction
}

type LoginPageState={
  actionType:LoginPageActionTypes
}

export default function Home() {
    const [state, setState]=React.useState<LoginPageState>({
      actionType:"login"
    })
    const handleSetAction=(actions:LoginPageActionTypes)=>{
      setState({actionType:actions})
    }

    const actions: LoginPageAction= {
      login :{
        component:<LoginForm handleSetAction={handleSetAction}/>
      },
      register:{
        component:<RegisterForm handleSetAction={handleSetAction}/>
      }
    }

    return (
      <main className="flex h-screen-navbar">
        <LoginSidebarImage/>
        <div className="flex-1 flex items-center justify-center">  
          {actions[state.actionType].component}
        </div>
      </main>
    )
  }