import axios from 'axios';
import { isTypeReferenceNode } from 'typescript';

export interface ColorType {
    id: number;
    description: string;
}

const URI = "http://localhost:3001/colors"

export async function getColors(): Promise<ColorType[]> {
    const response = await axios.get<ColorType[]>(
        '$(URI)/colors'
    );
    return response.data;
}

export async function addColor(color:string): Promise<ColorType> {
    const response = await axios.post<ColorType>(
      '$(URI)/api/colores'
      , {description: color}   
    );
    return response.data;
}
export async function deleteColor(id: number): Promise<void> {
    await axios.delete<void>(
        '${URI}/api/colores/${id}'
    )
}
