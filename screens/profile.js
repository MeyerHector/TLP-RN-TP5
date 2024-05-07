import { useState } from 'react';
import { View, Text, Button } from 'react-native';


export function ProfileScreen() {
    const [count, setCount] = useState(0)

    const sumarPuntos = () => {
        setCount(count + 1)
        console.log(count);
    }
    const resetPuntos = () => {
        setCount(0)
    }
    return (
        <>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 'fit-content' }}>
                <Text>Aqui se encuentra tu perfil</Text>
                <Text>Puedes agregar puntos en tu perfil</Text>
                <Text>Tienes {count} puntos</Text>
                <View style={{ margin: 30 }}>
                    <Button onPress={sumarPuntos} title="sumar 1 punto" />
                </View>
                <View>
                    <Text>Tambien puedes reiniciar tu contador de puntos</Text>
                    <Button onPress={resetPuntos} title="resetear" />
                </View>
            </View>
        </>
    );
}