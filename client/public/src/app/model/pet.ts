export interface Pet {
    likes: number;
    _id?: string;
    name: string;
    type: string;
    description: string;
    skill1?: string;
    skill2?: string;
    skill3?: string;
    __v?: number;
}

export interface PetResp {
    message: string;
    pet: Pet;
}

export interface PetsResp {
    message: string;
    pets: Pet[];
}