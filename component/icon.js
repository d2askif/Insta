import { Icon} from 'native-base'
import React from 'react'
export default  IconComponent = ({name,size=24,color,style})=>{
    return (
    <Icon name={name} style={{color:color, fontSize:size,width:size,height:size+2,textAlign:'center',textAlignVertical:'center',lineHeight:size}}></Icon>
    )
}
