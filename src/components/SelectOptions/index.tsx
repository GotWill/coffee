import { IconProps } from 'phosphor-react';
import { ReactNode } from 'react';
import * as C from './styles'

type PropsItemButton = {
    title: string;
    selected: boolean;
    onClickBorder?: () => void;
    icon: IconProps | React.ReactNode ;
}

export const SelectOptions = ({title, selected, onClickBorder, icon}: PropsItemButton) => {
    return (
        <C.CardPayment  onClick={onClickBorder} selected={selected}>
        <div>
         <span>{title}</span> 
          <>{icon}</>
        </div>
    </C.CardPayment>
    )
}