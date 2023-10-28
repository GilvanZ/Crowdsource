'use client'

import { StringUtils } from "@/utils/stringUtils"
import { Icon } from "@iconify/react/dist/iconify.js"

type adressProps = AddressType
const Address=({uf, neighborhood, city}:adressProps)=>{

    const capitalizedNeighborHood = StringUtils.capitalizeFistCharacterInText(neighborhood ?? "")
    const capitalizedCity = StringUtils.capitalizeFirstCharacterInName(city ?? "")
    const address = `${capitalizedNeighborHood}, ${capitalizedCity}, ${uf?.toUpperCase()}`
    return(
        <div className="flex items-center gap-1 text-sm">
            <Icon icon='fluent:location-28-filled'/>
            <span>{address}</span>
        </div>
    )
}

export default Address