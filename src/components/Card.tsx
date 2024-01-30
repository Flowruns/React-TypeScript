import React, {FC, ReactNode, useState} from 'react';

export enum CardVariant {
    outlined='outlined',
    primary='primary'
}
// описываем какие пропсы ожидает компонент App.tsx
interface CardProps {
    width?: string;
    height?: string;
    children: ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void;
}
const Card: FC<CardProps> = 
    ({
         width, 
         height,
        children,
        variant,
         
    }) => {
    const [state, setState] = useState(0);
     return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            {children}
        </div>
    );
};

export default Card;