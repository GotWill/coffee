import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    cep: string;
    rua: string;
    numero: number|undefined;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    buttonSeleted: 0 | 1 | 2 | undefined;

}

type Action = {
    type: FormActions;
    payload: any
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}

type FormProviderType = {
    children: ReactNode;
}

const initialData: State = {
    cep: '',
    rua: '',
    numero: undefined,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    buttonSeleted: undefined,
}


const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
    setCep,
    setRua,
    setNumero,
    setBairro,
    setCidade,
    setUf,
    setComplemento,
    setButtonSeleted
}


const formReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCep:
            return {...state, cep: action.payload};
        case FormActions.setRua:
            return {...state, rua: action.payload};
        case FormActions.setNumero:
            return {...state, numero: action.payload};
        case FormActions.setBairro:
            return {...state, bairro: action.payload};
        case FormActions.setCidade:
            return {...state, cidade: action.payload};
        case FormActions.setComplemento:
            return {...state, complemento: action.payload};
        case FormActions.setUf:
            return {...state, uf: action.payload};
        case FormActions.setButtonSeleted: 
          return {...state, buttonSeleted: action.payload}
        default:
            return state;
    }
    
}


export const FormProvider = ({ children }: FormProviderType) => {

    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {
        state, dispatch
    }
    return (
       <FormContext.Provider value={value}>
        {children}
       </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)

    if(context === undefined){
        throw new Error ("useForm precisa ser usado dentro do FormProvider")
    }

    return context;
}