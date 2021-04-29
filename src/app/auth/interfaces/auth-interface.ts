export interface AuthResponse {
    ok : boolean,
    uid? : string,
    email? : string,
    nombre? : string,
    token? : string,
    msh? : string
}

export interface Usuario {
    uid : string,
    email : string,
    nombre : string
}