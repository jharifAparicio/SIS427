type Cuenta = {
    username: string;
    password: string;
    role: "user" | "admin";
};

export const cuentas: Cuenta[] = [
    {
        username: "usuario",
        password: "1234",
        role: "user",
    },
    {
        username: "admin",
        password: "admin123",
        role: "admin",
    },
];

export function validarLogin(username: string, password: string): Cuenta | undefined {
    return cuentas.find(
        (cuenta) => cuenta.username === username && cuenta.password === password
    );
}