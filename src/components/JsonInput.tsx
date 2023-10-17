import { FC } from "react";

interface IJsonInputProps {
    id: string
    name: string
}

export const JsonInput: FC<IJsonInputProps> = ({ id, name }): JSX.Element => {
    return <label className="relative btn" htmlFor={id}>
        Load JSON
        <input type="file" className="absolute inset-0 opacity-0 pointer-events-none" name={name} id={id} />
    </label>
}