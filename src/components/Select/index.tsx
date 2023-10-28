'use client'

import { twMerge } from "tailwind-merge"

type SelectOptions = {
    value:string
    text: string
}

type SelectProps = {
    label?:string
    labelClassNames?:string
    subDescription?: string | React.ReactNode
    option:SelectOptions[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = ({label,labelClassNames,subDescription,option}:SelectProps)=>{
    const defaultLabelClasses = 'block mb-2 text-sm font-bold text-gray-600'
    const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames)
    const defaultSelectClasses = 'flex-grow px-3 rounded focus:border-none py-2 text-sm outline-0'

    return(
        <div className="mb-6">
            <label className={mergedLabelClasses}>{label}</label>
            <label>{subDescription}</label>
            <div className="flex items-center border-sub rounded-lg bg-white">
                <select id="votingTime"className={`bg-white border text-gray-900 ${defaultSelectClasses}`}>
                    {option.map((option, index)=> <option selected={} value={option.value}
                    >
                        {option.text}
                    </option>
                    )}

                </select>
            </div>
        </div>
    )
}

export default Select